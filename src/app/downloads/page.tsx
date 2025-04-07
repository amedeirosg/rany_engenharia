"use client";
import { useState } from "react";
import { FileText } from "lucide-react";

export default function Downloads() {
  const files = [
    {
      id: 1,
      name: "Aços Especiais",
      url: "/downloads/materiais/aços_especiais.pdf",
      category: "materiais",
    },
    {
      id: 2,
      name: "Catálogo Construção Metálica",
      url: "/downloads/materiais/catalogo_construcao_metalica.pdf",
      category: "materiais",
    },
    {
      id: 3,
      name: "Tabela de Bolso Barras e Perfis",
      url: "/downloads/materiais/tabela_de_bolso_barras_e_perfis.pdf",
      category: "materiais",
    },
    {
      id: 4,
      name: "Catálogo de Telhas",
      url: "/downloads/materiais/catalogo_de_telhas.pdf",
      category: "materiais",
    },
    {
      id: 5,
      name: "Perfil I e U",
      url: "/downloads/materiais/perfil_i_e_u.pdf",
      category: "materiais",
    },
    {
      id: 6,
      name: "Perfil T",
      url: "/downloads/materiais/perfil_t.pdf",
      category: "materiais",
    },
    {
      id: 7,
      name: "Perfis Estruturais GERDAU",
      url: "/downloads/materiais/perfis_estruturais_GERDAU.pdf",
      category: "materiais",
    },
    {
      id: 8,
      name: "Tabela de Barras e Perfis",
      url: "/downloads/materiais/tabela_de_barras_e_perfis.pdf",
      category: "materiais",
    },
    {
      id: 9,
      name: "NBR8800 2008",
      url: "/downloads/normas/NBR8800_2008.pdf",
      category: "normas",
    },
    {
      id: 10,
      name: "NR12",
      url: "/downloads/normas/NR_12.pdf",
      category: "normas",
    },
    {
      id: 11,
      name: "NR 18",
      url: "/downloads/normas/NR_18.pdf",
      category: "normas",
    },
    {
      id: 12,
      name: "NR-35 2022",
      url: "/downloads/normas/NR-35_2022.pdf",
      category: "normas",
    },
  ];

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<
    "todos" | "materiais" | "normas"
  >("todos");

  const filteredFiles = files.filter((file) => {
    const matchesSearch = file.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "todos" || file.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto mt-40 px-6 py-12 font-sans text-black">
      <h2 className="text-4xl font-bold mb-6 text-center">Área de Downloads</h2>

      {/* Filtro por categoria */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {["todos", "materiais", "normas"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as any)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition cursor-pointer ${
              activeCategory === cat
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 border-blue-500 hover:bg-blue-100"
            }`}
          >
            {cat === "todos"
              ? "Todos"
              : cat === "materiais"
              ? "Materiais"
              : "Normas Praticáveis"}
          </button>
        ))}
      </div>

      {/* Campo de busca */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Buscar por nome do arquivo..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Resultados */}
      {filteredFiles.length === 0 ? (
        <p className="text-center text-gray-600">Nenhum arquivo encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFiles.map((file) => (
            <div
              key={file.id}
              className="bg-white p-8 min-h-[200px] rounded-2xl shadow hover:shadow-xl transition duration-300 border border-gray-200 flex flex-col justify-between gap-6"
            >
              <div className="flex items-center gap-3">
                <FileText className="text-blue-500 w-7 h-7" />
                <p className="font-semibold text-lg">{file.name}</p>
              </div>
              <a
                href={file.url}
                download
                className="mt-2 self-start bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition text-sm font-medium"
              >
                Baixar arquivo
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
