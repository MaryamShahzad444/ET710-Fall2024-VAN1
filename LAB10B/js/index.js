const contactForm = document.getElementById('contactForm');
const contactsContainer = document.getElementById('contactList');
const contacts = []; // Array to store contacts

//Function to display contacts
function displayContacts() {
    contactsContainer.innerHTML = ''; // Clear existing contacts

    // Iterate over contacts
    for(let index = 0; index < contacts.length; index++) {
        const contact = contacts[index];
        const li = document.createElement('li');
    
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
    
        let testAsArray = [
            contact.firstName,
            contact.lastName,
            contact.email,
            '<button class="btn btn-danger btn-sm" onclick="deleteContact(' + index +')">Delete</button>'
        ];
        
        // Inner loop used to add contact information to each row.
        for(let innerIndex = 0; innerIndex < textAsArray.length; innerIndex++) {
            let span = document.createElement('span');
            span.innerHTML = textAsArray[innerIndex];
    
            li.appendChild(span);
        }
    
        contactsContainer.appendChild(li);
    
    }
}

// Function to delete a contact 
function deleteContact(index) {
    // removes the index from the arrey
    contacts.splice(index, 1);
    displayContacts(); 
}

// Function to add a new contact 
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lasttName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Add contacts to the Array. The below will create an array of objects.
    contacts.push({ firstName, lastName, email, phone });
    displayContacts(); 
    contactForm.reset(); // Clear the form
});