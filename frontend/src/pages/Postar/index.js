import React,{useState} from 'react';

import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import imgLogo from '../../assets/logo.svg'
import api from '../../services/api';
import '../Register/styles.css';


export default function RegistrarCaso () {
    const [title,setTitle] = useState('');
    const [description,setDesc] = useState('');
    const [value,setValue] = useState('');
    async function handleRegister (event) {
        event.preventDefault();
        if(title.length == 0){
            alert('Insira um título')
            return
        }
        try {
            const res = await api.post('casos',{
                title,description,value
            },{
                headers:  {
                    Authorization:localStorage.getItem('ong_id')
                }
            })
            console.log('Submetido')
            alert('Efetuado o registro de '+title)
            setTitle('')
            setValue('')
            setDesc('')
          //alert(res.data.id)
        } catch (erro) {
            alert('Erro ao registrar, por favor, tente novamente.')
        }

    }
    return (<div className='content'>
        <section>
            <img src={imgLogo} alt="Be the Hero" title="Be the Hero"/>

            <h1>
                Registrar novo caso
            </h1>

            <p>
                Informe os dados do caso para que possam lhe ajudar.
            </p>
            
            <Link to='/perfil' className='link'>
                <FiArrowLeft size={16} color="#000"/>
                  Retornar</Link>
        </section>
        <form onSubmit={handleRegister}>
            <input placeholder="Título (obrigatório)" 
                   value={title}
                   onChange={e=>setTitle(e.target.value)}
            />
            <textarea placeholder='Descrição do Caso' 
                   value={description}
                   onChange={e=>setDesc(e.target.value)}
            />
            <input type="number" placeholder='Valor em reais (R$)' 
                   value={value}
                   onChange={e=>setValue(e.target.value)}
            />
            
            <button type="submit" className="button" >
                Registrar
            </button>

        </form>
    </div>);
}