import React, {useState, useEffect} from "react";
import { Redirect } from 'react-router-dom';

import Header from "../header/Header";
import Footer from "../footer/Footer";
import './logIn.css';

import {logIn} from '../../repository/user';

const LogIn = () => {

    const [logs, setLogs] = useState({email:'', password : ''});
    const [success, setSuccess] = useState(false);

    const onLogIn = (e) => {
        e.preventDefault();
        logIn(logs).then( res => {
            if(res.status === 200) {
                setSuccess(true);
                res.json().then(res => {
                    localStorage.setItem('token', res.token )
                })
            }
        })
    }

    // useEffect(()=> {
    //
    // },[])

    return(
        <>
            <Header />
            <main className="logIn">
                { success && <Redirect to="/" />}
                <section  className="register-section">
                    <form className="register-form" onSubmit={onLogIn}>
                        <article className='register-form-personal'>
                            <h2>Connexion</h2>
                            <div  className='fieldset'>
                                <label>email :</label>
                                <input
                                    type='text'
                                    name='firstName'
                                    placeholder='e-mail'
                                    value={logs.email}
                                    onChange={e => setLogs({...logs, email:e.target.value})}
                                />
                            </div>
                            <div className='fieldset'>
                                <label>mot de passe :</label>
                                <input
                                    type='text'
                                    name='lastName'
                                    placeholder='mot de passe'
                                    value={logs.password}
                                    onChange={e => setLogs({...logs, password:e.target.value})}
                                />
                            </div>
                            <button className='register-form-button'type='submit' >se connecter</button>
                        </article>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default LogIn;