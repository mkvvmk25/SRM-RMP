'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

//const show_modal = document.querySelector('.show-modal');
/*
the above will select only the first element not all,
So, we have 
*/
const show_modal = document.querySelectorAll('.show-modal');
/*
    it store like a node list
    NodeList(3) [button.show-modal, button.show-modal, button.show-modal]
    for(let i = 0;i < show_modal.length; i++)
    {
        let y = show_modal[i].textContent;
        console.log(y);
    }
    */
function showBtnFun(event_obj) {
  console.log(event_obj);
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
}

for (let i = 0; i < show_modal.length; i++) {
    show_modal[i].addEventListener('click', function(e)
    {
        console.log(e);
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
    });
    /*
        add event listners for every button
    */
}

function close_modal_fun()
{
    console.log('clicked');
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
}
const close_modal = document.querySelector('.close-modal');
close_modal.addEventListener('click', close_modal_fun );
overlay.addEventListener("click", close_modal_fun);
/*
 * overlay is the blur area 
 */


document.addEventListener("keydown", function(keyboardobj)
{
    console.log("clickde");
    console.log(keyboardobj.key);
    if(keyboardobj.key == "Escape" && modal.classList.contains("hidden") == false)
    {
        console.log("asd");
        close_modal_fun();
    }
})
