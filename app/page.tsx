import Image from "next/image";
import Link from "next/link";
import CardsHome from "../components/Cards/CardsHome";
import Navbar from "../components/Navbar";
import imagemInternet from "../public/global-connections.jpg";
import personalizado from "../public/personalizadoWeb.png";
import relogioImagem from "../public/siterapidoImage.png";
import seoImagem from "../public/seoImagem.png";
import redacaoImagem from "../public/redacaoImagemicone.png";
import manutencaoImagem from "../public/manutencaoSite.png";
import whatsappImagem from "../public/whatsappImagemAuto.png";

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
          <section className="flex mx-auto flex-col justify-center items-center pt-24 w-full max-w-[100vw]">
            <h2 className=" text-5xl">
              Por que nos <b>escolher</b> para criar seu site?
            </h2>
            <ul className="mt-8 grid grid-cols-3">
              <li className=" w-72 h-96">
                <CardsHome
                  src={personalizado}
                  titulo={"Site personalizado."}
                  texto={
                    "Nossa equipe de web designers criará um site totalmente                exclusivo para você se diferenciar na internet!"
                  }
                  alt={"Imagem referente a serviço especializado"}
                />
              </li>
              <li className=" w-72 h-96 ">
                <CardsHome
                  src={relogioImagem}
                  titulo={"Websites rápidos!"}
                  texto={
                    "Seu site irá carregar com velocidade independente da conexão."
                  }
                  alt={"Imagem referente a websites com velocidade"}
                />
              </li>
              <li>
                <CardsHome
                  src={redacaoImagem}
                  titulo={"Criação de conteúdo textual!"}
                  texto={
                    "Nossos redatores possuem a experiência e o conhecimento necessário para redigir textos de fácil entendimento para o público."
                  }
                  alt={
                    "Imagem referente ao plano com criação de conteúdo textual incluso"
                  }
                />
              </li>

              <li className=" w-72 h-96">
                <CardsHome
                  src={whatsappImagem}
                  titulo={"Automatização de WhatsApp"}
                  texto={
                    "Oferecemos automatização do WhatsApp para você responder seus clientes com agilidade, 24 horas por dia!"
                  }
                  alt={
                    "Imagem referente ao plano com automatização do WhatsApp"
                  }
                />
              </li>
              <li className=" w-72 h-96">
                <CardsHome
                  src={seoImagem}
                  titulo={"Otimização para SEO!"}
                  texto={
                    "Mostre autoridade nos assuntos abordados e atraia clientes a partir de pesquisas nos principais motores de busca.!"
                  }
                  alt={"Imagem referente ao SEO"}
                />
              </li>
              <li>
                <CardsHome
                  src={manutencaoImagem}
                  titulo={"Manutenção sem preço fixo!"}
                  texto={
                    "Cobramos pela manutenção de seu websites apenas quando você realmente precisar."
                  }
                  alt={"Imagem referente a manutenção do website"}
                />
              </li>
            </ul>
          </section>
        </div>

        <section className=" mx-auto pt-10">
          <h3 className=" text-5xl text-center">Todos nossos sites incluem:</h3>
          <ul className=" flex ">
            <li>
              {" "}
              Link para as redes sociais de seu escritório: Instagram, Linkedin,
              Facebook, Twitter.
            </li>
            <li>Compatibilidade com Celular, Tablet e PC.</li>
            <li>Segurança.</li>
            <li>Botão para comunicação direta de seu WhatsApp</li>
          </ul>
        </section>
        <section>
          <strong>Passo a Passo para criarmos seus WebSite:</strong>
          <article className=" border border-black h-10">
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
        <section>
          <h3>Clique aqui e Faça um Orçamento Gratuito!</h3>
        </section>
      </main>
    </>
  );
}
