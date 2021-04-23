
const ArticleForm = ({articleSubmit, article, setArticle, edit, setEdit}) => {

    const cancel = () => {
        setArticle({price:'', title:''})
        setEdit(false)
    }

    return (
        <div className="register-section">
            <form className="register-form" onSubmit={(e)=>articleSubmit(e,article)}>
                <article className='register-form-personal'>
                    {
                        edit ? <h2>modifier l'article suivant</h2> : <h2>mettre un article en vente</h2>
                    }

                    <div  className='fieldset'>
                        <input
                            type='text'
                            name='title'
                            placeholder='titre'
                            value={article.title}
                            onChange={e => setArticle({...article, title:e.target.value})}
                        />
                    </div>
                    <div className='fieldset'>
                        <input
                            type='text'
                            name='price'
                            placeholder='prix'
                            value={article.price}
                            onChange={e => setArticle({...article, price:e.target.value})}
                        />
                    </div>
                    <button className='register-form-button'type='submit' >{edit ? 'Modifier' : 'Ajouter'}</button>
                    {edit ? <button onClick={() =>cancel()} className='register-form-button'type='submit' >Annuler</button> : null }
                </article>
            </form>
        </div>
    )
}

export default ArticleForm;