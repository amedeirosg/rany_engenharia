import Image from "next/image";

export default function WppIco() {
  return (
    <div className="WppIcoContainer">
      <a
        href="https://wa.me/5531971360397"
        target="_blank"
        className="fixed bottom-6 right-6 z-50"
        rel="noopener noreferrer"
      >
        <div className="relative w-16 h-16 flex items-center justify-center text-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-500" />
          <Image
            src="/wpp-icon.png"
            alt="WhatsApp"
            width={40}
            height={40}
            className="z-10"
          />
        </div>
      </a>
    </div>
  );
}
