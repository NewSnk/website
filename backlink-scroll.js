// Show the back link when the user scrolls down a bit
window.addEventListener('scroll', () => {
    const backlink = document.getElementById('backlink');
    if (window.scrollY > 100) { // Adjust this value to control when the link appears
        backlink.style.display = 'block';
    } else {
        backlink.style.display = 'none';
    }
});

// Scroll to the top of the page when the back link is clicked
document.getElementById('backlink').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
