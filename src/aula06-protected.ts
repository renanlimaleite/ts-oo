export class Employee {
  constructor(
    public readonly string: string,
    public readonly lastName: string 
  ) {}
}

/**
 * protected só é acessivel na classes e nas subclasses via herança
 */
export class Company {
  readonly name: string;
  protected readonly employees: Employee[] = []
  private readonly document: string;

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

export class Udemy extends Company {
  constructor() {
    super('Udemy', '11.111.111/1111-11')
  }

  popEmployee(): Employee | null {
    const employee = this.employees.pop();
    if (employee) return employee;
    return null;
  }
}

const company1 = new Udemy();

const employee1 = new Employee('Renan', 'Leite');
const employee2 = new Employee('Luiz', 'Otavio');
const employee3 = new Employee('Maria', 'Miranda');

company1.setEmployee(employee1)
company1.setEmployee(employee2)
company1.setEmployee(employee3)
company1.popEmployee();


console.log(company1);

company1.getEmployee();