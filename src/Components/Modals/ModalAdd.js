import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState, useEffect } from "react";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

const ModalAdd = (props) => {
  let subtitle;

  const [id, setId] = useState('123');
  const [nome, setNome] = useState('Julio');
  const [cpf, setCpf] = useState('421421');
  const [curso, setCurso] = useState('sistemas');
  const [inseriu, setInserir] = useState(false);


  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    props.setStatus(false);
  }

  function addAlunos(){

    setInserir(true);

/*     let url = 'https://api.sheety.co/a701f5ce47809475341fc39691c5d08c/sheety/pagina1';
 */    

let url = 'http://localhost:8080/alunos';

let body = {
        'id': id,
        'nome': nome,
        'cpf': cpf,
        'curso': curso
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
    .then((response) => response.json())
      .then(json => {
        console.log(json.alunos);
        setInserir(false);
      });

    // useEffect(() =>{
    //   // let url = '!ENDPOINT_SHEETY!!';
    // },[])
  }

  return (
    <div>
      <Modal
        isOpen={props.status}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form>
          {/* Botão fechar app */}
          <Button variant="primary" type="submit" onClick={closeModal} disabled={inseriu? true:false} >
            Fechar
          </Button>

          <Form.Group className="mb-3" controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control onBlur={(event) => setNome(event.target.value)} type="text"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCPF">
            <Form.Label>CPF</Form.Label>
            <Form.Control onBlur={(event) => setCpf(event.target.value)} type="text"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCurso">
            <Form.Label>Curso</Form.Label>
            <Form.Control onBlur={(event) => setCurso(event.target.value)} type="text"/>
          </Form.Group>

          {/* Botão Submeter */}
          <Button variant="primary" onClick={addAlunos}>
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
}

export default ModalAdd;