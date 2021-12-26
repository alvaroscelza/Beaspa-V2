let globalVariableBecauseJavascriptIsCrap;

function showEditPersonHTML(person) {
    globalVariableBecauseJavascriptIsCrap = person;
    $("#includerDiv").attr("w3-include-html", "editPerson.html");
    w3.includeHTML(loadNecessaryDataForEditPerson);
};

function loadNecessaryDataForEditPerson() {
    loadAestheticCenters();
    loadPersonDataInEditForm(globalVariableBecauseJavascriptIsCrap);
}

function loadPersonDataInEditForm(person) {
    //GUID
    document.forms["editPersonForm"]["id"].value = person.id;
    //General Data
    document.forms["editPersonForm"]["namesAndSurnames"].value = person.namesAndSurnames;
    document.forms["editPersonForm"]["aestheticCentersSelect"].value = person.aestheticCenters;
    document.forms["editPersonForm"]["birthDate"].value = person.birthDate;
    document.forms["editPersonForm"]["ci"].value = person.ci;
    document.forms["editPersonForm"]["address"].value = person.address;
    document.forms["editPersonForm"]["email"].value = person.email;
    document.forms["editPersonForm"]["phone"].value = person.phone;
    document.forms["editPersonForm"]["medicSociety"].value = person.medicSociety;
    document.forms["editPersonForm"]["mobileEmergency"].value = person.mobileEmergency;
    document.forms["editPersonForm"]["occupation"].value = person.occupation;
    document.forms["editPersonForm"]["observations"].value = person.observations;
    //Sicknesses
    document.forms["editPersonForm"]["diabetes"].checked = person.diabetes;
    document.forms["editPersonForm"]["heartProblems"].checked = person.heartProblems;
    document.forms["editPersonForm"]["hypertension"].checked = person.hypertension;
    document.forms["editPersonForm"]["metallicProsthesis"].checked = person.metallicProsthesis;
    document.forms["editPersonForm"]["pacemaker"].checked = person.pacemaker;
    document.forms["editPersonForm"]["pregnancies"].checked = person.pregnancies;
    document.forms["editPersonForm"]["surgeries"].checked = person.surgeries;
    document.forms["editPersonForm"]["allergies"].checked = person.allergies;
    document.forms["editPersonForm"]["allergiesDescription"].value = person.allergiesDescription;
    enableAllergiesDescriptionIfCorresponds(person.allergies);
}

function enableAllergiesDescriptionIfCorresponds(personAllergies) {
    if (personAllergies === true) {
        allergiesDescriptionPlaceHolderText = $("#allergiesDescription").attr('placeholder');
        $("#allergiesDescription").removeAttr('disabled');
        $("#allergiesDescription").removeAttr('placeholder');
    }
}