import { Phone, Instagram, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="FooterContainer">
      {/* Footer */}
      <footer className="bg-black text-white py-10 px-6 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-2">Rany Engenharia</h3>
            <p className="text-gray-400">
              Excelência em engenharia mecânica e estrutural.
            </p>
          </div>
          <div className="">
            <h3 className="text-lg font-semibold mb-2">Contato</h3>
            <div className="flex flex-col gap-2">
              <p className="text-gray-400 flex gap-2">
                <Mail /> joaopaulor1999@gmail.com
              </p>
              <p className="text-gray-400 flex gap-2">
                <Phone /> (31) 97136-0397
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Redes Sociais</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.instagram.com/ranyengenharia?igsh=NXk0MjA3OGo3OWJq&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white flex gap-2"
              >
                <Instagram />

                <span>Instagram</span>
              </a>
              <a
                href="https://wa.me/5531971360397"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white flex gap-2"
              >
                <Image
                  src={"/wpp-icon.png"}
                  width={20}
                  height={20}
                  alt="ico-wpp"
                />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
