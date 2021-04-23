import React, {useEffect, useState} from "react";

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Article from "./components/Article/Article";
import './App.css';

import {getArticles} from './repository/article';

function App() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles().then(res => {
            res.json().then(res => {
                setArticles(res)
            })
        })

    },[])

    const displayArticles = [...articles].map( item => {
        return (
            <Article key={item._id} details={item} />
        )
    })

    return (
        <div className="App">
            <Header />
            <main style={{display:'flex', flexWrap:'wrap' }}>
                {displayArticles}
            </main>
            <Footer />
        </div>
    );
}

export default App;
