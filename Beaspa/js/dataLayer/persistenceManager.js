const { app } = require('electron').remote;
const jetpack = require('fs-jetpack');

class PersistenceManager {
    constructor() {
        this.persistenceFolder = app.getAppPath() + "\\persistencia";
        this.persistenceFilePath = app.getAppPath() + "\\persistencia\\persistencia.beaspa";
        this.people = [];
        this.aestheticCenters = [];
        this.persistenceContainer = { people: this.people, aestheticCenters: this.aestheticCenters };
    }

    save() {
        jetpack.write(this.persistenceFilePath, this.persistenceContainer);
    }

    load() {
        let dataInJSON = jetpack.read(this.persistenceFilePath);
        if (dataInJSON != undefined)
            this.loadDataInMemory(dataInJSON);
    }

    loadDataInMemory(dataInJSON) {
        this.persistenceContainer = JSON.parse(dataInJSON);
        this.people = this.persistenceContainer.people;
        this.aestheticCenters = this.persistenceContainer.aestheticCenters;
    }

    filterPeopleByAestheticCenterName(aestheticCenterName) {
        return this.people.filter(function (person) {
            return this.personHasAestheticCenterWithName(person, aestheticCenterName);
        });
    }

    personHasAestheticCenterWithName(person, aestheticCenterName) {
        for (var i = 0; i < person.aestheticCenters.length; i++)
            if (person.aestheticCenters[i] == aestheticCenterName)
                return true;
        return false;
    }

    filterPeopleByPersonName(name) {
        return this.people.filter(function (person) {
            return person.namesAndSurnames.indexOf(name) !== -1;
        });
    }
}

let persistenceManager = new PersistenceManager();