import Logo from '../../assets/logo.png'
import './styles.css'

export default function Footer() {
    return (
        <>
            <footer className="foot">
                <p className="text">Desenvolvido e Prototipado por Robert Aron Zimmermann robertn@weg.net</p>
            </footer>
            <img src={Logo} alt='Logotipo WEG' />
        </>
    )
}