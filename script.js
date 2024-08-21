
// Function to toggle the menu
function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  
  // Toggle the menu open class
  menuLinks.classList.toggle('open');
  hamburgerIcon.classList.toggle('open');
}
