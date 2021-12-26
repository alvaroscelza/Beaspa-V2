function validateAndEditPerson() {
    personToEdit = lookForPersonWithFormPersonId();
    editPersonWithFormData(personToEdit);
}

function lookForPersonWithFormPersonId() {
    let id = document.forms["editPersonForm"]["id"].value;
    for (var i = 0; i < persistenceManager.people.length; i++) {
        let currentPerson = persistenceManager.people[i];
        if (id === currentPerson.id)
            return currentPerson;
    }
}

function editPersonWithFormData(personToEdit) {
    let imageInputFiles = document.forms["editPersonForm"]["image"].files;
    let imageOrientation, image;
    if (imageInputFiles.length > 0) {
        let imageFile = imageInputFiles[0];
        getOrientation(imageFile, function (orientation) {
            imageOrientation = orientation;
            image = imageFile.path;
            continueWithRestOfDataToEditPerson(imageOrientation, image);
        });
    }
    else
        continueWithRestOfDataToEditPerson(imageOrientation, image);
}

function continueWithRestOfDataToEditPerson(imageOrientation, image) {
    //General Data
    personToEdit.namesAndSurnames = document.forms["editPersonForm"]["namesAndSurnames"].value;
    if (image != undefined) {
        personToEdit.image = image;
        personToEdit.imageOrientation = imageOrientation;
    }
    personToEdit.aestheticCenters = $('#aestheticCentersSelect').val();
    personToEdit.birthDate = document.forms["editPersonForm"]["birthDate"].value;
    personToEdit.ci = document.forms["editPersonForm"]["ci"].value;
    personToEdit.address = document.forms["editPersonForm"]["address"].value;
    personToEdit.email = document.forms["editPersonForm"]["email"].value;
    personToEdit.phone = document.forms["editPersonForm"]["phone"].value;
    personToEdit.medicSociety = document.forms["editPersonForm"]["medicSociety"].value;
    personToEdit.mobileEmergency = document.forms["editPersonForm"]["mobileEmergency"].value;
    personToEdit.occupation = document.forms["editPersonForm"]["occupation"].value;
    personToEdit.observations = document.forms["editPersonForm"]["observations"].value;
    //Sicknesses
    personToEdit.diabetes = document.forms["editPersonForm"]["diabetes"].checked;
    personToEdit.heartProblems = document.forms["editPersonForm"]["heartProblems"].checked;
    personToEdit.hypertension = document.forms["editPersonForm"]["hypertension"].checked;
    personToEdit.metallicProsthesis = document.forms["editPersonForm"]["metallicProsthesis"].checked;
    personToEdit.pacemaker = document.forms["editPersonForm"]["pacemaker"].checked;
    personToEdit.pregnancies = document.forms["editPersonForm"]["pregnancies"].checked;
    personToEdit.surgeries = document.forms["editPersonForm"]["surgeries"].checked;
    personToEdit.allergies = document.forms["editPersonForm"]["allergies"].checked;
    personToEdit.allergiesDescription = document.forms["editPersonForm"]["allergiesDescription"].value;
    persistenceManager.save();
}