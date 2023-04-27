import React from 'react'
import './notFound.scss'
function NotFound() {
    return (
        <div className="notFound">
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
