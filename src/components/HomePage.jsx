import React, { useState } from "react";
import backgroundImage from "../assets/background-homepage.png";
import installationImage from "../assets/installation-image.jpg";
import maintenanceImage from "../assets/maintenance-image.jpg";
import cleaningImage from "../assets/cleaning-image.jpg";
import logoImage from "../assets/logo-image.png";
import emailjs from "emailjs-com";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4nxryz3", // service ID
        "template_uh5l6s2", // template ID
        formData,
        "TqXq7AYSBxGNfLYap" // Key ID
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso!");
        },
        (error) => {
          alert("Falha ao enviar mensagem. Tente novamente.");
        }
      );
  };

  return (
    <div className="min-h-screen">
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
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <img src={logoImage} alt="Logo Purific.Ar" className="w-45 h-45 mb-2" />
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
          <h2 className="text-3xl font-bold mb-6 animate-fadeIn">Sobre nós</h2>
          <p className="text-lg mb-6 animate-slideUp">
            Na Purific.Ar, nossa missão é garantir que você e sua família
            respirem um ar mais puro e desfrutem de ambientes confortáveis.
            Combinamos tecnologia avançada e atendimento personalizado, sempre
            focados no seu bem-estar e satisfação em cada etapa.
          </p>
          <p className="text-lg mb-6 animate-slideUp">
            Somos credenciados pela TCL, uma marca líder em climatização, e
            contamos com a parceria da Frigelar, referência em equipamentos de
            alta qualidade. Oferecemos soluções de confiança para atender às
            suas necessidades com precisão.
          </p>
          <p className="text-lg animate-slideUp">
            Ao escolher a Purific.Ar, você escolhe excelência e cuidado. Nossa
            equipe está comprometida em transformar o seu ambiente, entregando
            sempre conforto e tranquilidade.
          </p>
        </div>
      </section>

      {/* section serviços */}
      <section id="services" className="py-20 px-4 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 animate-fadeIn">
            Nossos serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Instalação */}
            <div className="p-6 border rounded shadow-sm animate-slideUp">
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
            <div className="p-6 border rounded shadow-sm animate-slideUp">
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
            <div className="p-6 border rounded shadow-sm animate-slideUp">
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
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6">
              Peça já o seu orçamento gratuito!
            </h2>
            <p className="text-lg mb-6">
              Estamos aqui para ajudar com qualquer dúvida ou necessidade. Entre
              em contato conosco e descubra como podemos oferecer as melhores
              soluções para você.
            </p>
          </div>
          <div className="md:w-1/2">
            <form
              onSubmit={sendEmail}
              className="bg-white p-8 rounded shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4">Entre em contato</h3>
              <label className="block mb-4">
                <span className="text-gray-700">Nome</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Mensagem</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  rows="4"
                ></textarea>
              </label>
              <button
                type="submit"
                className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-indigo-700 transition duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* botão whatsapp */}
      <a
        href="https://wa.me/+5541999999999" //corrigir o número e ocultar mais tarde!
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 animate-float"
      >
        WhatsApp
      </a>

      {/* footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Purific.Ar</h3>
            <p className="text-gray-400">
              © 2024 Purific.Ar. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://www.facebook.com/profile.php?id=100063702363852&locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/purific.ar_ar_condicionado/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Instagram
            </a>
            <a
              href="https://www.google.com/maps/place/PURIFIC.AR+AR+CONDICIONADO/@-25.4301275,-49.3459507,5990m/data=!3m1!1e3!4m6!3m5!1s0x94dce1b3edd1b62f:0xb28effe789ad0365!8m2!3d-25.4225431!4d-49.321048!16s%2Fg%2F11k6tyd3tn?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Mapa
            </a>
          </div>
          <div className="text-center md:text-right">
            <a href="#home" className="text-gray-400 hover:text-gray-300">
              Voltar ao topo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
