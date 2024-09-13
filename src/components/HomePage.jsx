import React from "react";
import backgroundImage from "../assets/background-homepage.jpg";
import installationImage from "../assets/installation-image.jpg";
import maintenanceImage from "../assets/maintenance-image.jpg";
import cleaningImage from "../assets/cleaning-image.jpg";

const HomePage = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <header className="fixed top-0 left-0 w-full bg-indigo-900 text-white shadow z-50">
        <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <div className="font-bold text-xl">Purific.Ar</div>
          <div className="flex space-x-6">
            <a href="#home" className="hover:underline">
              Início
            </a>
            <a href="#about" className="hover:underline">
              Sobre
            </a>
            <a href="#services" className="hover:underline">
              Serviços
            </a>
            <a href="#contact" className="hover:underline">
              Contato
            </a>
          </div>
        </nav>
      </header>

      {/* section inicio */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">
          Bem Vindo ao Purific.Ar
        </h1>
        <p className="text-lg mb-8 animate-slide-up">
          Soluções para ambientes mais saudáveis e mais confortáveis!
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-700 font-semibold py-2 px-4 rounded shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Solicitar Orçamento
        </a>
      </section>

      {/* section sobre */}
      <section id="about" className="py-20 px-4 bg-gray-100 text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Sobre nós</h2>
          <p className="text-lg mb-6 animate-slide-up">
            Na Purific.Ar, nossa missão é garantir que você e sua família
            respirem um ar mais puro e desfrutem de ambientes confortáveis.
            Combinamos tecnologia avançada e atendimento personalizado, sempre
            focados no seu bem-estar e satisfação em cada etapa.
          </p>
          <p className="text-lg mb-6 animate-slide-up">
            Somos credenciados pela TCL, uma marca líder em climatização, e
            contamos com a parceria da Frigelar, referência em equipamentos de
            alta qualidade. Oferecemos soluções de confiança para atender às
            suas necessidades com precisão.
          </p>
          <p className="text-lg animate-slide-up">
            Ao escolher a Purific.Ar, você escolhe excelência e cuidado. Nossa
            equipe está comprometida em transformar o seu ambiente, entregando
            sempre conforto e tranquilidade.
          </p>
        </div>
      </section>

      {/* section serviços */}
      <section id="services" className="py-20 px-4 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 animate-fade-in">
            Nossos serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Instalação */}
            <div className="p-6 border rounded shadow-sm animate-slide-up">
              <img
                src={installationImage}
                alt="Instalação"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-4">
                Instalação Especializada
              </h3>
              <p>
                Instalações precisas e seguras que garantem o funcionamento
                ideal do seu ar-condicionado desde o primeiro dia. Nossa equipe
                certificada cuida de cada detalhe para que você tenha conforto
                imediato e duradouro.
              </p>
            </div>
            {/* Manutenção */}
            <div className="p-6 border rounded shadow-sm animate-slide-up">
              <img
                src={maintenanceImage}
                alt="Manutenção"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-4">
                Manutenção Preventiva
              </h3>
              <p>
                Manutenções regulares para manter seu sistema funcionando de
                forma eficiente e confiável, evitando problemas futuros e
                prolongando a vida útil do equipamento.
              </p>
            </div>
            {/* Higienização */}
            <div className="p-6 border rounded shadow-sm animate-slide-up">
              <img
                src={cleaningImage}
                alt="Higienização"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-4">
                Higienização Completa
              </h3>
              <p>
                Limpeza e higienização profunda do seu ar-condicionado,
                removendo impurezas e garantindo um ar mais saudável para você e
                sua família. Ideal para melhorar a qualidade do ar e evitar
                problemas respiratórios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section contato */}
      <section id="contact" className="py-20 px-4 bg-gray-100 text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">
            Entre em contato
          </h2>
          <p className="text-lg mb-12 animate-slide-up">
            Não hesite em nos contatar para qualquer questão ou para solicitar
            um orçamento.
          </p>
          <a
            href="https://wa.me/+5541999999999" //corrigir o número e ocultar mais tarde!
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-green-600 transition duration-300"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
