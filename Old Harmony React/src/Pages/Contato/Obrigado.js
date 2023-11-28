import style from "./Contato.module.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Agradecimento } from "../../components/Agradecimento/Agradecimento";

export function Obrigado() {
    return (
        <div className={style.container_obrigado}>
            <Header fullHeader={true} />
            
            <Agradecimento />

            <Footer />
        </div>
    );
}
