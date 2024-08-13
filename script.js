function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView();
}

function openFileInNewTab(url) {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.click();
}

function openNewTab(url) {
    window.open(url)
}

const contactButton = document.getElementById('contact-button');
contactButton.addEventListener('click', () => scrollToElement('contact'));

const downloadResumeButton = document.getElementById('download-resume-button');
downloadResumeButton.addEventListener('click', () => openFileInNewTab('./media/Vini Pereira - Resume.pdf'));

const githubButton = document.getElementById('github-button');
githubButton.addEventListener('click', () => openNewTab('https://github.com/vinipereira-io/'))

const sleekCalcTry = document.getElementById('sleekcalc-try');
sleekCalcTry.addEventListener('click', () => openNewTab('https://vinipereira-io.github.io/SleekCalc/'));
const sleekCalcRepository = document.getElementById('sleekcalc-repository');
sleekCalcRepository.addEventListener('click', () => openNewTab('https://github.com/vinipereira-io/SleekCalc'));

const nomadJournalTry = document.getElementById('nomad-journal-try');
nomadJournalTry.addEventListener('click', () => openNewTab('https://vinipereira-io.github.io/trampo-nomade-journal/'));
const nomadJournalRepository = document.getElementById('nomad-journal-repository');
nomadJournalRepository.addEventListener('click', () => openNewTab('https://github.com/vinipereira-io/trampo-nomade-journal'));

const discountRunnerDemo = document.getElementById('discountrunner-demo');
discountRunnerDemo.addEventListener('click', () => openNewTab('https://youtu.be/gxvJXxAZUcY'));
const discountRunnerRepository = document.getElementById('discountrunner-repository');
discountRunnerRepository.addEventListener('click', () => openNewTab('https://github.com/vinipereira-io/loan-discount-runner'));