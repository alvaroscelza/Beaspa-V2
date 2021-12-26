let personAestheticCenters = [];

function validateAndCreatePerson() {
    let imageInputFiles = document.forms["addPersonForm"]["image"].files;
    let imageOrientation, image;
    if (imageInputFiles.length > 0) {
        let imageFile = imageInputFiles[0];
        getOrientation(imageFile, function (orientation) {
            imageOrientation = orientation;
            image = imageFile.path;
            continueWithRestOfDataToAddPerson(imageOrientation, image);
        });
    }
    else
        continueWithRestOfDataToAddPerson(imageOrientation, image);
}

function continueWithRestOfDataToAddPerson(imageOrientation, image) {
    //General Data
    let namesAndSurnames = document.forms["addPersonForm"]["namesAndSurnames"].value;
    let personAestheticCenters = $('#aestheticCentersSelect').val();
    let birthDate = document.forms["addPersonForm"]["birthDate"].value;
    let ci = document.forms["addPersonForm"]["ci"].value;
    let address = document.forms["addPersonForm"]["address"].value;
    let email = document.forms["addPersonForm"]["email"].value;
    let phone = document.forms["addPersonForm"]["phone"].value;
    let medicSociety = document.forms["addPersonForm"]["medicSociety"].value;
    let mobileEmergency = document.forms["addPersonForm"]["mobileEmergency"].value;
    let occupation = document.forms["addPersonForm"]["occupation"].value;
    let observations = document.forms["addPersonForm"]["observations"].value;
    //Sicknesses
    let diabetes = document.forms["addPersonForm"]["diabetes"].checked;
    let heartProblems = document.forms["addPersonForm"]["heartProblems"].checked;
    let hypertension = document.forms["addPersonForm"]["hypertension"].checked;
    let metallicProsthesis = document.forms["addPersonForm"]["metallicProsthesis"].checked;
    let pacemaker = document.forms["addPersonForm"]["pacemaker"].checked;
    let pregnancies = document.forms["addPersonForm"]["pregnancies"].checked;
    let surgeries = document.forms["addPersonForm"]["surgeries"].checked;
    let allergies = document.forms["addPersonForm"]["allergies"].checked;
    let allergiesDescription = document.forms["addPersonForm"]["allergiesDescription"].value;
    //functionality
    let person = new Person(namesAndSurnames, image, imageOrientation, personAestheticCenters, birthDate, ci,
        address, email, phone, medicSociety, mobileEmergency, occupation, observations, diabetes, heartProblems,
        hypertension, metallicProsthesis, pacemaker, pregnancies, surgeries, allergies, allergiesDescription);
    persistenceManager.people.push(person);
    persistenceManager.save();
}