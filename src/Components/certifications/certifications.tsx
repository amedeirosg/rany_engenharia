import Image from "next/image";

export default function Certifications() {
  return (
    <div className="CertificationsContainer">
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Certificações</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="w-full md:w-1/3 max-w-xs">
            <Image
              src="/creamg.webp"
              alt="crea-cert"
              layout="responsive"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/3 max-w-xs">
            <Image
              src="/certabnt.png"
              alt="abnt-cert"
              layout="responsive"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
