import style from "./Contato.module.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

export function Contato() {
    return (
        <div className={style.container_contato}>

            <Header fullHeader={true} />

            <section>
                <div className={style.formulario}>
                    <form action="https://api.staticforms.xyz/submit" method="post">

                        <h2>Entre em contato com a gente!</h2>
                        <label>Nome</label>
                        <input type="text" name="name" placeholder="Digite o seu nome" autoComplete="off" />

                        <label>Email</label>
                        <input type="email" name="email" placeholder="Digite o seu email" autoComplete="off" />

                        <label>Mensagem</label>
                        <textarea name="message" cols="30" rows="10" placeholder="Digite a sua mensagem" minLength={4} maxLength={200} required={true}></textarea>
                        <button type="submit">Enviar</button>

                        <input type="hidden" name="accessKey" value="405c6ef2-1c11-4dc0-a416-235a847d385b" />
                        <input type="hidden" name="redirectTo" value="http://191.234.204.68:3000/obrigado" />
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
}