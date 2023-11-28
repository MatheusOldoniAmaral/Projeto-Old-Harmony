import { Header } from "../../components/header/Header";
import { imgVarios } from "../../assets/images";
import style from "./LoginAdministrador.module.css";
import { useHref } from "react-router-dom";

export function LoginAdministrador() {
    return (
        <div className={style.container_loginAdministrador}>
            
            <Header fullHeader={true} />

            <section>
                <div className={style.loginAdm}>

                    <img className={style.todosimg} src={imgVarios} />

                    <div className={style.loginForm}>

                        <h1>Login Administrador</h1>

                        <form>
                            <div>
                                <label>Email</label>
                                <input type="text" placeholder="Digite o seu email" />
                            </div>

                            <div>
                                <label>Senha</label>
                                <input type="password" placeholder="Digite a sua senha" />
                            </div>

                            <a className={style.botao} type="submit" value="Entrar" href="/menu" >Entrar</a>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

