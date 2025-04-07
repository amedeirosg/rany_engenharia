"use client";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ProjetosIndustriais() {
  const imagens = [
    "/mec1.JPG",
    "/mec2.jpg",
    "/mec3.JPG",
    "/mec4.jpg",
    "/mec5.JPG",
    "/mec6.JPG",
  ];

  const [imagemIndex, setImagemIndex] = useState<number | null>(null);

  const fechar = () => setImagemIndex(null);
  const anterior = () =>
    setImagemIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  const proxima = () =>
    setImagemIndex((prev) =>
      prev !== null && prev < imagens.length - 1 ? prev + 1 : prev
    );

  return (
    <div className="bg-white text-black font-sans">
      {/* Bannerx */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden flex-col gap-4"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute bottom-0 w-full h-24 bg-white"
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Projetos Industriais Mecânicos
          </h1>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            Desenvolvimento de soluções sob medida para processos industriais,
            otimizando desempenho, segurança e eficiência operacional.
          </p>
          <a
            href="https://wa.me/5531971360397"
            target="_blank"
            className="inline-block bg-white text-black font-medium rounded px-6 py-3 text-lg hover:bg-gray-200 transition"
          >
            SOLICITAR ORÇAMENTO
          </a>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 text-base">
              Um projeto de equipamentos industrial eficiente é essencial para
              garantir a confiabilidade do ativo, otimizar a produção, reduzir
              custos e garantir segurança. A eficiência no desenvolvimento
              minimiza desperdícios e falhas, enquanto soluções personalizadas
              sob medida asseguram melhor adaptação aos diversos processos
              produtivos.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/mec4.jpg"
              alt="Projeto industrial"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 text-base">
              Além disso, projetos bem elaborados seguem normas técnicas,
              aumentando a segurança e a confiabilidade operacional. Investir em
              equipamentos projetados com precisão e inovação é fundamental para
              o sucesso e a competitividade da indústria.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/mec5.JPG"
              alt="Sistemas mecânicos industriais"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Galeria de Imagens */}
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
                alt={`Projeto ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
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

      {/* Chamada para contato */}
      <section className="bg-gray-50 py-12 text-center">
        <h3 className="text-xl font-semibold mb-2">
          Fale com um especialista sobre seu projeto industrial mecânico.
        </h3>
        <p className="text-gray-600 mb-4">
          Entre em contato para uma proposta personalizada.
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
