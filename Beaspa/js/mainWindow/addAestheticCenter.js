function validateAndCreateAestheticCenter() {
    let name = document.forms["addAestheticCenterForm"]["name"].value;
    persistenceManager.aestheticCenters.push(name);
    persistenceManager.save();
}