class Person {
    constructor(namesAndSurnames, image, imageOrientation, aestheticCenters, birthDate, ci, address, email, phone, medicSociety,
        mobileEmergency, occupation, observations, diabetes, heartProblems, hypertension,
        metallicProsthesis, pacemaker, pregnancies, surgeries, allergies, allergiesDescription) {
        this.id = this.generateGUID();
        this.namesAndSurnames = namesAndSurnames;
        this.image = image;
        this.imageOrientation = imageOrientation;
        this.aestheticCenters = aestheticCenters;
        this.birthDate = birthDate;
        this.ci = ci;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.medicSociety = medicSociety;
        this.mobileEmergency = mobileEmergency;
        this.occupation = occupation;
        this.observations = observations;
        this.diabetes = diabetes;
        this.heartProblems = heartProblems;
        this.hypertension = hypertension;
        this.metallicProsthesis = metallicProsthesis;
        this.pacemaker = pacemaker;
        this.pregnancies = pregnancies;
        this.surgeries = surgeries;
        this.allergies = allergies;
        this.allergiesDescription = allergiesDescription;

        this.diabetesSpanish = "Diabetes";
        this.heartProblemsSpanish = "Problemas Cardíacos";
        this.hypertensionSpanish = "Hipertensión";
        this.metallicProsthesisSpanish = "Prótesis Metálica";
        this.pacemakerSpanish = "Marcapasos";
        this.pregnanciesSpanish = "Embarazos";
        this.surgeriesSpanish = "Cirugías";
        this.allergiesSpanish = "Alergias";
    }

    generateGUID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
}