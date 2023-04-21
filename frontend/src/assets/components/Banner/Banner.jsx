import Bairros from '../Bairros'
import '../Banner/Banner.css'
import Cards from '../Cards'

const Banner = () => {

    return(
        <div>
            
                <section className="module parallax parallax-1">
                <div className="overlay"></div>
                    <h4>ALÔ COMUNIDADES - O seu portal de notícias da Zona Norte</h4>
                    <h1>INOVAÇÃO NA FAVELA & UNIÃO</h1>
                    <button className="lerMaisBtn">LER +</button>
                    
                
                </section>
                
                <section className="moduleContent">
                    <div className="container">
                        <Cards />
                        <Bairros />
                    </div>
                </section>
        </div>
    
    )
}

export default Banner

