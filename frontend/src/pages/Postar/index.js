import React from 'react';

import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
import imgLogo from '../../assets/logo.svg'
import '../Register/styles.css';

export default function Register () {
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
        <form>
            <input placeholder="Título" />
            <textarea placeholder='Descrição do caso' />
            <input type="number" placeholder='Valor em reais (R$)' />
            
            <button type="submit" className="button" >
                Registrar
            </button>

        </form>
    </div>);
}