import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();

cliente1.nome = "Brunna";
cliente1.agencia = 556664;
cliente1.cpf = 44454544111;
cliente1.saldo = 15000;
console.log(cliente1.nome);


const conta1 = new ContaCorrente();
conta1.depositar(200);
conta1.cliente = cliente1;
console.log(conta1)




