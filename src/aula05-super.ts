export class People {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
    private readonly age: number,
    protected readonly document: string
  ) {}

  room: string = '';

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
  constructor(
    name: string,
    lastName: string,
    age: number,
    document: string,
    public room: string
  ) {
    super(name, lastName, age, document);
  }

  getFullName() {
    console.log('Fazendo algo antes')
    return super.getFullName();
  }
}

export class Client extends People {
  getFullName() {
    return `Isso vem do Client, sobrescrito: ${this.name} ${this.lastName}`
  }
}

const people = new People('Fulano', 'Miranda', 40, '98765432100');
const student = new Student('Renan', 'Leite', 25, '02415393231', '0001');
const client = new Client('Luiz', 'Silvia', 40, '12345678900');

console.log(people.getFullName())
console.log(student.getFullName())
console.log(client.getFullName())
console.log(student)