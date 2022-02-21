// this function runs when the DOM is ready, i.e. when the document has been parsed
document.addEventListener("DOMContentLoaded", function() {
    const commercialDiv = document.getElementById("commercial-fitouts");
    const commercialBtn = document.getElementById("commercial-btn");
    const wiringDiv = document.getElementById("wiring");
    const wiringBtn = document.getElementById("wiring-btn");
    const dataAndCommsDiv = document.getElementById("data-and-comms");
    const dataAndCommsBtn = document.getElementById("data-and-comms-btn");
    const industrialDiv = document.getElementById("industrial");
    const industrialBtn = document.getElementById("industrial-btn");
    const greenEnergyDiv = document.getElementById("green-energy");
    const greenEnergyBtn = document.getElementById("green-energy-btn");
    const projectConsultationsDiv = document.getElementById("project-consultations");
    const projectConsultationsBtn = document.getElementById("project-consultations-btn");

    commercialBtn.onclick = function () {
        if (commercialDiv.style.display !== "block") {
            commercialDiv.style.display = "block";
        } else {
            commercialDiv.style.display = "none";
        }
    };

    wiringBtn.onclick = function () {
        if (wiringDiv.style.display !== "block") {
            wiringDiv.style.display = "block";
        } else {
            wiringDiv.style.display = "none";
        }
    };

    dataAndCommsBtn.onclick = function () {
        if (dataAndCommsDiv.style.display !== "block") {
            dataAndCommsDiv.style.display = "block";
        } else {
            dataAndCommsDiv.style.display = "none";
        }
    };

    industrialBtn.onclick = function () {
        if (industrialDiv.style.display !== "block") {
            industrialDiv.style.display = "block";
        } else {
            industrialDiv.style.display = "none";
        }
    };

    greenEnergyBtn.onclick = function () {
        if (greenEnergyDiv.style.display !== "block") {
            greenEnergyDiv.style.display = "block";
        } else {
            greenEnergyDiv.style.display = "none";
        }
    };

    projectConsultationsBtn.onclick = function () {
        if (projectConsultationsDiv.style.display !== "block") {
            projectConsultationsDiv.style.display = "block";
        } else {
            projectConsultationsDiv.style.display = "none";
        }
    };

});