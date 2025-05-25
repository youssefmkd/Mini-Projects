// Import the functions to generate content for each tab
import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";

// Function to create navigation tabs (Home, Menu, Contact)
const createtabs = () => {
    // Select the main container to hold the tabs
    const content = document.querySelector('#content');

    // Create three tab elements for Home, Menu, and Contact
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    // Assign unique IDs to each tab for identification
    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');

    // Assign a common class to each tab for shared styling
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    // Set the text displayed inside each tab
    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    // Append all three tabs to the content container
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    // Add event listeners to load corresponding page content when a tab is clicked
    div1.addEventListener('click', () => {
        clearContent();               // Remove existing content
        createRestaurantHomePage();   // Load Home page content
    });

    div2.addEventListener('click', () => {
        clearContent();               // Remove existing content
        createMenuPage();            // Load Menu page content
    });

    div3.addEventListener('click', () => {
        clearContent();              // Remove existing content
        createContactPage();         // Load Contact page content
    });
};

// Helper function to remove existing page content before loading new content
function clearContent() {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");

    // Only remove content if it exists
    if (pageContent) {
        content.removeChild(pageContent);
    }
}

// Export the tab creation function for use in other modules
export default createtabs;
