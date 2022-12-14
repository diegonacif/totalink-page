import Fade from 'react-reveal/Fade';

export const Services = () => {
  // Cálculo de idade
  const timeNow = new Date();
  const birth = new Date(2004, 11, 23);
  const age = convertMill(timeNow - birth);

  function convertMill (mSeconds) {
    var checkYear = Math.floor(mSeconds / 31536000000);
    return checkYear;
  }

  return (
    <div className="services-container">
      <Fade left>
        <h1>Saiba como a Total Ink pode simplificar seu dia-a-dia!</h1>
        <p>Conheça alguns dos nossos serviços! Se você não achou o que procura, entre em contato conosco. Temos um amplo leque de soluções para parques de impressão, venda de produtos e suporte a equipamentos. Conte com nossos {age} anos de tradição para te ajudar a crescer.</p>
      </Fade>
      <section>
        <Fade left>
          <div className="service-wrapper">
            <div className="service-img remanufatura"></div>
            <span>Remanufatura</span>
            <p>O uso de cartuchos remanufaturados oferece economia sem perda na qualidade de impressão. A Total Ink investe em tecnologia para garantir a qualidade da sua impressão e ajuda a sua empresa a reduzir os impactos ambientais gerados pelo descarte dos cartuchos usados.</p>
          </div>
        </Fade>
        <Fade left>
          <hr />
          <div className="service-wrapper">
            <div className="service-img outsourcing"></div>
            <span>Outsourcing</span>
            <p>Tenha sempre um equipamento de ponta na sua empresa. Com a opção de comodato oferecida pela Total Ink, você conta sempre com equipamentos novos além da redução de custos de suprimentos e gerenciamento, maior padrão, além de maior eficiência e controle.</p>
          </div>
        </Fade>
        {/* <Fade left>
          <hr />
          <div className="service-wrapper">
            <div className="service-img maintenance"></div>
            <span>Manutenção, coleta e entrega.</span>
            <p>A Total Ink dispõe de coleta e entrega de equipamentos, cartuchos, toners, além de serviços de manutenção corretiva e preventiva de impressoras. Aqui você encontra a solução completa com atendimento personalizado para pequenas, médias e grandes empresas.</p>
          </div>
        </Fade> */}
      </section>
    </div>
  )
}