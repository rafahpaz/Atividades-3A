class Animal {
    constructor(nome, cor){
        this.nome = nome,
        this.cor = cor
    }
    
    imprimir(){
        console.log('Nome: ' + this.nome + '\nCor: ' + this.cor);
    }

    correr(){
        console.log('Correu');
    }
}

class Cachorro extends Animal{
    constructor(nome, cor, QtdPatas){
        super(nome, cor)
        this.QtdPatas = QtdPatas
    }

    imprimir(){
        console.log('Nome: ' + this.nome + '\nCor: ' + this.cor + '\nQtd Patas: ' + this.QtdPatas);
    }
}