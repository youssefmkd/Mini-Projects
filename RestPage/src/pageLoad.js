// Import the function that creates the restaurant home page content
import createRestaurantHomePage from './restaurant';

// Import the function that creates the navigation tabs (e.g., Home, Menu, Contact)
import createTabs from './tabs';

// Function to initialize the page on first load
function initialLoad() {
    createTabs();               // Generate and display the navigation tabs
    createRestaurantHomePage(); // Load and display the home page content by default
}

// Export the initialLoad function as the default export from this module
export default initialLoad;
