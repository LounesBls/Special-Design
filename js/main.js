// * Start Header
const nav = document.querySelector('nav');
const berger = document.querySelector('.berger-icon');
const hideSpan = document.querySelector('#hide');
const ulLinks = document.querySelector('.links');
const moreClick = document.querySelector('.more');
const spanOne = document.getElementById('spanOne');
const spanTwo = document.getElementById('spanTwo');
const moreLiks = document.getElementById('more-links');


// Add active Classes To Open.
berger.addEventListener('click', () => {
    addActiveClass();
})

// add active class to berger children elements, And Ul.
function addActiveClass() {
    // Add Active class To ul Container.
    ulLinks.classList.toggle('active');

    // Add Active class To Berger Children Elements.
    let children = berger.children;
    for (let i = 0; i < children.length; i++) {
            children[i].classList.toggle('active')
    };
};

// Remove active class to berger children elements, And Ul.
function removeActiveClass() {
    // Remove Active class To ul Container.
    ulLinks.classList.remove('active');

    // Add Active class To Berger Children Elements.
    let children = berger.children;
    for (let i = 0; i < children.length; i++) {
            children[i].classList.remove('active')
    };
}

// Remove active Class To Close.
document.querySelectorAll('li a').forEach((a) => a.addEventListener('click', (e) => {
    // Remove berger Active Classes.
    removeActiveClass();

    // Remove active-clr Class From All Anchors.
    // * e.target.closest('ul') === e.target.parentElement.parentElement.
    e.target.closest('.links').querySelectorAll('.active-clr').forEach((anchor) => {
        anchor.classList.remove('active-clr');
    });

    // Add active-clr Class To Targeting Anchor.
    e.target.classList.add('active-clr');
}));


// More Links
moreLiks.addEventListener('click', () => {
    moreClick.classList.toggle('active');
})

// End Header


// * Start Setting Box
const settingBox = document.querySelector('.setting-box');
const svgGear = document.querySelector('.svg-gear');
const svgPathGear = document.querySelector('.svg-gear path');

// Open Settig Box And Rotate Gear
svgGear.onclick = function () {
    settingBox.classList.toggle('setting-open')
    svgPathGear.classList.toggle('svg-path-rotate');
};

// * Colors Part
const colorsList = document.querySelector('.colors-list');
const colorList = document.querySelector("[data-color]");

// Get And Set Data From Local Storage To Page, And Re-Active Classes. 
window.onload = function () {
    const getColor = localStorage.getItem('Active Color');
    let reSetColor = JSON.parse(getColor);

    document.documentElement.style.setProperty('--main-color', reSetColor);
    
    // Loop On Li Element And Re-Active Color Into Color List.
    document.querySelectorAll('.colors-list li').forEach((li) => {
        li.classList.remove('active')
        if (li.dataset.color === reSetColor) li.classList.add('active');
    });

    // Check If Random Background Is True
    const getcheckBackground = localStorage.getItem('Random Background');
    const checkActiveBackground = JSON.parse(getcheckBackground);

    // Add Active Class To Choosen Image.
    document.querySelectorAll('.default li').forEach((li) => {
        if (li.dataset.background === JSON.parse(localStorage.getItem('Default Background'))) {
            li.classList.add('active-default');
        };
    });

    // Check Boolean Value.
    if(checkActiveBackground) {
        // Add active Class To yes
        yes.classList.add('active');

        // Remove Choose Default Background
        backgroundContainer.classList.add('active-hide');

        // Change Background Every 5000ms.
        setInterval(() => {
            // Get Random Number
            let randomNumber = Math.floor(Math.random() * imagesArray.length);

            // Change Background Image Url
            landingPage.style.backgroundImage = 'url("Media/'+ imagesArray[randomNumber] +'")';
        }, 5000);

    } else {
        // Add active Class To no
        no.classList.add('active');

        // Remove Choose Default Background
        backgroundContainer.classList.remove('active-hide');

        // Fixed Background
        // landingPage.style.backgroundImage = imagesArray = ['p1.jpg']
        // console.log(JSON.parse(localStorage.getItem('Default Background')))
        landingPage.style.backgroundImage = 'url("Media/'+ JSON.parse(localStorage.getItem('Default Background'))+ '")';
    };

    // Choose Illustration's Picture Color.
    imageColorChanging.forEach((img) => {
        const mainColor = document.documentElement.style.getPropertyValue('--main-color');
        const imgColor = img.dataset.photocolor;
        
        // Check If mainColor Equal Same dataSet Property.
        if(mainColor === imgColor) {
            img.classList.add('active-phClr');
        };
    });
};

