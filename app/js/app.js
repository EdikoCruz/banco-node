const clienteController = new ClienteController();
const contaController = new ContaController();
if (window.location.href.includes('/app/index.html')) {
    contaController.listar();
}
else if (window.location.href.includes('/app/clientes.html')) {
    clienteController.listar();
}
/**
 * CONTAS
 */
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
/**
 * CLIENTES
 */
