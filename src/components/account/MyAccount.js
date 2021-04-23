import React, {useEffect, useState} from "react";

// import components
import Header from "../header/Header";
import Footer from "../footer/Footer";
import UserArticle from "./UserArticle";
import ArticleForm from "./ArticleForm";
import './myAccount.css';

import {deleteUser, updateUser, userAccount} from "../../repository/user";
import {createArticle, deleteArticle, updateArticle} from "../../repository/article";

const MyAccount = (props) => {

    const [article, setArticle] = useState({title : '', price:''});
    const [userArticles, setUserArticles] = useState([]);
    const [user, setUser] = useState({firstName : '', lastName:'', email:'', password:''});
    const [edit, setEdit] = useState(false);

    const onUpdateUser = (e) => {
        e.preventDefault();
        updateUser(user).then( res => {
            console.log(res)
            if(res.status === 200) {
                setUser(user)
            }
        })
    }
    const onDeleteUser = (e) => {
        e.preventDefault();
        deleteUser().then( res => {
            console.log(res)
            if(res.status === 200) {
                localStorage.removeItem('token');
                props.history.push('/');
            }
        })
    }

    const onCreateArticle = (article) => {

        createArticle(article).then( res => {
            console.log(res)
            if(res.status === 201) {
                //to do success message
            }
            getUserAccount();
        })
    }
    const onDeleteArticle = (e,id) => {
        e.preventDefault();
        deleteArticle(id).then( res => {
            if(res.status === 200) {
                //to do success message
            }
        })
        getUserAccount();
    }
    const onUpdateArticle = (article) => {

        updateArticle(article).then( res => {
            if(res.status === 200) {
                console.log(res)
            }
        })
        getUserAccount();
    }
    const articleSubmit = (e,article) => {
        e.preventDefault();
        if(edit){
            onUpdateArticle(article)
        }else {
            onCreateArticle(article)
        }
    }
    const getUserAccount = () => {
        userAccount().then(res => {
            if(res.status !== 200) {
                localStorage.removeItem('token');
                props.history.push('/')
            }else{
                res.json().then(res => {
                    setUser(res);
                    setUserArticles(res.article)
                })
            }
        })
    }
    useEffect(() => {
       getUserAccount()
    },[userArticles.length])

    return (
        <>
            <Header />
            <section className="myAccount">
                <article>
                    <h3 style={{textAlign:'center', padding:20}}>Mes articles en vente</h3>
                    {
                        userArticles.map(article => {
                            return <UserArticle
                                key={article._id} details={article}
                                deleteArticle={(e,id) => onDeleteArticle(e,id)}
                                setEdit={setEdit}
                                edit={edit}
                                setArticle={setArticle}
                            />
                        })
                    }
                </article>

                <article className="myAccount-article">
                    <div className="register-section">
                        <form className="register-form" onSubmit={(e)=> onUpdateUser(e)}>
                            <article className='register-form-personal'>
                                <h2>Mes informations personnelles</h2>

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

                                <button className='register-form-button'type='submit' >Modifier</button>
                            </article>
                        </form>
                    </div>
                    <ArticleForm article={article} setArticle={setArticle} edit={edit} setEdit={setEdit} articleSubmit={articleSubmit}/>
                    <button
                        onClick={(e) => onDeleteUser(e)}
                        className='register-form-button'type='submit'
                        style={{backgroundColor:'red', marginBottom:'10px', textAlign:'center'}} >
                        Supprimer mon compte
                    </button>

                </article>
            </section>
            <Footer />
        </>
    )
}

export default MyAccount;
