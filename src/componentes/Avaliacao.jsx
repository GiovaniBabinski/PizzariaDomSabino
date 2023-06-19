

function Avaliacao() {
    return (
        <div className="structureAvaliacao"  >
            <strong className="legendaAv">Já Esteve Aqui. Avalie-nos:</strong>
            <p> <input placeholder="Seu nome" type="text"></input></p>
            <textarea placeholder="O que achou de nosso atendimento, cardápio e cuidados?" rows={20}></textarea>
            <p> <button className="btnEnviarAvaliacao">Enviar</button></p>
        </div>

    )
}

export default Avaliacao;