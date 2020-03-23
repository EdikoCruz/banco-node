class Clientes {
    private clientes: Cliente[];

    constructor() {
        this.clientes = [];
        this.clientes.push(
            new Cliente(
                'John Doe 1',
                '111',
                new Conta('1', 100)));
        this.clientes.push(
            new Cliente(
                'John Doe 2',
                '222',
                new Conta('2', 200)));
        this.clientes.push(
            new ClienteEspecial(
                'John Doe 3',
                '333',
                new Conta('3', 300)));
    }

    inserir(cliente: Cliente): void{
        this.clientes.push(cliente);
    }

    remover (cpf: string): void {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1)
            }
        }
    }

    pesquisar(cpf: string) : Cliente {
        return this.clientes.find(
            client => client.cpf === cpf
        );
    }

    listar(): Cliente[] {
        return this.clientes;
    }
}