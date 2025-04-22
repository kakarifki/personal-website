// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
        mobileNav.classList.toggle('flex');
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.add('hidden');
            mobileNav.classList.remove('flex');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    // Optional: Prevent scroll when mobile menu is open
    const body = document.body;
    const toggleBodyScroll = () => {
        body.classList.toggle('overflow-hidden');
    };

    mobileMenuToggle.addEventListener('click', toggleBodyScroll);
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', toggleBodyScroll);
    });
});

// Array berisi nama font yang diinginkan
const fonts = ['Arial', 'Georgia', 'Courier New', 'Times New Roman', 'Verdana', 'Tahoma', 'Lucida Console'];

let intervalId;

// Function to change font randomly
function changeFontRandomly() {
    const element = document.getElementById('dynamic-font');
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    element.style.fontFamily = randomFont;
}

// Function to start the animation
function startAnimation() {
    intervalId = setInterval(changeFontRandomly, 300);
}

// Function to stop the animation
function stopAnimation() {
    clearInterval(intervalId);
}

// Start animation when the page loads
startAnimation();

// Stop animation on hover
document.getElementById('dynamic-font').addEventListener('mouseover', function() {
    stopAnimation();
});

// Resume animation when hover ends
document.getElementById('dynamic-font').addEventListener('mouseout', function() {
    startAnimation();
});

// Fetch project data from projects.json
fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    const projectsSection = document.getElementById('project'); // Get the projects section
    const projectGrid = projectsSection.querySelector('.grid'); // Get the grid container for appending project cards

    // Map of skills to colors
    const skillColors = {
      "HTML": "bg-blue-500",
      "CSS": "bg-green-500",
      "JavaScript": "bg-yellow-500",
      "React": "bg-purple-500",
      "Node.js": "bg-pink-500",
      "Vite": "bg-orange-500",
      "Hono": "bg-teal-500",
      "Docker": "bg-red-500"
    };

    // Iterate through each project in the projects array
    projects.forEach(project => {
      // Create a div element for each project card
      const projectCard = document.createElement('a');
      // Add href and target attributes
      projectCard.href = project.url;
      projectCard.target = '_blank';
      // Add Tailwind CSS classes for styling
      projectCard.classList.add('bg-white', 'shadow-md', 'rounded-lg', 'overflow-hidden', 'p-4', 'm-2', 'block', 'hover:shadow-lg', 'transition-shadow', 'duration-300');

      // Create an img element for the project image
      const img = document.createElement('img');
      img.src = project.image;
      img.alt = project.title;
      img.classList.add('w-full', 'h-48', 'object-cover');
      projectCard.appendChild(img); // Append the image to the card

      // Create a div element for the project content
      const content = document.createElement('div');
      content.classList.add('p-4');

      // Create an h2 element for the project title
      const title = document.createElement('h2');
      title.textContent = project.title;
      title.classList.add('text-xl', 'font-bold', 'text-gray-800');
      content.appendChild(title); // Append the title to the content

      // Create a p element for the project description
      const description = document.createElement('p');
      description.textContent = project.description;
      description.classList.add('text-gray-600');
      content.appendChild(description); // Append the description to the content

      // Create a div element for the project skills
      const skills = document.createElement('div');
      skills.classList.add('mt-2');
      // Iterate through each skill in the project's skills array
      project.skills.forEach(skill => {
        // Create a span element for each skill
        const skillSpan = document.createElement('span');
        // Add Tailwind CSS classes for styling, using color from skillColors map
        const colorClass = skillColors[skill] || 'bg-gray-500'; // Default to gray if skill not found in map
        skillSpan.classList.add('inline-block', colorClass, 'text-white', 'rounded-full', 'px-3', 'py-1', 'text-sm', 'font-semibold', 'mr-2');
        skillSpan.textContent = skill;
        skills.appendChild(skillSpan); // Append the skill to the skills div
      });
      content.appendChild(skills); // Append the skills div to the content

      projectCard.appendChild(content); // Append the content to the card
      projectGrid.appendChild(projectCard); // Append the card to the grid
    });
  });