class ClienteController {
    constructor() {
        this.inputNome =
            document.querySelector("#nome");
        this.inputCpf =
            document.querySelector("#cpf");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        const cliente = new Cliente(this.inputNome.value, this.inputCpf.value, undefined);
        this.clientes.inserir(cliente);
        this.inserirContaNoHTML(cliente);
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirContaNoHTML(cliente);
        });
    }
    inserirContaNoHTML(cliente) {
        const elementoTr = document.createElement('tr');
        const elementoNome = document.createElement('td');
        elementoNome.textContent = cliente.nome;
        elementoTr.appendChild(elementoNome);
        const elementoCpf = document.createElement('td');
        elementoCpf.textContent = cliente.cpf;
        elementoTr.appendChild(elementoCpf);
        const elementoClose = document.createElement('td');
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo conta ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.parentElement.remove();
        });
        elementoClose.appendChild(botaoApagar);
        elementoTr.appendChild(elementoClose);
        document.querySelector('tbody').appendChild(elementoTr);
    }
}
