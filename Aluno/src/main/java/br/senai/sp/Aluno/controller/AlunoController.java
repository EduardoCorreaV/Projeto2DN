package br.senai.sp.Aluno.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.senai.sp.Aluno.dao.AlunoDAO;
import br.senai.sp.Aluno.model.Aluno;

@RestController
@RequestMapping("/alunos")
public class AlunoController {
	
	@Autowired
	AlunoDAO dao;
	
	@GetMapping
	public String listagem() {
		return "GET - LISTAGEM";
	}

	@PostMapping
	public Aluno inserir(@RequestBody Aluno a) {
		
		dao.Novo(a);
		
		return a;
	}
	
	@PutMapping
	public String alterar() {
		return "PUT - ALTERAR";
	}
	
	@DeleteMapping
	public String delete() {
		return "DELETE - APAGAR";
	}
}
