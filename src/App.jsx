import './App.css';
//importacao das imagens do projeto
import logo from './img/logo-pizzaria.png';
import italia from './img/italia.webp';
import pizzaCalabresa from './img/calabresa.jpg';
import BaconChedar from './img/baconChedar.jpg';
import California from './img/california.jpg';
import quatroQueijos from './img/quatroQueijos.jpg';
import milho from './img/milho.jpg';
import strogonoffGado from './img/strogonoffGado.jpg';
import strogonofFrango from './img/strogonoffFrango.jpg';
import tentacao from './img/tentacao.jpg';
import chargePreto from './img/chargePreto.jpg';
import chargeBranco from './img/chargeBranco.jpg';
import mousseChoco from './img/mousseChocolate.jpg';
import mousseMaracuja from './img/mousseMaracuja.jpg';
import mouseMorango from './img/mousseMorango.jpg';
import sagu from './img/sagu.jpg';
import tortaDeLimao from './img/tortaDeLimao.webp';
import tortaBolachaMaria from './img/tortaBolachaMaria.jpg';
import iconeWhats from './img/iconeWhats.jpg';

//importações dos componentes da pagina
import Topo from './componentes/Topo';
import bannerRight from './img/deliciaPizza.webp';
import Banner from './componentes/Banner';
import BannerRight from './componentes/BannerRight';
import OpcoesPizzas from './componentes/OpçoesPizzas';
import OpcoesDoces from './componentes/OpcoesDoces';
import Avaliacao from './componentes/Avaliacao';
import Footer from './componentes/Footer';


function App() {
  //estrutura do layout da pagina com a importação de outros componentes
  return (
    <div className='window'>
      <div className='structureTopo'>
        <Topo imgLogo={logo} />
      </div>
      <div className='bnnsPage'>
        <Banner imgItalia={italia} />
        <BannerRight banner2={bannerRight} />
      </div>
      <OpcoesPizzas pizza1={pizzaCalabresa} pizza2={BaconChedar} pizza3={California} pizza4={quatroQueijos}
        pizza5={milho} pizza6={strogonoffGado} pizza7={strogonofFrango} pizza8={tentacao}
        pizza9={chargePreto} pizza10={chargeBranco} />
      <OpcoesDoces doce1={mousseChoco} doce2={mousseMaracuja} doce3={mouseMorango}
        doce4={sagu} doce5={tortaDeLimao} doce6={tortaBolachaMaria} />
      <Avaliacao />
      <Footer iconeWhats={iconeWhats} />
    </div >

  );
}

export default App;
