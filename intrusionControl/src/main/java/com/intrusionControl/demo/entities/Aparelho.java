package com.intrusionControl.demo.entities;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_aparelho")
public class Aparelho {

    @Id
    private String id_aparelho;
    
    private String marcaModelo;
    private String contaGoogle;
    private String chip01;
    private String chip02;
    private String whatsapp01;
    private String whatsapp02;
    private String whatsappGb01;
    private String whatsappGb02;
    
    @Column(columnDefinition = "TEXT")
    private String observacao;
    

   //Construtor vazio. Para instaciar este objeto sem informar nada a ele;
   public Aparelho() {
	   
   }

   //Construtor com argumentos;
   public Aparelho(String id_aparelho, String marcaModelo, String contaGoogle, String chip01, String chip02, String whatsapp01,
			String whatsapp02, String whatsappGb01, String whatsappGb02, String observacao) {
		super();
		this.id_aparelho = id_aparelho;
		this.marcaModelo = marcaModelo;
		this.contaGoogle = contaGoogle;
		this.chip01 = chip01;
		this.chip02 = chip02;
		this.whatsapp01 = whatsapp01;
		this.whatsapp02 = whatsapp02;
		this.whatsappGb01 = whatsappGb01;
		this.whatsappGb02 = whatsappGb02;
		this.observacao = observacao;
	}

	public String getId_aparelho() {
		return id_aparelho;
	}

	public void setId_aparelho(String id_aparelho) {
		this.id_aparelho = id_aparelho;
	}

	public String getMarcaModelo() {
		return marcaModelo;
	}

	public void setMarcaModelo(String marcaModelo) {
		this.marcaModelo = marcaModelo;
	}

	public String getContaGoogle() {
		return contaGoogle;
	}

	public void setContaGoogle(String contaGoogle) {
		this.contaGoogle = contaGoogle;
	}

	public String getChip01() {
		return chip01;
	}

	public void setChip01(String chip01) {
		this.chip01 = chip01;
	}

	public String getChip02() {
		return chip02;
	}

	public void setChip02(String chip02) {
		this.chip02 = chip02;
	}

	public String getWhatsapp01() {
		return whatsapp01;
	}

	public void setWhatsapp01(String whatsapp01) {
		this.whatsapp01 = whatsapp01;
	}

	public String getWhatsapp02() {
		return whatsapp02;
	}

	public void setWhatsapp02(String whatsapp02) {
		this.whatsapp02 = whatsapp02;
	}

	public String getWhatsappGb01() {
		return whatsappGb01;
	}

	public void setWhatsappGb01(String whatsappGb01) {
		this.whatsappGb01 = whatsappGb01;
	}

	public String getWhatsappGb02() {
		return whatsappGb02;
	}

	public void setWhatsappGb02(String whatsappGb02) {
		this.whatsappGb02 = whatsappGb02;
	}

	public String getObservacao() {
		return observacao;
	}

	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}

	@Override
	public int hashCode() {
		return Objects.hash(chip01, chip02, contaGoogle, id_aparelho, marcaModelo, observacao, whatsapp01, whatsapp02,
				whatsappGb01, whatsappGb02);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Aparelho other = (Aparelho) obj;
		return Objects.equals(chip01, other.chip01) && Objects.equals(chip02, other.chip02)
				&& Objects.equals(contaGoogle, other.contaGoogle) && Objects.equals(id_aparelho, other.id_aparelho)
				&& Objects.equals(marcaModelo, other.marcaModelo) && Objects.equals(observacao, other.observacao)
				&& Objects.equals(whatsapp01, other.whatsapp01) && Objects.equals(whatsapp02, other.whatsapp02)
				&& Objects.equals(whatsappGb01, other.whatsappGb01) && Objects.equals(whatsappGb02, other.whatsappGb02);
	}
   
   
}

