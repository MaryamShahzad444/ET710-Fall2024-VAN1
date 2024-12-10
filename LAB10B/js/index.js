const contactForm = document.getElementById('contactForm');
const contactsContainer = document.getElementById('contactList');
const contacts = []; // Array to store contacts

//Function to displayContacts
function displayContacts() {
    contactsContainer.innerHTML = ''; // Clear existing contacts

    //Iterate over contacts
    for(let index = 0; index < contacts.length; index++) {
        const contact = contacts[index];
        const li = document.createElement('li');

        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        let textAsArray = [
            contact.firstName,
            contact.lastName,
            contact.email,
            '<button class="btn btn-danger btn-sm" onclick="deleteContact(' + index + ')">Delete</button>'
        ];

        // Inner loop used to add contact information to each row.
    }
}