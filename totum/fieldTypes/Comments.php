<?php
/**
 * Created by PhpStorm.
 * User: tatiana
 * Date: 26.03.18
 * Time: 10:41
 */

namespace totum\fieldTypes;


use totum\common\Auth;
use totum\common\Calculate;
use totum\common\errorException;
use totum\common\Field;
use totum\common\Sql;
use totum\models\Table;
use totum\models\UserV;
use totum\tableTypes\aTable;
use DateTime;

class Comments extends Field
{
    const table_viewed = '_comments_viewed';

    protected function __construct($fieldData, aTable $table)
    {
        parent::__construct($fieldData, $table);
        if (empty($this->data['viewTextMaxLength'])) {
            $this->data['viewTextMaxLength'] = 100;
        }
    }

    public static function removeViewedForField($table_id, $field_name)
    {
        Sql::exec('delete from ' . static::table_viewed . ' where table_id=' . $table_id . ' AND field_name=\'' . $field_name . '\'');
    }

    function getValueFromCsv($val)
    {
        throw new errorException('Нельзя заливать comments');
    }

    function addViewValues($viewType, array &$valArray, $row, $tbl = [])
    {
        parent::addViewValues($viewType, $valArray, $row, $tbl);

        $valArray['v'] = $valArray['v'] ?? [];

        switch ($viewType) {
            case 'print':
                $func = function ($array) use(&$func){
                    if (!$array) return '';
                    $v = $this->prepareComment($array[0], false, $isCuted);
                  return '<div><span>'.$v[0].'</span><span>'.$v[1].'</span><span>'.htmlspecialchars($v[2]).'</span></div>'.$func(array_slice($array, 1));
                };

                if ($this->data['printTextfull'] ?? false) {
                    $valArray['v']=$func($valArray['v']);
                } else {
                    $valArray['v']=$func($valArray['v'][count($valArray['v']) - 1]);
                }
                break;
            case 'web':
                $n = count($valArray['v']);
                $isCuted = false;
                if ($n > 0 && ($valArray['v'][$n - 1][1] != Auth::$aUser->getId())) {
                    $notViewed = $n - $this->getViewed($row['id'] ?? null);
                }
                $valArray['v'] = ['n' => $n, 'c' => $n > 0 ? $this->prepareComment($valArray['v'][$n - 1],
                    true,
                    $isCuted) : []];
                if ($n === 1 && $isCuted) {
                    $valArray['v']['cuted'] = true;
                }
                if (!empty($notViewed)) {
                    $valArray['v']['notViewed'] = $notViewed;
                }

                break;
            case 'edit':
                $n = count($valArray['v']);
                foreach ($valArray['v'] ?? [] as &$comment) {
                    $c = $comment;
                    $comment = $this->prepareComment($comment, false, $n);
                }
                if (!empty($c) && $c[1] !== Auth::getUserId()) {
                    $valArray['notViewed'] = $n - $this->getViewed($row['id'] ?? null);
                }
                break;
            case 'csv':
                $valArray['v'] = base64_encode($valArray['v']);
                break;
        }

    }

    function getFullValue($val, $rowId = null, $row = [])
    {

        foreach ($val as &$comment) {
            $comment = $this->prepareComment($comment, false, $n);
        }
        if ($comment[1] !== Auth::getUserId()) {
            $this->setViewed(count($val), $rowId);
        }
        unset($comment);
        return $val;
    }

    protected function checkValByType(&$val, $row, $isCheck = false)
    {
        if ($isCheck) return;

        if (is_string($val)) {
            $val = [[date('Y-m-d H:i'), Auth::$aUser->getId(), $val]];
        } else if (is_array($val)) {
            foreach ($val as $comment) {
                if (!preg_match('/^\d\d\d\d(\-\d\d){2} \d\d:\d\d$/',
                    $comment[0] ?? null)) throw new errorException('Формат даты неверен');
                if (!preg_match('/^\d+$/',
                    $comment[1] ?? null)) throw new errorException('Формат пользователя неверен');
                if (!($comment[2] ?? null)) throw new errorException('Не введен комментарий');
            }
        }
    }

    protected function getDateFormated(DateTime $Date)
    {
        $format = 'd.m';
        if ($this->data['dateTime']) {
            $format = 'H:i ' . $format;
        }
        return $Date->format($format);
    }

