function renderContactFloatingCardTemplate(contact) {
    const initials = getInitials(contact.name);
    return `
    <div id="contact-header">
                    <div id="contact-symbol">${initials}</div>
                    <div id="contact-text">
                        <div id="contact-name">${contact.name}</div>
                        <div id="contact-edit-tools">
                            <div id="edit" class="edit-delete-component-default">
                                <img src="" alt="" />
                                <span>Edit</span>
                            </div>
                            <div id="delete" class="edit-delete-component-default">
                                <img src="" alt="" />
                                <span>Delete</span>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 id="contact-information">Contact Information</h3>
                <div id="contact-details">
                    <h4 id="contact-email">Email</h4>
                    <span class="span-email">${contact.email}</span>
                    <h4 id="contact-phone">Phone</h4>
                    <span class="span-phone">${contact.phone}</span>
                </div>`
}

function renderContactListTemplate(contact, color, showAlphabet = true) {
    const initials = getInitials(contact.name);
    const firstLetter = contact.name.charAt(0).toUpperCase();

    const alphabetHeader = showAlphabet ? `
                    <h3 class="contact-alphabet">${firstLetter}</h3>
                    <div id="contact-divider">
                        <img src="../assets/img/devider-contact-list.svg" alt="" />
                    </div>` : '';

    return `
    <div class="contact-list-items">
                    ${alphabetHeader}
                    <div class="contact-container">
                        <div class="contact-badge" style="background-color: ${color}">${initials}</div>
                        <div class="contactDetails">
                            <h3 class="contactName">${contact.name}</h3>
                            <span class="contactEmail">${contact.email}</span>
                        </div>
                    </div>
    </div>`;
}