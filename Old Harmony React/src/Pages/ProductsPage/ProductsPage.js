import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Produtos } from "../../components/produtos/Produtos";
import style from "./ProductsPage.module.css";

export function ProductsPage() {
    return (
        <div className={style.container_productsPage}>
            <body>
                
                <Header fullHeader={true} />

                <Produtos />

                <Footer />

                <script src="mobile-navbar.js"></script>
            </body>
        </div>
    );
}

export { style } 