import { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import ModalAdd from '../Components/Modals/ModalAdd';
/* import ModalExcluir from '../Components/Modals/ModalExcluir';
 *//* import ModalEdit from '../Components/Modals/ModalEdit';  */

const Tabela = () => {

    const [alunos, setAlunos] = useState([]);

    const [modalIsOpen, setIsOpen] = useState(false);

/*ESSE É O ALTERAR */
const editaAluno = id =>{

    let url = `http://localhost:8080/alunos/${id}`;
    let body = {
           /*  'nome': nome,
            'cpf': cpf,
            'curso': curso */
    }
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then(json => {
      // Do something with object
      console.log(json);
    });

}

/* ESSE É O EXCLUIR */
    const excluirAluno = id => {
        console.log('passei aqui');
/*         let url = `https://api.sheety.co/a701f5ce47809475341fc39691c5d08c/sheety/pagina1/${id}`;
 */        
let url = `http://localhost:8080/alunos/${id}`;

fetch(url, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((dado) => {
                console.log(dado);
            })
            .catch((erro) => {
                console.log(erro)
            })
    };

/*ESSE É O GET */
    useEffect(() => {
        // let url = '!ENDPOINT_SHEETY!!';
/*         let url = 'https://api.sheety.co/a701f5ce47809475341fc39691c5d08c/sheety/pagina1';
 */        
            let url = 'http://localhost:8080/alunos';
            
            fetch(url)
            .then((response) => response.json())
            .then(json => {
                // Do something with the data
                setAlunos(json);
                console.log(json);
            })
            .catch((erro) => {
                console.log(erro)
            })
    }, [modalIsOpen])

    function openModal() {
        setIsOpen(true);
    }
    return (
        <div>
            <ModalAdd status={modalIsOpen} setStatus={setIsOpen}></ModalAdd>
            <Button variant="light" size="lg" onClick={openModal}>Adicionar</Button>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Curso</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alunos.map((dado, index) => {
                            return (
                                <tr key={dado.id}>
                                    <td>{dado.id}</td>
                                    <td>{dado.nome}</td>
                                    <td>{dado.cpf}</td>
                                    <td>{dado.curso}</td>
                                    <td>
                                        <Button classname = 'botao' variant="light" onClick={() => { editaAluno(dado.id) }}>Editar</Button>
                                        <Button classname='botao' variant="light" onClick={() => { excluirAluno(dado.id) }}>Deletar</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default Tabela;