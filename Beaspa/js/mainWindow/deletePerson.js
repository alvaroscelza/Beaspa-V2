function deletePerson(person) {
    deleteFromAllPeople(person);
    persistenceManager.save();
    renderPeople(persistenceManager.people);
}

function deleteFromAllPeople(person) {
    let index = persistenceManager.people.indexOf(person);
    persistenceManager.people.splice(index, 1);
}