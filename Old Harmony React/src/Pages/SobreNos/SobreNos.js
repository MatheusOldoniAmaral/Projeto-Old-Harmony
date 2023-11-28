import style from "./SobreNos.module.css";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { eminem } from "../../assets/images";

export function SobreNos() {
    return (

        <div className={style.container_sobreNos}>
            
            <Header fullHeader={true} />

            <section>

                <img src={eminem} />

                <div className={style.textos}>

                    <div className={style.texto1}>
                        <h1>Conheça a nossa empresa</h1>
                        <p>A "Old Harmony" é uma empresa que resgata a nostalgia dos anos 90 e 2000, quando o rap estava no auge, e os discos de vinil eram o formato preferido dos amantes da música. Ela oferece uma experiência única, não apenas como uma loja de discos, mas como um santuário para colecionadores e entusiastas do rap. Seu nome é uma homenagem à harmonia sonora que caracterizou aquela época, repleta de criatividade e inovação.</p>
                    </div>

                    <div className={style.texto2}>
                        <h1>Eventos especiais</h1>
                        <p>A "Old Harmony" não se limita a vender vinis; ela também promove eventos exclusivos, como lançamentos de álbuns, noites de audição e sessões de DJ, que mergulham os clientes na cultura autêntica do rap daquela era.</p>
                    </div>

                </div>
            </section>

            <Footer />

        </div>
    );
}