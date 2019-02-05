export class Eleve {

  prenom: string;
  nom: string;
  dateDeNaissance: Date;
  note: string;


  constructor(prenom: string, nom: string, dateDeNaissance: Date, note: string) {
    this.prenom = prenom;
    this.nom = nom;
    this.dateDeNaissance = dateDeNaissance;
    this.note = note;
  }

}
