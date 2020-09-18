class Cliente{
    cpf;
    nome;
    agencia; 

}

class ContaCorrente{
    saldo = 0;
    agencia;
    numero;

    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
            return this.saldo;
        }
    }

    sacar(valor){
        if(valor <= this.saldo){
            this.saldo -= valor;
        }
    }

}

const cliente1 = new Cliente();
cliente1.agencia = 4258;
cliente1.cpf = 5548887747;
cliente1.nome = "Brunna";

console.log(cliente1);

const conta1 = new ContaCorrente();
conta1.agencia = 455;
conta1.depositar(200);
conta1.sacar(50);

console.log(conta1);

