const createContactPage = () => {
    // Select the main container where the contact page content will be added
    const content = document.querySelector('#content');

    // Create a div to hold the page content and add a CSS class for styling
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // Create a form element and add a CSS class for styling the contact form
    const form = document.createElement('form');
    form.classList.add('contact-form');

    // Create an input for the heading/title of the contact form
    const headingInput = document.createElement('input');
    headingInput.type = 'text'; // Specify input type as text
    headingInput.placeholder = 'Enter heading'; // Placeholder text shown inside the input
    form.appendChild(headingInput); // Add the heading input to the form

    // Create an input for the address field
    const addressInput = document.createElement('input');
    addressInput.type = 'text'; // Text input for address
    addressInput.placeholder = 'Enter address'; // Placeholder text for address
    form.appendChild(addressInput); // Add address input to the form

    // Create an input for the phone number field
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text'; // Text input for phone number
    phoneInput.placeholder = 'Enter phone'; // Placeholder text for phone input
    form.appendChild(phoneInput); // Add phone input to the form

    // Create a submit button for the form
    const submitButton = document.createElement('input');
    submitButton.type = 'submit'; // Input type 'submit' triggers form submission
    submitButton.value = 'Submit'; // Text displayed on the submit button
    form.appendChild(submitButton); // Add the submit button to the form

    // Append the form to the page content container
    pageContent.appendChild(form);

    // Append the entire page content (with the form) to the main content area
    content.appendChild(pageContent);
}

export default createContactPage;
