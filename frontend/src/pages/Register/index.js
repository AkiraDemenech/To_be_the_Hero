import React,{useState} from 'react';

import {Link,useHistory} from 'react-router-dom';
import {FiLogIn,FiKey} from 'react-icons/fi'
import imgLogo from '../../assets/logo.svg'
import api from '../../services/api'
import './styles.css';

export default function Register () {
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [whatsapp,setWhats] = useState('');
    const [cidade,setCidade] = useState('');
    const [uf,setUF] = useState('');
    const hist = useHistory()
    async function handleRegister (event) {
        event.preventDefault();
        try {
            const res = await api.post('ongs',{
                nome, email,whatsapp, cidade, uf
            })
            console.log('Submetida')
            alert(res.data.id)
            hist.push('/')
        } catch (erro) {
            alert('Erro ao registrar, por favor, tente novamente.')
        } 
        
    }

    return (<div className='content'>
        <section>
            <img src={imgLogo} alt="Be the Hero" title="Be the Hero"/>

            <h1>
                Faça seu cadastro
            </h1>
            
            <Link to='/' className='link'>
                <FiLogIn size={16} color="#000"/>
                  Já tenho cadastro</Link>
        </section>
        <form onSubmit={handleRegister}>
            <input placeholder="Nome da ONG" 
            value={nome} onChange={e=>setNome(e.target.value)}/>
            <input type='email' placeholder='e-mail'
            value={email} onChange={e=>setEmail(e.target.value.toLowerCase())}/>
            <input placeholder='Whatsapp'
            value={whatsapp} onChange={e=>setWhats(e.target.value)}/>
            <div className="input-group">
                <input placeholder="UF" style={{width:80}}
                value={uf} onChange={e=>setUF(e.target.value.toUpperCase())} />
                <input placeholder="Cidade" value={cidade} 
                onChange={e=>setCidade(e.target.value)} /> </div>

            <button type="submit" className="button" >
                Cadastrar
        <FiKey size={18} color='#fff'/>      </button>

        </form>
    </div>);
}