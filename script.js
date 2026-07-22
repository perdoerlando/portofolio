const text = [
    "Digital Business Student",
    "Web Developer",
    "UI/UX Designer",
    "Data Science Enthusiast"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect(){

    const typing = document.getElementById("typing");

    if(!typing) return;

    if(!isDeleting){

        currentText = text[index].substring(0,charIndex++);
        typing.textContent = currentText;

        if(charIndex > text[index].length){

            isDeleting = true;

            setTimeout(typeEffect,1000);

            return;
        }

    }else{

        currentText = text[index].substring(0,charIndex--);

        typing.textContent = currentText;

        if(charIndex < 0){

            isDeleting = false;

            index++;

            if(index == text.length){

                index = 0;

            }

        }

    }

    setTimeout(typeEffect,isDeleting ? 60 : 120);

}

typeEffect();
AOS.init({

    duration:1000,

    once:true,

});