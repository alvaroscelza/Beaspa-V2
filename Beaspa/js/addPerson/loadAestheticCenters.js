function loadAestheticCenters() {
    persistenceManager.aestheticCenters.forEach(loadInAestheticCentersSelect);
}

function loadInAestheticCentersSelect(aestheticCenter, aestheticCenterIndex) {
    let aestheticCentersSelect = document.getElementById("aestheticCentersSelect");
    let optionHTML = document.createElement("option");
    optionHTML.innerText = aestheticCenter;
    aestheticCentersSelect.appendChild(optionHTML);
}