

function OpcoesPizzas(props) {
    return (
        <div className="PizzasReference">
            <br /> <br /><br /> <br />
            <p className="frase">Confira algumas de nossas opções de nossas deliciosas pizzas:</p>
            <div className="structureListasPizzas">
                <br /> <br />
                <ul className="lista1">
                    <li ><img className="pizza1" src={props.pizza1} /><p>Pizza Calabresa</p>
                        <button className="btnPedido">Realizar pedido</button> </li>
                    <li ><img className="pizza2" src={props.pizza2} /><p>Bacon e Chedar</p>
                        <button className="btnPedido">Realizar pedido</button> </li>
                    <li ><img className="pizza3" src={props.pizza3} /><p>Califórnia</p>
                        <button className="btnPedido">Realizar pedido</button> </li>
                    <li ><img className="pizza4" src={props.pizza4} /><p>Quatro queijos</p>
                        <button className="btnPedido">Realizar pedido</button> </li>
                    <li ><img className="pizza5" src={props.pizza5} /><p>Milho</p>
                        <button className="btnPedido">Realizar pedido</button> </li>
                </ul>
                <ul className="lista2">
                    <li ><img className="pizza6" src={props.pizza6} /><p>Strogonoff Gado</p>
                        <button className="btnPedido">Realizar pedido</button> </li>
                    <li ><img className="pizza7" src={props.pizza7} /><p>Strogonoff Frango</p>
                        <button className="btnPedido">Realizar pedido</button> </li>
                    <li ><img className="pizza8" src={props.pizza8} /><p>Tentação</p>
                        <button className="btnPedido">Realizar pedido</button> </li>
                    <li ><img className="pizza9" src={props.pizza9} /><p>Charge Preto</p>
                        <button className="btnPedido">Realizar pedido</button> </li>
                    <li ><img className="pizza10" src={props.pizza10} /><p>Charge Branco</p>
                        <button className="btnPedido">Realizar pedido</button> </li>
                </ul>
                <button style={{ marginTop: 20 }} className="btnVerCardapioTodo">Ver Cardápio Completo</button>

            </div>


        </div>
    )
}

export default OpcoesPizzas;