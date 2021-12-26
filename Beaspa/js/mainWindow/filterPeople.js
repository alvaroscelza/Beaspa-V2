function filterPeopleByAestheticCenter(aestheticCenterName) {
    let valueForNoFiltering = "";
    if (aestheticCenterName == valueForNoFiltering)
        renderPeople(persistenceManager.people);
    else {
        let filteredPeople = filterPeopleByAestheticCenterName(aestheticCenterName);
        renderPeople(filteredPeople);
    }
}

function filterPeopleByName(name) {
    let valueForNoFiltering = "";
    if (name == valueForNoFiltering)
        renderPeople(persistenceManager.people);
    else {
        let filteredPeople = filterPeopleByPersonName(name);
        renderPeople(filteredPeople);
    }
}