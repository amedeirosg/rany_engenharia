"use client";
import Image from "next/image";
import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react";
import emailjs from "emailjs-com";
import Cards from "@/Components/cards/cards";
import { useState } from "react";
export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_wa5drbq", // Serviço ID configurado no EmailJS
        "template_3rj9qfb", // Template ID configurado no EmailJS
        templateParams,
        "jrHXOpvqTNJwf99bJ" // User ID configurado no EmailJS
      )
      .then(
        (result) => {
          alert("E-mail enviado com sucesso!");
          console.log(result.text);
        },
        (error) => {
          alert("Erro ao enviar e-mail");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="px-8 md:px-16">
      <header className="mt-14 md:flex md:justify-between md:items-center  ">
        <div
          className="flex justify-center cursor-pointer"
          onClick={() => window.location.reload()}
        >
          <Image src={"/Logo.png"} width={240} height={70} alt="logo" />
        </div>

        <ul className="md:flex gap-8 hidden ">
          <li
            onClick={() => handleScroll("Services")}
            className="text-[20px] relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            Serviços
          </li>
          <li
            onClick={() => handleScroll("Contato")}
            className="text-[20px] relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            Contato
          </li>
        </ul>
      </header>
      <main>
        <div
          id="HeroHeader"
          className="flex justify-evenly items-center mt-[100px] "
        >
          <div className=" md:ml-16 text-center flex flex-col gap-6 md:text-left md:w-[50%] ">
            <div className="mb-[24px] flex flex-col gap-4 ">
              <h1 className="text-[40px] font-medium ">SOLUÇÕES EM PROJETOS</h1>
              <h2 className="text-[20px]">
                Soluções em engenharia que garantem inovação, eficiência e
                resultados personalizados para cada projeto.
              </h2>
            </div>
            <div>
              <button
                onClick={() => handleScroll("Contato")}
                className="bg-black text-white p-3 rounded-2xl md:min-w-[250px] cursor-pointer hover:bg-gray-900 transition-bg duration-300 ease-in-out max-w-[230px] min-w-[230px]"
              >
                Saiba mais
              </button>
            </div>
          </div>
          <div className="hidden md:flex ">
            <Image
              src={"/logoSimples.png"}
              width={560}
              height={470}
              alt="logoRanyEngenharia"
            />
          </div>
        </div>
        <div id="Services" className="mt-[160px] mb-[120px]">
          <h1 className="text-[18px] font-medium">Serviços</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Cards
              title="Projetos Mecânicos"
              subtitle="Desenvolvimento de projeto, montagem e dimensionamento de equipamentos mecânicos industriais"
              image={"/rosca.jpg"}
            />
            <Cards
              title="Estruturas Metálicas"
              subtitle="Projeto, dimensionamento e montagem de galpões, mezaninos e passarelas."
              image={"/galpao.jpg"}
            />
            <Cards
              title="Linhas de vida"
              subtitle="Projeto, inspeção, laudos e adequações de linhas de vida."
              image={"/linha_de_vida.jpeg"}
            />
            <Cards
              title="Escadas Marinheiros"
              subtitle="Projeto, inspeção, laudos e adequações de escadas marinheiro."
              image={"/escada_marinheiro.jpg"}
            />
            <Cards
              title="PMOC"
              subtitle="Elaboração de PMOC, gestão de ativos e manutenção preventiva."
              image={"/ar.jpg"}
            />

            <Cards
              title="Laudos e responsabilidades técnicas"
              subtitle="Emissões de ART, avaliações estruturais e de sistemas Mecânicos"
              image={"/laudos.png"}
            />
          </div>
        </div>
        <div
          id="Contato"
          className="relative  bg-black text-white -mx-8 p-8 md:-mx-16 md:flex md:justify-around md:items-center"
        >
          <div className="mb-[80px] flex flex-col gap-[40px] md:min-w-[500px]">
            <h1 className="text-[24px] font-medium text-center">
              Entre em contato
            </h1>
            <div className="flex flex-col gap-10">
              <input
                name="name"
                onChange={handleChange}
                type="text"
                placeholder="Nome"
                className="border-0 border-b-2 border-white focus:border-white focus:outline-none bg-transparent w-full pb-2"
              />
              <input
                name="email"
                onChange={handleChange}
                type="text"
                placeholder="E-mail"
                className="border-0 border-b-2 border-white focus:border-white focus:outline-none bg-transparent w-full pb-2"
              />
              <textarea
                name="message"
                onChange={handleChange}
                placeholder="Escreva sua mensagem..."
                className="border-0 border-b-2 border-white focus:border-white focus:outline-none bg-transparent w-full h-[170px]"
              />
            </div>
            <button
              onClick={sendEmail}
              className="bg-white text-black p-2.5 font-medium cursor-pointer hover:bg-gray-200"
            >
              Enviar
            </button>
          </div>
          <div className="flex flex-col gap-8 md:gap-20">
            <a
              href="https://wa.me/5531971360397"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex gap-2 text-[16px] font-bold">
                  <MessageCircle /> <h2>WHATSAPP </h2>
                </div>
                <h2 className="font-light">(31) 97136-0397</h2>
              </div>
            </a>

            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="flex gap-2 text-[16px] font-bold">
                <Mail /> <h2>E-mail</h2>
              </div>
              <h2 className="font-light">joaopaulor1999@gmail.com</h2>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="flex gap-2 text-[16px] font-bold">
                <MapPin /> <h2>Local</h2>
              </div>
              <h2 className="font-light">Pedro Leopoldo, Minas Gerais.</h2>
            </div>
            <a
              href="https://www.instagram.com/ranyengenharia?igsh=NXk0MjA3OGo3OWJq&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex gap-2 text-[16px] font-bold">
                  <Instagram /> <h2>Instagram</h2>
                </div>
              </div>
            </a>
          </div>

          <div className="flex items-center justify-center mt-[16px] md:absolute bottom-10 right-20">
            <Image src={"/watermark.png"} alt="logo" width={200} height={200} />
          </div>
        </div>
      </main>
    </div>
  );
}
