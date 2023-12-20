document.addEventListener('DOMContentLoaded', function () {
    const svgElement = document.getElementById('Layer_1'); // Replace 'your-svg-id' with the actual ID of your SVG element
    const pPath = document.getElementById('p'); // Replace 'p' with the actual ID of your #p path

    if (svgElement && pPath) {
        window.addEventListener('scroll', function () {
            if (window.scrollY === 0) {
                svgElement.classList.remove('hidden');
                pPath.style.transform = 'translateX(0)';
            } else {
                svgElement.classList.add('hidden');
                pPath.style.transform = 'translateX(-100px)';
            }
        });
    } else {
        console.error('SVG element or #p path not found.');
    }
});

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function () {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
});

document.querySelectorAll('.snippet-selector li').forEach(item => {
    item.addEventListener('click', function(event) {
        // Prevent the default action of the anchor tag
        event.preventDefault();

        // Get the ID of the target wrapper
        const targetId = this.getAttribute('data-target');
        
        // Hide all code wrappers first
        document.querySelectorAll('.code-wrapper').forEach(wrapper => {
            wrapper.style.visibility = 'hidden';
            wrapper.style.height = '0';
        });

        // Then make the targeted one visible
        const codeWrapper = document.getElementById(targetId);
        codeWrapper.style.visibility = "visible";
    });
});

const images = document.querySelectorAll('.img-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, { threshold: 0.5 });

images.forEach(image => {
    observer.observe(image);
});

    var words = ["Responsive", "Efficient", "Secure", "Interactive", "Scalable", "User-friendly", "Optimized", "Intuitive", "Robust", "Dynamic"];
    var changingTextElement = document.getElementById("changingText");
    var lastIndex;

    function updateText() {
        // Ensure the new index is different from the previous one
        var randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * words.length);
        } while (randomIndex === lastIndex);

        lastIndex = randomIndex;

        // Apply fade-out effect
        changingTextElement.style.opacity = 0.2;

        // Update text content after the fade-out
        setTimeout(function () {
            changingTextElement.textContent = words[randomIndex];

            // Apply fade-in effect
            changingTextElement.style.opacity = 1;
        }, 500); // 500 milliseconds (0.5 seconds) matches the transition duration in CSS
    }

    setInterval(updateText, 2000);


    