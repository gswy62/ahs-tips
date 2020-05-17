let pagePic = document.querySelector('img');

pagePic.onclick = function() {
    let mySrc = pagePic.getAttribute('src');
    if (mySrc === 'images/ahs-logo.png') {
        pagePic.setAttribute('src', 'images/baby-fritz.jpg');
    } else {
        alert('Ouch! Stop poking me!');
        pagePic.setAttribute('src', 'images/ahs-logo.png');
    }
}


/*document.querySelector('img').onclick = function() {
    alert('Hi!');
}*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name: ');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Ready to take dubs, ' + myName + '?';
    }  
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ready to take dubs, ' + storedName + '?';
}

myButton.onclick = function() {
    setUserName();
}
