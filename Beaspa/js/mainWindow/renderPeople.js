let cellAestheticCenters;
let lastPosition = -1;

function renderPeople(peopleToRender) {
    cleanPeopleTable();
    peopleToRender.forEach(renderPerson);
}

function cleanPeopleTable() {
    let oldTableBody = document.getElementById("peopleTableBody");
    var new_tbody = document.createElement('tbody');
    new_tbody.setAttribute("id", "peopleTableBody");
    oldTableBody.parentNode.replaceChild(new_tbody, oldTableBody)
}

function renderPerson(person, personIndex) {
    let tableBody = document.getElementById("peopleTableBody");
    let newRow = tableBody.insertRow(lastPosition);
    insertPersonImageIfNotNullInNewCell(newRow, person);
    insertPersonConactDataInNewCell(newRow, person);
    insertPersonOtherDataInNewCell(newRow, person);
    insertPersonAestheticCentersInNewCell(newRow, person);
    insertPersonSicknesses(newRow, person);
    insertPersonObservationsInNewCell(newRow, person);
    insertPeopleEditButtonInNewCell(newRow, person);
    insertPeopleDeleteButtonInNewCell(newRow, person);
}

function insertPersonImageIfNotNullInNewCell(newRow, person) {
    let cellImage = newRow.insertCell(lastPosition);
    if (person.image != undefined) {
        let imageHTML = document.createElement("IMG");
        imageHTML.src = person.image;
        imageHTML.height = 100;
        imageHTML.width = 100;
        resetOrientation(imageHTML.src, person.imageOrientation, function (resetBase64Image) {
            imageHTML.src = resetBase64Image;
            cellImage.appendChild(imageHTML);
        });
    }
    else {
        cellImage.className = "align-middle";
        cellImage.innerHTML = "Sin Foto";
    }
}

function insertPersonConactDataInNewCell(newRow, person) {
    let cellContactData = newRow.insertCell(lastPosition);
    showLoadedContactData(cellContactData, person);
}

function showLoadedContactData(cellContactData, person) {
    if (person.namesAndSurnames != "")
        cellContactData.innerHTML += person.namesAndSurnames + "<br />";
    if (person.address != "")
        cellContactData.innerHTML += "Dirección: " + person.address + "<br />";
    if (person.email != "")
        cellContactData.innerHTML += "Email: " + person.email + "<br />";
    if (person.phone != "")
        cellContactData.innerHTML += "Teléfono: " + person.phone;
}

function insertPersonOtherDataInNewCell(newRow, person) {
    let cellOtherData = newRow.insertCell(lastPosition);
    showLoadedOtherData(cellOtherData, person);
}

function showLoadedOtherData(cellOtherData, person) {
    if (person.birthDate != "")
        cellOtherData.innerHTML += "Nacimiento: " + person.birthDate + "<br />";
    if (person.ci != "")
        cellOtherData.innerHTML += "CI: " + person.ci + "<br />";
    if (person.medicSociety != "")
        cellOtherData.innerHTML += "Sociedad Médica: " + person.medicSociety + "<br />";
    if (person.mobileEmergency != "")
        cellOtherData.innerHTML += "Emergencia Móvil: " + person.mobileEmergency + "<br />";
    if (person.occupation != "")
        cellOtherData.innerHTML += "Ocupación: " + person.occupation;
}

function insertPersonAestheticCentersInNewCell(newRow, person) {
    cellAestheticCenters = newRow.insertCell(lastPosition);
    for (let centerIndex in person.aestheticCenters)
        cellAestheticCenters.innerHTML += person.aestheticCenters[centerIndex] + "<br />";
}

function insertPersonSicknesses(newRow, person) {
    let cellSicknesses = newRow.insertCell(lastPosition);
    for (let property in person)
        if (person.hasOwnProperty(property))
            showCheckedBooleans(cellSicknesses, person, property);
}

function showCheckedBooleans(cellSicknesses, person, property) {
    if (person[property] === true) {
        cellSicknesses.innerHTML += person[property + "Spanish"] + "<br />";
        ifAllergiesShowAllergiesDescription(cellSicknesses, person, property);
    }
}

function ifAllergiesShowAllergiesDescription(cellSicknesses, person, property) {
    if (property === "allergies")
        cellSicknesses.innerHTML +=
            "<br />" +
            "Descripción de Alergias: " +
            person.allergiesDescription;
}

function insertPersonObservationsInNewCell(newRow, person) {
    cellObservations = newRow.insertCell(lastPosition);
    cellObservations.innerHTML = person.observations;
}

function insertPeopleEditButtonInNewCell(newRow, person) {
    let newCell = newRow.insertCell(lastPosition);
    newCell.className = "align-middle";
    let newImage = document.createElement('img');
    newImage.style.cursor = "pointer";
    newImage.src = "img/edit.png";
    newImage.height = "20";
    newImage.width = "20";
    newImage.onclick = function () { showEditPersonHTML(person) };
    newCell.appendChild(newImage);
}

function insertPeopleDeleteButtonInNewCell(newRow, person) {
    let newCell = newRow.insertCell(lastPosition);
    newCell.className = "align-middle";
    newCell.innerHTML =
        "<img style='cursor:pointer' src='img/delete.png' height='20' width='20'" +
        "onclick='deletePerson(\"" + person + "\")' > ";
}