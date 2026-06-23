const content = document.getElementById("content");

// Stars
for(let i = 0; i < 120; i++){

    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay = Math.random() * 3 + "s";

    document.body.appendChild(star);
}

const slides = [

{
html:`
<h1>Hey Yash ❤️</h1>

<p>
Today is not just another day... ✨

Today is the day someone very special was born 🎂❤️
</p>
`,
duration:4000
},

{
html:`
<img src="photo1.jpeg">

<p>
A smile that can brighten even my toughest days ❤️🥹
</p>
`,
duration:5000
},

{
html:`
<img src="photo2.jpeg">

<p>
One of those moments I wish I could relive again and again ❤️✨
</p>
`,
duration:5000
},

{
html:`
<video autoplay muted>
<source src="first-meeting.mp4" type="video/mp4">
</video>

<p>
Every beautiful story starts somewhere and I'm glad ours started here ❤️🥹
</p>
`,
duration:5000
},

{
html:`
<img src="photo33.jpeg">

<p>
Looking back at this still makes me smile like it happened yesterday 💖
</p>
`,
duration:5000
},

{
html:`
<img src="photo3.jpeg">

<p>
Some memories fade with time but this one never will ❤️
</p>
`,
duration:5000
},

{
html:`
<p>
Some people become special without even trying ❤️

Thank you for the laughter, memories, support and all the little moments that mean more than you know 🥹✨

Today I just want you to know how much happiness you've brought into my life ❤️
</p>
`,
duration:7000
},

{
html:`
<video autoplay controls>
<source src="bdaywish.mp4" type="video/mp4">
</video>

<p>
A little birthday message for you ❤️🎂
</p>
`,
duration:50000
},

{
html:`
<h1>Happy Birthday Yash ❤️🎂</h1>

<p>


And just like that… we’ve reached the end. 😌✨

Thank you for watching this little surprise till the very end.

I hope it made you smile, laugh, or at least roll your eyes and say “pagal hai ye ladki.” 🤭❤️


— Anita ❤️
</p>
`,
duration:999999
}

];

let current = 0;

function typeText(element, text, speed = 150){

    element.innerHTML = "";

    const words = text.split(" ");

    let i = 0;

    const timer = setInterval(() => {

        if(i < words.length){

            element.innerHTML += words[i] + " ";
            i++;

        }else{

            clearInterval(timer);
        }

    }, speed);
}

function showSlide(){

    if(current >= slides.length) return;

    content.style.opacity = "0";

    setTimeout(() => {

        content.innerHTML = slides[current].html;

        content.style.opacity = "1";

        const paragraph = content.querySelector("p");

        if(paragraph){

            const text = paragraph.innerText;

            typeText(paragraph, text);
        }

       const audio = document.getElementById("audio1");

if(audio){

    if(current === 7){   // Birthday video slide
        audio.volume = 0.18;
    }else{
        audio.volume = 0.9;
    }

}

const duration = slides[current].duration;

current++;

if(current < slides.length){

    setTimeout(showSlide, duration);
}
        

    }, 300);
}

// Start slideshow automatically
setTimeout(showSlide, 1500);

// Background music
window.addEventListener("load", () => {

    const audio = document.getElementById("audio1");

    if(audio){

        audio.volume = 0.7;

        audio.play().catch(error => {

            console.log("Autoplay blocked:", error);

        });
    }

});
// Plays the music automatically as soon as the user taps anywhere on the screen
document.addEventListener('click', function() {
    var audio = document.getElementById("audio1");
    if (audio) {
        audio.play().catch(function(error) {
            console.log("Audio play blocked: ", error);
        });
    }
}, { once: true }); // '{ once: true }' ensures this only triggers on the first click