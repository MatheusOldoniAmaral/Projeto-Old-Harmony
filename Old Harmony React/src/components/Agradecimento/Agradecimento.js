import style from "./Agradecimento.module.css";

const Agradecimento = () => {
    return (
        <div className={style.container_agradecimento}>
            <section>
            <div className={style.container_obrigado}>
                <div className={style.thankPage}>
                    <h1>Obrigado Pelo Contato!</h1>
                    <p>Em breve entraremos em contato!</p>
                    <a href="/contato">Voltar</a>
                </div>
            </div>

        </section>
        </div>
        
    )
}

export { Agradecimento }