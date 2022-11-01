App.functions = [{"name":"setVar","t":"(name: \"\"; value: )","d":true,"p":["name","value"],"m":[],"n":["name","value"]},{"name":"getVar","t":"(name: \"\"; default: )","d":true,"p":["name","default"],"m":[],"n":["name"]},{"name":"select","t":"(table: ''; field: ''; where: '' = ; order: '' asc)","d":false,"p":["table","field","cycle","hash","where","order","tfield","sfield"],"m":["where","order"],"n":["table","field"]},{"name":"selectList","t":"(table: ''; field: ''; where: '' = ; order: '' asc)","d":false,"p":["table","field","cycle","hash","where","order","tfield","sfield","limit","offset"],"m":["where","order"],"n":["table","field"]},{"name":"selectRowListForSelect","t":"(table: ''; field: ''; where: '' = ; order: '' asc)","d":false,"p":["table","field","cycle","hash","where","order","section","preview","bfield","tfield","previewscode"],"m":["where","order","preview"],"n":["table","field"]},{"name":"selectRowListForTree","t":"(table: ''; field: ''; where: '' = ; order: '' asc; parent: ''; disabled: )","d":false,"p":["table","field","cycle","hash","where","order","parent","disabled","tfield","bfield","roots"],"m":["where","order"],"n":["table","field","parent"]},{"name":"selectTreeChildren","t":"(table: ''; id: ; parent: '')","d":false,"p":["table","cycle","hash","parent","id","bfield"],"m":[],"n":["table","id","parent"]},{"name":"selectRow","t":"(table: ''; fields: $list; field: ''; field: ''; where: '' = ; order: '' asc)","d":false,"p":["table","field","cycle","hash","where","order","tfield","sfield","fields","sfields"],"m":["where","order","field"],"n":["table"]},{"name":"selectRowList","t":"(table: ''; fields: $list; field: ''; field: ''; where: '' = ; order: '' asc)","d":false,"p":["table","field","cycle","hash","where","order","tfield","sfield","fields","sfields","limit","offset"],"m":["where","order","field"],"n":["table"]},{"name":"nowUser","t":"()","d":true,"p":[],"m":[],"n":[]},{"name":"nowRoles","t":"()","d":true,"p":[],"m":[],"n":[]},{"name":"nowCycleId","t":"()","d":true,"p":[],"m":[],"n":[]},{"name":"nowField","t":"()","d":true,"p":[],"m":[],"n":[]},{"name":"nowTableUpdateDt","t":"()","d":true,"p":[],"m":[],"n":[]},{"name":"nowTableName","t":"()","d":true,"p":[],"m":[],"n":[]},{"name":"nowTableId","t":"()","d":true,"p":[],"m":[],"n":[]},{"name":"selectUnreadComments","t":"(users: ; table: ''; field: ''; id: )","d":false,"p":["table","cycle","field","id","users"],"m":[],"n":["field","table","users"]},{"name":"nowDate","t":"(format: \"Y-m-d H:i\")","d":false,"p":["format","lang"],"m":[],"n":[]},{"name":"selectListAssoc","t":"(table: ''; cycle: ; bfield: 'id'; field: ''; order: '' asc; where:  '' = ; section: '';  preview: ''; parent: ''; disabled: )","d":true,"p":["table","field","cycle","hash","where","order","tfield","sfield","section","preview","parent","disabled","bfield"],"m":["where","order","preview"],"n":["table","field"]},{"name":"dateDiff","t":"(date: ; date: ; unit: \"day|year|month|hour|minute\")","d":false,"p":["date","unit"],"m":["date"],"n":["date","unit"]},{"name":"dateAdd","t":"(date: ; days: ; hours: ; minutes: ; months: ; years: ; format: \"Y-m-d H:i\")","d":false,"p":["format","date","days","hours","minutes","months","years","lang"],"m":[],"n":["date"]},{"name":"dateWeekDay","t":"(date: ; format: \"number|short|full\")","d":true,"p":["date","format"],"m":[],"n":["format","date"]},{"name":"dateFormat","t":"(date: ; format: \"d.m.Y H:i\")","d":false,"p":["date","format","lang"],"m":[],"n":["format","date"]},{"name":"round","t":"(num: ; type: \"up|down|math\"; step: 0.5; dectimal: 1)","d":false,"p":["num","type","step","dectimal"],"m":[],"n":["num"]},{"name":"modul","t":"(num: )","d":false,"p":["num"],"m":[],"n":["num"]},{"name":"numRand","t":"(min: ; max: )","d":false,"p":["min","max"],"m":[],"n":[]},{"name":"strAdd","t":"(str: ; str: )","d":false,"p":["str"],"m":["str"],"n":["str"]},{"name":"strReplace","t":"(str: ; from: ; to: )","d":false,"p":["str","from","to"],"m":[],"n":["str","from","to"]},{"name":"strRegMatches","t":"(str: ; template: ; matches: \"matches\"; flags: \"u\")","d":false,"p":["str","template","matches","flags"],"m":[],"n":["str","template"]},{"name":"strRegAllMatches","t":"(str: ; template: ; matches: \"matches\"; flags: \"u\")","d":false,"p":["str","template","matches","flags"],"m":[],"n":["str","template"]},{"name":"numFormat","t":"(num: ; dectimals: ; decsep: \",\"; thousandssep: \" \"; unittype: )","d":false,"p":["num","dectimals","decsep","thousandssep","unittype","prefix"],"m":[],"n":["num"]},{"name":"strRandom","t":"(length: 5; numbers: \"true|false|12345\"; letters: \"false|true|abcdABCD\"; symbols: \"false|true|!@#$%^&\")","d":false,"p":["length","numbers","letters","symbols"],"m":[],"n":["length"]},{"name":"strBaseEncode","t":"(str: )","d":false,"p":["str"],"m":[],"n":["str"]},{"name":"strBaseDecode","t":"(str: )","d":false,"p":["str"],"m":[],"n":["str"]},{"name":"strLength","t":"(str: )","d":false,"p":["str"],"m":[],"n":["str"]},{"name":"strRepeat","t":"(str: ; num: )","d":false,"p":["str","num"],"m":[],"n":["num","str"]},{"name":"strSplit","t":"(str: ; separator: )","d":false,"p":["str","separator","limit"],"m":[],"n":["str"]},{"name":"strTransform","t":"(str: ; to: \"upper|lower|capitalize\")","d":false,"p":["str","to"],"m":[],"n":["str","to"]},{"name":"textByTemplate","t":"(template: \"\"; data: $data)","d":false,"p":["data","template","text"],"m":[],"n":["data"]},{"name":"strMd5","t":"(str: )","d":false,"p":["str"],"m":[],"n":["str"]},{"name":"strGz","t":"(str: )","d":false,"p":["str"],"m":[],"n":["str"]},{"name":"strUnGz","t":"(str: )","d":false,"p":["str"],"m":[],"n":["str"]},{"name":"listCreate","t":"(item: )","d":false,"p":["item"],"m":["item"],"n":["item"]},{"name":"listMax","t":"(list: ; default: )","d":false,"p":["list","default"],"m":[],"n":["list"]},{"name":"listMin","t":"(list: ; default: )","d":false,"p":["list","default"],"m":[],"n":["list"]},{"name":"listSum","t":"(list: )","d":false,"p":["list"],"m":[],"n":["list"]},{"name":"listCount","t":"(list: )","d":false,"p":["list"],"m":[],"n":["list"]},{"name":"listUniq","t":"(list: )","d":false,"p":["list"],"m":[],"n":["list"]},{"name":"listItem","t":"(list: ; item: )","d":false,"p":["list","item"],"m":[],"n":["list","item"]},{"name":"listJoin","t":"(list: ; str: )","d":false,"p":["list","str"],"m":[],"n":["list"]},{"name":"listCross","t":"(list: ; list: )","d":false,"p":["list"],"m":["list"],"n":["list"]},{"name":"listAdd","t":"(list: ; list: ; item: )","d":false,"p":["list","item"],"m":["list","item"],"n":["list"]},{"name":"listMinus","t":"(list: ; list: ; item: )","d":false,"p":["list","item"],"m":["list","item"],"n":["list"]},{"name":"listCut","t":"(list: ; cut: \"first|last\"; num: 1)","d":false,"p":["list","num","cut"],"m":[],"n":["list","cut"]},{"name":"linkToData","t":"(type: \"text|table\"; title:\"\" ; width: 600; height: \"80hv\"; table: ''; text: ; data: $rowList; params: $row; refresh: false; header: true; footer: true)","d":true,"p":["header","footer","type","width","data","text","refresh","table","title","params"],"m":[],"n":["type","title"]},{"name":"listSection","t":"(list: ; item: )","d":false,"p":["list","item"],"m":[],"n":["list","item"]},{"name":"listFilter","t":"(list: $list; key: \"key|value|item\" ><!= ; item: \"\")","d":false,"p":["list","item","key","regexp","skip","matches"],"m":["key"],"n":["list","key"]},{"name":"listSearch","t":"(list: $list; key: \"value|item\" ><!= ; item: \"\")","d":false,"p":["list","item","key"],"m":[],"n":["list","key"]},{"name":"listSort","t":"(list: ; type: \"number|string|regular|nat\"; direction: \"asc|desc\"; key: \"value|key|item\"; item: \"\")","d":false,"p":["list","direction","type","key","item"],"m":["key"],"n":["list"]},{"name":"diffDates","t":"(date: ; date: ; unit: \"day\")","d":true,"p":["date","unit"],"m":["date"],"n":["date","unit"]},{"name":"listMath","t":"(list: ; num: ; operator: )","d":false,"p":["list","num","operator"],"m":["list"],"n":["num","list","operator"]},{"name":"listTrain","t":"(list: )","d":false,"p":["list"],"m":[],"n":["list"]},{"name":"listRepeat","t":"(item: ; num: )","d":false,"p":["item","num"],"m":[],"n":["num","item"]},{"name":"listNumberRange","t":"(min: ; max: ; step: 1)","d":false,"p":["min","max","step"],"m":[],"n":["step","min","max"]},{"name":"rowCreate","t":"(field: \"\" = $val)","d":false,"p":["field"],"m":["field"],"n":["field"]},{"name":"rowListCreate","t":"(field: \"\" = $fieldList)","d":false,"p":["field"],"m":["field"],"n":["field"]},{"name":"rowCreateByLists","t":"(keys: $keysList; values: $valuesList)","d":false,"p":["keys","values"],"m":[],"n":["keys","values"]},{"name":"rowAdd","t":"(row: ; row: ; field: \"\" = $val)","d":false,"p":["field","row"],"m":["field","row"],"n":["row"]},{"name":"rowListAdd","t":"(rowlist: ; rowlist: ; field: \"\" = $val; field: \"\" = $valList)","d":false,"p":["field","rowlist"],"m":["field","rowlist"],"n":["rowlist"]},{"name":"rowKeys","t":"(row: )","d":false,"p":["row"],"m":[],"n":["row"]},{"name":"rowValues","t":"(row: )","d":false,"p":["row"],"m":[],"n":["row"]},{"name":"rowKeysReplace","t":"(row: ; from: ; to: ; recursive: false)","d":false,"p":["row","from","to","recursive"],"m":[],"n":["row","from","to"]},{"name":"rowKeysRemove","t":"(row: ; key: ; keys: ; recursive: false)","d":false,"p":["row","key","keys","recursive"],"m":["key"],"n":["row"]},{"name":"if","t":"(condition: ; then: ; else: )","d":false,"p":["condition","then","else"],"m":["condition"],"n":["condition","then"]},{"name":"while","t":"(preaction: ; condition: ; limit: ; action: ; postaction: ; iterator: )","d":false,"p":["preaction","action","postaction","iterator","condition","limit"],"m":["condition","preaction","action","postaction"],"n":[]},{"name":"listReplace","t":"(list: ; action: \"item\" = $val; action: $val; key: \"key\"; value: \"value\")","d":false,"p":["list","action","key","value"],"m":["action"],"n":["list","action"]},{"name":"var","t":"(name: \"\"; value: ; default: )","d":false,"p":["name","value","default"],"m":[],"n":["name"]},{"name":"globVar","t":"(name: \"\"; value: ; default: )","d":false,"p":["name","value","default","date","block"],"m":[],"n":["name"]},{"name":"procVar","t":"(name: \"\"; value: ; default: )","d":false,"p":["name","value","default"],"m":[],"n":["name"]},{"name":"errorExeption","t":"(text: )","d":true,"p":["text"],"m":[],"n":["text"]},{"name":"exec","t":"(code: ; var: \"\" =; var: \"\" = )","d":false,"p":["kod","var","code","ssh"],"m":["var"],"n":["code"]},{"name":"errorException","t":"(text: )","d":false,"p":["text"],"m":[],"n":["text"]},{"name":"tryCatch","t":"(try: ; catch: ; error: \"exception\")","d":false,"p":["try","catch","error"],"m":[],"n":["try","catch"]},{"name":"reCalculate","t":"(table: ''; where: '' = )","d":false,"p":["table","cycle","hash","where","field"],"m":["where","field"],"n":["table"]},{"name":"updatesCreateFile","t":"(data: $data)","d":true,"p":["data"],"m":[],"n":["data"]},{"name":"updatesReadFileStructure","t":"(file: $file)","d":true,"p":["file"],"m":[],"n":["file"]},{"name":"UpdateTablesIndexes","t":"()","d":true,"p":[],"m":[],"n":[]},{"name":"reCalculateCycle","t":"(table: ''; cycle: )","d":false,"p":["table","cycle"],"m":[],"n":["table","cycle"]},{"name":"set","t":"(table: ''; field: '' = ; where: '' = ; log: true)","d":false,"p":["table","field","cycle","hash","where","log"],"m":["field","where"],"n":["table","field"]},{"name":"setList","t":"(table: ''; field: '' = ; where: '' = ; log: true)","d":false,"p":["table","field","cycle","hash","where","log"],"m":["field","where"],"n":["table","field"]},{"name":"setListExtended","t":"(table: ''; field: '' = $list; where: '' = $list; log: true)","d":false,"p":["table","field","cycle","hash","where","log"],"m":["field","where"],"n":["table","field"]},{"name":"insert","t":"(table: ''; field: '' = ; inserts: \"inserts\"; after: ; log: true)","d":false,"p":["table","field","cycle","hash","inserts","after","log"],"m":["field"],"n":["table"]},{"name":"updatesApply","t":"(file: $filename)","d":true,"p":["file"],"m":[],"n":[]},{"name":"insertList","t":"(table: ''; field: '' = $list; fields: ;  inserts: \"inserts\"; after: ; log: true)","d":false,"p":["table","field","cycle","hash","after","inserts","log","fields"],"m":["field"],"n":["table","field"]},{"name":"delete","t":"(table: ''; where: '' = ; log: true)","d":false,"p":["table","cycle","hash","where","log"],"m":["where"],"n":["table","where"]},{"name":"deleteList","t":"(table: ''; where: '' = ; log: true)","d":false,"p":["table","cycle","hash","where","log"],"m":["where"],"n":["table","where"]},{"name":"duplicate","t":"(table: ''; field: '' = ; where: '' = ; after: ; log: true)","d":false,"p":["table","field","cycle","hash","where","inserts","after","log"],"m":["field","where"],"n":["table","field"]},{"name":"duplicateList","t":"(table: ''; field: '' = ; where: '' = ; after: ; log: true)","d":false,"p":["table","field","cycle","hash","where","after","inserts","log"],"m":["field","where"],"n":["table","field"]},{"name":"pin","t":"(table: ''; field: ''; where: '' = ; log: true)","d":false,"p":["table","field","cycle","hash","where","log"],"m":["field","where"],"n":["table","field"]},{"name":"pinList","t":"(table: ''; field: ''; where: '' = ; log: true)","d":false,"p":["table","field","cycle","hash","where","log"],"m":["field","where"],"n":["table","field"]},{"name":"insertListExt","t":"(table: ''; cycle: ; hash: ; fields: ; field: '' = $list; inserts: \"inserts\"; after: )","d":true,"p":["table","field","fields","cycle","hash","inserts","after","log"],"m":["field"],"n":["table"]},{"name":"insertListExtended","t":"(table: ''; cycle: ; hash: ; fields: ; field: '' = $list; inserts: \"inserts\"; after: ; log: true)","d":true,"p":["table","field","fields","cycle","hash","inserts","after","log"],"m":["field"],"n":["table"]},{"name":"clear","t":"(table: ''; field: ''; where: '' = ; log: true)","d":false,"p":["table","field","cycle","hash","where","log"],"m":["field","where"],"n":["table","field"]},{"name":"clearList","t":"(table: ''; field: ''; where: '' = ; log: true)","d":false,"p":["table","field","cycle","hash","where","log"],"m":["field","where"],"n":["table","field"]},{"name":"restore","t":"(table: ''; where: '' = ; log: true)","d":false,"p":["table","cycle","hash","where","log"],"m":["where"],"n":["table","where"]},{"name":"restoreList","t":"(table: ''; where: '' = ; log: true)","d":false,"p":["table","cycle","hash","where","log"],"m":["where"],"n":["table","where"]},{"name":"tableLog","t":"(table: ''; cycle: ; id: ; field: ; comment: )","d":false,"p":["table","cycle","id","field","comment"],"m":[],"n":["table","field"]},{"name":"execButton","t":"(table: ''; field: ''; where: '' = ; order:  asc)","d":false,"p":["table","cycle","hash","field","where","order"],"m":["where","order"],"n":["field","table"]},{"name":"execButtonList","t":"(table: ''; field: ''; where: '' = ; order:  asc; limit: )","d":false,"p":["table","cycle","hash","field","where","limit","order"],"m":["where","order"],"n":["field","table"]},{"name":"linkToTable","t":"(table: ''; title: ; filter: '' = ; field: '' = ; target: \"iframe|blank|self|parent|top\"; width: 800; refresh: false; header: true; footer: true)","d":false,"p":["table","field","refresh","cycle","hash","target","filter","width","header","footer","title","topbuttons"],"m":["field","filter"],"n":["table"]},{"name":"linkToScript","t":"(uri: \"http:\/\/\"; post: \"\" = ; title: ; target: \"iframe|blank|self|parent|top\"; width: 800; refresh: false)","d":false,"p":["target","width","uri","post","refresh","title"],"m":["post"],"n":["uri"]},{"name":"linkToDataTable","t":"(table: ''; title: ; width: 800; height: \"80vh\"; data: $rowList; params: $row; refresh: false; header: true; footer: true; hide: false)","d":false,"p":["header","footer","width","data","refresh","table","title","params","height","hide","target","topbuttons"],"m":[],"n":["table"]},{"name":"linkToDataText","t":"(title: ; text: )","d":false,"p":["text","title","width","close"],"m":[],"n":["title","text"]},{"name":"linkToDataHtml","t":"(title: ; html: )","d":false,"p":["title","html","close"],"m":[],"n":["title","html"]},{"name":"linkToPanel","t":"(table: ''; id: ; field: '' = ; refresh: false)","d":false,"p":["table","id","refresh","field","cycle","bfield"],"m":["field"],"n":["table"]},{"name":"linkToPrint","t":"(template: ; data: $data)","d":false,"p":["data","template","text"],"m":[],"n":["data"]},{"name":"linkToButtons","t":"(title: ; html: ; buttons: ; refresh: false; close: false)","d":false,"p":["title","html","buttons","width","refresh","close"],"m":[],"n":["title","buttons"]},{"name":"linkToInput","t":"(title: ; html: ; code: ; type: ; var: ; value: ; refresh: true; button: \"Save\"; close: false)","d":false,"p":["title","html","width","code","var","value","refresh","button","close","type"],"m":["var"],"n":["title","code"]},{"name":"linkToInputSelect","t":"(title: ; code: ; codeselect: ; multiple: false; var: ; value: ; refresh: true; button: \"Save\"; close: false)","d":false,"p":["title","width","code","var","value","refresh","button","close","codeselect","multiple"],"m":["var"],"n":["title","code","codeselect"]},{"name":"linkToDataJson","t":"(title: ; data: )","d":false,"p":["title","data","width","code","buttontext","var","refresh"],"m":["var"],"n":["data","title"]},{"name":"linkToFileUpload","t":"(title: ; code: ; limit: ; type: \"*\"; var: ; refresh: false)","d":false,"p":["code","limit","type","title","var","refresh"],"m":["var"],"n":["code"]},{"name":"linkToFileDownload","t":"(file: ; files: ; zip: \"\")","d":false,"p":["file","files","zip"],"m":["file"],"n":[]},{"name":"getFromScript","t":"(uri: \"http:\/\/\"; posts: ; gets: )","d":false,"p":["uri","post","timeout","bfl","header","gets","posts","headers","method","ssh"],"m":["post"],"n":["uri"]},{"name":"getFromSoap","t":"(func: ; params: ; wsdl: ; options: )","d":false,"p":["params","func","wsdl","options","bfl"],"m":[],"n":["func"]},{"name":"emailSend","t":"(to: ; title: ; body: ; from: ; files: )","d":false,"p":["to","from","title","body","files","bfl"],"m":[],"n":["title","to","body"]},{"name":"linkToAnonymTable","t":"(table: ; data: $rowList; params: $row; protocol: \"https\")","d":false,"p":["table","data","params","target","protocol"],"m":[],"n":["table"]},{"name":"linkToForm","t":"(path: ; params: $row; protocol: \"https\")","d":false,"p":["params","path","target","protocol"],"m":[],"n":["path"]},{"name":"linkToQuickForm","t":"(path: ; fields: $row; fixed: ; protocol: \"https\")","d":false,"p":["path","fields","fixed","target","protocol"],"m":[],"n":["path"]},{"name":"setFormat","t":"(condition: ; bold: ; block: ; background: ; color: )","d":false,"p":["condition","block","color","bold","background","decoration","italic","progress","progresscolor","text","icon","comment","tab","align","editbutton","hide","placeholder","showhand","expand","textasvalue"],"m":["condition","hide"],"n":[]},{"name":"setRowFormat","t":"(condition: ; bold: ; block: ; background: ; color: )","d":false,"p":["condition","block","color","bold","background","decoration","italic","blockdelete","blockorder","blockduplicate","rowcomment"],"m":["condition"],"n":[]},{"name":"setTableFormat","t":"(tabletitle: ; rowstitle: ; buttons: )","d":false,"p":["condition","blockdelete","blockduplicate","blockorder","blockadd","block","tabletitle","rowstitle","fieldtitle","tabletext","tablecomment","fieldhide","tablehtml","buttons","browsertitle","interlace","printbuttons"],"m":["condition","fieldtitle","fieldhide"],"n":[]},{"name":"setRowsOrder","t":"(ids: )","d":false,"p":["ids","condition"],"m":["condition"],"n":["ids"]},{"name":"setRowsHide","t":"(ids: )","d":false,"p":["ids","condition"],"m":["condition"],"n":["ids"]},{"name":"setRowsShow","t":"(ids: )","d":false,"p":["ids","condition"],"m":["condition"],"n":["ids"]},{"name":"setFloatFormat","t":"(blocknum: ; nextline: ; maxwidth: ; breakwidth: ; fill: ; height: ; maxheight: ; glue: )","d":false,"p":["maxheight","maxwidth","nextline","blocknum","height","glue","fill","breakwidth"],"m":[],"n":[]},{"name":"panelButtons","t":"(condition: ; button: ; button: ; buttons: ; refresh: false)","d":false,"p":["buttons","button","refresh","condition"],"m":["button","condition"],"n":[]},{"name":"panelHtml","t":"(condition: ; html: )","d":false,"p":["html","condition"],"m":["condition"],"n":["html"]},{"name":"panelImg","t":"(condition: ; img: )","d":false,"p":["img","condition"],"m":["condition"],"n":["img"]},{"name":"setFormSectionsFormat","t":"(section: ; condition: ; status: \"view|close|hide\")","d":false,"p":["section","condition","status"],"m":[],"n":["section","status"]},{"name":"setFormFieldFormat","t":"(condition: ; hidden: ; width: ; height: )","d":false,"p":["condition","width","height","hidden","classes"],"m":[],"n":[]},{"name":"jsonCreate","t":"(data: ; field: \"\" = )","d":false,"p":["data","field","flag"],"m":["field","flag"],"n":[]},{"name":"jsonExtract","t":"(text: )","d":false,"p":["text"],"m":[],"n":["text"]},{"name":"xmlExtract","t":"(xml: ; attrpref: \"__\"; textname: \"TEXT\")","d":false,"p":["xml","attrpref","textname"],"m":[],"n":["xml","attrpref"]},{"name":"fileGetContent","t":"(file: )","d":false,"p":["file"],"m":[],"n":["file"]},{"name":"execSSH","t":"(ssh: ; vars: )","d":false,"p":["ssh","vars"],"m":[],"n":["ssh"]},{"name":"logRowList","t":"(table: ''; cycle: ; id: ; field: ; params: ; limit: )","d":false,"p":["table","cycle","id","field","params","limit"],"m":[],"n":["field","table"]},{"name":"normalizeN","t":"(table: ; num: )","d":false,"p":["table","num"],"m":[],"n":["table","num"]},{"name":"sysTranslit","t":"(str: )","d":false,"p":["str"],"m":[],"n":["str"]},{"name":"getTableSource","t":"(table: ; cycle: ; hash: ; fields: ; ids: )","d":false,"p":["table","cycle","hash","id","fields","ids"],"m":[],"n":["table"]},{"name":"getTableUpdated","t":"(table: ; cycle: )","d":false,"p":["table","cycle"],"m":[],"n":["table"]},{"name":"tableLogSelect","t":"(from: ; to: ; users: ; order: )","d":false,"p":["from","to","users","order"],"m":[],"n":["from","to","users"]},{"name":"userInRoles","t":"(role: )","d":false,"p":["role"],"m":["role"],"n":["role"]},{"name":"getUsingFields","t":"(table: ; field: )","d":false,"p":["table","field"],"m":[],"n":["field","table"]},{"name":"schemaGzStringGet","t":"(password: ; withlog: true; withbfl: false)","d":false,"p":["password","withlog","withbfl"],"m":[],"n":["password","withlog","withbfl"]},{"name":"schemaGzStringUpload","t":"(password: ; gzstring: )","d":true,"p":["password","gzstring"],"m":[],"n":["password","gzstring"]},{"name":"encriptedFormParams","t":"(data: $rowList; params: $row)","d":false,"p":["data","params"],"m":[],"n":[]},{"name":"reorder","t":"(table: ; ids: ; after: )","d":false,"p":["ids","after","table","cycle","hash"],"m":[],"n":["ids","table"]},{"name":"strPart","t":"(str: ; offset: ; length: )","d":false,"p":["str","length","offset"],"m":[],"n":["str"]},{"name":"listCheck","t":"(list: )","d":false,"p":["list"],"m":[],"n":["list"]},{"name":"sleep","t":"(sec: )","d":false,"p":["sec"],"m":[],"n":["sec"]},{"name":"panelButton","t":"(condition: ; code: ; text: ; icon: ; background: ; vars: ; refresh: )","d":false,"p":["text","code","icon","background","vars","refresh","condition"],"m":["condition"],"n":["code"]},{"name":"linkToEdit","t":"(title: \"\"; table: ''; cycle: ; field: ''; id: ; refresh: false)","d":false,"p":["table","field","id","refresh","cycle","hash","title"],"m":[],"n":["field","table","title"]},{"name":"numTransform","t":"(data: )","d":false,"p":["data"],"m":[],"n":["data"]},{"name":"tableUrl","t":"(table: ''; cycle: )","d":false,"p":["table","cycle","protocol"],"m":[],"n":["table"]},{"name":"notificationSend","t":"(users: ; title: ; ntf: ; eml: ; custom: )","d":false,"p":["users","title","ntf","eml","custom"],"m":["custom"],"n":["users","title"]},{"name":"dateIntervals","t":"(date: $#nd; num: 10; type: \"hour|day|week|months\"; datetime: false)","d":false,"p":["date","num","format","type","datetime","weekdaystart"],"m":[],"n":["num","type","date"]}];
