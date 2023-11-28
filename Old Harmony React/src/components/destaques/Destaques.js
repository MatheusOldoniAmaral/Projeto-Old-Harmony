import { discoTupac, discoCents, discoEminem, discoRacionais, discoNotorios } from "../../assets/images";
import style from "../../Pages/LandingPage/LandingPage.module.css";

const Destaques = () => {
    return (
        <div className={style.container2}>
            <div className={style.c2Title}>
                <h1>Discos Destaques</h1>
            </div>

            <div className={style.cRow}>
                <div className={style.card}>

                    <img src={discoTupac} alt="Product logo" />

                    <div>
                        <h1>2Pac - All Eyez On Me 1996</h1>
                    </div>

                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>

                <div className={style.card}>

                    <img src={discoCents} alt="Product logo" />

                    <div>
                        <h1>50 Cent - Get Rich or Die Tryin’ 2003</h1>
                    </div>

                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>

                <div className={style.card}>

                    <img src={discoEminem} />

                    <div>
                        <h1>Eminem - The Eminem Show - 2002</h1>
                    </div>

                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>

                <div className={style.card}>

                    <img src={discoRacionais} alt="Product logo" />

                    <div>
                        <h1>Racionais Mc’s - Sobrevivendo no inferno 1997</h1>
                    </div>

                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>
            </div>

        </div>






    );
}

export { Destaques }