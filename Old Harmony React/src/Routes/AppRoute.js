import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "../Pages/LandingPage";
import { ProductsPage } from "../Pages/ProductsPage";
import { LoginAdministrador } from "../Pages/LoginAdministrador";
import { MenuAdministrador } from "../Pages/MenuAdministrador";
import  CadastroProduto from "../Pages/CadastroProduto/CadastroProduto";
import { Contato } from "../Pages/Contato/Contato";
import { Error } from "../Pages/Error";
import { SobreNos } from "../Pages/SobreNos/SobreNos";
import { Obrigado } from "../Pages/Contato/Obrigado"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <LandingPage/> } />
                <Route path="/produtos" element={ <ProductsPage/> } />
                <Route path="/login" element={<LoginAdministrador/>} />
                <Route path="/menu" element={ <MenuAdministrador/>} />
                <Route path="/cadastro" element={<CadastroProduto />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/sobrenos" element={<SobreNos />} />
                <Route path="/obrigado" element={<Obrigado />} /> 
                
                <Route path="*" element={ <Error title="Page Not Found" status="404" /> }/>
            </Routes>
        </BrowserRouter>
    );
}

export { AppRoutes };