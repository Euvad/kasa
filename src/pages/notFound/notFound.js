import React from 'react'
import './notFound.scss'
import Header from '../../components/header/header'
function NotFound() {
    return (
        <div className="notFound">
            <Header/>
        <div className="notFound-error">
            <div className="container-notFound-text">
                <h1>404</h1>
                <p>Oups ! La page que vous demandez n'existe pas.</p>
                <a href="/"> Retournez sur la page d'accueil</a>
            </div>
        </div>
    </div>
    )
}

export default NotFound
