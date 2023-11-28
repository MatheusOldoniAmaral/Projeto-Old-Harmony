import { logoIniciais } from "../../../assets/images";
import style from "./HeaderMinimal.module.scss";

const HeaderMinimal = () => {
    return (
        <div className={style.container_headerMinimal}>
            <header>
            <div className={style.hCabecalho}>
                <div className={style.logo}>
                    <img href="/" src={logoIniciais} />
                </div>

                <div className={style.buttons}>
                    <a className={style.buttonSair} href="/login">Sair</a>
                </div>
            </div>
        </header>
        </div>
        
    );
}

export { HeaderMinimal }