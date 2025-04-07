"use client";
import Image from "next/image";
import {
  Target,
  Eye,
  ShieldCheck,
  FileText,
  Factory,
  Link,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-[#FBFAFB] text-black">
      {/* Hero */}
      <motion.section
        id="inicio"
        className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/hero.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-10" />

        {/* Correção da linha branca no mobile */}
        <div
          className="absolute -bottom-[1px] w-full h-12 md:h-24 bg-[#FBFAFB]"
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
        />

        <motion.div
          className="relative z-20 px-6 max-w-4xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Excelência em projetos metálicos e mecânicos
          </h1>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            Estruturas metálicas, linhas de vida e soluções técnicas sob medida
            para sua obra.
          </p>
          <a
            href="https://wa.me/5531971360397"
            target="_blank"
            className="inline-block bg-white text-black font-medium rounded px-6 py-3 text-lg hover:bg-gray-200 transition"
          >
            SOLICITAR ORÇAMENTO
          </a>
        </motion.div>
      </motion.section>

      {/* Quem Somos */}
      <motion.section
        id="quem-somos"
        className="py-20 px-6 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-8">Quem Somos</h2>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          Somos um escritório voltado para a elaboração de Projetos e Laudos
          técnicos na área de Engenharia Mecânica com foco em Estruturas
          Metálicas e Equipamentos Industriais.
          <br />
          <br />
          Nosso objetivo é fornecer serviços especializados em Cálculo de
          Construções metálicas, abrangendo desde o projeto estrutural até a
          montagem no segmento Industrial, Comercial, Residencial, Rural, entre
          outros.
          <br />
          <br />
          Realizamos também o desenvolvimento de Conjuntos de Máquinas
          Industriais e Sistemas de Linhas de Vida para os segmentos
          pertinentes.
          <br />
          <br />
          Confiança, Qualidade, Segurança, Inovação e Economia são valores nos
          quais sempre firmamos nossas bases.
        </p>

        <div className="py-20 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                Icon: Target,
                title: "Missão",
                text: "Fornecer soluções eficientes e personalizadas em projetos de engenharia mecânica e estrutural, com qualidade, precisão e compromisso.",
              },
              {
                Icon: Eye,
                title: "Visão",
                text: "Ser referência no desenvolvimento de projetos, destacando-se pela confiabilidade, inovação e excelência técnica.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <item.Icon className="w-8 h-8 mx-auto mb-2" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-6 bg-white p-6 rounded-xl shadow-md text-center border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ShieldCheck className="w-8 h-8 mx-auto mb-2" />
            <h3 className="text-xl font-semibold">Valores</h3>
            <ul className="text-gray-600 mt-2 space-y-2 text-left">
              <li>
                <strong>Compromisso com a Qualidade e Segurança</strong> –
                Atender aos mais altos padrões técnicos e normativos.
              </li>
              <li>
                <strong>Inovação</strong> – Buscar novas soluções e tecnologias
                constantemente.
              </li>
              <li>
                <strong>Ética e Transparência</strong> – Atuar com integridade
                em todas as relações.
              </li>
              <li>
                <strong>Satisfação do Cliente</strong> – Superar expectativas
                com soluções eficazes.
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Serviços */}
      <motion.section
        className="py-20 bg-[#FBFAFB] px-6 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              href: "/estruturas-metalicas",
              Icon: Factory,
              color: "text-blue-600",
              title: "Estruturas Metálicas",
              desc: "Projetos e fabricação de estruturas sob medida.",
            },
            {
              href: "/linhas-de-vida",
              Icon: Link,
              color: "text-green-600",
              title: "Linhas de Vida",
              desc: "Sistemas de segurança para trabalhos em altura.",
            },
            {
              href: "/projetos-industriais-mecanicos",
              Icon: Wrench,
              color: "text-orange-600",
              title: "Projetos Mecânicos",
              desc: "Soluções industriais em equipamentos e máquinas.",
            },
            {
              href: "/laudos",
              Icon: FileText,
              color: "text-purple-600",
              title: "Laudos Técnicos",
              desc: "Emissão de laudos conforme exigências normativas.",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col bg-white p-6 rounded-xl shadow-lg transition duration-300 cursor-pointer min-h-[180px]">
                <div className="flex flex-col items-center">
                  <item.Icon className={`w-8 h-8 mb-2 ${item.color}`} />
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 text-center">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
