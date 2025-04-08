"use client";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function LifeLines() {
  const imagens = ["/lv1.jpg", "/lv2.jpg", "/lv3.jpg", "/lv4.jpg"];

  const [imagemIndex, setImagemIndex] = useState<number | null>(null);

  const fechar = () => setImagemIndex(null);
  const anterior = () =>
    setImagemIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  const proxima = () =>
    setImagemIndex((prev) =>
      prev !== null && prev < imagens.length - 1 ? prev + 1 : prev
    );

  return (
    <div className="bg-white text-black ">
      {/* Banner */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden flex-col gap-4"
        style={{
          backgroundImage: "url('/heroLV.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Camada escura sobre a imagem */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Curva branca no final */}
        <div
          className="absolute bottom-0 w-full h-24 bg-[#FFFFFF] z-10"
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
        />

        {/* Conteúdo acima da camada escura */}
        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Linhas de Vida
          </h1>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            Sistemas de proteção contra quedas que garantem a segurança de
            trabalhadores em altura.
          </p>
        </div>

        <a
          href="https://wa.me/5531971360397"
          target="_blank"
          className="relative z-20 inline-block bg-white text-black font-medium rounded px-6 py-3 text-lg hover:bg-gray-200 transition"
        >
          SOLICITAR ORÇAMENTO
        </a>
      </section>

      {/* Conteúdo principal */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 text-base">
              A segurança no trabalho em altura é um dos principais desafios da
              construção civil e da manutenção industrial. As linhas de vida são
              sistemas essenciais para garantir a proteção dos trabalhadores que
              realizam atividades em telhados, prevenindo quedas e reduzindo
              riscos de acidentes.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/lv-section1.jpeg"
              alt="Instalação de linha de vida"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 text-base">
              Um projeto de linha de vida bem elaborado deve seguir
              rigorosamente as normas de segurança, como a
              <b>NR 35 (Trabalho em Altura)</b> e a <b>ABNT NBR 16325</b>,
              garantindo que a estrutura seja resistente, funcional e adequada
              ao ambiente de trabalho. Cada projeto nosso é desenvolvido de
              forma personalizada, levando em consideração fatores como tipo de
              cobertura, carga suportada, pontos de ancoragem e facilidade de
              uso.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/lv-section2.jpeg"
              alt="Linha de vida vertical"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto object-cover max-h-80"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 text-base">
              Além da conformidade com as normas, um sistema de linha de vida
              eficiente proporciona maior segurança operacional, reduzindo a
              exposição ao risco e promovendo um ambiente de trabalho mais
              seguro para os profissionais. A instalação correta e a manutenção
              periódica são fundamentais para garantir a confiabilidade do
              sistema ao longo do tempo.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/heroLV.jpg"
              alt="Sistema de segurança em altura"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Galeria de imagens */}
      <section className="w-full py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          {imagens.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-64 overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => setImagemIndex(index)}
            >
              <Image
                src={src}
                alt={`Projeto linha de vida ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {imagemIndex !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={fechar}
          >
            <div
              className="relative w-full max-w-4xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={imagens[imagemIndex]}
                alt={`Imagem ${imagemIndex + 1}`}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg shadow-lg"
              />

              <button
                onClick={anterior}
                disabled={imagemIndex === 0}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 cursor-pointer"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={proxima}
                disabled={imagemIndex === imagens.length - 1}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 cursor-pointer"
              >
                <ChevronRight />
              </button>

              <button
                onClick={fechar}
                className="absolute top-2 right-2 bg-white text-black rounded-full p-2 hover:bg-gray-100 cursor-pointer"
              >
                <X />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Projetos & Serviços de Engenharia */}
      <section className="bg-[#f9f9f9] py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Projetos & Serviços de Engenharia
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Nós assumimos todas as etapas do seu projeto!
            <br />
            <span className="font-semibold text-black">
              Confira o que oferecemos:
            </span>
          </p>

          <div className="bg-white p-8 rounded-2xl shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-green-700 text-base md:text-lg font-medium text-left">
            <p>✅ Linhas de Vida Fixa</p>
            <p>✅ Linhas de Vida Móveis</p>
            <p>✅ Simulação dos Pontos de Ancoragem</p>
            <p>✅ Adequação de linhas existentes</p>
          </div>
        </div>
      </section>

      {/* Chamada para contato */}
      <section className="bg-gray-50 py-12 text-center">
        <h3 className="text-xl font-semibold mb-2">
          Solicite um orçamento ou tire dúvidas com nossos especialistas.
        </h3>
        <p className="text-gray-600 mb-4">
          Atuamos com instalação, inspeção e manutenção de linhas de vida.
        </p>
        <a
          href="https://wa.me/5531971360397"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
        >
          Fale com um especialista
        </a>
      </section>
    </div>
  );
}
