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
              <li className=" border border-black p-5 w-60 h-72">
                1º Passo: Você nos passa todos os detalhes que você deseja em
                seu site: logo, imagens/fotos, sites modelo...
              </li>
              <li className=" border border-black p-5 w-60 h-72">
                2º Passo: Enviamos a você um layout personalizado do seu site.
              </li>
              <li className=" border border-black p-5 w-60 h-72">
                3º Passo: Aprovado o layout enviado, damos inicio ao
                desenvolvimento. Dependendo do layout, entre 5 a 7 dias úteis
              </li>
              <li className=" border border-black p-5 w-60 h-72">
                Pronto! Agora você tem um site bonito, rápido e seguro para
                captar mais clientes!
              </li>
            </ul>
          </section>
        </div>

        <section>
          <h3 className=" text-5xl text-center">Preços e Planos</h3>

          <div className=" flex flex-col ">
            <button>Pagamento Anual</button>
            <button>Pagamento Mensal</button>
            <div>
              <strong>Básico</strong>
              <p>R$ 400,00</p>
              <ul>
                <li>Site Profissional Completo</li>
                <li>Layout Responsivo</li>
                <li>Hospedagem: Grátis por 06 meses</li>
                <li>Automatização do WhatsApp: Não</li>
                <li>Personalização: Limitada</li>
                <li>Número de Páginas: 3</li>
                <li>Postagem Mensais no Blog: 1 texto com 250 caracteres</li>
              </ul>
            </div>
            <div>
              <strong>Intermediário</strong>
              <p>R$ 650,00</p>
              <ul>
                <li>Site Profissional Completo</li>
                <li>Layout Responsivo</li>
                <li>Hospedagem: Grátis por 06 meses</li>
                <li>Automatização do WhatsApp: Sim</li>
                <li>Personalização: Ilimitada</li>
                <li>Número de Páginas: 6</li>
                <li>
                  Postagem Mensais no Blog: 2 textos com até 500 caracteres
                </li>
              </ul>
            </div>
            <div>
              <strong>Premium</strong>
              <p>R$ 950,00</p>
              <ul>
                <li>Site Profissional Completo</li>
                <li>Layout Responsivo</li>
                <li>Hospedagem: Grátis por 12 meses</li>
                <li>Automatização do WhatsApp: Sim</li>
                <li>Personalização: Ilimitada</li>
                <li>Número de Páginas: Ilimitado</li>
                <li>
                  Postagem Mensais no Blog: 4 textos com até 1000 caracteres
                </li>
                <li>+ Guia para criação de vídeos no Youtube</li>
                <li>+ Guia para criação de conteúdo textual</li>
              </ul>
            </div>
          </div>
        </section>

        <section></section>
        <footer>
          <h2>Web para Advogados</h2>
        </footer>
      </main>
    </>
  );
}
