package com.intrusionControl.demo.entities;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonFormat;

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
    
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate UltRecChip01;
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate UltRecChip02;
    private String cadastroChip01;
    private String cadastroChip02;
    private String irmaoWA01;
    private String irmaoWA02;
    private String irmaoGB01;
    private String irmaoGB02;
    
    @Column(columnDefinition = "TEXT")
    private String observacao;
    

   //Construtor vazio. Para instaciar este objeto sem informar nada a ele;
   public Aparelho() {
	   
   }

   //Construtor com argumentos;
   public Aparelho(String id_aparelho, String marcaModelo, String contaGoogle, String chip01, String chip02, String whatsapp01,
			String whatsapp02, String whatsappGb01, String whatsappGb02, LocalDate UltRecChip01, LocalDate UltRecChip02, String cadastroChip01, 
			String cadastroChip02, String irmaoWA01, String irmaoWA02, String irmaoGB01, String irmaoGB02, String observacao) {
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
		
		this.UltRecChip01 = UltRecChip01;
		this.UltRecChip02 = UltRecChip02;
		this.cadastroChip01 = cadastroChip01;
		this.cadastroChip02 = cadastroChip02;
		this.irmaoWA01 = irmaoWA01;
		this.irmaoWA02 = irmaoWA02;
		this.irmaoGB01 = irmaoGB01;
		this.irmaoGB02 = irmaoGB02;
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
		final int prime = 31;
		int result = 1;
		result = prime * result + ((UltRecChip01 == null) ? 0 : UltRecChip01.hashCode());
		result = prime * result + ((UltRecChip02 == null) ? 0 : UltRecChip02.hashCode());
		result = prime * result + ((cadastroChip01 == null) ? 0 : cadastroChip01.hashCode());
		result = prime * result + ((cadastroChip02 == null) ? 0 : cadastroChip02.hashCode());
		result = prime * result + ((chip01 == null) ? 0 : chip01.hashCode());
		result = prime * result + ((chip02 == null) ? 0 : chip02.hashCode());
		result = prime * result + ((contaGoogle == null) ? 0 : contaGoogle.hashCode());
		result = prime * result + ((id_aparelho == null) ? 0 : id_aparelho.hashCode());
		result = prime * result + ((irmaoGB01 == null) ? 0 : irmaoGB01.hashCode());
		result = prime * result + ((irmaoGB02 == null) ? 0 : irmaoGB02.hashCode());
		result = prime * result + ((irmaoWA01 == null) ? 0 : irmaoWA01.hashCode());
		result = prime * result + ((irmaoWA02 == null) ? 0 : irmaoWA02.hashCode());
		result = prime * result + ((marcaModelo == null) ? 0 : marcaModelo.hashCode());
		result = prime * result + ((observacao == null) ? 0 : observacao.hashCode());
		result = prime * result + ((whatsapp01 == null) ? 0 : whatsapp01.hashCode());
		result = prime * result + ((whatsapp02 == null) ? 0 : whatsapp02.hashCode());
		result = prime * result + ((whatsappGb01 == null) ? 0 : whatsappGb01.hashCode());
		result = prime * result + ((whatsappGb02 == null) ? 0 : whatsappGb02.hashCode());
		return result;
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
		if (UltRecChip01 == null) {
			if (other.UltRecChip01 != null)
				return false;
		} else if (!UltRecChip01.equals(other.UltRecChip01))
			return false;
		if (UltRecChip02 == null) {
			if (other.UltRecChip02 != null)
				return false;
		} else if (!UltRecChip02.equals(other.UltRecChip02))
			return false;
		if (cadastroChip01 == null) {
			if (other.cadastroChip01 != null)
				return false;
		} else if (!cadastroChip01.equals(other.cadastroChip01))
			return false;
		if (cadastroChip02 == null) {
			if (other.cadastroChip02 != null)
				return false;
		} else if (!cadastroChip02.equals(other.cadastroChip02))
			return false;
		if (chip01 == null) {
			if (other.chip01 != null)
				return false;
		} else if (!chip01.equals(other.chip01))
			return false;
		if (chip02 == null) {
			if (other.chip02 != null)
				return false;
		} else if (!chip02.equals(other.chip02))
			return false;
		if (contaGoogle == null) {
			if (other.contaGoogle != null)
				return false;
		} else if (!contaGoogle.equals(other.contaGoogle))
			return false;
		if (id_aparelho == null) {
			if (other.id_aparelho != null)
				return false;
		} else if (!id_aparelho.equals(other.id_aparelho))
			return false;
		if (irmaoGB01 == null) {
			if (other.irmaoGB01 != null)
				return false;
		} else if (!irmaoGB01.equals(other.irmaoGB01))
			return false;
		if (irmaoGB02 == null) {
			if (other.irmaoGB02 != null)
				return false;
		} else if (!irmaoGB02.equals(other.irmaoGB02))
			return false;
		if (irmaoWA01 == null) {
			if (other.irmaoWA01 != null)
				return false;
		} else if (!irmaoWA01.equals(other.irmaoWA01))
			return false;
		if (irmaoWA02 == null) {
			if (other.irmaoWA02 != null)
				return false;
		} else if (!irmaoWA02.equals(other.irmaoWA02))
			return false;
		if (marcaModelo == null) {
			if (other.marcaModelo != null)
				return false;
		} else if (!marcaModelo.equals(other.marcaModelo))
			return false;
		if (observacao == null) {
			if (other.observacao != null)
				return false;
		} else if (!observacao.equals(other.observacao))
			return false;
		if (whatsapp01 == null) {
			if (other.whatsapp01 != null)
				return false;
		} else if (!whatsapp01.equals(other.whatsapp01))
			return false;
		if (whatsapp02 == null) {
			if (other.whatsapp02 != null)
				return false;
		} else if (!whatsapp02.equals(other.whatsapp02))
			return false;
		if (whatsappGb01 == null) {
			if (other.whatsappGb01 != null)
				return false;
		} else if (!whatsappGb01.equals(other.whatsappGb01))
			return false;
		if (whatsappGb02 == null) {
			if (other.whatsappGb02 != null)
				return false;
		} else if (!whatsappGb02.equals(other.whatsappGb02))
			return false;
		return true;
	}


   
   
}

