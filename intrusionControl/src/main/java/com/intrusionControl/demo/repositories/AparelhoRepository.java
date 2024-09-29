package com.intrusionControl.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.intrusionControl.demo.entities.Aparelho;

//Acesso a métodos prontos como save(), findById(), findAll(), deleteById(), etc.
public interface AparelhoRepository extends JpaRepository<Aparelho, String> {

}
