import Image from "next/image";
import Link from "next/link";
import CardsHome from "../components/Cards/CardsHome";
import CardsPrice from "../components/Cards/CardsPrice";
import CardsSteps from "../components/Cards/CardsSteps";
import {
  priceBasic,
  priceComplete,
  pricePremium,
  prices,
} from "../components/content/prices";
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
            className=" text-xl w-80 p-4 mt-10 border border-quaternary bg-quaternary rounded-full text-white text-center hover:bg-white hover:text-quaternary "
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
          <ul className=" flex flex-wrap justify-center items-center ">
            <li>
              <PostIt texto="Link para as suas redes sociais: Instagram, Linkedin, Facebook, Twitter." />{" "}
            </li>
            <li>
              <PostIt texto=" Compatibilidade com Celular, Tablet e PC." />{" "}
            </li>
            <li>
              <PostIt texto="Botão para comunicação direta com o seu WhatsApp" />
            </li>
            <li>
              <PostIt texto="Formulário de Contato" />
            </li>
            <li>
              <PostIt texto="Segurança: certificado SSL gratuito." />
            </li>
          </ul>
        </section>

        <div>
          <section className=" flex flex-col justify-center">
            <em className=" text-5xl text-center">
              Passo a Passo para criarmos o WebSite certo para você:
            </em>

            <ul className=" flex justify-center items-center">
              <li className=" border-primary border-4  p-7 w-fit h-auto rounded-full">
                <CardsSteps
                  step="Passo 1:"
                  text={`Você nos envia os textos, imagens, fotos, sites modelo
                   Quanto mais detalhes você nos fornecer, melhor!`}
                />
              </li>

              <li className=" border-quintary border-b-4 border-l-4 ">
                <span className=" border-quintary border-b-4 border-l-4 rotate-[-45deg]  p-7 w-fit h-auto "></span>
                <CardsSteps
                  step="Passo 1:"
                  text={`Você nos envia os textos, imagens, fotos, sites modelo
                   Quanto mais detalhes você nos fornecer, melhor!`}
                />
              </li>

              <li className=" border-tercery border-4  p-7 w-fit h-auto rounded-full">
                <CardsSteps
                  step="Passo 1:"
                  text={`Você nos envia os textos, imagens, fotos, sites modelo
                   Quanto mais detalhes você nos fornecer, melhor!`}
                />
              </li>

              <li className=" border-quaternary border-4  p-7 w-fit h-auto rounded-full">
                <CardsSteps
                  step="Passo 1:"
                  text={`Você nos envia os textos, imagens, fotos, sites modelo
                   Quanto mais detalhes você nos fornecer, melhor!`}
                />
              </li>
            </ul>
          </section>
        </div>

        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary">
                Preços
              </h2>
              <p className="mb-5 font-light text-black sm:text-xl">
                Nós temos o plano certo para seus objetivos!
              </p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              {priceBasic.map(
                ({ title, description, price, payInParts, options }, index) => (
                  <CardsPrice
                    key={index}
                    title={title}
                    description={description}
                    payInParts={payInParts}
                    price={price}
                    options={options}
                  />
                )
              )}
              {priceComplete.map(
                ({ title, description, price, payInParts, options }, index) => (
                  <CardsPrice
                    key={index}
                    title={title}
                    description={description}
                    payInParts={payInParts}
                    price={price}
                    options={options}
                  />
                )
              )}
              {pricePremium.map(
                ({ title, description, price, payInParts, options }, index) => (
                  <CardsPrice
                    key={index}
                    title={title}
                    description={description}
                    payInParts={payInParts}
                    price={price}
                    options={options}
                  />
                )
              )}
            </div>
          </div>
          <h3 className=" text-4xl text-secondary">
            Quer postagem <i>mensais</i> no Blog? <br></br>
            Entre em contato conosco!
          </h3>
        </section>

        <footer>
          <h2>Web para Advogados</h2>
        </footer>
      </main>
    </>
  );
}
