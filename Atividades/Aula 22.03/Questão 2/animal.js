class Animal{
    constructor(nome, comprimento, patas, cor, ambiente, velocidade){
        this.nome = nome,
        this.comprimento = comprimento,
        this.patas = patas,
        this.cor = cor,
        this.ambiente = ambiente,
        this.velocidade = velocidade
    }

    AlterarNome(nome){
        this.nome = nome
    }

    AlterarComprimento(comprimento){
        this.comprimento = comprimento
    }

    AlterarPatas(patas){
        this.patas = patas
    }

    AlterarCor(cor){
        this.cor = cor
    }

    AlterarAmbiente(ambiente){
        this.ambiente = ambiente
    }

    AlterarVelocidade(velocidade){
        this.velocidade = velocidade
    }
    Dados(obj){
        console.table(obj);
    }
}
