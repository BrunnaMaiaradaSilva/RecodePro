export class ContaCorrente{
    cliente;

    _saldo = 0;
    _agencia;
    

    sacar(valor){
        if(this.saldo <= valor){
            this.saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this.saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}