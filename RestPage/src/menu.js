const createMenuPage = () => {
    // Select the main content container where the menu page will be rendered
    const content = document.querySelector('#content');

    // Create a div to hold all page content and add a CSS class for styling
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // Create a heading element for the page title
    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu'; // Set the text for the heading

    // Create an unordered list to display menu items
    const menuList = document.createElement('ul');

    // Create individual list items for each menu option
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = 'Pomodoro'; // First menu item

    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Bolognesa'; // Second menu item

    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'Alfredo'; // Third menu item

    // Append all menu items to the menu list
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    // Append the heading and menu list to the page content container
    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);

    // Append the complete page content to the main content container in the DOM
    content.appendChild(pageContent);
};

export default createMenuPage;