// Get Data Attribute And Applique It value Then Send To Local Storage.
colorsList.addEventListener('click', (e) => {
    // const setColor = e.target.dataset.color; // ⬇️ Do Same Thing As ⬇️
    const setColor = e.target.getAttribute('data-color');

    // TODO: Set Color On Root [--mani-clr]
    document.documentElement.style.setProperty('--main-color', setColor)

    // * Add To Local Storage
    localStorage.setItem("Active Color", JSON.stringify(setColor));

    // * Remove Active Class From Unclicked Element
    // console.log(e.target.parentElement); << This For Return Parent ELement Of e.target
    // console.log(e.target.parentElement.querySelectorAll('.active')); << From All Elements Returns Only The Element which Have The "active" Class.
    e.target.parentElement.querySelectorAll('.active').forEach((ele) => {
        ele.classList.remove('active');
    });

    // Add active On Target ELement
    e.target.classList.add('active');
});

// End Colors Part

// End Setting Box


// * Start Landing Page 
const landingPage = document.querySelector('.landing-Page');

landingPage.onclick = function () {
    settingBox.classList.remove('setting-open');
    // Remove berger active classes.
    removeActiveClass();

    // moreClick.classList.remove('active')
};

// Get Array OF Images.
let imagesArray = ['p1.jpg', 'p2-JS.jpg', 'p3-MERN.webp', 'p4.jpg', 'p5.jpg'];

// ? This Should Be In Setting Box Part ⬇️⬇️

const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const backgroundContainer = document.querySelector('.backgrounds-container');
const defaultBackground = document.querySelector('.default');


// Yes Random Backgrounds.
yes.onclick = function () {
    // Add active Class
    this.classList.add('active');

    // Remove active Class From no.
    no.classList.remove('active');

    // Remove Choose Default Background
    backgroundContainer.classList.add('active-hide');

    // Add To Local Storage
    const yesRandom = true;
    window.localStorage.setItem("Random Background", JSON.stringify(yesRandom));

    // Change Background Every 5000ms.
    setInterval(() => {
        // Get Random Number
        let randomNumber = Math.floor(Math.random() * imagesArray.length);
        
        // Change Background Image Url
        landingPage.style.backgroundImage = 'url("Media/'+ imagesArray[randomNumber] +'")';
    }, 5000);
}

// No Random Backgrounds.
no.onclick = function () {
    // Add active Class
    this.classList.add('active');

    // Remove active Class From yes.
    yes.classList.remove('active');

    // Add Choose Default Background
    backgroundContainer.classList.remove('active-hide');

    // Add To Local Storage
    const noRandom = false;
    window.localStorage.setItem("Random Background", JSON.stringify(noRandom));

    // Add As a Default
    setInterval(() => {
        document.querySelectorAll('.default li').forEach((li) => {
            // Check If li Contains 'active-default' Class.
            if (li.classList.contains('active-default')) {
                const settingBgI = [li.dataset.background];
                landingPage.setAttribute('style', 'background-image: url("Media/'+ [settingBgI] +'") !important'); // Working
                clearInterval(1)
            } else {
                landingPage.style.backgroundImage = imagesArray = ['p1.jpg'];
            };
        })
    }, 100);
};

// Choose: Default Back-round
defaultBackground.addEventListener('click', (e) => {
    // remove active-default Class
    e.target.parentElement.querySelectorAll('.active-default').forEach((ele) => {
        ele.classList.remove('active-default')
    });

    // Choose Default Background.
    const background = e.target.dataset.background;

    // landingPage.style.backgroundImage = 'url("Media/'+ [background] +'")';
    landingPage.setAttribute('style', 'background-image: url("Media/'+ [background] +'") !important'); // Working
    // * landingPage.style.cssText = 'background-image: url("Media/'+ [background] +'") !important'; // Working
    // * landingPage.style.setProperty('background-image:', 'url("Media/'+ [background] +'")', 'important'); // Not Working

    // Send To Local Storage
    window.localStorage.setItem("Default Background", JSON.stringify(background));

    // Add active-default Class.
    e.target.classList.add('active-default')
});

//  ? This Should Be In Setting Box Part ⬆️⬆️

// Start About Us
const aboutSection = document.querySelector('.about');

aboutSection.addEventListener('click', _=> {
    settingBox.classList.remove('setting-open')
});
const imageColorChanging = document.querySelectorAll('.imgs img');

