// chat.js

// Helper function to generate a unique identifier for the user
function generateUniqueId() {
    return Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
}

// Store unique ID in localStorage to persist across page reloads
const userId = localStorage.getItem('userId') || generateUniqueId();
localStorage.setItem('userId', userId);

// Handle chat functionality
document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat_form');
    const chatBox = document.getElementById('chat_box');
    const messageInput = document.getElementById('message_input');

    chatForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Get message value
        const message = messageInput.value.trim();
        if (message) {
            // Create a new message element
            const messageElement = document.createElement('div');
            messageElement.textContent = `${userId}: ${message}`;
            messageElement.classList.add('chat_message');
            chatBox.appendChild(messageElement);

            // Scroll to the bottom of the chat box
            chatBox.scrollTop = chatBox.scrollHeight;

            // Clear the input
            messageInput.value = '';
        }
    });

    // Function to get all image file names
    function getImageFiles() {
        // This function would typically fetch file names from the server
        // For the purpose of this example, we'll use a static list
        return ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Ensure filenames match those in chat_imgs
    }

    // Function to create image elements
    function createImageElement(src) {
        const img = document.createElement('img');
        img.src = `chat_imgs/${src}`;
        img.onload = () => console.log(`Loaded image: ${src}`); // Debugging line
        img.onerror = () => console.error(`Failed to load image: ${src}`); // Debugging line
        return img;
    }

    // Populate the slideshow with images
    function populateSlideshow() {
        const leftSlideshow = document.getElementById('slideshow_left');
        const rightSlideshow = document.getElementById('slideshow_right');
        
        const imageFiles = getImageFiles();

        imageFiles.forEach((fileName) => {
            const imgLeft = createImageElement(fileName);
            const imgRight = createImageElement(fileName);

            leftSlideshow.appendChild(imgLeft);
            rightSlideshow.appendChild(imgRight);
        });
    }

    // Initialize the slideshow
    populateSlideshow();
});
