package Rafael;

public class Animal {
	public String nome;
	public double peso;
	
	public Animal() {}
	public Animal(String nome, double peso) {
		this.nome = nome;
		this.peso = peso;
	}
	
	public void imprimir() {
		System.out.println(
				"Nome: " +this.nome+ "\nPeso: " + this.peso);
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setPeso(double peso) {
		this.peso = peso;
	}

	public String getNome() {
		return nome;
	}

	public double getPeso() {
		return peso;
	}
	
	
}
