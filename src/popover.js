// popover.min.js, for SugarCube 2, by Chapel
// v1.0.0, 2022-07-21, 3bdbdfbe5ae47a46e4f4e52766d78701939ae9a6
;!function(){"use strict";function o(o,i){i=function(){return[].slice.call(arguments).flatten().filter((function(o){return o&&"string"==typeof o&&o.trim()}))||[]}(i),$("#ui-overlay, #ui-dialog").addClass("popover"),$("#ui-overlay, #ui-dialog, #ui-dialog-body").addClass(i),i.includesAny("noclick","no-click")&&$("#ui-overlay").removeClass("ui-close"),Dialog.setup("","popover"),Dialog.wiki(o),Dialog.open(),$(document).one(":dialogclosed",(function(){$("#ui-overlay").addClass("ui-close"),$("#ui-overlay, #ui-dialog").removeClass("popover"),$("#ui-overlay, #ui-dialog, #ui-dialog-body").removeClass(i)}))}Macro.add("popover",{tags:null,handler:function(){o(this.payload[0].contents,this.args)}}),Macro.add("dismisspopover",{skipArgs:!0,handler:function(){$("ui-overlay").hasClass("popover")&&Dialog.close()}}),setup.popover=o}();
// end popover.min.js