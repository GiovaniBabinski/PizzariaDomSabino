

function Banner(props) {

    return (
        <div className="bannerStructure" >
            <div className="structureImgBanner">
                <img className="banner" src={props.imgItalia} />
            </div>
            <div className="fraseBanner">
                <h2>Gostaria De Experimentar </h2>
                <h2 className="segundaFrase">O Verdadeiro Sabor Italiano? </h2>
                <h3 className="terceiraFrase">ENTÃO EXPERIMENTE </h3>
                <h3 className="fraseDS"><strong>DOM SABINO</strong></h3>
                <div className="btnsBannerLeft">
                    <button>VER CARDÁPIO</button>
                    <button >FAZER PEDIDO</button>
                    <button>ATENDENTE VIRTUAL</button>
                </div>

            </div>

        </div>
    )
}

export default Banner;