export class People {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
    private readonly age: number,
    private _document: string
  ) {}

  set document(value: string) {
    this._document = value;
  }

  get document() {
    return this._document.replace(/\D/g, '');
  }
}

const people = new People('Fulano', 'Miranda', 40, '98765432100');
people.document = '98765432199'
console.log(people.document)
