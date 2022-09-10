'use strict';

//build my first UI component (model window)
/**********ONE MODAL FOR ALL BUTTONS!! */

const ele1 = document.querySelectorAll('.show-modal'); //NODE LIST -3buttons- work as it was an array

const ele2 = document.querySelector('.modal');

const ele3 = document.querySelector('.close-modal');
const ele4 = document.querySelector('.overlay');



const openModal = function() {
    ele2.classList.remove('hidden');
    //بغبش الشاشة حول الويندو
    ele4.classList.remove('hidden');

    //console.log('btn clicked');



    /* ele2.style.display = 'block';*/ //make it visible , same ass in css:  display: block;     عكسها            display:none;



}

for (let i = 0; i < ele1.length; i++)
    ele1[i].addEventListener('click', openModal);

/*

Instead of using same code , call a function!!!


ele3.addEventListener('click', function() {

    ele2.classList.add('hidden');
    ele4.classList.add('hidden');



});
//ele4 is overlay

ele4.addEventListener('click', function() {
    ele2.classList.add('hidden');
    ele4.classList.add('hidden');


});*/


const closeModal = function() {
    ele2.classList.add('hidden');
    ele4.classList.add('hidden');


}


ele3.addEventListener('click', closeModal); //not calling (not :  closeModal())

ele4.addEventListener('click', closeModal);


//Esc -listen to keyboard event/global event/

document.addEventListener('keydown', function(e) { //e is object, give it key property and make it equal "esc, or enter , or shift, or any ...."


    //this function will be execuited when pressing any key in keyboard, so we needed the bellow lines ..>using event object


    //console.log('A key pressed');//before enter e object as argument


    //console.log(e);// after using object, this line will give details about each key 

    if (e.key === 'Escape' && !ele2.classList.contains('hidden')) {
        //window open and i want to close it

        closeModal();


    }

}); //keydown,keyup,keypress