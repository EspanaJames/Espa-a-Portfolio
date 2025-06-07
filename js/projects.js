function renderImportantProjects() {
    const buttonContainer = document.querySelector(".buttonContainer");
    const displayContainer = document.querySelector(".container");

    buttonContainer.innerHTML = "";
    displayContainer.innerHTML = "";

    const tags = [
        { name: "ASSEMBLY", icon: "fas fa-globe" },
        { name: "MACHINE VISION", icon: "fas fa-desktop" },
        { name: "MICROPROCESSOR", icon: "fas fa-microchip" },
        { name: "HDL", icon: "fas fa-code" },
        { name: "NETWORKING", icon: "fas fa-network-wired" }
    ];

    const projects = [
        {
            name: "SUMOBOT/HOCKEYBOT",
            tag: "MICROPROCESSOR",
            image: "https://via.placeholder.com/300x180?text=Portfolio",
            description: "We were tasked to showcase our bots during the last roboseum event. Here is the enjoyment that we went through with the technicalities uploaded. congrats to our team for reaching the finals!",
            github: "https://github.com/EspanaJames/sumobot-and-hockeybot",
            video: "https://www.youtube.com/embed/Vhf0IgsramA?si=SDGJib4H1lL5Ye3_" 
        },
        {
            name: "HDL FINALS: ELEVATOR SYSTEM",
            tag: "HDL",
            image: "https://via.placeholder.com/300x180text=App",
            description: "The project is a verilog simulation of a previous project we made last semester. The project is an elevator with a infrared and pressure sensor. The pressure sensor is meant to indicate that there is someone in the elevator and that the floors will now switch if the switches are manipulated. The infrared sensor is meant to indicate whether or not someone is in between the doors. This would determine if the doors are closeable/manipulateable or not. The verilog project has some modifications compared to the actual project. The clock is a new addition, since the actual project works instantly and does not have to rely on a clock. This was done by the student to help improve the logic and complexity of the functions, also to improve the way of simulating the results.",
            github: "https://github.com/EspanaJames/verilog-FINAL-OUTPUT",
            video: "https://www.youtube.com/embed/v4b-uLO-OE8?si=p1cKcVIGUPsjTBXG" // Embed link
        },
        {
            name: "HDL ACTIVITY: JK-FLIPFLOP",
            tag: "HDL",
            image: "https://via.placeholder.com/300x180text=App",
            description: "The project is a verilog simulation of a JK flip flop. The JK flip flop is a type of flip flop that has two inputs, J and K, and one output, Q. The output Q will toggle between 0 and 1 based on the inputs J and K. If J is high and K is low, the output will be set to 1. If J is low and K is high, the output will be set to 0. If both J and K are high, the output will toggle between 0 and 1. This project was done by the student to help improve their understanding of flip flops and how they work in digital circuits.",
            github: "https://github.com/EspanaJames/verilog-JK-FLIPFLOP",
            video: "https://www.youtube.com/embed/mz5ofaYAkK0?si=qT22DGAm7wMx44tB" // Embed link
        },
        {
            name: "HDL ACTIVITY: T-FLIPFLOP",
            tag: "HDL",
            image: "https://via.placeholder.com/300x180text=App",
            description: "The project is a verilog simulation of a T flip flop. The T flip flop is a type of flip flop that has one input, T, and one output, Q. The output Q will toggle between 0 and 1 based on the input T. If T is high, the output will toggle between 0 and 1. If T is low, the output will remain the same. This project was done by the student to help improve their understanding of flip flops and how they work in digital circuits.",
            github: "https://github.com/EspanaJames/verilog-T-FLIPFLOP",
            video: "https://www.youtube.com/embed/v4tKgxZg_9U?si=FhSB5S6rYBm0GomG" // Embed link
        },
        {
            name: "HDL ACTIVITY: 8bit Shift Register with a twist",
            tag: "HDL",
            image: "https://via.placeholder.com/300x180text=App",
            description: "The project is a verilog simulation of an 8-bit shift register. The shift register is a type of digital circuit that can store and shift data. It has 8 bits of storage and can shift the data left or right based on the input. This project has a unique feature where the data can be shifted left or right based on certain inputs.",
            github: "https://github.com/EspanaJames/verilog-8SHIFTREG",
            video: "https://www.youtube.com/embed/cK1-A3dnbwI?si=U-SgZlmqya2uFTBq" // Embed link
        },
        {
            name: "HDL ACTIVITY: 4bit counter with a twist",
            tag: "HDL",
            image: "https://via.placeholder.com/300x180text=App",
            description: "The project is a verilog simulation of a 4bit counter with a twist. The counter is a type of digital circuit that can count from 0 to 15. It has a unique feature where the counter can count by 2 and can also be set to count when there is a positive or negative edge of the clock signal. I made a mistake with the edit, that is supposed to say 4bit counter with a twist. The twist is that the counter can count by 2 and can also be set to count when there is a positive or negative edge of the clock signal.",
            github: "https://github.com/EspanaJames/verilog-4BIT-COUNTER",
            video: "https://www.youtube.com/embed/NT10ZsGp3Do?si=11ccf533n0XXPOUv" // Embed link
        },
        {
            name: "NETWORKING FINALS: UB DAYS NETWORK SIMULATION",
            tag: "NETWORKING",
            image: "https://via.placeholder.com/300x180text=App",
            description: "The project is a networking simulation of the UB Days event. There are three groups. The first group of devices is the wireless, the second group is the wired, and the last group is a mix of both. The goal is for all devices to communicate with the main server through the specified structure in the file.",
            github: "https://github.com/EspanaJames/networkFinals",
            video: "https://www.youtube.com/embed/cP4p7nn2grw?si=sui_I_GFHl5G-yUW" // Embed link
        },
        {
            name: "NETWORKING ACTIVITY: one-to-one, one-to-many, many-to-many",
            tag: "NETWORKING",
            image: "https://via.placeholder.com/300x180text=App",
            description: "The project is a networking simulation of three different connection types. The first connection is a peer-to-peer connection or one-to-one connection. The second connection is a one-to-many connection. The third connection is a many-to-many connection. The goal is to simulate the different types of connections and how they work in a network.",
            github: "https://github.com/EspanaJames/networkActivity",
            video: "https://www.youtube.com/embed/Rn0BlB0lvIc?si=1yi_svbxFsuOfSsz" // Embed link
        },
        {
            name: "MACHINE VISION: FACE DETECTION ATTENDANCE SYSTEM",
            tag: "MACHINE VISION",
            image: "https://via.placeholder.com/300x180text=App",
            description: "The project is a face detection attendance system. The system uses a camera to detect faces and mark attendance based on the detected faces. The system can also recognize faces and mark attendance based on the recognized faces. The project was done by the student to help improve their understanding of machine vision and how it can be used in real-world applications.",
            github: "https://github.com/EspanaJames/machineVisionFinals",
            video: "https://www.youtube.com/embed/TvoDMYG23h4?si=qqkZ8rXrH_HKBsbf" // Embed link
        },
        {
            name: "ASSEMBLY ADVENTURES: DISKPLAY PROJECT",
            tag: "ASSEMBLY",
            image: "https://via.placeholder.com/300x180text=App",
            description: "The project is a disk display that can hold up to 10kgs. This disk display is coded in assembly language and consists of buttons, sensors, and a servo motor. This was intended to be an extension of the robot arm but was not completed. In an attempt to create a product that meets the requirements of the project, this was constructed.",
            github: "https://github.com/EspanaJames/assembly_DISKPLAY",
            video: "https://www.youtube.com/embed/PRM6JLHzXI8?si=0uTiOejalgQBpiMM" // Embed link
        },
        
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
            img.addEventListener("click", () => renderProjectDetails(project));

            card.appendChild(img);
            grid.appendChild(card);
        });

        displayContainer.appendChild(grid);
    }

    function renderProjectDetails(project) {
    displayContainer.innerHTML = "";

    const detail = document.createElement("div");
    detail.className = "project-detail";

    const backBtn = document.createElement("button");
    backBtn.textContent = "← Back to Projects";
    backBtn.className = "back-button";
    backBtn.addEventListener("click", () => renderProjects(project.tag));

    const title = document.createElement("h2");
    title.textContent = project.name;

    const desc = document.createElement("p");
    desc.textContent = project.description;

    const videoContainer = document.createElement("div");
    videoContainer.className = "video-container";

    const video = document.createElement("iframe");
    video.width = "560";
    video.height = "315";
    video.src = project.video || "https://www.youtube.com/embed/dQw4w9WgXcQ";
    video.title = "Project Demo";
    video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    video.allowFullscreen = true;

    const link = document.createElement("a");
    link.href = project.github;
    link.target = "_blank";
    link.textContent = "View on GitHub";
    link.className = "github-link";

    videoContainer.append(video, link);
    detail.append(backBtn, title, desc, videoContainer);
    displayContainer.appendChild(detail);

}


}
