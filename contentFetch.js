function e(e){let n=e.split("?")[0];return n=n.split("#")[0],n}function n(e){var n=document.createElement("div");return n.innerHTML=e.trim(),n.firstChild}document.onload=(document.getElementsByTagName("body")[0].appendChild(n('<div class="main_Rotenx_Selected_Text_Holder_Container">\n  <p title="list of notes" class="main_Rotenx_Selected_Text_Holder_Container_Image"></p>\n  <div class="main_Rotenx_Selected_Text_Holder_Container_inner_Container">\n      <div class="main_Rotenx_Selected_Text_Holder_Container_inner_Container_Header">\n          <p>Roten.X DevTool</p>\n      </div>\n      <div class="main_Rotenx_Selected_Text_Holder_Container_inner_Container_Data"\n      id="main_Rotenx_Selected_Text_Holder_Container_inner_Container_Data">\n  </div>\n  </div>\n</div>')),void chrome.storage.local.get(["token"],(function(t){if(t.token){var o={urlCode:e(window.location.href),type:"Text",userToken:t.token};let a=new Headers;a.append("Content-Type","application/json"),a.append("Accept","application/json"),a.append("Access-Control-Allow-Origin","*"),a.append("Access-Control-Allow-Credentials","true"),a.append("GET","POST","OPTIONS"),fetch("https://jade-smoggy-barnacle.cyclic.app/find-notes",{method:"POST",headers:a,body:JSON.stringify(o)}).then((e=>e.json())).then((e=>{e.status&&(console.log(e),globalData=e,e.data.map(((e,n)=>{!function(e){var n=JSON.stringify(e.selectedData);if(n){var t=JSON.parse(n),o=t.elementMap,a=t.selectedText,i=function(e){for(var n=document.body,t=e.length-1;t>=0;t--){var o=e[t];if(o.id){n=document.getElementById(o.id);break}if(o.tagName){var a=n.getElementsByTagName(o.tagName);a.length>0&&(n=a[0])}}return n}(o);if(i){for(var r=document.createRange(),l=function(e){var n=[];function t(e){if(e.nodeType===Node.TEXT_NODE)n.push(e);else if(e.nodeType===Node.ELEMENT_NODE)for(var o=0;o<e.childNodes.length;o++)t(e.childNodes[o])}return t(e),n}(i),d=0;d<l.length;d++){var _=l[d],c=_.nodeValue.indexOf(a);if(-1!==c){r.setStart(_,c),r.setEnd(_,c+a.length);break}}if(!r.collapsed){var s=document.createElement("mark");s.style.backgroundColor=`${e.color}`,s.id=`${e.notes_token}`,r.surroundContents(s)}}}}(e)})),function(e){e.data.forEach((e=>{var t=`<a href="#${e.notes_token}" style="text-decoration: none;color: black;">\n            <div class="main_Rotenx_Selected_Text_Holder_Container_inner_Container_Data_item">\n              <div class="main_Rotenx_Selected_Text_Holder_Container_inner_Container_Data_item_bg" style="background:${e.color}"></div>\n              <p class="main_Rotenx_Selected_Text_Holder_Container_inner_Container_Data_item_Color" style="background:${e.color}"></p>\n              <div class="main_Rotenx_Selected_Text_Holder_Container_inner_Container_Data_item_details">\n                <span title="title">${e.title}</span>\n              </div>\n            </div>\n          </a>`;document.getElementById("main_Rotenx_Selected_Text_Holder_Container_inner_Container_Data").appendChild(n(t))}))}(e))})).catch((e=>{console.error("Error:",e)}))}else console.error("login now")})));