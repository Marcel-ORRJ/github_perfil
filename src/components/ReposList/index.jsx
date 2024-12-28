import { useState, useEffect } from "react"
import Styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(resJson)
                }, 3000)
            })
    }, [nomeUsuario])

    return (
        <div className="container">
            {estaCarregando ? (
                <h1 >Carregando...</h1>
            ) : (
                <ul className={Styles.list}>
                    {/* {repos.map(repositorio => ( */}
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={Styles.listItem} key={id}>
                            <div className={Styles.itemName}>
                                <b >Nome:</b>
                                {name}
                            </div>
                            <div className={Styles.itemLanguage}>
                                <b >Linguagem:</b>
                                {language}
                            </div>
                            <a className={Styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ReposList