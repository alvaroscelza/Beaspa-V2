function goBackToMainMenu(imgGoBack) {
    $("#includerDiv").attr("w3-include-html", "mainWindow.html");
    w3.includeHTML(renderPeopleAgain);
}

function renderPeopleAgain() {
    renderPeople(persistenceManager.people);
}