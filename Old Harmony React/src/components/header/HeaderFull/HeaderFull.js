import { logoIniciais } from "../../../assets/images";
import style from "./HeaderFull.module.css";

const HeaderFull = () => {

    return (
        <body>
            <div className={style.container_headerFull}>

                <div className={style.hCabecalho}>
                    <div className={style.logo}>
                        <img href="/" src={logoIniciais} alt="Logo" />
                    </div>

                    {/*<div className={style.mobileMenu}>
                            <div className={style.line1}></div>
                            <div className={style.line2}></div>
                            <div className={style.line3}></div>
                    </div>*/}

                    <div className={style.menu}>
                        <a href="/">Home</a>
                        <a href="/produtos">Produtos</a>
                        <a href="/contato">Contato</a>
                        <a href="/sobrenos">Sobre Nós</a>
                    </div>

                    <div className={style.buttons}>
                        <a className={style.buttonLogin} href="/login">Login</a>
                    </div>
                </div>
            </div>
        </body>
    );
}

export { HeaderFull };