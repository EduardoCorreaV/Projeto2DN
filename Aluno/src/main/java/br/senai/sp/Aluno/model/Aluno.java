package br.senai.sp.Aluno.model;

import java.sql.Date;

public class Aluno {

	private int matricula_id;
	private String nome;
	private String cpf;
	private String curso;
	

	public Aluno() {

	}

	public Aluno(int matricula_id, String nome, String cpf, String curso) {
		
		this.matricula_id = matricula_id;
		this.nome = nome;
		this.cpf = cpf;
		this.curso = curso;
		
	}

	public int getMatricula_id() {
		return matricula_id;
	}

	public void setMatricula_id(int matricula_id) {
		this.matricula_id = matricula_id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}


	public String getCurso() {
		return curso;
	}

	public void setCurso(String curso) {
		this.curso = curso;
	}
}
	
