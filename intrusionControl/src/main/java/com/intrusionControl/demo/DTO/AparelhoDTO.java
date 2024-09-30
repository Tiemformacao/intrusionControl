package com.intrusionControl.demo.DTO;

import com.intrusionControl.demo.entities.Aparelho;



public class AparelhoDTO {

	 private String id_aparelho;
	 private String marcaModelo;
	 private String contaGoogle;
	 private String chip01;
	 private String chip02;
	 private String whatsapp01;
	 private String whatsapp02;
	 private String whatsappGb01;
	 private String whatsappGb02;
	 private String observacao;
	 
	 public AparelhoDTO() {
		 
	 }
	 
	 //Para não ficar fazendo de um por um, tem uma classe chamada BeanUtils. A classe é assim: BeanUtils.copyProperties(entity, entity); Fica assim: BeanUtils.copyProperties(entity, this); Mas eu preferi fazer um por um;
	 public AparelhoDTO (Aparelho entity) {
		 this.id_aparelho = entity.getId_aparelho();
		 this.marcaModelo = entity.getMarcaModelo();
		 this.contaGoogle = entity.getContaGoogle();
		 this.chip01 = entity.getChip01();
		 this.chip02 = entity.getChip02();
		 this.whatsapp01 = entity.getWhatsapp01();
		 this.whatsapp02 = entity.getWhatsapp02();
		 this.whatsappGb01 = entity.getWhatsappGb01();
		 this.whatsappGb02 = entity.getWhatsappGb02();
		 this.observacao = entity.getObservacao();
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
	 
	 
}
