/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("colordialog",function(e){function t(){h.getById(T).removeStyle("background-color"),s.getContentElement("picker","selectedColor").setValue(""),l&&l.removeAttribute("aria-selected"),l=null}function i(e){var t,e=e.data.getTarget();"td"==e.getName()&&(t=e.getChild(0).getHtml())&&(l=e,l.setAttribute("aria-selected",!0),s.getContentElement("picker","selectedColor").setValue(t))}function n(e){for(var e=e.replace(/^#/,""),t=0,i=[];2>=t;t++)i[t]=parseInt(e.substr(2*t,2),16);return"#"+(165<=.2126*i[0]+.7152*i[1]+.0722*i[2]?"000":"fff")}function a(e){!e.name&&(e=new CKEDITOR.event(e));var t,i=!/mouse/.test(e.name),a=e.data.getTarget();"td"==a.getName()&&(t=a.getChild(0).getHtml())&&(o(e),i?d=a:c=a,i&&(a.setStyle("border-color",n(t)),a.setStyle("border-style","dotted")),h.getById(b).setStyle("background-color",t),h.getById(v).setHtml(t))}function o(e){if(e=!/mouse/.test(e.name)&&d){var t=e.getChild(0).getHtml();e.setStyle("border-color",t),e.setStyle("border-style","solid")}!d&&!c&&(h.getById(b).removeStyle("background-color"),h.getById(v).setHtml("&nbsp;"))}function r(t){var n=t.data,a=n.getTarget(),o=n.getKeystroke(),r="rtl"==e.lang.dir;switch(o){case 38:(t=a.getParent().getPrevious())&&(t=t.getChild([a.getIndex()]),t.focus()),n.preventDefault();break;case 40:(t=a.getParent().getNext())&&(t=t.getChild([a.getIndex()]))&&1==t.type&&t.focus(),n.preventDefault();break;case 32:case 13:i(t),n.preventDefault();break;case r?37:39:(t=a.getNext())?1==t.type&&(t.focus(),n.preventDefault(!0)):(t=a.getParent().getNext())&&(t=t.getChild([0]))&&1==t.type&&(t.focus(),n.preventDefault(!0));break;case r?39:37:(t=a.getPrevious())?(t.focus(),n.preventDefault(!0)):(t=a.getParent().getPrevious())&&(t=t.getLast(),t.focus(),n.preventDefault(!0))}}var s,l,d,c,u,p=CKEDITOR.dom.element,h=CKEDITOR.document,m=e.lang.colordialog,g={type:"html",html:"&nbsp;"},f=function(e){return CKEDITOR.tools.getNextId()+"_"+e},b=f("hicolor"),v=f("hicolortext"),T=f("selhicolor");return function(){function e(e,i){for(var a=e;e+3>a;a++){var o=new p(u.$.insertRow(-1));o.setAttribute("role","row");for(var r=i;i+3>r;r++)for(var s=0;6>s;s++)t(o.$,"#"+n[r]+n[s]+n[a])}}function t(e,t){var n=new p(e.insertCell(-1));n.setAttribute("class","ColorCell"),n.setAttribute("tabIndex",-1),n.setAttribute("role","gridcell"),n.on("keydown",r),n.on("click",i),n.on("focus",a),n.on("blur",o),n.setStyle("background-color",t),n.setStyle("border","1px solid "+t),n.setStyle("width","14px"),n.setStyle("height","14px");var s=f("color_table_cell");n.setAttribute("aria-labelledby",s),n.append(CKEDITOR.dom.element.createFromHtml('<span id="'+s+'" class="cke_voice_label">'+t+"</span>",CKEDITOR.document))}u=CKEDITOR.dom.element.createFromHtml('<table tabIndex="-1" aria-label="'+m.options+'" role="grid" style="border-collapse:separate;" cellspacing="0"><caption class="cke_voice_label">'+m.options+'</caption><tbody role="presentation"></tbody></table>'),u.on("mouseover",a),u.on("mouseout",o);var n="00 33 66 99 cc ff".split(" ");e(0,0),e(3,0),e(0,3),e(3,3);var s=new p(u.$.insertRow(-1));s.setAttribute("role","row");for(var l=0;6>l;l++)t(s.$,"#"+n[l]+n[l]+n[l]);for(l=0;12>l;l++)t(s.$,"#000000")}(),{title:m.title,minWidth:360,minHeight:220,onLoad:function(){s=this},onHide:function(){t();var e=d.getChild(0).getHtml();d.setStyle("border-color",e),d.setStyle("border-style","solid"),h.getById(b).removeStyle("background-color"),h.getById(v).setHtml("&nbsp;"),d=null},contents:[{id:"picker",label:m.title,accessKey:"I",elements:[{type:"hbox",padding:0,widths:["70%","10%","30%"],children:[{type:"html",html:"<div></div>",onLoad:function(){CKEDITOR.document.getById(this.domId).append(u)},focus:function(){(d||this.getElement().getElementsByTag("td").getItem(0)).focus()}},g,{type:"vbox",padding:0,widths:["70%","5%","25%"],children:[{type:"html",html:"<span>"+m.highlight+'</span>												<div id="'+b+'" style="border: 1px solid; height: 74px; width: 74px;"></div>												<div id="'+v+'">&nbsp;</div><span>'+m.selected+'</span>												<div id="'+T+'" style="border: 1px solid; height: 20px; width: 74px;"></div>'},{type:"text",label:m.selected,labelStyle:"display:none",id:"selectedColor",style:"width: 74px",onChange:function(){try{h.getById(T).setStyle("background-color",this.getValue())}catch(e){t()}}},g,{type:"button",id:"clear",style:"margin-top: 5px",label:m.clear,onClick:t}]}]}]}]}});