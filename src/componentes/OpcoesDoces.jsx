

function OpcoesDoces(props) {
    return (
        <div className="structureOpDoces">
            <span className="legendaSobreMesas">Além de  pizzas, também temos incríveis sobremesas:</span>
            <ul className="listaDoces">
                <li><img className="doce1" src={props.doce1} />
                    <p> <label className="legendaDoce">Mousse Chocolate</label></p>
                </li>
                <li><img className="doce2" src={props.doce2} />
                    <p> <label className="legendaDoce2">Mousse Maracujá</label></p>
                </li>
                <li><img className="doce3" src={props.doce3} />
                    <p> <label className="legendaDoce2">Mousse Maracujá</label></p>
                </li>
                <li><img className="doce4" src={props.doce4} />
                    <p> <label className="legendaDoce3">Sagu</label></p>
                </li>
                <li><img className="doce5" src={props.doce5} />
                    <p> <label className="legendaDoce4">Torta de Limão</label></p>
                </li>
                <li><img className="doce6" src={props.doce6} />
                    <p> <label className="legendaDoce4">Torta Bolacha Maria</label></p>
                </li>
            </ul>


        </div>
    )
}

export default OpcoesDoces;
