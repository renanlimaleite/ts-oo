export class Employee {
  constructor(
    public readonly string: string,
    public readonly lastName: string 
  ) {}
}

export class Company {
  readonly name: string;
  private readonly employees: Employee[] = []
  protected readonly document: string;

  constructor(name: string, document: string) {
    this.name = name;
    this.document = document;
  }

  setEmployee(employee: Employee) {
    this.employees.push(employee)
  }

  getEmployee() {
    for (const employee of this.employees) {
      console.log(employee)
    }
  }
}

const company1 = new Company('Facebook', '11.111.111/1111-11');

const employee1 = new Employee('Renan', 'Leite');
const employee2 = new Employee('Luiz', 'Otavio');
const employee3 = new Employee('Maria', 'Miranda');

company1.setEmployee(employee1)
company1.setEmployee(employee2)
company1.setEmployee(employee3)

console.log(company1);

company1.getEmployee();