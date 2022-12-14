import Image, { StaticImageData } from "next/image";
import personalizado from "../public/personalizado.jpg";

export default function CardsHome({
  src,
  titulo,
  texto,
  alt,
}: {
  src: string | StaticImageData;
  titulo: string;
  texto: string;
  alt: string;
}) {
  return (
    <div className=" max-h-[412px] w-96 border border-white shadow-md bg-secondary rounded-3xl">
      <Image
        src={src}
        width={200}
        height={200}
        alt={alt}
        className=" mx-auto rounded-3xl my-6"
      />
      <h3 className=" text-xl font-extrabold mx-auto text-center">{titulo}</h3>
      <p className=" text-center text-white">{texto}</p>
    </div>
  );
}
