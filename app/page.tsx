import Image from "next/image";
import Link from "next/link";
import ArrowAnimation from "../components/arrowTopRight";
import CardsHome from "../components/Cards/CardsHome";
import CardsPrice from "../components/Cards/CardsPrice";
import CardsSteps from "../components/Cards/CardsSteps";
import {
  priceBasic,
  priceComplete,
  pricePremium,
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
            className=" text-xl w-80 p-4 mt-10 border border-quaternary bg-quaternary rounded-full text-white text-center hover:bg-secondary hover:text-quaternary "
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

        <section className=" flex flex-col justify-center">
          <em className=" text-5xl text-center">
            Passo a Passo para criarmos o WebSite certo para você:
          </em>

          <ul className=" flex justify-center items-center">
            <li>
              <CardsSteps
                step="Passo 1:"
                text={`Você nos envia os textos, imagens, fotos, sites modelo
                   Quanto mais detalhes você nos fornecer, melhor!`}
              />
            </li>{" "}
            <svg
              width="329"
              height="24"
              viewBox="0 0 329 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M328.061 13.0607C328.646 12.4749 328.646 11.5251 328.061 10.9393L318.515 1.3934C317.929 0.807612 316.979 0.807612 316.393 1.3934C315.808 1.97918 315.808 2.92893 316.393 3.51472L324.879 12L316.393 20.4853C315.808 21.0711 315.808 22.0208 316.393 22.6066C316.979 23.1924 317.929 23.1924 318.515 22.6066L328.061 13.0607ZM0 13.5L327 13.5V10.5L0 10.5L0 13.5Z"
                fill="black"
              />
            </svg>
            <li>
              <CardsSteps
                step="Passo 2:"
                text={`Enviamos um layout personalizado do site para você!`}
              />
            </li>
          </ul>
          <div className=" w-1/2 mx-auto">
            <svg
              width="23"
              height="273"
              viewBox="0 0 23 273"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" ml-auto"
            >
              <path
                d="M9.93151 272.053C10.5129 272.643 11.4627 272.65 12.0528 272.069L21.6692 262.594C22.2593 262.012 22.2663 261.062 21.6849 260.472C21.1034 259.882 20.1537 259.875 19.5636 260.457L11.0157 268.879L2.59352 260.331C2.01209 259.741 1.06236 259.734 0.472254 260.315C-0.117855 260.897 -0.12489 261.846 0.456541 262.436L9.93151 272.053ZM11.5 0.988889L9.50004 270.989L12.5 271.011L14.5 1.01111L11.5 0.988889Z"
                fill="black"
              />
            </svg>
          </div>
          <ul className=" flex justify-center items-center">
            <li>
              <CardsSteps
                step="Site Concluído"
                text={`Seu site estará na internet!`}
              />
            </li>

            <svg
              width="338"
              height="23"
              viewBox="0 0 338 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.94568 9.93303C0.356407 10.5153 0.350737 11.465 0.933016 12.0543L10.4218 21.6571C11.0041 22.2463 11.9538 22.252 12.5431 21.6697C13.1324 21.0875 13.138 20.1377 12.5557 19.5485L4.12127 11.0127L12.6571 2.57819C13.2463 1.99591 13.252 1.04618 12.6697 0.456909C12.0874 -0.132364 11.1377 -0.138034 10.5484 0.444245L0.94568 9.93303ZM337.009 11.5L2.00894 9.50003L1.99103 12.5L336.991 14.5L337.009 11.5Z"
                fill="black"
              />
            </svg>

            <li>
              <CardsSteps
                step="Passo 3:"
                text={`Assim que aprovado o layout, começamos a desenvolver seu site!`}
              />
            </li>
          </ul>
        </section>

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
          <h3 className=" text-4xl text-secondary text-center">
            Quer postagem <i>mensais</i> no Blog? <br></br>
            Entre em contato conosco!
          </h3>
        </section>
        <section>
          <strong>Perguntas Frequentes</strong>
          <ul>
            <li>Por qual motivo devo ter um site?</li>
            <li>O que é uma Landing Page?</li>
            <li>Em quanto tempo o site fica pronto?</li>
            <li>
              Ainda não tenho o domínio registrado (www.seusite.com.br), o que
              devo fazer?
            </li>
            <li>Quais as formas de pagamento?</li>
            <li>Tenho alguma garantia que vou receber meu site no prazo?</li>
            <li>Há algum valor mensal a ser pago?</li>
            <li>Vocês fornecem o código fonte do site desenvolvido?</li>
            <li>
              Há um página ou espaço apropriado para eu postar notícias ou
              minhas próprias postagens?
            </li>
          </ul>
        </section>

        <footer className=" bg-secondary ">
          <h2>Web para Advogados</h2>
        </footer>
      </main>
    </>
  );
}
