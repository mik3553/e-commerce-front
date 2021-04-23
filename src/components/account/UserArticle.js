
const UserArticle = ({details, deleteArticle, setEdit, setArticle}) => {

    const editArticle = () => {
        setEdit(true)
        setArticle(details)
    }
    return (

        <div style={{display:'flex', width:'25rem', margin:'auto', padding:10}}>
            <p>{details.title} / {details.price}euros</p>
            <button onClick={(e) => deleteArticle(e,details._id)} style={{marginLeft:'0.2rem',marginRight:'0.2rem'}}>supprimer</button>
            <button onClick={() => editArticle()} style={{marginLeft:'0.2rem',marginRight:'0.2rem'}}>modifier</button>
        </div>
    )
}


export default UserArticle;