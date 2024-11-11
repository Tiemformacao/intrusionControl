package com.intrusionControl.demo.entities;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;

@Entity
@Table(name = "irmao")
public class Irmao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nomeIrmao;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomeIrmao() {
		return nomeIrmao;
	}

	public void setNomeIrmao(String nomeIrmao) {
		this.nomeIrmao = nomeIrmao;
	}


	


    

}
