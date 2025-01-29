let blahajStars, catStars, choccyStars, paperStars, linuxStars;

let blahajText = document.createElement('p');
blahajText.textContent = 'Blahaj'
document.body.appendChild(blahajText);
let blahajSlider = document.createElement('input');
blahajSlider.type = 'range';
blahajSlider.min = '0';
blahajSlider.max = '10';
blahajSlider.value = '5';
blahajSlider.step = '1';
document.body.appendChild(blahajSlider);
let blahajOutput = document.createElement('output');
document.body.appendChild(blahajOutput);

let myBlahajSlider = document.createElement('input');
myBlahajSlider.type = 'range';
myBlahajSlider.min = '0';
myBlahajSlider.max = '10';
myBlahajSlider.value = '10';
myBlahajSlider.step = '1';
document.body.appendChild(myBlahajSlider);
let myBlahajOutput = document.createElement('output');
document.body.appendChild(myBlahajOutput);
myBlahajSlider.style.visibility = 'hidden';
myBlahajOutput.style.visibility = 'hidden';
myBlahajSlider.disabled = true;

let catText = document.createElement('p');
catText.textContent = 'Cats';
document.body.appendChild(catText);
let catSlider = document.createElement('input');
catSlider.type = 'range';
catSlider.min = '0';
catSlider.max = '10';
catSlider.value = '5';
catSlider.step = '1';
document.body.appendChild(catSlider);
let catOutput = document.createElement('output');
document.body.appendChild(catOutput);

let myCatSlider = document.createElement('input');
myCatSlider.type = 'range';
myCatSlider.min = '0';
myCatSlider.max = '10';
myCatSlider.value = '10';
myCatSlider.step = '1';
document.body.appendChild(myCatSlider);
let myCatOutput = document.createElement('output');
document.body.appendChild(myCatOutput);
myCatSlider.style.visibility = 'hidden';
myCatOutput.style.visibility = 'hidden';
myCatSlider.disabled = true;

let choccyText = document.createElement('p');
choccyText.textContent = 'Chocolate Chips';
document.body.appendChild(choccyText);
let choccySlider = document.createElement('input');
choccySlider.type = 'range';
choccySlider.min = '0';
choccySlider.max = '10';
choccySlider.value = '5';
choccySlider.step = '1';
document.body.appendChild(choccySlider);
let choccyOutput = document.createElement('output');
document.body.appendChild(choccyOutput);

let myChoccySlider = document.createElement('input');
myChoccySlider.type = 'range';
myChoccySlider.min = '0';
myChoccySlider.max = '10';
myChoccySlider.value = '9';
myChoccySlider.step = '1';
document.body.appendChild(myChoccySlider);
let myChoccyOutput = document.createElement('output');
document.body.appendChild(myChoccyOutput);
myChoccySlider.style.visibility = 'hidden';
myChoccyOutput.style.visibility = 'hidden';
myChoccySlider.disabled = true;

let paperText = document.createElement('p');
paperText.textContent = 'Paper';
document.body.appendChild(paperText);
let paperSlider = document.createElement('input');
paperSlider.type = 'range';
paperSlider.min = '0';
paperSlider.max = '10';
paperSlider.value = '5';
paperSlider.step = '1';
document.body.appendChild(paperSlider);
let paperOutput = document.createElement('output');
document.body.appendChild(paperOutput);

let myPaperSlider = document.createElement('input');
myPaperSlider.type = 'range';
myPaperSlider.min = '0';
myPaperSlider.max = '10';
myPaperSlider.value = '4';
myPaperSlider.step = '1';
document.body.appendChild(myPaperSlider);
let myPaperOutput = document.createElement('output');
document.body.appendChild(myPaperOutput);
myPaperSlider.style.visibility = 'hidden';
myPaperOutput.style.visibility = 'hidden';
myPaperSlider.disabled = true;

let linuxText = document.createElement('p');
linuxText.textContent = 'Linux';
document.body.appendChild(linuxText);
let linuxSlider = document.createElement('input');
linuxSlider.type = 'range';
linuxSlider.min = '0';
linuxSlider.max = '10';
linuxSlider.value = '5';
linuxSlider.step = '1';
document.body.appendChild(linuxSlider);
let linuxOutput = document.createElement('output');
document.body.appendChild(linuxOutput);

let myLinuxSlider = document.createElement('input');
myLinuxSlider.type = 'range';
myLinuxSlider.min = '0';
myLinuxSlider.max = '10';
myLinuxSlider.value = '6';
myLinuxSlider.step = '1';
document.body.appendChild(myLinuxSlider);
let myLinuxOutput = document.createElement('output');
document.body.appendChild(myLinuxOutput);
myLinuxSlider.style.visibility = 'hidden';
myLinuxOutput.style.visibility = 'hidden';
myLinuxSlider.disabled = true;

setInterval(() => {
    blahajStars = blahajSlider.value / 2;
    blahajOutput.textContent = blahajStars;
    
    catStars = catSlider.value / 2;
    catOutput.textContent = catStars;

    choccyStars = choccySlider.value /2;
    choccyOutput.textContent = choccyStars;

    paperStars = paperSlider.value /2;
    paperOutput.textContent = paperStars;

    linuxStars = linuxSlider.value /2;
    linuxOutput.textContent = linuxStars;

    myBlahajOutput.textContent = myBlahajSlider.value / 2;
    
    myCatOutput.textContent = myCatSlider.value / 2;

    myChoccyOutput.textContent = myChoccySlider.value /2;

    myPaperOutput.textContent = myPaperSlider.value / 2;

    myLinuxOutput.textContent = myLinuxSlider.value / 2;
}, 50);


spacing = document.createElement('p');
document.body.appendChild(spacing);
submit = document.createElement('button');
submit.textContent = 'Submit your ratings!'
document.body.appendChild(submit)
submit.addEventListener('click', () => {
    blahajSlider.disabled = true;
    catSlider.disabled = true;
    choccySlider.disabled = true;
    paperSlider.disabled = true;
    linuxSlider.disabled = true;

    myBlahajSlider.style.visibility = 'visible';
    myCatSlider.style.visibility = 'visible';
    myChoccySlider.style.visibility = 'visible';
    myPaperSlider.style.visibility = 'visible';
    myLinuxSlider.style.visibility = 'visible';
    myBlahajOutput.style.visibility = 'visible';
    myCatOutput.style.visibility = 'visible';
    myChoccyOutput.style.visibility = 'visible';
    myPaperOutput.style.visibility = 'visible';
    myLinuxOutput.style.visibility = 'visible';
})