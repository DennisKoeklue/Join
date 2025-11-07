const contactContainer = document.querySelector('.contacts .contact-list .contact-list-items .contact-container');
const contactName = document.querySelector('.contacts .contact-list .contact-list-items .contact-container .contactName');
const addContactPopup = document.querySelector('.add-contact-popup');


let colors = ["rgba(255, 122, 0, 1)", "rgba(147, 39, 255, 1)", "rgba(110, 82, 255, 1)", "rgba(252, 113, 255, 1)", "rgba(255, 187, 43, 1)", "rgba(31, 215, 193, 1)", "rgba(70, 47, 138, 1)", "rgba(255, 70, 70, 1)", "rgba(0, 190, hsla(8, 100%, 68%, 1.00)", "rgba(255, 116, 94, 1)"];


function openPopupOverlay() {
    addContactPopup.classList.remove('d-none');
}

function closePopupOverlay() {
    addContactPopup.classList.add('d-none');
}