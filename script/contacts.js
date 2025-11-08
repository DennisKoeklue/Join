const contactContainer = document.querySelector('.contacts .contact-list .contact-list-items .contact-container');
const contactName = document.querySelector('.contacts .contact-list .contact-list-items .contact-container .contactName');
const addContactPopup = document.querySelector('.add-contact-popup');
const contactListEl = document.querySelector('.contacts .contact-list');
const contactBadge = document.querySelector('.contacts .contact-list .contact-list-items .contact-badge');
const contactAlphabet = document.querySelector('.contacts .contact-list .contact-list-items .contact-alphabet');
const cancelBtn = document.getElementById('cancel-btn');
const createContactBtn = document.getElementById('createContact-btn');


function createContactList() {
    let html = '';
    let lastInitial = '';

    contacts.forEach((contact, index) => {
        const color = colors[index % colors.length];
        const currentInitial = contact.name.charAt(0).toUpperCase();

        // Only show alphabet header if it's different from the last one
        const showAlphabet = currentInitial !== lastInitial;
        lastInitial = currentInitial;
        html += renderContactListTemplate(contact, color, showAlphabet);
    });
    contactListEl.innerHTML = html;
}

function getInitials(fullName) {
    const nameParts = fullName.trim().split(' ');
    const firstInitial = nameParts[0] ? nameParts[0].charAt(0).toUpperCase() || '' : '';
    const lastInitial = nameParts[nameParts.length - 1] ? nameParts[nameParts.length - 1].charAt(0).toUpperCase() || '' : '';
    return firstInitial + lastInitial;
}

function openPopupOverlay() {
    addContactPopup.classList.remove('d-none');
}

function closePopupOverlay() {
    addContactPopup.classList.add('d-none');
}