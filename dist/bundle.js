(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!t;)t=o[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();let t=o("Tasks");function n(e,n,o){let i={};return i.name=e,i.dueDate=n,i.priority=o,i.isFin="Unfinished",i.setName=function(e){this.name=e},i.setDueDate=function(e){this.dueDate=e},i.setPriority=function(e){this.priority=e},i.toggleComplete=function(){"Finished"==this.isFin?this.isFin="Unfinished":this.isFin="Finished"},i.delete=function(){for(let e of t.getList()){const t=e.getList().indexOf(this);if(-1!==t){e.getList().splice(t,1);break}}},i}function o(e){let t={};return t.name=e,t.items=[],t.setName=function(e){this.name=e},t.add=function(e){this.items.push(e)},t.getList=function(){return this.items},t}t.getTaskOf=function(e,n){return t.getList()[e].getList()[n]};const i=e.p+"0edbe23457b28843cafd.png",a=e.p+"92881cf98b591daca7ae.png",s=document.querySelector("div#content-header p"),d=document.querySelector("#back-btn"),c=document.querySelector("div#container"),r=document.querySelector("header button.options"),l=document.querySelector(".taskoption-btn"),u=document.querySelector("main nav"),m=document.querySelector(".task-menu"),p=document.getElementsByClassName("tab"),y=document.querySelector("#add-task"),f=document.querySelector("#add-proj");function g(e){const t=document.createElement("span"),n=document.createElement("p"),o=new Image;o.src=i,n.textContent=e.name,"General Task"==e.name?n.contentEditable=!1:n.contentEditable=!0,n.addEventListener("blur",(()=>e.name=n.textContent)),t.append(o,n),c.append(t)}function L(e){const t=document.createElement("div");t.classList.add("task-card");const n=document.createElement("p");n.classList.add("task-name"),n.contentEditable=!0;const o=document.createElement("button");o.classList.add("task-state");const i=document.createElement("input");i.type="date",i.classList.add("task-date");const s=document.createElement("button");s.classList.add("priority");const d=document.createElement("button");d.classList.add("del-btn");const r=new Image;n.textContent=e.name,o.textContent=e.isFin,i.value=e.dueDate,s.textContent=e.priority,r.src=a,t.append(n,o,i,s,d),c.append(t),d.append(r),h(),"High"==e.priority&&(s.style.backgroundColor="#a12535"),"Medium"==e.priority&&(s.style.backgroundColor="#9c702a"),"Low"==e.priority&&(s.style.backgroundColor="#4c5e3d"),"Finished"==e.isFin&&(n.style.textDecoration="line-through",t.style.filter="brightness(50%)",n.disabled=!0,s.disabled=!0,i.disabled=!0),d.onclick=function(){t.remove(),e.delete()},s.onclick=function(){"High"==e.priority?e.setPriority("Low"):"Medium"==e.priority?e.setPriority("High"):"Low"==e.priority&&e.setPriority("Medium"),s.textContent=e.priority,"High"==e.priority&&(s.style.backgroundColor="#a12535"),"Medium"==e.priority&&(s.style.backgroundColor="#9c702a"),"Low"==e.priority&&(s.style.backgroundColor="#4c5e3d")},n.addEventListener("blur",(()=>e.name=n.textContent)),i.addEventListener("blur",(()=>e.dueDate=i.value)),o.addEventListener("click",(()=>{"Unfinished"==e.isFin?(n.style.textDecoration="line-through",t.style.filter="brightness(60%)",n.disabled=!0,s.disabled=!0,i.disabled=!0):(n.style.textDecoration="none",t.style.filter="brightness(100%)",n.disabled=!1,s.disabled=!1,i.disabled=!1),e.toggleComplete(),o.textContent=e.isFin}))}function v(e){const t=document.querySelector("#addtask-container"),n=document.querySelector("#addproj-container");t.style.display="none",n.style.display="none",h(),e.classList.contains("visible")?e.classList.remove("visible"):e.classList.add("visible")}function b(e){for(var t=e.firstChild;t;)t.remove(),t=e.firstChild}function E(){s.contentEditable=!1,s.textContent="TASKS",s.removeAttribute("data-index"),document.querySelector(".task-menu button:first-child").style.display="block";for(let e of t.getList()){g(e);for(let t of e.getList())L(t)}}function k(){C(),x(),s.textContent="PROJECTS",s.contentEditable=!1,s.removeAttribute("data-index");for(let e of t.getList())if("unlisted"!=e.name){const n=document.createElement("div");n.classList.add("proj-card");const o=document.createElement("p");o.classList.add("proj-name");const i=document.createElement("p");i.classList.add("task-count");const r=document.createElement("button");r.classList.add("del-btn");const l=new Image,u=e.getList().filter((e=>"Finished"!=e.isFin));o.textContent=`${e.name} (${e.getList().length})`,l.src=a,i.textContent=`${u.length} unfinished tasks`,r.addEventListener("mousedown",(()=>{n.remove(),t.getList().splice(t.getList().indexOf(e),1)})),n.addEventListener("click",(n=>{if(n.target!=r||n.target!=l){d.classList.add("visible"),b(c),s.textContent=e.name,s.dataset.index=`${t.getList().indexOf(e)}`,s.contentEditable=!0,s.addEventListener("blur",(()=>e.name=s.textContent)),y.style.display="block",document.querySelector("#addproj-container").style.display="none";for(let t of e.getList())L(t)}})),"General Task"==e.name?n.append(o,i):n.append(o,i,r),c.append(n),r.append(l)}}function h(){"TASKS"==s.textContent?(y.style.display="block",f.style.display="block"):"PROJECTS"==s.textContent?(y.style.display="none",f.style.display="block"):(y.style.display="block",f.style.display="none")}function x(){y.style.display="none",f.style.display="none"}function C(){const e=document.querySelector("#addtask-container"),t=document.querySelector("#addproj-container");e.style.display="none",t.style.display="none",d.classList.remove("visible"),m.classList.remove("visible")}t.add(o("General Task")),t.add(o("Test Project")),t.add(o("Test Project 2")),t.getList()[0].add(n("Task name","2023-05-01","Medium")),t.getList()[0].add(n("Task name here","2023-08-09","High")),t.getList()[0].add(n("Task name here","2023-08-09","High")),t.getList()[1].add(n("Task name here","2023-08-09","Low")),t.getList()[1].add(n("Task name here","2023-08-09","High")),t.getList()[1].add(n("Task name here","2023-08-09","Low")),t.getList()[2].add(n("Task name","2023-05-01","Medium")),t.getList()[2].add(n("Task name here","2023-07-23","Low")),t.getList()[2].add(n("Task name here","2023-07-23","High")),t.getList()[2].add(n("Task name here","2023-07-23","High")),E(),function(){let e="";for(let t of p)t.classList.contains("active")&&(e=t);for(let t of p)t.addEventListener("click",(()=>{C(),b(c),"proj"==t.getAttribute("id")&&k(),"tasks"==t.getAttribute("id")&&E(),e.classList.remove("active"),t.classList.add("active"),e=t}))}(),function(){const e=document.createElement("p");e.className="add-task-title",e.textContent="NEW TASK";const o=document.createElement("div");o.id="addtask-container";const i=document.createElement("input");i.id="name-field",i.type="text",i.placeholder="Task name...";const a=(new Date).toISOString().split("T")[0],d=document.createElement("input");d.value=a,d.id="duedate-field",d.type="date";const r=document.createElement("div");r.id="priority-container";const l=document.createElement("p");l.textContent="PRIORITY";const u=document.createElement("select"),p=document.createElement("option");p.textContent="High";const y=document.createElement("option");y.textContent="Medium";const f=document.createElement("option");f.textContent="Low",u.append(f,y,p),r.append(l,u);const g=document.createElement("select");g.id="proj-select-container";for(let e of t.getList()){const n=document.createElement("option");n.dataset.index=t.getList().indexOf(e),n.textContent=`${e.name}`,g.append(n)}const v=document.createElement("div");v.id="addtask-btn-container";const k=document.createElement("button");k.textContent="SAVE";const C=document.createElement("button");C.textContent="CANCEL",v.append(k,C),k.addEventListener("click",(()=>{const e=s.getAttribute("data-index"),o=g.options[g.selectedIndex].getAttribute("data-index");if(""!=i.value)if("TASKS"==s.textContent)t.getList()[o].add(n(i.value,d.value,u.value)),b(c),E();else{t.getList()[e].add(n(i.value,d.value,u.value)),b(c);for(let n of t.getList()[e].getList())L(n)}i.value="",d.value=a,u.value="Low",x()})),C.addEventListener("click",(()=>{h(),i.value="",d.value=a,u.value="Low",o.style.display="none"})),o.append(e,i,d,r,g,v),m.append(o),o.style.display="none"}(),function(){const e=document.createElement("p");e.className="add-proj-title",e.textContent="NEW PROJECT";const n=document.createElement("div");n.id="addproj-container";const i=document.createElement("input");i.id="projname-field",i.type="text",i.placeholder="Project name...";const a=document.createElement("div");a.id="addproj-btn-container";const d=document.createElement("button");d.textContent="SAVE";const r=document.createElement("button");r.textContent="CANCEL",a.append(d,r),d.addEventListener("click",(()=>{t.add(o(i.value)),b(c),"TASKS"==s.textContent&&E(),"PROJECTS"==s.textContent&&k(),document.querySelector("#addtask-container").style.display="none",n.style.display="none",i.value="",h();const e=document.querySelector("#proj-select-container");b(e);for(let n of t.getList()){const o=document.createElement("option");o.dataset.index=t.getList().indexOf(n),o.textContent=`${n.name}`,e.append(o)}})),r.addEventListener("click",(()=>{h(),i.value="",n.style.display="none"})),n.append(e,i,a),m.append(n),n.style.display="none"}(),r.addEventListener("click",(()=>v(u))),l.addEventListener("click",(()=>v(m))),d.addEventListener("click",(()=>b(c))),d.addEventListener("click",k),y.addEventListener("click",(function(){const e=document.querySelector("#addtask-container"),t=document.querySelector("#name-field"),n=document.querySelector("select"),o=document.querySelector("#duedate-field"),i=(new Date).toISOString().split("T")[0],a=document.querySelector("#proj-select-container");e.style.display="flex",x(),t.focus(),"TASKS"==s.textContent?a.style.display="block":a.style.display="none",t.value="",o.value=i,n.value="Low"})),f.addEventListener("click",(function(){const e=document.querySelector("#addproj-container"),t=document.querySelector("#projname-field");e.style.display="flex",x(),t.focus(),t.value=""})),document.querySelector("div#save-tab").addEventListener("click",(()=>{const e={};for(const n of t.getList()){e[n.name]=[];for(const t of n.getList())e[n.name].push({name:t.name,dueDate:t.dueDate,isFin:t.isFin,priority:t.priority})}const n=JSON.stringify(e,null,2),o=new Blob([n],{type:"application/json"}),i=URL.createObjectURL(o),a=document.createElement("a");a.href=i,a.download="saved-todolist.json",a.click()})),document.querySelector("input#json-file-input").addEventListener("change",(e=>{const i=e.target.files[0];i&&function(e){const i=new FileReader;i.onload=function(e){const i=e.target.result;!function(e){t=o("Tasks");for(const i in e)if(e.hasOwnProperty(i)){t.add(o(i));const a=t.getList().indexOf(t.getList().find((e=>e.name===i)));for(const o of e[i]){const e=n(o.name,o.dueDate,o.priority);t.getList()[a].add(e),"Finished"==o.isFin&&e.toggleComplete()}}document.querySelector("#tasks").click()}(JSON.parse(i))},i.readAsText(e)}(i)}))})();