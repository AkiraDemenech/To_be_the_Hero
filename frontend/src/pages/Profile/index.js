import React,{useEffect,useState} from 'react';

import api from '../../services/api'
import imgLogo from '../../assets/logo.svg'
//import imgHeroes from '../../assets/heroes.png'

import {Link,useHistory} from 'react-router-dom';
import {FiLogOut,FiTrash2} from 'react-icons/fi'
import './styles.css';

export default function Profile () {
    const hist = useHistory()
    const ongid = localStorage.getItem('ong_id')
    const [casos,setCasos] = useState([])
    async function handleDelete  (id){
        try{await api.delete(`casos/${id}`,{
            headers:{Authorization:ongid}})
            console.log('Caso apagado com sucesso!')
            setCasos(casos.filter(caso=>caso.id!=id))
        }catch  (erro){
            alert('Não foi possível deletar este caso')
        }
    }
    function handleLogoff(){
        localStorage.clear()
        hist.push('/')
      //useHistory().push('/')
    }
    useEffect(()=>{
        api.get('perfil',{headers:{Authorization:ongid}}).then(res=>{
            setCasos(res.data)
            console.log(casos)
        })
    },[ongid])
    return (<div className='perfil'>
        <header>
            <img src={imgLogo} alt="Be the Hero"/>
            <span>Seja bem vinda, {localStorage.getItem('ong_nome')}
            </span>

            <Link to='/casos/novo' className='button'>
                  Registrar novo caso</Link>
            <button type='button' onClick={handleLogoff}>
                <FiLogOut size={22} color="#000"/>
            </button>
        </header>

            <h1>Casos registrados</h1>

            <ul>{casos.map(caso=>(
                <li>
                    <strong>Caso:</strong>
                    <p>{caso.title}</p>

                    <strong>Descrição:</strong>
                    <p>{caso.description}</p>

                    <strong>Valor:</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(caso.value)}</p>

                    <button type='button' onClick={
                        () => handleDelete(caso.id)}>
                        <FiTrash2 size={24} color='#a8a8b4' />
                    </button>
                </li>

                

                
         ))}</ul>

    </div>);
}