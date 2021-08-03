import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';



function App(props) {
  // const [usuario, setUsuario] = useState('Guilherme');
  const history = useHistory();
  const [ usuario, setUsuario] = useState('');
  const [ erro, setErro ] = useState(false);


  function handlePesquisa(){
    // console.log(usuario);
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      })
      console.log(repositoriesName);
      setErro(false);
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      history.push('/repositories');
    })
    .catch(err => {
      setErro(true);
    });
  }
  return (
    <S.HomeContainer>
      {/* <h1>
        {props.title}
      </h1>
      <br>
      </br>
      <h1>
        {usuario}
      </h1> */}
      <S.Content>
        <S.Input name="usuario" value={usuario} id="usuario" className="usuarioInput" placeholder="Usuário" onChange={ e => setUsuario(e.target.value)}/>
        <S.Button button type="button" onClick = {handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      {
        erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente!!</S.ErrorMsg> : ''
      }
    </S.HomeContainer>
      
    
  );
}

export default App;
