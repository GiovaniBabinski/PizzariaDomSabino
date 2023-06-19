
function Footer(props) {

    return (
        <div className="rodape">
            <div className="contatos">
                <p className="legendaRodape"><strong>Contatos:</strong></p>
                <p className="numContato"><img className="iconeRodape" src={props.iconeWhats} />49 988020139</p>
                <p className="numContato"><strong>FIXO:</strong> &nbsp; 3333 0298 </p>
            </div>
            <div className="localizacao">
                <p className="legendaRodape"><strong>Localização:</strong></p>
                <p className="legendaRodape">Rua Edith de Franca Alves 424</p>
                <p className="legendaRodape"  > Curitiba, PR</p>
                <p className="legendaRodape"><strong>CEP:</strong> 82010-560</p>
            </div>
            <div className="horarioAtendimento">
                <p className="legendaRodape"><strong>Horário Atendimento:</strong></p>
                <p className="legendaRodape"><u>Segunda a sexta</u>:</p>
                <p className="legendaRodape"  > 08:00 12:00 / 14:00 23:00</p>
                <p className="legendaRodape"><u>Sábado:</u> 10:00 as 23:00</p>
            </div>
            <div className="venha">
                <p className="legendaRodape"><strong>Sobre:</strong></p>
                <p className="legendaRodape">Incríveis pizzas em forno a a lenha;</p>
                <p className="legendaRodape"  > Sobremesas artesanais deliciosas;</p>
                <p className="legendaRodape">O Nosso desejo é sua satisfação! </p>
            </div>

        </div>
    )
}

export default Footer;