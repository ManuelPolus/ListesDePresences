import {Classe} from './classe';
import {Eleve} from './eleve';

describe('Classe', () => {

  let classe1 :Classe;
  let student1 :Eleve;
  let student2 :Eleve;
  let student3 :Eleve;


  beforeEach(()=>{
    classe1 = new Classe(1, 'A','2018-2019',[]);

    student1 = new Eleve('Jean', 'Paul',new Date('07/07/2012'),'Il est con');
    student2 = new Eleve('Marie', 'Madeleine',new Date('25/12/2012'),'Elle est vierge');
    student3 = new Eleve('Marc', 'Cook',new Date('12/06/2011'),'Le petit gosse de riche');
  });


  it('should add students', () => {
    expect(classe1.eleves).toEqual([]);

    classe1.addStudent(student1);
    classe1.addStudent(student2);
    classe1.addStudent(student3);

    expect(classe1.eleves.length).toEqual(3);

    let studentsArray = [student1,student2,student3];

    classe1.addStudents(studentsArray);

    expect(classe1.eleves.length).toEqual(6);
  });


  xit('should update students', () => {
    classe1.addStudent(student1);
  });


  it('should remove students', () => {
    classe1.addStudent(student1);
    classe1.addStudent(student2);
    classe1.addStudent(student3);

    classe1.removeStudent(student2);
    expect(classe1.eleves.length).toEqual(2);
    expect(classe1.eleves[1]).toEqual(student3);
  });


  xit('should be active when the school years do match', () => {

  });

  xit('should be unactive when the school years do not match', () => {

  });


});
