class Peixe extends Animal{
    constructor(nome, comprimento, patas, cor, ambiente, velocidade, caracteristica ){
        super(nome, comprimento, patas, cor, ambiente, velocidade)
        this.caracteristica = caracteristica
    }

    AlternarCaracteristicas(caracteristica){
        this.caracteristica = caracteristica
    }

    RetornarCaracteristicas(){
        this.caracteristica = this.caracteristica
    }
    
}