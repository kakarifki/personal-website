// Array berisi nama font yang diinginkan
const fonts = ['Arial', 'Georgia', 'Courier New', 'Times New Roman', 'Verdana', 'Tahoma', 'Lucida Console'];

let intervalId;

function changeFontRandomly() {
    const element = document.getElementById('dynamic-font');
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    element.style.fontFamily = randomFont;
}

// Fungsi untuk memulai animasi
function startAnimation() {
    intervalId = setInterval(changeFontRandomly, 300);
}

// Fungsi untuk menghentikan animasi
function stopAnimation() {
    clearInterval(intervalId);
}

// Mulai animasi saat halaman dimuat
startAnimation();

// Hentikan animasi saat di-hover
document.getElementById('dynamic-font').addEventListener('mouseover', function() {
    stopAnimation();
});

// Lanjutkan animasi saat hover selesai
document.getElementById('dynamic-font').addEventListener('mouseout', function() {
    startAnimation();
});

fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    const projectsSection = document.getElementById('project');
    const projectGrid = projectsSection.querySelector('.grid');

    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('bg-white', 'shadow-md', 'rounded-lg', 'overflow-hidden', 'p-4', 'm-2');

      const img = document.createElement('img');
      img.src = project.image;
      img.alt = project.title;
      img.classList.add('w-full', 'h-48', 'object-cover');
      projectCard.appendChild(img);

      const content = document.createElement('div');
      content.classList.add('p-4');

      const title = document.createElement('h2');
      title.textContent = project.title;
      title.classList.add('text-xl', 'font-bold', 'text-gray-800');
      content.appendChild(title);

      const description = document.createElement('p');
      description.textContent = project.description;
      description.classList.add('text-gray-600');
      content.appendChild(description);

      const skills = document.createElement('div');
      skills.classList.add('mt-2');
      project.skills.forEach(skill => {
        const skillSpan = document.createElement('span');
        skillSpan.classList.add('inline-block', 'bg-blue-500', 'text-white', 'rounded-full', 'px-3', 'py-1', 'text-sm', 'font-semibold', 'mr-2');
        skillSpan.textContent = skill;
        skills.appendChild(skillSpan);
      });
      content.appendChild(skills);

      projectCard.appendChild(content);
      projectGrid.appendChild(projectCard);
    });
  });
