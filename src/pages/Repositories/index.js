import React, {useEffect, useState} from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// UseEffect dispara uma função assim que uma variável for alterada;

export default function Repositories(){
    const history = useHistory();
    const [ repositories, setRepositories] = useState([]);
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName !== null){
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        }
        else{
            history.push('/');
        }
        console.log(repositoriesName);
    }, []);
    // Quando a página iniciar, renderiza (inicia)
    // Monitora todos os ciclos de vida;

    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                {
                    repositories.map(repository => {
                        return (
                            <S.ListItem>Repositório: { repository } </S.ListItem>
                        )
                    })
                }

            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>


        
    )
}