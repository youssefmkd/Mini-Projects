// Function to create and display the restaurant's home page content
const createRestaurantHomePage = () => {
    // Select the main content container in the DOM
    const content = document.querySelector("#content");

    // Create a div element to hold all the home page content and apply a CSS class
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // Create an image element for the restaurant
    const image = document.createElement('img');
    image.src = 'https://as1.ftcdn.net/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg'; // Image URL
    image.height = '300'; // Set image height to 300 pixels
    pageContent.appendChild(image); // Add image to the page content

    // Create a headline element (h1) welcoming visitors
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to our restaurant"; // Set the headline text
    pageContent.appendChild(headline); // Append the headline to the page content

    // Create a paragraph element with some descriptive text
    const copy = document.createElement('p');
    copy.textContent = 'We serve the best food in town. Come and taste it'; // Text content
    pageContent.appendChild(copy); // Append the paragraph to the page content

    // Append the entire page content to the main content container in the DOM
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;
