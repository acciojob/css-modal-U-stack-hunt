//your JS code here. If required.
// Get modal and buttons
const modal = document.querySelector('.modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.querySelector('.close-modal');

// Open modal
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
