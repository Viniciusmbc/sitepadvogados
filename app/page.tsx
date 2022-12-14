import Image from "next/image";
import Link from "next/link";
import CardsHome from "../components/Cards/CardsHome";
import Navbar from "../components/Navbar";
import imagemInternet from "../public/global-connections.jpg";
import personalizado from "../public/personalizado.jpg";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className=" bg-white  flex flex-col justify-center items-center min-h-[90vh]">
          <h1 className=" text-primary text-7xl mx-auto flex items-center justify-center  text-center">
            Nós colocamos seus Serviços de Advocacia na Web!
          </h1>
          <h2 className="text-center mx-auto text-primary">
            Ter um site que atraia e converta clientes é essencial para
            construir uma carreira sólida na advocacia.{" "}
          </h2>
          <p className=" text-center mx-auto">
            <i>De advogado para advogado.</i>
          </p>
          <Link
            href={"/"}
            className=" text-xl w-80 p-4 mt-10  bg-quintary rounded-full text-white text-center"
          >
            Contate-nos
          </Link>
        </section>
        <div className="  bg-quaternary ">
          <section className="flex mx-auto flex-col justify-center items-center pt-24">
            <h2 className=" text-5xl">
              Por que nos <b>escolher</b> para criar seu site?
            </h2>
            <ul className="mt-8 flex">
              <li>
                <CardsHome
                  src={personalizado}
                  titulo={"Site personalizado!"}
                  texto={
                    "Nossa equipe de web designers criará um site totalmente                exclusivo para você se diferenciar na internet!"
                  }
                  alt={"Imagem referente a serviço especializado"}
                />
              </li>
              <li className=" w-72 h-96  border border-white "></li>
              <li className=" w-72 h-96  border border-white ">
                Websites com excelente perfomance! Seu site irá carregar com
                velocidade independente da conexão.
              </li>
              <li className=" w-72 h-96  border border-white ">
                Planos com criação de conteúdo textual para o seu website!
                Possuimos redatores com experiência e o conhecimento necessário
                para redigir textos de fácil entendimento para o público.
              </li>
              <li className=" w-72 h-96  border border-white ">
                Oferecemos serviço de automatização do WhatsApp de seu
                escritório!
              </li>
            </ul>
          </section>
        </div>

        <section className=" mx-auto pt-44 ">
          <h3 className=" text-5xl text-center">
            O que entregamos aos nossos clientes?
          </h3>
          <article>
            <h3>Website com Icones para as redes sociais.</h3>
            <p>Para Instagram, Linkedin, Facebook, Twitter...</p>
          </article>
          <article>
            <h3>Sites adequados para motores de Busca (Google, Bing...)</h3>
            <p>
              Além de mostrar autoridade nos assuntos abordados, atraia clientes
              a partir de pesquisas nos principais motores de busca!
            </p>
          </article>
          <article>Carregamento Rápido</article>
          <article>Compatível com Celular, Tablet e PC.</article>
          <article>
            Segurança.
            <p>Todos nossos Websites incluem certificado SSL nativo. </p>
          </article>
        </section>
        <section>
          <strong>Como Funciona?</strong>
          <article>
            1º Passo: Você nos envia o logo e as imagens/fotos que você quer
            colocar em seu site.
          </article>

          <article>
            2º Passo: Enviamos a você um layout personalizado do seu site.
          </article>

          <article>
            3º Passo: Aprovado o layout enviado, damos inicio ao
            desenvolvimento.
          </article>
          <article>Pronto! Seu site estará na internet!</article>
        </section>
      </main>
    </>
  );
}
