import Image from "next/image";
import Link from "next/link";
import CardsHome from "../components/Cards/CardsHome";
import Navbar from "../components/Navbar";
import PostIt from "../components/PostIt/postIt";
import imagemInternet from "../public/global-connections.jpg";
import manutencaoImagem from "../public/manutencaoSite.png";
import personalizado from "../public/personalizadoWeb.png";
import redacaoImagem from "../public/redacaoImagemicone.png";
import seoImagem from "../public/seoImagem.png";
import relogioImagem from "../public/siterapidoImage.png";
import whatsappImagem from "../public/whatsappImagemAuto.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className=" bg-white  flex flex-col justify-center items-center min-h-[90vh]">
          <h1 className=" text-primary text-7xl mx-auto flex items-center justify-center  text-center">
            Nós colocamos <br></br> seus Serviços de Advocacia <br></br> na Web!
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
            className=" text-xl w-80 p-4 mt-10 bg-quaternary rounded-full text-white text-center"
          >
            Contate-nos
          </Link>
        </section>
        <div className=" bg-white ">
          <section className="flex mx-auto flex-col justify-center items-center pt-24 w-full max-w-[100vw]">
            <h2 className=" text-5xl">
              Por que nos <b>escolher</b> para criar seu site?
            </h2>
            <ul className="mt-8 grid grid-cols-3  gap-8 ">
              <li>
                <CardsHome
                  src={personalizado}
                  titulo={"Site personalizado."}
                  texto={
                    "Nossa equipe de web designers criará um site totalmente exclusivo para você se diferenciar na internet!"
                  }
                  alt={"Imagem referente a serviço especializado"}
                />
              </li>
              <li>
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
              <li>
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
              <li>
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

        <section className=" mx-auto pt-40">
          <h3 className=" text-5xl text-center">Todos nossos sites incluem:</h3>
          <ul className=" flex ">
            <li>
              <PostIt texto="Link para as suas redes sociais: Instagram, Linkedin, Facebook, Twitter." />{" "}
            </li>
            <li>
              <PostIt texto=" Compatibilidade com Celular, Tablet e PC." />{" "}
            </li>
            <li>
              {" "}
              <PostIt texto="Segurança: certificado SSL gratuito." />
            </li>
            <li>
              {" "}
              <PostIt texto="Botão para comunicação direta com o seu WhatsApp" />
            </li>
          </ul>
        </section>

        <div>
          <section>
            <strong>Passo a Passo para criarmos seu WebSite:</strong>
            <ul className=" flex">
              <li className=" border border-black h-auto">
                1º Passo: Você nos passa todos os detalhes que você deseja em
                seu site: logo, imagens/fotos, sites que você achou bonito...
              </li>
              <li className=" border border-black h-auto">
                2º Passo: Enviamos a você um layout personalizado do seu site.
              </li>
              <li className=" border border-black h-auto">
                3º Passo: Aprovado o layout enviado, damos inicio ao
                desenvolvimento.
              </li>
              <li className=" border border-black h-auto">
                Pronto! Agora você tem um belo site para atrair mais clientes!
              </li>
            </ul>
          </section>
        </div>

        <section>Conheça nosso planos:</section>

        <footer>
          <h2>Web para Advogados</h2>
        </footer>
      </main>
    </>
  );
}
