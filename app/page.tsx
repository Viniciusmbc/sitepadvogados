import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className=" bg-[#072C4A] text-white">
        <h1>Nós colocamos o seu Escritório de Advocacia na Internet!</h1>
        <p>Seja no Tablet. Desktop. Celular</p>
        <section>
          <h2>
            Ter um site que atraia e converta clientes é essencial para
            construir uma carreira sólida na advocacia.{" "}
            <i>De advogado para advogado.</i>
          </h2>
          <h2>Por que nos escolher para criar seu site?</h2>
          <ul>
            <li>Oferecemos um serviço totalmente personalizado.</li>
            <li>
              Nossa equipe de web designers oferecerá um site totalmente
              exclusivo para você se diferenciar na internet!
            </li>
            <li>
              Desenvolvemos sites rápidos, com excelente perfomance! Seu site
              irá carregar com velocidade independente da velocidade de conexão
              de internet.
            </li>
            <li>
              Disponiblizamos planos com criação de conteúdo textual para o seu
              blog! Possuimos redatores com experiência e o conhecimento
              necessário para redigir textos de fácil entendimento para o
              público.
            </li>
            <li>
              Oferecemos serviço de automatização do WhatsApp de seu escritório!
              Você poderá oferecer as melhores soluções aos seus clientes, mesmo
              quando não estiver online!
            </li>
            <li>
              <Link href={"/planos"}>Confira nossos Planos!</Link>
            </li>
          </ul>
        </section>
        <section>
          <h3>O que entregamos aos nossos clientes?</h3>
          <article>
            Website com Icones para as redes sociais.
            <p>Para Instagram, Linkedin, Facebook, Twitter...</p>
          </article>
          <article>
            Sites adequados para motores de Busca (Google, Bing...)
            <p>
              Atraia clientes a partir de pesquisas nos principais motores de
              busca!
            </p>
          </article>
          <article>Carregamento Rápido</article>
          <article>Compatíveis com Celular, Tablet e PC.</article>
          <article>
            Segurança.
            <p>Todos nossos Websites incluem certificado SSL nativo. </p>
          </article>
        </section>
      </main>
    </>
  );
}
