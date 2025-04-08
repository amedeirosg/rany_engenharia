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
              Com base em <strong>16 avaliações</strong>
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
                name: "Matheus Mendes",
                date: "21/10/2024",
                text: "Excelência em atendimento. Super recomendo. Parabéns!",
                profile_picture: "/MM_Customer.png",
              },
              {
                name: "João Castro",
                date: "07/04/2024",
                text: "Realizei um projeto de galpão com o Engenheiro João, muito atencioso e técnico, recomendo! ",
                profile_picture: "/JC_customer.png",
              },
              {
                name: "Roberta",
                date: "14/04/2024",
                text: "Muito satisfeita com o projeto de adequação em linha de vida, todas as normas atendidas!",
                profile_picture: "/R_customer.png",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-[#FBFAFB] border border-gray-200 rounded-xl p-6 shadow-sm text-left"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src={review.profile_picture}
                    alt="comment"
                    width={100}
                    height={100}
                    className="w-10 h-10 bg-gray-300 rounded-full"
                  />
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
