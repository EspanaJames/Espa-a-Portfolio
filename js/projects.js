// projects.js

function loadProjects() {
    setActiveButton('statsButton');

    const buttonContainer = document.querySelector('.buttonContainer');
    const contentContainer = document.querySelector('.container');

    // Clear any existing content
    buttonContainer.innerHTML = '';
    contentContainer.innerHTML = '';

    const tags = ['WEB', 'APPLICATION', 'HARDWARE', 'HDL', 'NETWORKS'];

    // Create buttons for each tag
    tags.forEach(tag => {
        const btn = document.createElement('button');
        btn.textContent = tag;
        btn.classList.add('tab-button');
        btn.addEventListener('click', () => {
            loadTabContent(tag, contentContainer);
            setActiveTab(btn);
        });
        buttonContainer.appendChild(btn);
    });

    // Set default tab
    loadTabContent(tags[0], contentContainer);
    setActiveTab(buttonContainer.querySelector('button'));
}

// Highlight the active tab button
function setActiveTab(activeButton) {
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('pressed');
    });
    activeButton.classList.add('pressed');
}

// Sample tab content loader
function loadTabContent(tag, container) {
    container.innerHTML = `
        <section>
            <h2>${tag} Projects</h2>
            <div class="project-grid">
                <div class="project-card">
                    <img src="https://via.placeholder.com/400x225?text=${tag}+1" alt="${tag} Project">
                    <h3>${tag} Project 1</h3>
                    <p>Description for ${tag.toLowerCase()} project 1.</p>
                </div>
                <div class="project-card">
                    <img src="https://via.placeholder.com/400x225?text=${tag}+2" alt="${tag} Project">
                    <h3>${tag} Project 2</h3>
                    <p>Description for ${tag.toLowerCase()} project 2.</p>
                </div>
            </div>
        </section>
    `;
}
