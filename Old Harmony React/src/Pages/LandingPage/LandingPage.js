import style from "./LandingPage.module.css";
import { Header } from "../../components/header/Header";
import { Faixada } from "../../components/faixada/Faixada";
import { Destaques } from "../../components/destaques/Destaques";
import { Footer } from "../../components/footer/Footer";

export function LandingPage() {
    return (
        <div className={style.container_landingPage}>
            <Header fullHeader={true} />

            <Faixada />

            <Destaques />

            <Footer />
        </div>
    );
}

export {style}