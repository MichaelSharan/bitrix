{"version":3,"file":"textarea.bundle.map.js","names":["exports","ui_designTokens","ui_vue","im_lib_localstorage","im_lib_utils","main_core","ui_vue_vuex","main_core_events","im_const","ownKeys","object","enumerableOnly","keys","Object","getOwnPropertySymbols","symbols","filter","sym","getOwnPropertyDescriptor","enumerable","push","apply","_objectSpread","target","i","arguments","length","source","forEach","key","babelHelpers","defineProperty","getOwnPropertyDescriptors","defineProperties","BitrixVue","component","props","siteId","default","userId","dialogId","enableCommand","enableMention","desktopMode","enableEdit","enableFile","sendByEnter","autoFocus","writesEventLetter","styles","type","_default","data","placeholderMessage","currentMessage","previousMessage","commandListen","mentionListen","stylesDefault","freeze","button","backgroundColor","iconColor","created","EventEmitter","subscribe","EventType","textarea","insertText","this","onInsertText","setFocus","onFocusSet","setBlur","onFocusClear","localStorage","LocalStorage","textareaHistory","get","beforeDestroy","unsubscribe","clearTimeout","messageStoreTimeout","set","computed","textareaClassName","isDarkBackground","isMobile","buttonStyle","assign","isIconDark","Utils","isDarkColor","className","style","application","options","darkBackground","device","DeviceType","mobile","localize","getFilteredPhrases","isIE11","Browser","Vuex","mapState","state","directives","inserted","element","params","value","focus","methods","text","breakline","undefined","position","cursor","$refs","selectionStart","selectionEnd","substring","trim","endsWith","textChangeEvent","sendMessage","event","preventDefault","emit","_this","startWriting","previousSelectionStart","previousSelectionEnd","toString","setTimeout","onKeyDown","$emit","isMac","platform","isCtrlTEnable","isBitrixDesktop","browser","isChrome","altKey","ctrlKey","shiftKey","keyCode","document","activeElement","stopPropagation","metaKey","includes","tagStart","toLowerCase","tagEnd","selected","startsWith","indexOf","edit","onKeyUp","keyUp","onPaste","$nextTick","onInput","onFocus","onBlur","blur","onAppButtonClick","appId","appButtonClick","_ref","_ref$data","onFileClick","onFileSelect","fileSelected","fileChangeEvent","fileInput","log","skip","console","warn","template","window","BX","Messenger","Lib","Event","Const"],"sources":["textarea.bundle.js"],"mappings":"CAAC,SAAUA,EAAQC,EAAgBC,EAAOC,EAAoBC,EAAaC,EAAUC,EAAYC,EAAiBC,GACjH,aAEA,SAASC,EAAQC,EAAQC,GAAkB,IAAIC,EAAOC,OAAOD,KAAKF,GAAS,GAAIG,OAAOC,sBAAuB,CAAE,IAAIC,EAAUF,OAAOC,sBAAsBJ,GAASC,IAAmBI,EAAUA,EAAQC,QAAO,SAAUC,GAAO,OAAOJ,OAAOK,yBAAyBR,EAAQO,GAAKE,UAAY,KAAKP,EAAKQ,KAAKC,MAAMT,EAAMG,EAAU,CAAE,OAAOH,CAAM,CACpV,SAASU,EAAcC,GAAU,IAAK,IAAIC,EAAI,EAAGA,EAAIC,UAAUC,OAAQF,IAAK,CAAE,IAAIG,EAAS,MAAQF,UAAUD,GAAKC,UAAUD,GAAK,CAAC,EAAGA,EAAI,EAAIf,EAAQI,OAAOc,IAAU,GAAGC,SAAQ,SAAUC,GAAOC,aAAaC,eAAeR,EAAQM,EAAKF,EAAOE,GAAO,IAAKhB,OAAOmB,0BAA4BnB,OAAOoB,iBAAiBV,EAAQV,OAAOmB,0BAA0BL,IAAWlB,EAAQI,OAAOc,IAASC,SAAQ,SAAUC,GAAOhB,OAAOkB,eAAeR,EAAQM,EAAKhB,OAAOK,yBAAyBS,EAAQE,GAAO,GAAI,CAAE,OAAON,CAAQ,CACrgBrB,EAAOgC,UAAUC,UAAU,2BAA4B,CAarDC,MAAO,CACLC,OAAQ,CACNC,QAAW,WAEbC,OAAQ,CACND,QAAW,GAEbE,SAAU,CACRF,QAAW,GAEbG,cAAe,CACbH,QAAW,MAEbI,cAAe,CACbJ,QAAW,MAEbK,YAAa,CACXL,QAAW,OAEbM,WAAY,CACVN,QAAW,OAEbO,WAAY,CACVP,QAAW,OAEbQ,YAAa,CACXR,QAAW,MAEbS,UAAW,CACTT,QAAW,MAEbU,kBAAmB,CACjBV,QAAW,GAEbW,OAAQ,CACNC,KAAMrC,OACNyB,QAAW,SAASa,IAClB,MAAO,CAAC,CACV,IAGJC,KAAM,SAASA,IACb,MAAO,CACLC,mBAAoB,GACpBC,eAAgB,GAChBC,gBAAiB,GACjBC,cAAe,MACfC,cAAe,MACfC,cAAe7C,OAAO8C,OAAO,CAC3BC,OAAQ,CACNC,gBAAiB,KACjBC,UAAW,QAInB,EACAC,QAAS,SAASA,IAChBxD,EAAiByD,aAAaC,UAAUzD,EAAS0D,UAAUC,SAASC,WAAYC,KAAKC,cACrF/D,EAAiByD,aAAaC,UAAUzD,EAAS0D,UAAUC,SAASI,SAAUF,KAAKG,YACnFjE,EAAiByD,aAAaC,UAAUzD,EAAS0D,UAAUC,SAASM,QAASJ,KAAKK,cAClFL,KAAKM,aAAexE,EAAoByE,aACxCP,KAAKQ,gBAAkBR,KAAKM,aAAaG,IAAIT,KAAKhC,OAAQgC,KAAK9B,OAAQ,mBAAoB,CAAC,GAC5F8B,KAAKf,eAAiBe,KAAKQ,gBAAgBR,KAAK7B,WAAa,GAC7D6B,KAAKhB,mBAAqBgB,KAAKf,cACjC,EACAyB,cAAe,SAASA,IACtBxE,EAAiByD,aAAagB,YAAYxE,EAAS0D,UAAUC,SAASC,WAAYC,KAAKC,cACvF/D,EAAiByD,aAAagB,YAAYxE,EAAS0D,UAAUC,SAASI,SAAUF,KAAKG,YACrFjE,EAAiByD,aAAagB,YAAYxE,EAAS0D,UAAUC,SAASM,QAASJ,KAAKK,cACpFO,aAAaZ,KAAKa,qBAClBb,KAAKM,aAAaQ,IAAId,KAAKhC,OAAQgC,KAAK9B,OAAQ,mBAAoB8B,KAAKQ,iBACzER,KAAKM,aAAe,IACtB,EACAS,SAAU9D,EAAc,CACtB+D,kBAAmB,SAASA,IAC1B,MAAO,CAAC,iBAAkB,CACxB,iCAAkChB,KAAKiB,iBACvC,wBAAyBjB,KAAKkB,UAElC,EACAC,YAAa,SAASA,IACpB,IAAIvC,EAASpC,OAAO4E,OAAO,CAAC,EAAGpB,KAAKX,cAAeW,KAAKpB,QACxD,IAAIyC,EAAa,MACjB,GAAIzC,EAAOW,OAAOE,UAAW,CAC3B4B,EAAatF,EAAauF,MAAMC,YAAY3C,EAAOW,OAAOE,UAC5D,KAAO,CACL4B,GAActF,EAAauF,MAAMC,YAAY3C,EAAOW,OAAOC,gBAC7D,CACAZ,EAAOW,OAAOiC,UAAYH,EAAa,6BAA+B,qEACtEzC,EAAOW,OAAOkC,MAAQ7C,EAAOW,OAAOC,gBAAkB,qBAAuBZ,EAAOW,OAAOC,gBAAkB,IAAM,GACnH,OAAOZ,CACT,EACAqC,iBAAkB,SAASA,IACzB,OAAOjB,KAAK0B,YAAYC,QAAQC,cAClC,EACAV,SAAU,SAASA,IACjB,OAAOlB,KAAK0B,YAAYG,OAAOhD,OAAS1C,EAAS2F,WAAWC,MAC9D,EACAC,SAAU,SAASA,IACjB,OAAOnG,EAAOgC,UAAUoE,mBAAmB,yBAA0BjC,KACvE,EACAkC,OAAQ,SAASA,IACf,OAAOlG,EAAUmG,QAAQD,QAC3B,GACCjG,EAAYmG,KAAKC,SAAS,CAC3BX,YAAa,SAASA,EAAYY,GAChC,OAAOA,EAAMZ,WACf,KAEFa,WAAY,CACV,cAAe,CACbC,SAAU,SAASA,EAASC,EAASC,GACnC,GAAIA,EAAOC,QAAU,MAAQD,EAAOC,QAAU,OAAS3C,KAAKkB,SAAU,CACpEuB,EAAQG,OACV,CACF,IAGJC,QAAS,CASP9C,WAAY,SAASA,EAAW+C,GAC9B,IAAIC,EAAY3F,UAAUC,OAAS,GAAKD,UAAU,KAAO4F,UAAY5F,UAAU,GAAK,MACpF,IAAI6F,EAAW7F,UAAUC,OAAS,GAAKD,UAAU,KAAO4F,UAAY5F,UAAU,GAAK,UACnF,IAAI8F,EAAS9F,UAAUC,OAAS,GAAKD,UAAU,KAAO4F,UAAY5F,UAAU,GAAK,QACjF,IAAIwF,EAAQxF,UAAUC,OAAS,GAAKD,UAAU,KAAO4F,UAAY5F,UAAU,GAAK,KAChF,IAAI0C,EAAWE,KAAKmD,MAAMrD,SAC1B,IAAIsD,EAAiBtD,EAASsD,eAC9B,IAAIC,EAAevD,EAASuD,aAC5B,GAAIJ,GAAY,QAAS,CACvB,GAAIF,EAAW,CACbD,EAAOA,EAAO,IAChB,CACAhD,EAAS6C,MAAQG,EAAOhD,EAAS6C,MACjC,GAAIC,EAAO,CACT,GAAIM,GAAU,QAAS,CACrBpD,EAASsD,eAAiBN,EAAKzF,OAC/ByC,EAASuD,aAAevD,EAASsD,cACnC,MAAO,GAAIF,GAAU,SAAU,CAC7BpD,EAASsD,eAAiB,EAC1BtD,EAASuD,aAAevD,EAASsD,cACnC,CACF,CACF,MAAO,GAAIH,GAAY,UAAW,CAChC,GAAIF,EAAW,CACb,GAAIjD,EAAS6C,MAAMW,UAAU,EAAGF,GAAgBG,OAAOlG,OAAS,EAAG,CACjEyF,EAAO,KAAOA,CAChB,CACAA,EAAOA,EAAO,IAChB,KAAO,CACL,GAAIhD,EAAS6C,QAAU7C,EAAS6C,MAAMa,SAAS,KAAM,CACnDV,EAAO,IAAMA,CACf,CACF,CACAhD,EAAS6C,MAAQ7C,EAAS6C,MAAMW,UAAU,EAAGF,GAAkBN,EAAOhD,EAAS6C,MAAMW,UAAUD,EAAcvD,EAAS6C,MAAMtF,QAC5H,GAAIuF,EAAO,CACT,GAAIM,GAAU,QAAS,CACrBpD,EAASsD,eAAiBA,EAAiBN,EAAKzF,OAChDyC,EAASuD,aAAevD,EAASsD,cACnC,MAAO,GAAIF,GAAU,SAAU,CAC7BpD,EAASsD,eAAiBA,EAC1BtD,EAASuD,aAAevD,EAASsD,cACnC,CACF,CACF,MAAO,GAAIH,GAAY,MAAO,CAC5B,GAAIF,EAAW,CACb,GAAIjD,EAAS6C,MAAMW,UAAU,EAAGF,GAAgBG,OAAOlG,OAAS,EAAG,CACjEyF,EAAO,KAAOA,CAChB,CACAA,EAAOA,EAAO,IAChB,KAAO,CACL,GAAIhD,EAAS6C,QAAU7C,EAAS6C,MAAMa,SAAS,KAAM,CACnDV,EAAO,IAAMA,CACf,CACF,CACAhD,EAAS6C,MAAQ7C,EAAS6C,MAAQG,EAClC,GAAIF,EAAO,CACT,GAAIM,GAAU,QAAS,CACrBpD,EAASsD,eAAiBtD,EAAS6C,MAAMtF,OACzCyC,EAASuD,aAAevD,EAASsD,cACnC,MAAO,GAAIF,GAAU,SAAU,CAC7BpD,EAASsD,eAAiBtD,EAAS6C,MAAMtF,OAASyF,EAAKzF,OACvDyC,EAASuD,aAAevD,EAASsD,cACnC,CACF,CACF,CACA,GAAIR,EAAO,CACT,GAAIM,GAAU,QAAS,CACrBpD,EAASsD,eAAiB,EAC1BtD,EAASuD,aAAe,CAC1B,MAAO,GAAIH,GAAU,MAAO,CAC1BpD,EAASsD,eAAiBtD,EAAS6C,MAAMtF,OACzCyC,EAASuD,aAAevD,EAASsD,cACnC,CACAtD,EAAS8C,OACX,CACA5C,KAAKyD,iBACP,EACAC,YAAa,SAASA,EAAYC,GAChCA,EAAMC,iBACN1H,EAAiByD,aAAakE,KAAK1H,EAAS0D,UAAUC,SAAS4D,YAAa,CAC1EZ,KAAM9C,KAAKf,eAAesE,SAE5B,IAAIzD,EAAWE,KAAKmD,MAAMrD,SAC1B,GAAIA,EAAU,CACZA,EAAS6C,MAAQ,EACnB,CACA,GAAI3C,KAAKtB,YAAc,MAAQsB,KAAKtB,UAAW,CAC7CoB,EAAS8C,OACX,CACA5C,KAAKyD,iBACP,EACAA,gBAAiB,SAASA,IACxB,IAAIK,EAAQ9D,KACZ,IAAIF,EAAWE,KAAKmD,MAAMrD,SAC1B,IAAKA,EAAU,CACb,MACF,CACA,IAAIgD,EAAOhD,EAAS6C,MAAMY,OAC1B,GAAIvD,KAAKf,iBAAmB6D,EAAM,CAChC,MACF,CACA,GAAI9C,KAAKrB,mBAAqBmE,EAAKzF,OAAQ,CACzCnB,EAAiByD,aAAakE,KAAK1H,EAAS0D,UAAUC,SAASiE,aAAc,CAC3EjB,KAAMA,GAEV,CACA9C,KAAKd,gBAAkBc,KAAKf,eAC5Be,KAAKgE,uBAAyBlE,EAASsD,eACvCpD,KAAKiE,qBAAuBjE,KAAKgE,uBACjChE,KAAKf,eAAiB6D,EACtB,GAAIA,EAAKoB,WAAW7G,OAAS,EAAG,CAC9B2C,KAAKQ,gBAAgBR,KAAK7B,UAAY2E,CACxC,KAAO,QACE9C,KAAKQ,gBAAgBR,KAAK7B,SACnC,CACAyC,aAAaZ,KAAKa,qBAClBb,KAAKa,oBAAsBsD,YAAW,WACpCL,EAAMxD,aAAaQ,IAAIgD,EAAM9F,OAAQ8F,EAAM5F,OAAQ,mBAAoB4F,EAAMtD,gBAAiBsD,EAAM5F,OAAS,EAAI,GACnH,GAAG,IACL,EACAkG,UAAW,SAASA,EAAUT,GAC5B3D,KAAKqE,MAAM,UAAWV,GACtB,IAAI7D,EAAW6D,EAAMzG,OACrB,IAAI4F,EAAOhD,EAAS6C,MAAMY,OAC1B,IAAIe,EAAQvI,EAAauF,MAAMiD,SAASD,QACxC,IAAIE,EAAgBzI,EAAauF,MAAMiD,SAASE,oBAAsB1I,EAAauF,MAAMoD,QAAQC,WAGjG,GAAI3E,KAAKb,oBAAsB,GAAIa,KAAKZ,oBAAsB,KAAMuE,EAAMiB,QAAUjB,EAAMkB,SAAU,CAClG,GAAI7E,KAAK3B,eAAiBsF,EAAMmB,WAAanB,EAAMoB,SAAW,IAAMpB,EAAMoB,SAAW,IAAMpB,EAAMoB,SAAW,KAAOpB,EAAMoB,SAAW,MAAQpB,EAAMoB,SAAW,UAAY,GAAI/E,KAAK5B,gBAAkBuF,EAAMoB,SAAW,KAAOpB,EAAMoB,SAAW,KAAOpB,EAAMoB,SAAW,MACvQ,CACA,GAAIpB,EAAMoB,SAAW,GAAI,CACvB,GAAIjF,EAAS6C,OAAS,IAAM7C,IAAakF,SAASC,cAAe,CAC/DtB,EAAMC,iBACND,EAAMuB,iBACR,CACA,GAAIvB,EAAMmB,SAAU,CAClBhF,EAAS6C,MAAQ,EACnB,CACF,MAAO,GAAIgB,EAAMwB,SAAWxB,EAAMkB,QAAS,CAEzC,GAAIL,GAAiBb,EAAMnG,MAAQ,MAAQgH,GAAiBb,EAAMnG,MAAQ,IAAK,CAE7EmG,EAAMC,gBACR,MAAO,GAAI,CAAC,IAAK,IAAK,IAAK,KAAKwB,SAASzB,EAAMnG,KAAM,CACnD,IAAI4F,EAAiBtD,EAASsD,eAC9B,IAAIC,EAAevD,EAASuD,aAC5B,IAAIgC,EAAW,IAAM1B,EAAMnG,IAAI8H,cAAgB,IAC/C,IAAIC,EAAS,KAAO5B,EAAMnG,IAAI8H,cAAgB,IAC9C,IAAIE,EAAW1F,EAAS6C,MAAMW,UAAUF,EAAgBC,GACxD,GAAImC,EAASC,WAAWJ,IAAaG,EAAShC,SAAS+B,GAAS,CAC9DC,EAAWA,EAASlC,UAAU+B,EAAShI,OAAQmI,EAASE,QAAQH,GAClE,KAAO,CACLC,EAAWH,EAAWG,EAAWD,CACnC,CACAzF,EAAS6C,MAAQ7C,EAAS6C,MAAMW,UAAU,EAAGF,GAAkBoC,EAAW1F,EAAS6C,MAAMW,UAAUD,EAAcvD,EAAS6C,MAAMtF,QAChIyC,EAASsD,eAAiBA,EAC1BtD,EAASuD,aAAeD,EAAiBoC,EAASnI,OAClDsG,EAAMC,gBACR,CACF,CACA,GAAID,EAAMoB,SAAW,EAAG,CACtB/E,KAAKD,WAAW,MAChB4D,EAAMC,gBACR,MAAO,GAAI5D,KAAKzB,YAAcoF,EAAMoB,SAAW,IAAMjC,EAAKzF,QAAU,EAAG,CACrEnB,EAAiByD,aAAakE,KAAK1H,EAAS0D,UAAUC,SAAS6F,KAAM,CAAC,EACxE,MAAO,GAAIhC,EAAMoB,SAAW,GAAI,CAC9B,GAAI/E,KAAKkB,eAAiB,GAAIlB,KAAKvB,aAAe,KAAM,CACtD,GAAIkF,EAAMkB,SAAWlB,EAAMiB,QAAUjB,EAAMmB,SAAU,CACnD,IAAKnB,EAAMmB,SAAU,CACnB9E,KAAKD,WAAW,KAClB,CACF,MAAO,GAAI+C,EAAKzF,QAAU,EAAG,CAC3BsG,EAAMC,gBACR,KAAO,CACL5D,KAAK0D,YAAYC,EACnB,CACF,KAAO,CACL,GAAIA,EAAMkB,SAAW,KAAM,CACzB7E,KAAK0D,YAAYC,EACnB,MAAO,GAAIW,IAAUX,EAAMwB,SAAW,MAAQxB,EAAMiB,QAAU,MAAO,CACnE5E,KAAK0D,YAAYC,EACnB,CACF,CACF,MAAO,IAAKA,EAAMkB,SAAWlB,EAAMwB,UAAYxB,EAAMnG,KAAO,IAAK,CAC/D,GAAIwC,KAAKd,gBAAiB,CACxBY,EAAS6C,MAAQ3C,KAAKd,gBACtBY,EAASsD,eAAiBpD,KAAKgE,uBAC/BlE,EAASuD,aAAerD,KAAKiE,qBAC7BjE,KAAKd,gBAAkB,GACvByE,EAAMC,gBACR,CACF,CACF,EACAgC,QAAS,SAASA,EAAQjC,GACxBzH,EAAiByD,aAAakE,KAAK1H,EAAS0D,UAAUC,SAAS+F,MAAO,CACpElC,MAAOA,EACPb,KAAM9C,KAAKf,iBAEbe,KAAKyD,iBACP,EACAqC,QAAS,SAASA,EAAQnC,GACxB3D,KAAK+F,UAAU/F,KAAKyD,gBACtB,EACAuC,QAAS,SAASA,EAAQrC,GACxB3D,KAAKyD,iBACP,EACAwC,QAAS,SAASA,EAAQtC,GACxBzH,EAAiByD,aAAakE,KAAK1H,EAAS0D,UAAUC,SAAS8C,MAAOe,EACxE,EACAuC,OAAQ,SAASA,EAAOvC,GACtBzH,EAAiByD,aAAakE,KAAK1H,EAAS0D,UAAUC,SAASqG,KAAMxC,EACvE,EACAyC,iBAAkB,SAASA,EAAiBC,EAAO1C,GACjDzH,EAAiByD,aAAakE,KAAK1H,EAAS0D,UAAUC,SAASwG,eAAgB,CAC7ED,MAAOA,EACP1C,MAAOA,GAEX,EACA1D,aAAc,SAASA,EAAasG,GAClC,IAAIC,EAAYD,EAAKxH,KACnB4E,EAAQ6C,SAAmB,EAAI,CAAC,EAAIA,EACtC,IAAK7C,EAAMb,KAAM,CACf,OAAO,KACT,CACA9C,KAAKD,WAAW4D,EAAMb,KAAMa,EAAMZ,UAAWY,EAAMV,SAAUU,EAAMT,OAAQS,EAAMf,OACjF1G,EAAiByD,aAAakE,KAAK1H,EAAS0D,UAAUC,SAAS+F,MAAO,CACpElC,MAAOA,EACPb,KAAM9C,KAAKf,iBAEb,OAAO,IACT,EACAkB,WAAY,SAASA,IACnBH,KAAKmD,MAAMrD,SAAS8C,QACpB,OAAO,IACT,EACAvC,aAAc,SAASA,IACrBL,KAAKmD,MAAMrD,SAASqG,OACpB,OAAO,IACT,EACAM,YAAa,SAASA,EAAY9C,GAChCA,EAAMzG,OAAOyF,MAAQ,EACvB,EACA+D,aAAc,SAASA,EAAa/C,GAClCzH,EAAiByD,aAAakE,KAAK1H,EAAS0D,UAAUC,SAAS6G,aAAc,CAC3EC,gBAAiBjD,EACjBkD,UAAWlD,EAAMzG,QAErB,EACA4J,IAAK,SAASA,EAAIhE,EAAMiE,EAAMpD,GAC5BqD,QAAQC,KAAKnE,GACb,GAAIiE,GAAQ,EAAG,CACbpD,EAAMC,gBACR,CACF,EACAA,eAAgB,SAASA,EAAeD,GACtCA,EAAMC,gBACR,GAGFsD,SAAU,+lDAGb,EAxZA,CAwZGlH,KAAKmH,OAASnH,KAAKmH,QAAU,CAAC,EAAGC,GAAGA,GAAGA,GAAGC,UAAUC,IAAIF,GAAGC,UAAUC,IAAIF,GAAGA,GAAGA,GAAGG,MAAMH,GAAGC,UAAUG"}