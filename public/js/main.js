let orangePlant = null;
let purplePlant = null;
let bubbles = null;
let fish = null;
const facebookLink = document.querySelector('.js-facebook-link');
const instagramLink = document.querySelector('.js-instagram-link');
const emailLink = document.querySelector('.js-email-link');
const ml127Link = document.querySelector('.js-127ml-link');
const i42Link = document.querySelector('.js-42i-link');

function moveFloatElsDesktop( e ) {
    orangePlant = document.querySelector('.c-float-els__desktop .c-orange-plant');
    purplePlant = document.querySelector('.c-float-els__desktop .c-purple-plant');
    bubbles = document.querySelector('.c-float-els__desktop .c-bubbles');
    fish = document.querySelector('.c-float-els__desktop .c-fish');

    const orangePlantH = 15 / window.innerHeight;
    const orangePlantW = 15 / window.innerWidth;
    const purplePlantH = 10 / window.innerHeight;
    const purplePlantW = 10 / window.innerWidth;
    const bubblesDeslocH = 30 / window.innerHeight;
    const bubblesDeslocW = 30 / window.innerWidth;
    const fishDeslocH = 10 / window.innerHeight;
    const fishDeslocW = 10 / window.innerWidth;


    orangePlant.style.bottom = Math.round(orangePlantH * e.y * -1 - 10) + "px";
    orangePlant.style.right = Math.round(orangePlantW * e.x * -1 - 10) + "px";
    purplePlant.style.bottom = Math.round(purplePlantH * e.y * +1 -20) + "px";
    purplePlant.style.right = Math.round(purplePlantW * e.x * +1 -20) + "px";
    bubbles.style.bottom = Math.round(bubblesDeslocH * e.y * -1) + "px";
    bubbles.style.right = Math.round(bubblesDeslocW * e.x * -1 + 100) + "px";
    fish.style.top = Math.round(fishDeslocH * e.y * -1 + 380) + "px";
    fish.style.right = Math.round(fishDeslocW * e.x * -1 + 250) + "px";
}



function moveFloatElsMobile(e) {
    orangePlant = document.querySelector('.c-float-els__mobile .c-orange-plant');
    purplePlant = document.querySelector('.c-float-els__mobile .c-purple-plant');
    bubbles = document.querySelector('.c-float-els__mobile .c-bubbles');
    fish = document.querySelector('.c-float-els__mobile .c-fish');

    const orangePlantH = 60 / window.innerHeight;
    const orangePlantW = 60 / window.innerWidth;
    const purplePlantH = 60 / window.innerHeight;
    const purplePlantW = 25 / window.innerWidth;
    const bubblesDeslocH = 90 / window.innerHeight;
    const bubblesDeslocW = 90 / window.innerWidth;
    const fishDeslocH = 200 / window.innerHeight;
    const fishDeslocW = 150 / window.innerWidth;
    const bodyDesloc = 120 / window.innerHeight;


    orangePlant.style.bottom = Math.round(orangePlantH * e.beta * +1 - 10) + "px";
    orangePlant.style.right = Math.round(orangePlantW * e.gamma * +1 - 10) + "px";
    purplePlant.style.bottom = Math.round(purplePlantH * e.beta * -1 - 10) + "px";
    purplePlant.style.right = Math.round(purplePlantW * e.gamma * -1 - 44) + "px";
    bubbles.style.bottom = Math.round(bubblesDeslocH * e.beta * -1) + "px";
    bubbles.style.right = Math.round(bubblesDeslocW * e.gamma * +1 + 50) + "px";
    fish.style.top = Math.round(fishDeslocH * e.beta * +1 + 100) + "px";
    fish.style.right = Math.round(fishDeslocW * e.gamma * +1 + 27) + "px";

    const bodyDeslocX = Math.round(bodyDesloc * e.beta * -1 - 10) + "px";
    const bodyDeslocY = Math.round(bodyDesloc * e.gamma * -1 - 20) + "px";
    const bodyDeslocTotal = bodyDeslocY + ' ' + bodyDeslocX;
    document.body.style.backgroundPosition =  bodyDeslocTotal;

    console.log(document.body.style.backgroundPosition);

    console.log(purplePlant.style.bottom);
    console.log(purplePlant.style.right);
}

if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", function (e) {
            // tilt([event.beta, event.gamma]);
            console.log(e.beta, e.gamma);
            moveFloatElsMobile(e);
        }, true);
    }
} else {
   document.onmousemove = moveFloatElsDesktop;
}

function handleOutboundLinkClicksFacebook(event) {
  ga('send', 'event', 'Link', 'click', 'Site levante, click no link do facebook');
}

facebookLink.addEventListener("click", handleOutboundLinkClicksFacebook);

function handleOutboundLinkClicksInstagram(event) {
  ga('send', 'event', 'Link', 'click', 'Site levante, click no link do instagram');
}

instagramLink.addEventListener("click", handleOutboundLinkClicksInstagram);

function handleOutboundLinkClicksEmail(event) {
  ga('send', 'event', 'Link', 'click', 'Site levante, click no link de email');
}

emailLink.addEventListener("click", handleOutboundLinkClicksEmail);

function handleOutboundLinkClicks127ml(event) {
  ga('send', 'event', 'Link', 'click', 'Site levante, click no link da 127ml');
}

ml127Link.addEventListener("click", handleOutboundLinkClicks127ml);

function handleOutboundLinkClicks42i(event) {
  ga('send', 'event', 'Link', 'click', 'Site levante, click no link da 42i');
}

i42Link.addEventListener("click", handleOutboundLinkClicks42i);
