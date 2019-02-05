import {Eleve} from './eleve';

export class Classe {

  annee: number;
  nom: string;
  promo: string;
  eleves: Eleve[];


  constructor(annee: number, nom: string, promo: string, eleves: any[]) {
    this.annee = annee;
    this.nom = nom;
    this.promo = promo;
    this.eleves = eleves;
  }


  addStudent(student: Eleve) {
    this.eleves.push(student);
  }


  removeStudent(student: Eleve) {
    this.eleves = this.eleves.filter(b => b !== student);
  }


  addStudents(studentsArray: Eleve[]) {
    this.eleves = this.eleves.concat(studentsArray);
  }
}
