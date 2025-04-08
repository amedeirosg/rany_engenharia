"use client";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function LaudoTecnico() {
  const imagens = [
    "/laudo.jpg",
    "/analise_cons_sust.png",
    "/analise_desloc_cavalete.png",
    "/insp.jpg",
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
    <div className="bg-white text-black ">
      {/* Banner */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden flex-col gap-4"
        style={{
          backgroundImage: "url('/bannerLaudo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div
          className="absolute bottom-0 w-full h-24 bg-white"
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-2xl">
            Laudo Técnico
          </h1>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto drop-shadow-2xl">
            Diagnóstico técnico preciso para segurança, conformidade e tomadas
            de decisão assertivas em projetos industriais.
          </p>
          <a
            href="https://wa.me/5531971360397"
            target="_blank"
            className="inline-block bg-white text-black font-medium rounded px-6 py-3 text-lg hover:bg-gray-200 transition"
          >
            SOLICITAR LAUDO
          </a>
        </div>
      </section>
      {/* Conteúdo principal */}
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-16 text-center">
        <div className="space-y-6">
          <p className="text-gray-700 text-base leading-relaxed">
            O laudo técnico é essencial para garantir a segurança, conformidade
            e eficiência de equipamentos e estruturas. Com análises detalhadas,
            ele previne falhas, reduz custos com manutenções emergenciais e
            assegura a adequação às normas vigentes.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Dessa forma, evitamos penalizações e garantimos que a operação
            esteja em conformidade com os padrões exigidos. Isso proporciona
            mais segurança aos trabalhadores e confiabilidade aos processos
            industriais.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Para garantir ainda mais precisão e confiabilidade, quando
            necessário, utilizamos a validação de componentes através do Método
            de Elementos Finitos (MEF), uma tecnologia avançada que permite
            simular esforços, tensões e deformações nos equipamentos,
            assegurando sua integridade estrutural antes mesmo da aplicação
            prática.
          </p>
        </div>

        <div>
          <Image
            src="/laudo.jpg"
            alt="Laudo técnico"
            width={800}
            height={500}
            className="rounded-lg shadow-md mx-auto w-full h-auto object-cover"
          />
        </div>
      </section>
      {/* Destaque antes da galeria de imagens */}
      <div className="bg-blue-50 rounded-xl shadow-lg px-6 py-10 mb-16 max-w-4xl mx-auto text-center space-y-6">
        <div className="text-4xl text-blue-600">📄</div>
        <p className="text-2xl md:text-3xl font-bold text-blue-700 leading-snug">
          Mais que um documento, um laudo técnico é garantia de segurança,
          qualidade, conformidade e inovação!
        </p>
        <a
          href="https://wa.me/5531971360397"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition"
        >
          Solicitar Laudo Técnico
        </a>
      </div>

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
                alt={`Laudo ${index + 1}`}
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
            <p>✅ Estrutural</p>
            <p>✅ Linhas de Vida</p>
            <p>✅ Elevadores</p>
            <p>✅ Playgrounds</p>
            <p>✅ Andaimes</p>
            <p>✅ Componentes Mecânicos</p>
          </div>
        </div>
      </section>

      {/* Chamada para contato */}
      <section className="bg-gray-50 py-12 text-center">
        <h3 className="text-xl font-semibold mb-2">
          Precisa de um laudo técnico confiável?
        </h3>
        <p className="text-gray-600 mb-4">
          Nossa equipe está pronta para atender sua necessidade com agilidade e
          precisão.
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
