import React, {useState, useEffect, useCallback}  from 'react';
import { Redirect } from 'react-router-dom';
//import components
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './register.css';

//import repository
import { register } from '../../repository/user';

const Register = () => {

    const [user, setUser] = useState({firstName : '', lastName:'', email:'', password:''});
    const [success, setSuccess] = useState(false);

     const addUser = (e) => {
        e.preventDefault();
        register(user).then( res => {
            if(res.status === 201) {
               setSuccess(true);
               setUser({})
            }
        })
     }

    return (
        <div className="register" >
            <Header />
                <main>
                    { success &&  <Redirect
                        to={{
                            pathname: "/login"
                        }}
                    /> }
                    <section  className="register-section">
                        <form className="register-form" onSubmit={(e)=>addUser(e)}>
                            <article className='register-form-personal'>
                                <h2>Informations personnel</h2>

                                <div  className='fieldset'>
                                    <label>Prénom :</label>

                                    <input
                                        type='text'
                                        name='firstName'
                                        placeholder='prénom'
                                        value={user.firstName}
                                        onChange={e => setUser({...user, firstName:e.target.value})}
                                    />
                                </div>
                                <div className='fieldset'>
                                    <label>Nom :</label>
                                    <input
                                        type='text'
                                        name='lastName'
                                        placeholder='nom'
                                        value={user.lastName}
                                        onChange={e => setUser({...user, lastName:e.target.value})}
                                    />
                                </div>
                                <div className='fieldset'>
                                    <label>email :</label>
                                    <input
                                        type='text'
                                        name='email'
                                        placeholder='e-mail'
                                        value={user.email}
                                        onChange={e => setUser({...user, email:e.target.value})}
                                    />
                                </div>
                                <div className='fieldset'>
                                    <label>password :</label>
                                    <input
                                        type='password'
                                        name='password'
                                        placeholder='mot de passe'
                                        value={user.password}
                                        onChange={e => setUser({...user, password:e.target.value})}
                                    />
                                </div>
                                <button className='register-form-button'type='submit' >s'inscrire</button>
                            </article>
                        </form>
                    </section>
                </main>

            <Footer />

        </div>
    )
}




export default (Register);
