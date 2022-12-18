export class People {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
    private readonly age: number,
    protected readonly document: string
  ) {}

  getAge() {
    return this.age;
  }

  getDocument() {
    return this.document;
  }

  getFullName() {
    return `${this.name} ${this.lastName}`
  }
}

export class Student extends People {
  getFullName() {
    return `Isso vem do student, sobrescrito: ${this.name} ${this.lastName}`
  }
}

export class Client extends People {
  getFullName() {
    return `Isso vem do Client, sobrescrito: ${this.name} ${this.lastName}`
  }
}

const people = new People('Fulano', 'Miranda', 40, '98765432100');
const student = new Student('Renan', 'Leite', 25, '02415393231');
const client = new Client('Luiz', 'Silvia', 40, '12345678900');

console.log(people.getFullName())
console.log(student.getFullName())
console.log(client.getFullName())