class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._dependentes = [];
    }
    get dependentes() {
        return this._dependentes;
    }
    set dependentes(_dependentes) {
        this._dependentes = _dependentes;
    }
}
