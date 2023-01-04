/**
 * MÉTODOS ESTÁTICOS NÃO DEPENDEM DE VALORES DO PROPRIO OBJETO/CLASSE!
 * 
 * MÉTODOS DE CLASSES, DEPENDEM DE VALORES DO PROPRIO OBJETO!
 * 
 * NÃO PODEMOS CRIAR METEODOS ESTATICOS QUE ACESSAM DADOS INTERNOS DO OBJETO.
 * 
 * MÉTODOS ESTÁTICOS TEM QUE DAR O MESMO VALOR INDEPENDENTE SE DOS VALORES DO OBJETO/CLASSE
 */
export class People {
  static defaultAge = 0;
  static defaultDocument = '000.000.000-00'

  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public document: string
  ) {}

  get defaultValues() {
    return {
      defaultAge: People.defaultAge,
      defaultDocument: People.defaultDocument
    }
  }

  static createPeople(nome: string, lastName: string): People {
    return new People(nome, lastName, People.defaultAge, People.defaultDocument)
  }
}

const people = new People('Fulano', 'Miranda', 40, '98765432100');
people.document = '98765432199'

const people2 = People.createPeople('Renan', 'Lima');

console.log(people)
console.log(people2)
console.log(people.defaultValues)