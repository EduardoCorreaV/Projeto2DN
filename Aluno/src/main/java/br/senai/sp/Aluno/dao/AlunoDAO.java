package br.senai.sp.Aluno.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import br.senai.sp.Aluno.model.Aluno;

@Repository
public class AlunoDAO {

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	public List<Aluno> listarTodos (){
		return new ArrayList<Aluno>();
	}
	
	public Aluno PegarPorId(int matricula_id) {
	
		return new Aluno();
	}
	
	public int Novo (Aluno a) {
		
		String sql = "INSERT INTO ALUNO (Nome, Cpf, Curso) VALUES (?,?,?)";
		int result = jdbcTemplate.update(sql, a.getNome(), a.getCpf(), a.getCurso());
		
		return result;
	}
	
	public int Editar (Aluno a, int matricula_id) {
		return 0;
	}
	
	public int Deletar (int matricula_id) {
		return 0;
	}
}
