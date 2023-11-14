import { v4 as uuidv4 } from 'uuid';

export class Students {
    constructor(nome, email, idade) {
        this.id = uuidv4();
        this.nome = nome;
        this.email = email;
        this.idade = idade;
    }
}