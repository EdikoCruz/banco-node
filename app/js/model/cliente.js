class Cliente {
    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    get nome() {
        return this._nome;
    }
    set nome(_nome) {
        this._nome = _nome;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(_cpf) {
        this._cpf = _cpf;
    }
    get conta() {
        return this._conta;
    }
    set conta(_conta) {
        this._conta = _conta;
    }
    toString() {
        return `Nome: ${this._nome} - CPF: ${this._cpf}`;
    }
}
