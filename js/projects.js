function renderImportantProjects() {
    const buttonContainer = document.querySelector(".buttonContainer");
    const displayContainer = document.querySelector(".container");

    buttonContainer.innerHTML = "";
    displayContainer.innerHTML = "";

    const tags = [
        { name: "WEB", icon: "fas fa-globe" },
        { name: "APPLICATION", icon: "fas fa-desktop" },
        { name: "HARDWARE", icon: "fas fa-microchip" },
        { name: "HDL", icon: "fas fa-code" },
        { name: "NETWORKING", icon: "fas fa-network-wired" }
    ];

    const projects = [
        {
            name: "Portfolio Website",
            tag: "WEB",
            image: "https://via.placeholder.com/300x180?text=Portfolio",
            description: "A personal responsive portfolio website built with HTML, CSS, and JavaScript.",
            github: "https://github.com/yourusername/portfolio"
        },
        {
            name: "Desktop App",
            tag: "APPLICATION",
            image: "https://via.placeholder.com/300x180?text=App",
            description: "Cross-platform desktop application using Electron.",
            github: "https://github.com/yourusername/desktop-app"
        },
        {
            name: "FPGA Blinker",
            tag: "HDL",
            image: "https://via.placeholder.com/300x180?text=HDL+Project",
            description: "Simple blinking LED project using Verilog.",
            github: "https://github.com/yourusername/fpga-blinker"
        },
        {
            name: "IoT Hardware Interface",
            tag: "HARDWARE",
            image: "https://via.placeholder.com/300x180?text=Hardware",
            description: "Custom microcontroller interface project.",
            github: "https://github.com/yourusername/hardware-interface"
        },
        {
            name: "Network Monitor",
            tag: "NETWORKING",
            image: "https://via.placeholder.com/300x180?text=Networking",
            description: "Real-time network traffic visualizer.",
            github: "https://github.com/yourusername/network-monitor"
        },
        {
            name: "Web Chat App",
            tag: "WEB",
            image: "https://via.placeholder.com/300x180?text=Chat+App",
            description: "A real-time web chat app using WebSockets.",
            github: "https://github.com/yourusername/web-chat-app"
        },
        {
            name: "Sensor Logger",
            tag: "HARDWARE",
            image: "https://via.placeholder.com/300x180?text=Sensor+Logger",
            description: "Logs sensor data over serial to SD card.",
            github: "https://github.com/yourusername/sensor-logger"
        },
        {
            name: "Router Emulator",
            tag: "NETWORKING",
            image: "https://via.placeholder.com/300x180?text=Router+Sim",
            description: "Software-defined networking simulator.",
            github: "https://github.com/yourusername/router-emulator"
        },
        {
            name: "Application Dashboard",
            tag: "APPLICATION",
            image: "https://via.placeholder.com/300x180?text=Dashboard",
            description: "Modern desktop dashboard UI.",
            github: "https://github.com/yourusername/app-dashboard"
        }
    ];

    // Create tag buttons
    tags.forEach(tag => {
        const btn = document.createElement("button");
        btn.className = "tab-button icon-button";
        btn.innerHTML = `<i class="${tag.icon}"></i> ${tag.name}`;
        btn.addEventListener("click", () => renderProjects(tag.name));
        buttonContainer.appendChild(btn);
    });

    renderProjects("WEB"); // default
    function renderProjects(tag) {
        displayContainer.innerHTML = "";

        const grid = document.createElement("div");
        grid.className = "project-grid";

        projects.filter(p => p.tag === tag).forEach(project => {
            const card = document.createElement("div");
            card.className = "project-card";

            const img = document.createElement("img");
            img.src = project.image;
            img.alt = project.name;
            img.className = "project-img";
            img.addEventListener("click", () => openModal(project));

            card.appendChild(img);
            grid.appendChild(card);
        });

        displayContainer.appendChild(grid);
    }

    function openModal(project) {
        const modalOverlay = document.createElement("div");
        modalOverlay.className = "modal-overlay";

        const modal = document.createElement("div");
        modal.className = "modal";

        const closeBtn = document.createElement("span");
        closeBtn.innerHTML = "&times;";
        closeBtn.className = "modal-close";
        closeBtn.addEventListener("click", () => document.body.removeChild(modalOverlay));

        const img = document.createElement("img");
        img.src = project.image;
        img.className = "modal-image";

        const title = document.createElement("h3");
        title.textContent = project.name;

        const desc = document.createElement("p");
        desc.textContent = project.description;

        const link = document.createElement("a");
        link.href = project.github;
        link.target = "_blank";
        link.textContent = "View on GitHub";
        link.className = "modal-link";

        modal.append(closeBtn, img, title, desc, link);
        modalOverlay.appendChild(modal);
        document.body.appendChild(modalOverlay);
    }
}
