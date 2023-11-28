import style from "../../Pages/ProductsPage/ProductsPage.module.css";

import { discoTupac, discoCents, discoEminem, discoRacionais, discoNotorios, discoAkon, discoSabotage, discoSnooDog, discoIceCube, discoDrDre, discoWizKhalifa, discoJaRule, discoJayZ, discoCrisBrown,
    discoNateDog, discoLilWayne, discoLudacris, discoTPain, discoDmx, discoTheGame } from "../../assets/images"

export function Produtos() {
    return (
        <div className={style.container}>

            <h1 className={style.title}>Produtos</h1>
            <div className={style.cRow}>
                <div className={style.card}>

                    <img src={discoAkon} />

                    <div>
                        <h1>Akon - Trouble - 2005</h1>
                    </div>

                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>

                <div className={style.card}>

                    <img src={discoTupac} />

                    <div>
                        <h1>2Pac - All Eyez On Me - 1996</h1>
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

                    <img src={discoCents} />

                    <div>
                        <h1>50 Cent - Get Rich or Die Tryin’ - 2003</h1>
                    </div>

                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>
            </div>

            <div className={style.cRow}>
                <div className={style.card}>

                    <img src={discoRacionais} />

                    <div>
                        <h1>Racionais Mc’s - Sobrevivendo no inferno - 1997</h1>
                    </div>
                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>

                <div className={style.card}>

                    <img src={discoSabotage} />

                    <div>
                        <h1>Sabotage - Rap é Compromisso - 2000</h1>
                    </div>
                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>

                <div className={style.card}>

                    <img src={discoSnooDog} />

                    <div>
                        <h1>Snoop Dogg - Tha Blue Carpet Treatment - 2006</h1>
                    </div>
                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>

                <div className={style.card}>

                    <img src={discoNotorios} />

                    <div>
                        <h1>The Notorious B.I.G - Greatest Hits - 1994 - 2005</h1>
                    </div>
                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>
            </div>

            <div className={style.cRow}>
                <div className={style.card}>

                    <img src={discoIceCube} />

                    <div>
                        <h1>Ice Cube - Greatest Hits - 2001</h1>
                    </div>
                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>

                <div className={style.card}>

                    <img src={discoDrDre} />

                    <div>
                        <h1>Dr. Dre - 2001 - 2001</h1>
                    </div>
                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>

                <div className={style.card}>

                    <img src={discoWizKhalifa} />

                    <div>
                        <h1>Wiz Khalifa - Blacc Hollywood - 2014</h1>
                    </div>
                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>

                <div className={style.card}>

                    <img src={discoJaRule} />

                    <div>
                        <h1>Ja Rule - Pain is Love - 2001</h1>
                    </div>
                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>
            </div>

            <div className={style.cRow}>
                <div className={style.card}>

                    <img src={discoJayZ} />

                    <div>
                        <h1>Jay-Z - The Dynasty - 2000</h1>
                    </div>
                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>

                <div className={style.card}>

                    <img src={discoCrisBrown} />

                    <div>
                        <h1>Chris Brown - X - 2014</h1>
                    </div>
                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>

                <div className={style.card}>

                    <img src={discoNateDog} />

                    <div>
                        <h1>Nate Dogg - Music and Me - 2001</h1>
                    </div>
                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>

                <div className={style.card}>

                    <img src={discoLilWayne} />

                    <div>
                        <h1>Lil Wayne - The Dedication - 2005</h1>
                    </div>

                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>
            </div>

            <div className={style.cRow}>
                <div className={style.card}>

                    <img src={discoLudacris} />

                    <div>
                        <h1>Ludacris - Back For The First Time - 2000</h1>
                    </div>
                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>

                <div className={style.card}>

                    <img src={discoTPain} />

                    <div>
                        <h1>T-Pain - Epiphany - 2007</h1>
                    </div>
                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>

                <div className={style.card}>

                    <img src={discoDmx} />

                    <div>
                        <h1>DMX - Its Dark and Hell Is Hot - 1998</h1>
                    </div>
                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>

                <div className={style.card}>

                    <img src={discoTheGame} />

                    <div>
                        <h1>The Game - Doctor’s Advocate - 2006</h1>
                    </div>

                    <div className={style.preço}><span>R$199,90</span></div>
                    <a href="">Saiba Mais</a>
                </div>
            </div>
        </div>
    );
}