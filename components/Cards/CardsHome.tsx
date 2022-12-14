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
    <div className=" h-auto w-96 border border-white shadow-md bg-secondary rounded-3xl">
      <Image
        src={src}
        width={100}
        height={100}
        alt={alt}
        className=" mx-auto rounded-3xl my-6"
      />
      <h3 className=" text-xl font-extrabold mx-auto text-center">{titulo}</h3>
      <p className=" text-center text-white">{texto}</p>
    </div>
  );
}
