// Function to show the newsletter popup
function showPopup() {
    document.getElementById('newsletterPopup').style.display = 'flex';
}

// Function to close the newsletter popup
function closePopup() {
    document.getElementById('newsletterPopup').style.display = 'none';
}

// Show the popup after 5 seconds
setTimeout(showPopup, 5000);

// Event listener for close button
document.querySelector('.close').onclick = closePopup;

// Close the popup if user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('newsletterPopup')) {
        closePopup();
    }
}
