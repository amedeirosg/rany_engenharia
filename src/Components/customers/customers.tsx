import Image from "next/image";
import { Star } from "lucide-react";

export default function Customers() {
  return (
    <div className="">
      <section className="py-20 bg-white px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          O que dizem nossos clientes
        </h2>
        <p className="text-gray-600 mb-12">
          Confira os depoimentos dos nossos clientes diretamente do Google.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="text-center flex flex-col justify-center items-center">
            <div className="text-xl font-bold">EXCELENTE</div>
            <div className="flex text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5" fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-600 mt-2">
              Com base em <strong>X avaliações</strong>
            </p>
            <Image
              src="/google-logo.png"
              alt="Google"
              width={100}
              height={30}
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Fernanda Castro",
                date: "21/10/2022",
                text: "Excelência em atendimento. Super recomendo. Parabéns!",
              },
              {
                name: "Crislane Silva",
                date: "20/10/2022",
                text: "Melhor equipe!",
              },
              {
                name: "Martins Diego",
                date: "20/10/2022",
                text: "Ótima empresa, muito satisfeito com o resultado...",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-[#FBFAFB] border border-gray-200 rounded-xl p-6 shadow-sm text-left"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {review.name}
                    </div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                </div>
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
