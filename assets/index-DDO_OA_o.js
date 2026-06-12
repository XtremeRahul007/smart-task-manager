(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`smartTaskManagerDB`,t=1;function n(){return new Promise((n,r)=>{let i=indexedDB.open(e,t);i.onupgradeneeded=e=>{let t=e.target.result;if(t.objectStoreNames.contains(`users`)||t.createObjectStore(`users`,{keyPath:`id`,autoIncrement:!0}).createIndex(`name`,`name`,{unique:!0}),!t.objectStoreNames.contains(`tasks`)){let e=t.createObjectStore(`tasks`,{keyPath:`id`,autoIncrement:!0});e.createIndex(`title`,`title`,{unique:!1}),e.createIndex(`priority`,`priority`,{unique:!1}),e.createIndex(`currentDate`,`currentDate`,{unique:!1}),e.createIndex(`dueDate`,`dueDate`,{unique:!1})}},i.onsuccess=e=>{n(i.result)},i.onerror=e=>{r(i.error)}})}var r=null,i=new Set;function a(){for(let e of i)e(r)}function o(e,t,n,i){r&&r.name!==e&&r.close(),r={name:e,close:t,needOverlay:n,dismissibleOverlay:i},a()}function s(e){r?.name===e&&(r=null,a())}function c(e){return e(r),i.add(e),()=>{i.delete(e)}}function l(){return r}async function ee(e){let t=await n(),r=t.transaction(`users`,`readwrite`),i=r.objectStore(`users`).add(e);return new Promise((e,n)=>{i.onerror=()=>{i.error?.name===`ConstraintError`?(n(`Username already exists`),n(`Try to sign in.`)):n(`Something went wrong`)},r.oncomplete=()=>{t.close(),e(`User added successfully`)},r.onerror=()=>n(`Transaction failed`)})}async function u(e){let t=(await n()).transaction(`users`,`readonly`).objectStore(`users`).index(`name`).get(e.name);return new Promise((n,r)=>{t.onsuccess=()=>{let i=t.result;if(!i)return r(`User not found`);i.password===e.password?n(`Login successfully`):r(`Wrong password`)},t.onerror=()=>r(`DB error`)})}function d(e,t){let n=document.getElementById(`toastContainer`);if(!n)return;let r=3e3,i=document.createElement(`div`);i.className=`toast ${t}`,i.textContent=e,n.appendChild(i);let a=document.createElement(`div`);a.className=`toast-progress`,i.appendChild(a),setTimeout(()=>{i.classList.add(`show`)},10);let o=a.animate([{transform:`ScaleX(1)`},{transform:`ScaleX(0)`}],{duration:r,easing:`linear`});setTimeout(()=>{i.classList.remove(`show`)},r),o.onfinish=()=>{a.remove(),setTimeout(()=>{i.remove()},300)},i.addEventListener(`click`,()=>{i.classList.remove(`show`),setTimeout(()=>{a.remove(),i.remove()},500)})}var f=null;function p(e=null){let t=document.getElementById(`profileMenuIcon`);if(!t)return;let n=y()?.name??e;n&&(t.textContent=n.charAt(0).toUpperCase(),f=n,te())}function te(){let e=document.getElementById(`userProfileName`);!e||!f||(e.textContent=`Hello, ${f}`)}var m=`signup`,h=document.querySelector(`.submitBtn`),g=null;function _(){let e=document.getElementById(`userServiceFormContainer`),t=document.querySelector(`.userServiceHeading`),n=document.querySelector(`.modeSwitchText`),r=document.getElementById(`modeSwitchBtn`),i=document.querySelector(`.displayNameLabel`),a=document.querySelector(`.passwordLabel`);if(!e)return{openForm:()=>{}};let c=()=>{e.style.display=`grid`,requestAnimationFrame(()=>{e.classList.add(`open`)}),o(`userServiceForm`,l,!0,!1)},l=()=>{e.classList.remove(`open`);let t=()=>{e.style.display=`none`,e.removeEventListener(`transitionend`,t)};e.addEventListener(`transitionend`,t),s(`userServiceForm`)};return g=l,r?.addEventListener(`click`,()=>{m===`signup`?(m=`signin`,t.textContent=`Welcome Back`,h.textContent=`Sign in`,n.textContent=`Don't have an account?`,r.textContent=`Sign up`,i.textContent=`Enter your username`,a.textContent=`Enter your password`):(m=`signup`,t.textContent=`Create your local profile`,h.textContent=`Create an account`,n.textContent=`Already have an account?`,r.textContent=`Sign in`,i.textContent=`Choose a username`,a.textContent=`Choose a password`)}),{openForm:c}}function v(e){localStorage.setItem(`currentUser`,JSON.stringify(e))}function y(){let e=localStorage.getItem(`currentUser`);return e?JSON.parse(e):null}function b(){localStorage.removeItem(`currentUser`),location.reload()}function ne(){let e=document.getElementById(`userServiceForm`);e&&e.addEventListener(`submit`,async e=>{e.preventDefault();let t={name:document.getElementById(`displayName`).value,password:document.getElementById(`password`).value};try{let e=``;m===`signup`?(e=await ee(t),d(e,`success`),g?.(),v(t),p(t.name)):(e=await u(t),d(e,`success`),g?.(),v(t),p(t.name))}catch(e){d(e,`error`)}})}function re(e){return new Promise((t,n)=>{let r=indexedDB.open(e);r.onsuccess=()=>{let e=r.result,i=Array.from(e.objectStoreNames);if(i.length===0){e.close(),t();return}let a=e.transaction(i,`readwrite`);a.oncomplete=()=>{e.close(),t()},a.onerror=()=>{e.close(),n(a.error)},a.onabort=()=>{e.close(),n(Error(`Transaction aborted`))};for(let e of i)if(typeof e==`string`&&e.length>0)try{a.objectStore(e).clear()}catch(t){console.warn(`Failed to clear store "${e}":`,t)}},r.onerror=()=>{n(r.error)},r.onblocked=()=>{n(Error(`Database open blocked`))}})}function ie(e){let t=y();t?d(`Welcome Back: ${t.name}`,`info`):(d(`Welcome to Xtreme Task Manager`,`info`),e())}function ae(){document.getElementById(`logoutBth`)?.addEventListener(`click`,()=>{b()})}function oe(){let e=document.getElementById(`toggleVisibility`),t=document.getElementById(`password`);e.addEventListener(`click`,()=>{t.type===`password`?(t.type=`text`,e.classList.add(`icon-invisible`),e.classList.remove(`icon-visible`)):(t.type=`password`,e.classList.add(`icon-visible`),e.classList.remove(`icon-invisible`))})}function se(){document.getElementById(`resetDbBtn`)?.addEventListener(`click`,()=>{re(`smartTaskManagerDB`),b()})}var x=`theme`;function ce(){let e=localStorage.getItem(x);if(e)return C(e);let t=window.matchMedia(`(prefers-color-scheme: dark)`).matches;C(t?`dark`:`light`)}function S(){let e=(ue()||`light`)===`dark`?`light`:`dark`;le(e),C(e),de(e)}function le(e){let t=document.getElementById(`theme-toggle-icon`);t?.classList.toggle(`icon-dark-mode`,e===`dark`),t?.classList.toggle(`icon-light-mode`,e===`light`)}function ue(){return document.documentElement.dataset.theme}function C(e){document.documentElement.dataset.theme=e}function de(e){localStorage.setItem(x,e)}function fe(){document.getElementById(`theme-toggle-btn`)?.addEventListener(`click`,S)}function w(){let e=document.getElementById(`overLay`);c(t=>{t?.needOverlay?e?.classList.add(`active`):e?.classList.remove(`active`),t?.dismissibleOverlay===!1?e.style.zIndex=`900`:e.style.zIndex=`100`}),e?.addEventListener(`click`,()=>{let e=l();e&&e?.dismissibleOverlay&&e.close()})}function T(e){let t=document.getElementById(e);t&&(t.checked=!0)}function E(e,t){let n=document.querySelector(e);return n?n.value:t}async function D({title:e,message:t,confirmText:n=`Confirm`,cancelText:r=`Cancel`}){return new Promise(i=>{let a=document.createElement(`div`);a.className=`confirm-popup`,a.innerHTML=`
            <div class="confirm-popup-content">
                <h2>${e}</h2>
                <p>${t}</p>
                <div class="confirm-popup-actions">
                    <button id="confirmCancelBtn">${r}</button>
                    <button id="confirmAcceptBtn">${n}</button>
                </div>
            </div>`,document.body.appendChild(a);let o=a.querySelector(`#confirmAcceptBtn`),s=a.querySelector(`#confirmCancelBtn`);function c(e){a.classList.add(`fade-out`),setTimeout(()=>{a.remove(),i(e)},300)}function l(e){e.key===`Enter`&&c(!0),e.key===`Escape`&&c(!1)}o?.addEventListener(`click`,()=>c(!0)),s?.addEventListener(`click`,()=>c(!1)),document.addEventListener(`keydown`,l)})}function O(e){let t=e.split(`-`).map(Number);if(t.length!==3)throw Error(`Invalid date format`);let[n,r,i]=t;return new Date(n,r-1,i).getTime()}function k(e){let t=new Date(e);return`${String(t.getDate()).padStart(2,`0`)}.${String(t.getMonth()+1).padStart(2,`0`)}.${t.getFullYear()}`}function A(e){let t=new Date(e),n=String(t.getDate()).padStart(2,`0`),r=String(t.getMonth()+1).padStart(2,`0`);return`${t.getFullYear()}-${r}-${n}`}function j(){let e=document.querySelector(`#taskDueDate`);e.min=`${A(Date.now())}`}function pe(e,t){if(e)return e.length>t?e.slice(0,t)+`...`:e}async function me(e){let t=await n();return new Promise((n,r)=>{let i=t.transaction(`tasks`,`readwrite`).objectStore(`tasks`).add(e);i.onsuccess=()=>{n(),d(`Task added successfully`,`success`)},i.onerror=()=>{r(i.error),d(`Error: ${i.error}`,`error`)}})}async function he(e,t){return new Promise((n,r)=>{let i=e.transaction(t,`readonly`).objectStore(t).getAll();i.onsuccess=()=>n(i.result??[]),i.onerror=()=>r(i.error)})}async function M(e){let t=await n();return new Promise((n,r)=>{let i=t.transaction(`tasks`,`readonly`).objectStore(`tasks`).get(e);i.onsuccess=()=>n(i.result),i.onerror=()=>r(i.error)})}function ge(e){let t=document.querySelector(`.task-list-container`);t.textContent=``;for(let n=0;n<e.length;n++){let r=e[n],i=r.title,a=r.id,o=pe(r.description,200),s=k(r.dueDate),c=r.priority,l=document.createElement(`div`);l.classList.add(`task-card`),l.classList.add(`${c}-priority-container`),l.dataset.id=`${a}`,l.innerHTML=`<div class="task-summary">
                            <article class="task-info-section">
                                <h3 class="task-card-title">${i}</h3>
                                <div class="task-card-description">${o}</div>
                            </article>
                            <button type="button" class="task-card-action-btns inspect-task-btn" data-action="inspect">
                                <div class="icon icon-visible icon-sm"></div>
                            </button>
                        </div>
                        <div class="task-data">
                            <div class="task-meta-container">
                                <div class="task-card-duedate">${s}</div>
                                <div class="task-card-priority ${c}-priority">${c}</div>
                            </div>
                            <div class="edit-delete-btn-container">
                                <button type="button" class="task-card-action-btns edit-task-btn" data-action="edit">
                                    <div class="icon icon-edit icon-sm"></div>
                                </button>
                                <button type="button" class="task-card-action-btns delete-task-btn" data-action="delete">
                                    <div class="icon icon-recycle icon-sm"></div>
                                </button>
                            </div>
                        </div>`,t.appendChild(l)}}function N(){let e=document.querySelector(`.task-list-container`);e.innerHTML=`<div class ="empty-task">No task available</div>`}async function P(e){let t=await n();return new Promise((n,r)=>{let i=t.transaction(`tasks`,`readwrite`).objectStore(`tasks`).delete(e);i.onsuccess=()=>{n(),d(`Task deleted successfully`,`success`)},i.onerror=()=>r(i.error)})}var F,I={search:``,sortBy:`currentDate`,order:`desc`};function L(e){Object.assign(I,e),localStorage.setItem(`filterState`,JSON.stringify(I))}function R(e){let t=localStorage.getItem(e);try{return t?JSON.parse(t):I}catch(e){return console.warn(e),I}}function _e(e){let t=R(`filterState`),n=ye(ve(e,t.search),t.sortBy,t.order);F=n,ge(n)}function ve(e,t){if(t.trim()===``)return e;let n=[],r=t.trim().toLowerCase();for(let t=0;t<e.length;t++){let i=e[t];i&&i.title.toLowerCase().includes(r)&&n.push(i)}return n}function ye(e,t,n){let r={low:1,medium:2,high:3},i=structuredClone(e);for(let e=0;e<i.length;e++){let a=!1;for(let o=0;o<i.length-e-1;o++){let e=i[o][t],s=i[o+1][t];t===`priority`&&(e=r[e],s=r[s]),(e<s&&n===`desc`||e>s&&n===`asc`)&&([i[o],i[o+1]]=[i[o+1],i[o]],a=!0)}if(!a)break}return i}function z(e,t,n){let r=n,i=document.getElementById(e),a=document.getElementById(t);!i||!a||(a.textContent=`${i.value.length} / ${r}`,i.addEventListener(`input`,()=>{let e=i.value.length;a.textContent=`${e} / ${r}`,e===r?a.style.color=`red`:a.style.color=``}))}var B;async function be(e){let t=document.getElementById(`editTaskView`),n=await M(e);xe(n),B=n.currentDate,t?.addEventListener(`submit`,async t=>{t.preventDefault();let n=Ce(e);await D({title:`Save changes?`,message:`Are you sure you want to save the changes you made?`,confirmText:`Save`,cancelText:`Cancel`})&&(Se(n),Y(`tasks`),T(`taskList`))}),t?.addEventListener(`reset`,async e=>{e.preventDefault(),await D({title:`Unsaved Changes`,message:`Your unsaved changes will be lost if you leave this page.`,confirmText:`Leave anyway`,cancelText:`Stay`})&&(Y(`tasks`),T(`taskList`))}),z(`descriptionTextArea`,`descTextCounter`,5e3),z(`taskTitle`,`titleTextCounter`,200)}function xe(e){document.querySelector(`#taskTitle`).value=e.title,document.querySelector(`#taskDueDate`).value=A(e.dueDate),document.querySelector(`#descriptionTextArea`).value=e.description,document.querySelectorAll(`input[name="radioPriority"]`).forEach(t=>{t.checked=t.value===e.priority})}async function Se(e){let t=await n();return new Promise((n,r)=>{let i=t.transaction(`tasks`,`readwrite`).objectStore(`tasks`).put(e);i.onsuccess=()=>{n(i.result),d(`Task edited successfully`,`success`)},i.onerror=()=>{r(i.error)}})}function Ce(e){return{id:e,title:document.querySelector(`#taskTitle`).value,description:document.querySelector(`#descriptionTextArea`).value,dueDate:O(document.querySelector(`#taskDueDate`).value),currentDate:B,priority:E(`input[name="radioPriority"]:checked`,`low`)}}async function we(e){let t=document.querySelector(`.inspect-task-view`),n=await M(e),r=n.id,i=n.title,a=n.description,o=k(n.dueDate),s=k(n.currentDate),c=n.priority;!t||!r||(t.innerHTML=`<div class="inspect-header">
                                <div class="inspect-header-meta">
                                    <h3 class="inspect-header-text">Title:</h3>
                                    <div class="inspect-create-date">Created at: ${s}</div>
                                </div>
                                <div class="inspect-title-content" id="inspectTitle">${i}</div>
                            </div>
                            <div class="inspect-body">
                                <div class="inspect-body-meta">
                                    <div class="inspect-desc-text">Description:</div>
                                    <div class="inspect-dueDate">Due date: ${o}</div>
                                </div>
                                <div class="inspect-description-content" id="inspectDescription">${a}</div>
                            </div>
                            <div class="inspect-footer">
                                <div class="inspect-footer-meta">
                                    <div class="inspect-task-priority">Priority:  ${c}</div>
                                    <div class="inspect-action-btn-container">
                                        <button type="button" class="inspect-action-btns" data-action="back">
                                            <div class="icon icon-back icon-sm"></div>
                                        </button>
                                        <button type="button" class="inspect-action-btns" data-action="delete">
                                            <div class="icon icon-recycle icon-sm"></div>
                                        </button>
                                        <button type="button" class="inspect-action-btns" data-action="edit">
                                            <div class="icon icon-edit icon-sm"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>`,document.querySelector(`.inspect-action-btn-container`)?.addEventListener(`click`,async e=>{let n=e.target.closest(`button`);if(n)switch(n.dataset.action){case`back`:t.innerHTML=``,Y(`tasks`);break;case`delete`:await W(r),Y(`tasks`);break;case`edit`:await G(r);break}}))}var V;async function Te(){let e=document.getElementById(`createTaskBtn`),t=document.getElementById(`editTaskBtn`);e?.addEventListener(`click`,()=>{Y(`create`),T(`createTask`)}),t?.addEventListener(`click`,()=>{Y(`edit`)}),await H()}async function H(){let e=await he(await n(),`tasks`);if(e.length===0?N():_e(e),F)F.length===0&&N();else return}function U(){document.querySelector(`.task-list-container`)?.addEventListener(`click`,async e=>{let t=e.target,n=t.closest(`.task-card`);if(!n)return null;V=n;let r=Number(n.dataset.id),i=t.closest(`button`);if(i)switch(i.dataset.action){case`inspect`:Ee(r);break;case`delete`:await W(r);break;case`edit`:G(r)}})}async function W(e){await D({title:`Delete Task`,message:`This task will be permanently deleted.`,confirmText:`Delete`})&&(await P(e),V&&V?.remove())}async function Ee(e){Y(`inspect`),await we(e)}async function G(e){Y(`edit`),await be(e)}async function De(){let e=document.querySelectorAll(`[name="tasksFilter"]`),t=document.querySelectorAll(`[name="orderButton"]`);e.forEach(e=>{e.addEventListener(`change`,async e=>{let t=e.target.value;Ae(t),L({sortBy:t}),await H()})}),t.forEach(e=>{e.addEventListener(`change`,async e=>{let t=e.target.value;L({order:t}),await H()})})}function Oe(){let e={currentDate:`sortByCurrentDate`,dueDate:`sortByDueDate`,priority:`sortByPriority`,title:`sortByTitle`},t={asc:`AscBtn`,desc:`DescBtn`},n=document.getElementById(`searchBar`),r=R(`filterState`);n.value=r.search,T(e[r.sortBy]),T(t[r.order])}function ke(){let e=document.querySelector(`#filterTaskBtn`),t=document.querySelector(`.filter-menu-container`);if(!e||!t)return;let n=!1,r=()=>{t.classList.add(`open`),o(`filterMenu`,i,!0,!0),n=!0},i=()=>{t.classList.remove(`open`),s(`filterMenu`),n=!1};e.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),n?i():r()}),De()}function Ae(e){let t={asc:`Oldest First`,desc:`Latest First`};switch(e){case`currentDate`:t={asc:`Oldest First`,desc:`Latest First`};break;case`dueDate`:t={asc:`Oldest First`,desc:`Latest First`};break;case`priority`:t={asc:`Low → High`,desc:`High → Low`};break;case`title`:t={asc:`A → Z`,desc:`Z → A`};break}let n=document.getElementById(`ascBtn`),r=document.getElementById(`descBtn`);n.textContent=`${t.asc}`,r.textContent=`${t.desc}`}async function K(){let e=document.getElementById(`taskTitle`),t=document.getElementById(`taskDueDate`),n=document.getElementById(`descriptionTextArea`),r=document.getElementById(`createTaskView`);r?.addEventListener(`submit`,async r=>{r.preventDefault();let i={title:e.value.trim(),description:n.value.trim(),dueDate:O(t.value),currentDate:Date.now(),priority:E(`input[name="radioPriority"]:checked`,`low`)};await me(i),console.log(`Actual value got fetched: ${i.dueDate}`),Y(`tasks`),T(`taskList`)}),r?.addEventListener(`reset`,()=>{Y(`tasks`),T(`taskList`)}),z(`descriptionTextArea`,`descTextCounter`,5e3),z(`taskTitle`,`titleTextCounter`,200)}function q(){let e=document.getElementById(`createTaskTrigger`),t=document.getElementById(`taskListTrigger`);e?.addEventListener(`click`,()=>{Y(`create`),T(`createTask`)}),t?.addEventListener(`click`,()=>{Y(`tasks`),T(`taskList`)})}function je(){return`<form class="create-task-view" id="createTaskView">
                <div class="task-heading-container">
                <h2 class="task-heading">Create New Task</h2>
            </div>
            <div class="task-entry-container">
                <fieldset class="task-entry title-entry">
                    <legend>Title</legend>
                    <input type="text" id="taskTitle" placeholder="title..." maxlength="200" required>
                    <div id="titleTextCounter" class="title-text-counter"></div>
                </fieldset>
                <fieldset class="task-entry">
                    <legend>Due Date</legend>
                    <input type="date" id="taskDueDate" required>
                </fieldset>
                <fieldset class="task-entry input-radio">
                    <legend>Task Priority</legend>
                    <div class="radio-btn-container">
                        <label for="lowPriority">Low</label>
                        <input type="radio" id="lowPriority" name="radioPriority" value="low" checked>
                    </div>
                    <div class="radio-btn-container">
                        <label for="mediumPriority">Medium</label>
                        <input type="radio" id="mediumPriority" name="radioPriority" value="medium">
                    </div>
                    <div class="radio-btn-container">
                        <label for="highPriority">High</label>
                        <input type="radio" id="highPriority" name="radioPriority" value="high">
                    </div>
                </fieldset>
            </div>
            <div class="task-description-container">
                <fieldset class="task-description">
                    <legend>Description</legend>
                    <textarea class="description-textarea" name="textarea" id="descriptionTextArea" rows="any"
                        maxlength="5000" required></textarea>
                </fieldset>
                <div id="descTextCounter" class="desc-text-counter"></div>
            </div>
            <div class="task-action-btn-container">
                <button type="reset" class="action-btn">Cancel</button>
                <button type="submit" class="action-btn">Save Task</button>
            </div>
        </form>`}function Me(){return`<form class="edit-task-view" id="editTaskView">
                <div class="task-heading-container">
                <h2 class="task-heading">Edit Task</h2>
            </div>
            <div class="task-entry-container">
                <fieldset class="task-entry title-entry">
                    <legend>Title</legend>
                    <input type="text" id="taskTitle" placeholder="title..." maxlength="200" required>
                    <div id="titleTextCounter" class="title-text-counter"></div>
                </fieldset>
                <fieldset class="task-entry">
                    <legend>Due Date</legend>
                    <input type="date" id="taskDueDate" required>
                </fieldset>
                <fieldset class="task-entry input-radio">
                    <legend>Task Priority</legend>
                    <div class="radio-btn-container">
                        <label for="lowPriority">Low</label>
                        <input type="radio" id="lowPriority" name="radioPriority" value="low" checked>
                    </div>
                    <div class="radio-btn-container">
                        <label for="mediumPriority">Medium</label>
                        <input type="radio" id="mediumPriority" name="radioPriority" value="medium">
                    </div>
                    <div class="radio-btn-container">
                        <label for="highPriority">High</label>
                        <input type="radio" id="highPriority" name="radioPriority" value="high">
                    </div>
                </fieldset>
            </div>
            <div class="task-description-container">
                <fieldset class="task-description">
                    <legend>Description</legend>
                    <textarea class="description-textarea" name="textarea" id="descriptionTextArea" rows="any"
                        maxlength="5000" required></textarea>
                </fieldset>
                <div id="descTextCounter" class="desc-text-counter"></div>
            </div>
            <div class="task-action-btn-container">
                <button type="reset" class="action-btn">Cancel Changes</button>
                <button type="submit" class="action-btn">Confirm Changes</button>
            </div>
        </form>`}function Ne(){return`<section class="task-list-view" id="taskListView">
            <div class="task-list-header">
                <h2>Task List</h2>
                <div>
                    <button class="task-list-create-task-btn" id="createTaskBtn" type="button">
                        <div class="icon icon-plus icon-smd"></div>
                    </button>
                    <button class="task-list-filter-task-btn" id="filterTaskBtn" type="button">
                        <div class="icon icon-filter icon-smd"></div>
                    </button>
                    <div class="filter-menu-container">
                        <ul class="filter-sub-menu">
                            <li>
                                <label class="orderButton" for="AscBtn">
                                    <input type="radio" name="orderButton" id="AscBtn" value="asc">
                                    <div id="ascBtn">asc</div>
                                </label>                  
                            </li>
                            <li>
                                <label class="orderButton" for="DescBtn">
                                    <input type="radio" name="orderButton" id="DescBtn" value="desc">
                                    <div id="descBtn">desc</div>
                                </label>
                            </li>
                        </ul>
                        <ul class="filter-menu">
                            <li>
                                <label class="filterButton" for="sortByCurrentDate">
                                    <input type="radio" name="tasksFilter" id="sortByCurrentDate" value="currentDate">
                                    <div>Created</div>
                                </label>
                            </li>
                            <li>
                                <label class="filterButton" for="sortByDueDate">
                                    <input type="radio" name="tasksFilter" id="sortByDueDate" value="dueDate">
                                    <div>Due Date</div>
                                </label>
                            </li>
                            <li>
                                <label class="filterButton" for="sortByPriority">
                                    <input type="radio" name="tasksFilter" id="sortByPriority" value="priority">
                                    <div>Priority</div>
                                </label>
                            </li>
                            <li>
                                <label class="filterButton" for="sortByTitle">
                                    <input type="radio" name="tasksFilter" id="sortByTitle" value="title">
                                    <div>Title</div>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="task-list-container"></ul>
        </section>`}function Pe(){return`<section class="idle-task-view">
            <div class="create-task-trigger" id="createTaskTrigger">
                <div class="create-task-icon icon icon-plus icon-lg"></div>
            </div>
            <div class="task-list-trigger-container">
                <div class="task-list-text">Create a new task. Or,</div>
                <button type="button" class="task-list-trigger" id="taskListTrigger">Visit Task List</button>
            </div>
        </section>`}function Fe(){return`<section class="inspect-task-view">
        </section>`}function Ie(){let e=document.getElementById(`appTaskContainer`);if(e)switch(J.current){case`create`:e.innerHTML=je(),K(),j();break;case`edit`:e.innerHTML=Me(),j();break;case`tasks`:e.innerHTML=Ne(),Te(),U(),ke(),Oe();break;case`idle`:e.innerHTML=Pe(),q();break;case`inspect`:e.innerHTML=Fe();break}}var J={current:null,previous:null};function Y(e){J.current!==e&&(J.previous=J.current,J.current=e,Ie())}function X(){document.addEventListener(`DOMContentLoaded`,()=>{Y(`idle`),T(`idleView`)})}function Le(){let e=document.getElementById(`profileMenuIcon`),t=document.getElementById(`profileMenu`);if(!e||!t)return;let n=!1,r=()=>{t.classList.add(`open`),o(`popup`,i,!0,!0),n=!0},i=()=>{t.classList.remove(`open`),s(`popup`),n=!1};e.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),n?i():r()})}var Z=null;function Re(){let e=document.getElementById(`asideMenuBtn`),t=document.getElementById(`sideBar`);if(!e||!t)return;let n=!1,r=()=>{t.classList.add(`open`),e.classList.add(`no-bg`),o(`sideBar`,i,!0,!0),n=!0},i=()=>{t.classList.remove(`open`),e.classList.remove(`no-bg`),s(`sideBar`),n=!1};Z=i,e.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),n?i():r()})}function ze(){document.querySelectorAll(`[name="viewRender"]`).forEach(e=>{e.addEventListener(`change`,e=>{let t=e.target.value;Y(t),Z?.()})})}function Be(){let e=document.getElementById(`searchBar`),t=document.getElementById(`searchBth`),n=document.querySelector(`.search-container`),r;t.addEventListener(`click`,()=>{e.focus()}),n.addEventListener(`click`,()=>{J.current!==`tasks`&&(Y(`tasks`),T(`taskList`))}),e.addEventListener(`input`,e=>{let t=e.target.value;clearTimeout(r),r=window.setTimeout(()=>{L({search:t}),H()},300)})}function Ve(){let e=document.getElementById(`theme-toggle-btn`),t=document.getElementById(`theme-toggle-icon`);e&&(e.addEventListener(`click`,()=>{t.classList.remove(`animate-once`),t.offsetWidth,t.classList.add(`animate-once`)}),t.addEventListener(`animationend`,()=>{t.classList.remove(`animate-once`)}))}function He(){let e=document.querySelector(`.loader-container`);e?.classList.add(`fade-out`),setTimeout(()=>e?.remove(),300)}var Ue=[n,ne],We=[w,oe,ce,fe,ae,se],Ge=[ze,K,q],Ke=[Le,Re,Be,p,Ve];async function Q(e,t){for(let n of e)try{await n(),console.log(`[${t}] ${n.name} initialized`)}catch(e){console.warn(`[${t}] ${n.name} failded, ${e}`)}}async function $(){let{openForm:e}=_();await Q(Ue,`CRITICAL`),ie(e),await Q(We,`SEMI`),await Q(Ge,`RENDER`),Ke.forEach(e=>{try{e(),console.log(`[UI] ${e.name} initialized`)}catch{console.warn(`[UI] ${e.name} failded`)}}),He()}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,()=>{$(),X()}):($(),X());