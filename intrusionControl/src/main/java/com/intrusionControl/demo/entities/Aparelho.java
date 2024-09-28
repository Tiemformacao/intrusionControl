package com.intrusionControl.demo.entities;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_aparelho")
public class Aparelho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String marcaModelo;
    private String contaGoogle;
    private Integer chip01;
    private Integer chip02;
    private Integer whatsapp01;
    private Integer whatsapp02;
    private Integer whatsappGb01;
    private Integer whatsappGb02;
    private String observacao;

   public Aparelho() {
	   
   }

	public Aparelho(Long id, String marcaModelo, String contaGoogle, Integer chip01, Integer chip02, Integer whatsapp01,
			Integer whatsapp02, Integer whatsappGb01, Integer whatsappGb02, String observacao) {
		super();
		this.id = id;
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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public Integer getChip01() {
		return chip01;
	}

	public void setChip01(Integer chip01) {
		this.chip01 = chip01;
	}

	public Integer getChip02() {
		return chip02;
	}

	public void setChip02(Integer chip02) {
		this.chip02 = chip02;
	}

	public Integer getWhatsapp01() {
		return whatsapp01;
	}

	public void setWhatsapp01(Integer whatsapp01) {
		this.whatsapp01 = whatsapp01;
	}

	public Integer getWhatsapp02() {
		return whatsapp02;
	}

	public void setWhatsapp02(Integer whatsapp02) {
		this.whatsapp02 = whatsapp02;
	}

	public Integer getWhatsappGb01() {
		return whatsappGb01;
	}

	public void setWhatsappGb01(Integer whatsappGb01) {
		this.whatsappGb01 = whatsappGb01;
	}

	public Integer getWhatsappGb02() {
		return whatsappGb02;
	}

	public void setWhatsappGb02(Integer whatsappGb02) {
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
		return Objects.hash(chip01, chip02, contaGoogle, id, marcaModelo, observacao, whatsapp01, whatsapp02,
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
				&& Objects.equals(contaGoogle, other.contaGoogle) && Objects.equals(id, other.id)
				&& Objects.equals(marcaModelo, other.marcaModelo) && Objects.equals(observacao, other.observacao)
				&& Objects.equals(whatsapp01, other.whatsapp01) && Objects.equals(whatsapp02, other.whatsapp02)
				&& Objects.equals(whatsappGb01, other.whatsappGb01) && Objects.equals(whatsappGb02, other.whatsappGb02);
	}
   
   
}