// Add Color To Illustration picture From main Color.
colorsList.addEventListener('click', (e) => {
    imageColorChanging.forEach((img) => {
        const mainColor = e.target.dataset.color;
        const imgColor = img.dataset.photocolor;

        // Check If mainColor Equal Same dataSet Property.
        if(mainColor === imgColor) {
            img.classList.add('active-phClr');
        } else {
            img.classList.remove('active-phClr')
        };
    });
});

// End About Us


// Start Our Skills
const parentSkill = document.querySelector('.skills'); 

// Get Spans Elements.
const spanSkill = document.querySelectorAll('.skills .skill-progress span')

window.onscroll = function () {
    // Get TopSetOff
    let topOffsetSkill = parentSkill.offsetTop; // all content over skills section.
    // console.log('off set top:', topOffsetSkill) // 1463

    // Outer Hight
    let skillOuterHeight = parentSkill.offsetHeight; // Height Of skills section Element.
    // console.log('off set Height:', skillOuterHeight); // 928

    // window Height
    let windowHeight = this.innerHeight;
    // console.log('Inner Height:', windowHeight) // 699

    // Window ScollTop
    let windowScrollTop = this.scrollY; // .pageYOffset Converted To => scrollY
    // console.log('Scroll Y:', Math.floor(windowScrollTop)) // 1468
    
    // Add Width To Span From Dataset-Progress
    if (windowScrollTop < (topOffsetSkill + skillOuterHeight - windowHeight)) {
        spanSkill.forEach((ele) => {
            ele.style.width = ele.dataset.progress;
        });
    };
    
    // Remove Active Classes.
    removeActiveClass();

    // Add Top Bottom.
    if (windowScrollTop >= 1000) {
        document.querySelector('.top').classList.add('show');
    } else {
        document.querySelector('.top').classList.remove('show');
    };
}

// End Our Skills

// Start Gallery
const parentGalley = document.querySelector('.gallery');
const imgList = document.querySelector('.gallery ul');
const all = document.querySelector('.all');
const webDev = document.querySelector('.web_deve');
const webDes = document.querySelector('.web_des');
const graphicDes = document.querySelector('.graphic_des');

// Close Setting Box
parentGalley.addEventListener('click', _=> {
    settingBox.classList.remove('setting-open');
});

// Remove And Add active Class.
imgList.addEventListener('click', (e) => {
    // Remove Active Class.
    e.target.parentElement.querySelectorAll('.active').forEach((li) => {
        li.classList.remove('active');
    });

    // Add Active Class.
    e.target.classList.add('active');
});

// Display Only Web-Developement Images
webDev.addEventListener('click', (e) => {
    document.querySelectorAll('.show-gallery img').forEach(im => {
        const targetClass = e.target.classList[0];
        const dataGallery = im.dataset.gallery;
        im.classList.remove('show')
        if (targetClass === dataGallery) {
            im.classList.add('show')
        };
    });
});

// Display Only Web-Design Images
webDes.addEventListener('click', (e) => {
    document.querySelectorAll('.show-gallery img').forEach(im => {
        const targetClass = e.target.classList[0];
        const dataGallery = im.dataset.gallery;
        im.classList.remove('show')
        if (targetClass === dataGallery) {
            im.classList.add('show')
        };
    });
});

// Display Only Graphic Images
graphicDes.addEventListener('click', (e) => {
    document.querySelectorAll('.show-gallery img').forEach(im => {
        const targetClass = e.target.classList[0];
        const dataGallery = im.dataset.gallery;
        im.classList.remove('show')
        if (targetClass === dataGallery) {
            im.classList.add('show')
        };
    });
});

// Makes Images Always Showen
if (all.classList.contains('active')) {
    document.querySelectorAll('.show-gallery img').forEach(im => {
        im.classList.add('show');
    });
};

// Add show To All Images
all.addEventListener('click', () => {
    document.querySelectorAll('.show-gallery img').forEach(im => {
        im.classList.add('show');
    });
});

// End Gallery

// Start Timeline
const timeLine = document.querySelector('.timeline');

// Close Setting Box
timeLine.onclick = function () {
    settingBox.classList.remove('setting-open');
}
// End Timeline


// Start Features 
const featureSection = document.querySelector('.feature');
featureSection.onclick = function () {
    settingBox.classList.remove('setting-open');
}
// End Features

// Start Testimonials 
const TI = document.querySelector('.testimonials');
TI.onclick = function () {
    settingBox.classList.remove('setting-open');
}
// End Testimonials

// Start Contact 
const contactDiv = document.querySelector('.contact');
contactDiv.onclick = function () {
    settingBox.classList.remove('setting-open');
}
// End Contact

// Start Footer 
const footer = document.querySelector('footer');
footer.onclick = function () {
    settingBox.classList.remove('setting-open');
}
// End Footer