    protected function modifyValue($modifyVal, $oldVal, $isCheck)
    {

        if ($isCheck) return $modifyVal;

        $oldVal = $oldVal ?? [];

        if (is_string($modifyVal)) {
            $oldVal[] = [date('Y-m-d H:i'), Auth::$aUser->getId(), $modifyVal];
        } else if (is_array($modifyVal)) {
            try {
                $this->checkValByType($modifyVal, []);
                return $modifyVal;
            } catch (errorException $e) {

            }

        }


        return $oldVal;
    }

    private function prepareComment($commentArray, $textCut, &$isCuted)
    {
        if (!is_array($commentArray)) return [];

        $commentArray[0] = $this->getDateFormated(Calculate::getDateObject($commentArray[0]));

        if ($textCut) {
            if (mb_strlen($commentArray[2]) > $this->data['viewTextMaxLength']) {
                $commentArray[2] = mb_substr($commentArray[2], 0, $this->data['viewTextMaxLength']) . '...';
                $isCuted = true;
            }
        }
        $commentArray[1] = UserV::init()->getFio($commentArray[1]);
        return $commentArray;
    }

    private function getViewed($row_id = null)
    {
        return Sql::getField('select nums from ' . static::table_viewed
                . ' where ' . $this->getViewedWhere($row_id)) ?? 0;
    }

    function setViewed(int $nums, $row_id)
    {
        /*Просмотренное для комментария*/
        if (!empty($this->data['linkTableName']) && !empty($this->data['linkFieldName'])) {
            $LinkedTable = Table::getTableRowByName($this->data['linkTableName']);
            Sql::exec($q = 'insert into ' . static::table_viewed
                . '  (nums, table_id, cycle_id, row_id, user_id, field_name) VALUES (' . $nums . ', ' . $LinkedTable['id']
                . ', ' . ($LinkedTable['type'] === 'calcs' ? ($this->table->getTableRow()['type'] === 'calcs' ? $this->table->getCycle()->getId() : $row_id) : '0')
                . ', ' . ('0')
                . ', ' . (Auth::getUserId())
                . ', ' . Sql::quote($this->data['linkFieldName']) . ') ON CONFLICT (row_id, table_id, user_id, cycle_id, field_name)  DO UPDATE SET nums = CASE WHEN _comments_viewed.nums<EXCLUDED.nums THEN EXCLUDED.nums else _comments_viewed.nums END'
            );

        } else {
            $r = Sql::exec($q = 'insert into ' . static::table_viewed
                . '  (nums, table_id, cycle_id, row_id, user_id, field_name) VALUES (' . $nums . ', ' . $this->table->getTableRow()['id']
                . ', ' . ($this->table->getTableRow()['type'] === 'calcs' ? $this->table->getCycle()->getId() : '0')
                . ', ' . ($row_id ?? '0')
                . ', ' . (Auth::getUserId())
                . ', ' . Sql::quote($this->data['name']) . ') ON CONFLICT (row_id, table_id, user_id, cycle_id, field_name)  DO UPDATE SET nums = CASE WHEN _comments_viewed.nums<EXCLUDED.nums THEN EXCLUDED.nums else _comments_viewed.nums END'
            );
        }
        return $r;
    }

    private function getViewedWhere($row_id = null)
    {
        /*Для линкованных полей*/
        if (!empty($this->data['linkTableName']) && !empty($this->data['linkFieldName'])) {
            $LinkedTable = Table::getTableRowByName($this->data['linkTableName']);

            $where[] = 'table_id = ' . $LinkedTable['id'];
            if ($LinkedTable['type'] === 'calcs') {
                $where[] = 'cycle_id=' . ($this->table->getTableRow()['type'] === 'calcs' ? $this->table->getCycle()->getId() : $row_id);
            }
            $where[] = 'field_name=$$' . $this->data['linkFieldName'] . '$$';


        } else {
            $where[] = 'table_id = ' . $this->table->getTableRow()['id'];
            if ($this->table->getTableRow()['type'] === 'calcs') {
                $where[] = 'cycle_id=' . $this->table->getCycle()->getId();
            }
            if ($row_id) {
                $where[] = 'row_id=' . $row_id;
            }
            $where[] = 'field_name=$$' . $this->data['name'] . '$$';
        }

        $where[] = 'user_id=$$' . Auth::getUserId() . '$$';
        $where = implode(' AND ', $where);
        return $where;
    }
}