import { Header } from "../../components/header/Header";
import { imgIceCube } from "../../assets/images";
import style from "./MenuAdministrador.module.css";

export function MenuAdministrador() {
    return (
        <div className={style.container_menuAdministrador}>

            <Header fullHeader={false} />

            <section>
                <div className={style.content}>

                    <img className={style.imgIceCube} src={imgIceCube} />

                    <div className={style.containerMenu}>

                        <div className={style.menuAdm}>
                            <h1>Menu</h1>
                            <a href="/cadastro">Listagem de Produtos</a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}