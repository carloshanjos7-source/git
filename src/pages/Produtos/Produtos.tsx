import './Produtos.css';
import Banner_1 from '../../assets/imgs/banner.png';
import Banner_2 from '../../assets/imgs/banner2.png';
import Banner_3 from '../../assets/imgs/banner3.png';
import choc_belga from '../../assets/imgs/choc-belga.png';
import choc_ninho from '../../assets/imgs/choc-belga.png';
import cenoura_choc from '../../assets/imgs/cenoura-choc.png';
import choc_ninho_morango from '../../assets/imgs/choc-ninho-morango.png';
import choc_pistache from '../../assets/imgs/choc-pistache.png';
import choc_oreo from '../../assets/imgs/choc-oreo.png';
import whatsapp from '../../assets/whatsapp.png';
import { useEffect, useState } from 'react';
import type { Bolo } from '../../types/Bolo';
import { getBolos } from '../../services/bolosServices';
import CardProduto from '../../components/CardProduto/CardProduto';


// funções assincronas

export default function Produtos() {

    const [bolos, setBolos] = useState<Bolo[]>([]);

    const fetchBolos = async () => {
        try {
            const dados = await getBolos();
            console.log("Dados retornados da API: ", dados);
            setBolos(dados);
        } catch (error) {
            console.error("Erro ao executar getBolos: ", error)
        }
    }

    useEffect(() => {
        fetchBolos();

    }, [])


    return (
        <main>

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Banner_1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Banner_2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Banner_3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <section className="container_produto'">
                <h1 className="acessivel">produtos de chocolate</h1>
                <div className="titulo">
                    <span>Chocolate</span>
                    <hr />
                </div>

                <section className="cards">

                    {
                        bolos.map((b: Bolo) => (
                           <CardProduto 
                           nome={b.nome} 
                           descricao={b.descricao}
                           preco={b.preco}
                           imagem={b.imagens[0]}
                           peso={b.peso}
                           />
                        ))
                    }

                </section>
            </section>

            <a className="whatsapp" href="https://wa.me/5511999999999?text=Olá%20,%20gostaria%20de%20mais%20informações."
                target="_blank">
                <img src={whatsapp} alt="icone do whatsapp" />
            </a>
        </main>

    )
}
