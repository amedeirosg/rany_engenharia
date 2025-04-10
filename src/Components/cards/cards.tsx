import Image, { StaticImageData } from "next/image";

interface CardsConfig {
  title: string;
  subtitle: string;
  image: string | StaticImageData;
}

export default function Cards({ title, subtitle, image }: CardsConfig) {
  return (
    <div className="bg-white p-4 shadow-[4px_4px_10px_2px_rgba(0,0,0,0.3)] rounded flex flex-col items-center mt-[30px] gap-4 cursor-pointer hover:scale-105 transtion-all ease-in-out duration-200">
      <div className="w-full h-[300px] rounded  flex justify-center items-center overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-[16px] font-medium">{title}</h1>
        <h2 className="text-[14px]">{subtitle}</h2>
      </div>
    </div>
  );
}
