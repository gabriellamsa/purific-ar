import React from "react";
import backgroundImage from "../assets/background-homepage.jpg";

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
          <p className="text-lg animate-slide-up">
            A Purific.Ar dedica-se a fornecer as melhores soluções de ar
            condicionado para garantir ambientes mais saudáveis e confortáveis
            para os nossos clientes. Com anos de experiência em instalação,
            manutenção e e assistência técnica, damos prioridade à qualidade e à
            satisfação do cliente.
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
            <div className="p-6 border rounded shadow-sm animate-slide-up">
              <h3 className="text-xl font-semibold mb-4">Instalação</h3>
              <p>
                Serviços de instalação profissionais para garantir que o seu
                sistema funcione com o máximo desempenho desde o primeiro dia.
              </p>
            </div>
            <div className="p-6 border rounded shadow-sm animate-slide-up">
              <h3 className="text-xl font-semibold mb-4">Manutenção</h3>
              <p>
                Manutenção regular para manter o seu sistema de ar condicionado
                a funcionar eficiente e fiável.
              </p>
            </div>
            <div className="p-6 border rounded shadow-sm animate-slide-up">
              <h3 className="text-xl font-semibold mb-4">Reparos</h3>
              <p>
                Serviços de reparação especializados para resolver quaisquer
                problemas de forma rápida e eficazmente, minimizando o tempo de
                inatividade.
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
