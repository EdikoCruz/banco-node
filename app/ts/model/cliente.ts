class Cliente {
    private _nome: string;
    private _cpf: string;
    private _conta: Conta;

    constructor(nome: string, cpf: string, conta: Conta)  {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(_nome: string) {
        this._nome = _nome;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(_cpf: string) {
        this._cpf = _cpf;
    }

    get conta(): Conta {
        return this._conta;
    }

    set conta(_conta: Conta) {
        this._conta = _conta;
    }

    toString(): string {
        return `Nome: ${this._nome} - CPF: ${this._cpf}`;
    }
}
