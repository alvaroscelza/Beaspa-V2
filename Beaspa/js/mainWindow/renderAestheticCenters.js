function renderAestheticCenters() {
    cleanAestheticCentersTable();
    persistenceManager.aestheticCenters.forEach(renderCenter);
}

function cleanAestheticCentersTable() {
    let oldTableBody = document.getElementById("aestheticCentersTableBody");
    var new_tbody = document.createElement('tbody');
    new_tbody.setAttribute("id", "aestheticCentersTableBody");
    oldTableBody.parentNode.replaceChild(new_tbody, oldTableBody)
}

function renderCenter(center, centerIndex) {
    let tableBody = document.getElementById("aestheticCentersTableBody");
    let newRow = tableBody.insertRow(lastPosition);
    insertAestheticCenterNameInNewCell(newRow, center);
    insertDeleteButtonInNewCell(newRow, center);
}

function insertAestheticCenterNameInNewCell(newRow, center) {
    let newCell = newRow.insertCell(lastPosition);
    newCell.innerHTML = center;
}

function insertDeleteButtonInNewCell(newRow, center) {
    let newCell = newRow.insertCell(lastPosition);
    newCell.innerHTML =
        "<img style='cursor:pointer' src='img/delete.png' height='20' width='20'" +
    "onclick='deleteAestheticCenter(\"" + center + "\")' > ";
}