import Styles from './Perfil.module.css'


const Perfil = ({ nomeUsuario }) => {
    return (
        <header className={Styles.header} >
            <img className={Styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={Styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil