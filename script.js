// Select the button and body
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');
const section = document.querySelector('section');

// Add event listener to the button
themeToggleButton.addEventListener('click', () => {
    // Toggle the dark class on the body and other elements
    body.classList.toggle('dark');
    header.classList.toggle('dark');
    section.classList.toggle('dark');
});
