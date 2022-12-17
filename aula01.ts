/**
 * PILARES DO OO
 * 
 * ABSTRAÇÃO
 * ENCAPSULAMENTO
 * HERANÇA
 * POLIMORFISMO
 */

/**
 * ABSTRAÇÃO PERMITE ISOLAR DE UM OBJETO *SOMENTE OS CONCEITOS QUE SÃO NECESSÁRIOS*
 * PARA O FUNCIONAMENTO DO PROGRAMA
 */

// POR EXEMPLO -> UMA PESSOA QUE TEM VÁRIOS ORGÕES, OSSOS ETC, ->
// NO CODIGO ABAIXO TEMOS A ABSTRAÇÃO DE SOMENTE NOME E SOBRENOME DA PESSOA.
export class Pessoa {
  private nome: string;
  private sobrenome: string;
  
  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

/**
 * ENCAPSULAMENTO VISA OCULTAR PARTES INTERNAS DE UM OBJETO E EXIBIR APENAS O NECESSÁRIO
 * PARA USO EXTERNO
 */
export class RemoteControl {
  constructor(private powerStatus = false) {}

  public turnOn() {
    this.powerStatus = true
  }

  public turnOff() {
    this.powerStatus = false
  }

  public getStatus() {
    return this.powerStatus;
  }
}

/**
 * HERANÇA VIA PASSAR CARACTERISTICAS DE UM OBJETO PARA OUTRO
 */

export abstract class Animal {
  constructor(public name: string) {}
  abstract makeNoise(): void;
}

export class Dog extends Animal {
  makeNoise(): void {
      console.log(`${this.name} está fazendo AU AU`)
  }
}

export class Cat extends Animal {
  makeNoise(): void {
      console.log(`${this.name} está fazendo MIAU`)
  }
}

/**
 * POLIMORFISMO
 * ALGO QUE TEM A HABILIDADE DE ASSUMIR DIFERENTES FORMAS
 */

export class AnimalSounds {
  public playSound(animal: Animal): void {
    animal.makeNoise()
  }
}

const dog = new Dog('Tine')
const cat = new Cat('Suzy')

const animalSounds = new AnimalSounds()

animalSounds.playSound(dog)
animalSounds.playSound(cat)