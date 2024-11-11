package com.intrusionControl.demo.DTO;

import java.time.LocalDate;


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
	   
	 private LocalDate UltRecChip01;
	 private LocalDate UltRecChip02;
	 private String cadastroChip01;
	 private String cadastroChip02;
	 private String irmaoWA01;
	 private String irmaoWA02;
	 private String irmaoGB01;
	 private String irmaoGB02;

	 
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
		 this.UltRecChip01 = entity.getUltRecChip01();
		 this.UltRecChip02 = entity.getUltRecChip02();
		 this.cadastroChip01 = entity.getCadastroChip01();
		 this.cadastroChip02 = entity.getCadastroChip02();
		 this.irmaoWA01 = entity.getIrmaoWA01();
		 this.irmaoWA02 = entity.getIrmaoWA02();
		 this.irmaoGB01 = entity.getIrmaoGB01();
		 this.irmaoGB02 = entity.getIrmaoGB02();
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

	public LocalDate getUltRecChip01() {
		return UltRecChip01;
	}

	public void setUltRecChip01(LocalDate ultRecChip01) {
		UltRecChip01 = ultRecChip01;
	}

	public LocalDate getUltRecChip02() {
		return UltRecChip02;
	}

	public void setUltRecChip02(LocalDate ultRecChip02) {
		UltRecChip02 = ultRecChip02;
	}

	public String getCadastroChip01() {
		return cadastroChip01;
	}

	public void setCadastroChip01(String cadastroChip01) {
		this.cadastroChip01 = cadastroChip01;
	}

	public String getCadastroChip02() {
		return cadastroChip02;
	}

	public void setCadastroChip02(String cadastroChip02) {
		this.cadastroChip02 = cadastroChip02;
	}

	public String getIrmaoWA01() {
		return irmaoWA01;
	}

	public void setIrmaoWA01(String irmaoWA01) {
		this.irmaoWA01 = irmaoWA01;
	}

	public String getIrmaoWA02() {
		return irmaoWA02;
	}

	public void setIrmaoWA02(String irmaoWA02) {
		this.irmaoWA02 = irmaoWA02;
	}

	public String getIrmaoGB01() {
		return irmaoGB01;
	}

	public void setIrmaoGB01(String irmaoGB01) {
		this.irmaoGB01 = irmaoGB01;
	}

	public String getIrmaoGB02() {
		return irmaoGB02;
	}

	public void setIrmaoGB02(String irmaoGB02) {
		this.irmaoGB02 = irmaoGB02;
	}
	 
	 
}
