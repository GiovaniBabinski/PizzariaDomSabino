import Menu from "./Menu";

function Topo(props) {

    return (
        <div className="topo">
            <div className="logo">
                <h1>Pizzaria </h1> &nbsp; &nbsp;&nbsp;
                <h1>Don Sabino</h1> &nbsp; &nbsp;&nbsp;
            </div>
            <div>
                <img className="imgLogo" src={props.imgLogo} />
            </div>
            <div >
                <Menu />
            </div>
        </div>



    )
}
export default Topo;