import React,{useState} from 'react';

import imgLogo from '../../assets/logo.svg'
import imgHeroes from '../../assets/heroes.png'
import api from '../../services/api'

import {Link,useHistory} from 'react-router-dom';
import {FiLogIn,FiKey} from 'react-icons/fi'
import './styles.css';

export default function Logon () {

    const hist = useHistory()
    const [id,setId] = useState('')
    async function handleLogin (ev) {
        ev.preventDefault();
        try {
            const r = await api.post('perfil',{id:id.toLowerCase()})
            console.log('Sucesso no login de ' + r.data.nome)

            localStorage.setItem('ong_id',id.toLowerCase())
            localStorage.setItem('ong_nome', r.data.nome)

            hist.push('/perfil')
        }catch(e){
            alert('Não foi possível logar, verifique sua conexão e ID')
        }
    }

    return (<div className='logon-container'>
        <section className='form'>
            <img src={imgLogo} alt="we could be Heroes" title="Be the Hero"/>

            <form onSubmit={handleLogin}>
                <h1>Login</h1>

                <input value={id}
                       onChange={ev=>setId(ev.target.value)}
                       placeholder="sua ID"            />
                <button type="submit" className="button">
                Entrar<FiLogIn size={18} color='#fff'/>
                    </button>

                <Link to='/registrar' className="link">
                    <FiKey size={16} color='#e02042'/>
                    Cadastrar nova ONG</Link>
            </form>
        </section>

        <img src={imgHeroes} alt="We can be heroes" title="For ever and ever"/>
    </div>);
}