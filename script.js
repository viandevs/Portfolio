const typingElement = document.getElementById("typing");

const words = [
    "Video Editor",
    "Graphic Designer",

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingElement.textContent =
        currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typingElement.textContent =
        currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }


    setTimeout(typeEffect,deleting ? 60 : 120);

}


typeEffect();



const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }


});



const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");


window.addEventListener("scroll",()=>{


    let current = "";


    sections.forEach(section=>{


        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;


        if(
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
        ){

            current = section.getAttribute("id");

        }


    });


    navLinks.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }


    });


});



const animatedElements = document.querySelectorAll(
    ".service-box, .project, .tool, .quality, .about-container, .contact-container"
);


animatedElements.forEach(element=>{

    element.classList.add("hidden");

});



const observer = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},

{
    threshold:0.15
}

);



animatedElements.forEach(element=>{

    observer.observe(element);

});



const links = document.querySelectorAll(
    'a[href^="#"]'
);


links.forEach(link=>{


    link.addEventListener("click",function(e){


        const target =
        document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});



const form = document.querySelector("form");


if(form){


    form.addEventListener("submit",(e)=>{


        e.preventDefault();


        alert(
            "Thank you for your message! I will get back to you soon."
        );


        form.reset();


    });


}



const images = document.querySelectorAll("img");


images.forEach(image=>{


    image.addEventListener("load",()=>{


        image.style.opacity="1";


    });


});
