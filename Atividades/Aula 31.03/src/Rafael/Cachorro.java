package Rafael;

public class Cachorro extends Animal {

	public String raca;
	
	public Cachorro() {}
	public Cachorro(String nome, double peso, String raca) {
		super(nome, peso);
		this.raca = raca;
	}
	
	public void imprimir() {
		System.out.println(
				"\nNome: " +this.nome + "\nPeso: " + this.peso + "\nRaca: " + this.raca);
	}

	public String getRaca() {
		return raca;
	}
	public void setRaca(String raca) {
		this.raca = raca;
	}
}
