!function(){const e=document.querySelector(".form"),t=document.querySelector(".name-input"),a=document.querySelector(".father-input"),n=document.querySelector(".sername-input"),l=document.querySelector(".phone-input"),u=document.querySelector(".message-input"),o=/[<>{}]/;searchForm.addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector(".search-in-career");if(!t.value||t.value.match(o))return searchForm.style.border="1px solid rgba(255, 0, 0, 1)",void setTimeout((()=>{searchForm.style.border="",t.value=""}),1e3);fetch(location.replace(`http://127.0.0.1:8000/?search=${t.value}`)).then((e=>console.log(e))).catch((e=>console.log(e))),t.value=""})),e.addEventListener("submit",(e=>{e.preventDefault();let r=(()=>{let e=[];return(!t.value||t.value.length<3||!isNaN(t.value)||t.value.match(o))&&e.push(t),(!a.value||a.value.length<3||!isNaN(a.value)||a.value.match(o))&&e.push(a),(!n.value||n.value.length<3||!isNaN(n.value)||n.value.match(o))&&e.push(n),(!l.value||l.value<9||isNaN(l.value)||l.value.match(o))&&e.push(l),(!u.value||u.value.length<10||!isNaN(u.value)||u.value.match(o))&&e.push(u),e.length>0?(e.forEach((e=>{e.style.backgroundColor="rgba(255, 0, 0, 0.2)",e.nextElementSibling.style.visibility="visible",e.value=""})),void(document.querySelector(".main-warning").style.visibility="visible")):{nameInput:t,fatherInput:a,sernameInput:n,phoneInput:l,messageInput:u}})();if(void 0!==r){let e=document.formCareer.csrfmiddlewaretoken.value;fetch("/career",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-CSRFToken":e},body:JSON.stringify({name:r.nameInput.value,patronymic:r.fatherInput.value,surname:r.sernameInput.value,phone:r.phoneInput.value,careerObjective:r.messageInput.value})}).then((e=>{if(e.ok){for(let e=0;e<formCareer.elements.length;e++)formCareer.elements[e].value="";!function(e){{const e='\n            <div class="background" style="width: 100%; height: 100%; position: fixed; top: 0; left: 0; background-color: #000000; opacity: 0.5;"></div>\n            <div class="wrapper" style="width: 100%; height: 100%; position: fixed; top: 0; left: 0; overflow: auto;">\n                <div class="letter" style="display: flex; align-items: center; justify-content: space-between; width: 400px; height: 100px; padding: 20px; position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto; background: #f0f0f0;">\n                    <p class="text">Спасибо, мы с вами свяжемся</p>\n                    <img src="static/images/unnamed.png" alt="" class="class" style="width: 50px; height: 50px;">\n                </div>\n            </div>\n        ';document.body.insertAdjacentHTML("beforeend",e),setTimeout((()=>{document.querySelector(".background").remove(),document.querySelector(".wrapper").remove()}),2e3)}}();for(let e in r)e.value=""}}))}}))}();