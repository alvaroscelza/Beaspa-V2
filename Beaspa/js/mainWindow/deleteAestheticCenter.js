function deleteAestheticCenter(AestheticCenter) {
    deleteFromAllAestheticCenters(AestheticCenter);
    deleteThisCenterFromPeople(AestheticCenter);
    persistenceManager.save();
    renderAestheticCenters();
    renderPeople(persistenceManager.people);
}

function deleteFromAllAestheticCenters(AestheticCenter) {
    let index = persistenceManager.aestheticCenters.indexOf(AestheticCenter);
    persistenceManager.aestheticCenters.splice(index, 1);
}

function deleteThisCenterFromPeople(AestheticCenter) {
    for (var i = 0; i < persistenceManager.people.length; i++) {
        let currentPerson = persistenceManager.people[i];
        deleteCenterFromThisPersonIfHeHasIt(AestheticCenter, currentPerson);
    }
}

function deleteCenterFromThisPersonIfHeHasIt(AestheticCenter, currentPerson) {
    personAestheticCenters = currentPerson.aestheticCenters;
    for (var i = 0; i < personAestheticCenters.length; i++) {
        currentAestheticCenter = personAestheticCenters[i];
        if (currentAestheticCenter == AestheticCenter)
            personAestheticCenters.splice(i, 1);
    }
}