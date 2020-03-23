class ClienteEspecial extends Cliente {
    private _dependentes: Cliente[];

    constructor(nome: string, cpf: string, conta: Conta)  {
        super(nome, cpf, conta);
        this._dependentes = [];
    }

    get dependentes(): Cliente[] {
        return this._dependentes;
    }

    set dependentes(_dependentes: Cliente[]) {
        this._dependentes = _dependentes;
    }
}
