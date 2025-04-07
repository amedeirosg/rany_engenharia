import { Instagram } from "lucide-react";
export default function Contact() {
  return (
    <div className="ContactContainer">
      {/* Contato */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Entre em Contato</h2>
        <p className="text-gray-600 mb-6">
          Estamos prontos para atender você com excelência.
        </p>
        <a
          href="https://wa.me/553171360397"
          target="_blank"
          className="bg-black text-white rounded-full px-6 py-3 text-lg hover:bg-gray-800 transition"
        >
          Fale com a Rany Engenharia
        </a>
        <div className="mt-8 flex justify-center gap-6 text-black">
          <a
            href="https://www.instagram.com/ranyengenharia"
            className="underline hover:text-gray-600"
          >
            <Instagram />
          </a>
        </div>
      </section>
    </div>
  );
}
