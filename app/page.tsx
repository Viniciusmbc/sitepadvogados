// Next tools
import Image from "next/image";
import Link from "next/link";

// Components
import CardsHome from "../components/Cards/CardsHome";
import CardsPrice from "../components/Cards/CardsPrice";
import CardsStep from "../components/Cards/CardsStep";

// Content
import {
  priceBasic,
  priceComplete,
  pricePremium,
} from "../components/content/prices";

// Layout
import Navbar from "../components/Layout/Navbar";

// Images
import facebookIcone from "../public/facebookIcon.png";
import instagramIcone from "../public/instagramIcon.png";
import linkedinIcone from "../public/linkedinLogo.png";
import manutencaoImagem from "../public/manutencaoSite.png";
import personalizado from "../public/personalizadoWeb.png";
import redacaoImagem from "../public/redacaoImagemicone.png";
import seoImagem from "../public/seoImagem.png";
import imagemPrincipal from "../public/sitePrincipal.png";
import relogioImagem from "../public/siterapidoImage.png";
import whatsappImagem from "../public/whatsappImagemAuto.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className=" bg-white flex  justify-center items-center h-[85vh] relative">
          <div className="  absolute z-10 inset-y-0 left-28 top-[15%] ">
            <h1 className=" text-quaternary font-bold text-7xl flex flex-col">
              Nós colocamos seus <br></br>
              <span className=" text-secondary">
                Serviços de Advocacia <br></br>
              </span>
              na Web!
            </h1>
            <h2 className=" my-8 text-xl  text-primary max-w-[438px]">
              Ter um site que atraia e converta clientes é essencial para
              construir uma carreira sólida na advocacia.{" "}
              <i>De advogado para advogado.</i>
            </h2>

            <Link
              href={"/"}
              className=" mt-9 mx-auto text-xl w-80 p-4  bg-secondary rounded-full text-white text-center hover:bg-quaternary hover:text-secondary "
            >
              Contate-nos
            </Link>
          </div>

          <Image
            src={imagemPrincipal}
            className=" max-h-[578px] absolute inset-y-0 right-0 top-[20%]"
            width={800}
            height={570}
            alt="imagem principal"
          />
        </section>
        <div className=" bg-white ">
          <section className="flex mx-auto flex-col justify-center items-center pt-24 w-full max-w-[100vw]">
            <h2 className=" text-5xl">
              Por que nos <b className=" text-tercery">escolher</b> para criar
              seu site?
            </h2>
            <ul className="mt-8 grid md:grid-cols-3  gap-8 ">
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

        <section>
          <h3 className=" text-5xl text-center pt-10 text-secondary ">
            Todos nossos sites incluem:
          </h3>
          <ul className=" flex flex-wrap justify-around items-center ">
            <li>
              <div className=" flex justify-between ">
                <Image
                  src={facebookIcone}
                  width={20}
                  height={20}
                  alt="Facebook Icone"
                />
                <Image
                  src={instagramIcone}
                  width={20}
                  height={20}
                  alt="instagram icone"
                />
                <Image
                  src={linkedinIcone}
                  width={20}
                  height={20}
                  alt="linkedin icone"
                />
              </div>
              Link para as Redes Sociais
            </li>

            <li className=" w-28">
              <span>
                <svg
                  height="50px"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  strokeLinecap="round"
                  strokeMiterlimit={"1.41421"}
                  version="1.1"
                  viewBox="0 0 24 24"
                  width="100%"
                >
                  <g>
                    <g>
                      <path
                        d="M4.018,17.048c-0.96,-1.484 -1.518,-3.253 -1.518,-5.151c0,-5.243 4.257,-9.5 9.5,-9.5c5.243,0 9.5,4.257 9.5,9.5c0,5.243 -4.257,9.5 -9.5,9.5c-1.777,0 -3.44,-0.489 -4.863,-1.339l-4.637,1.545l1.518,-4.555Z"
                        fill="#f3f3f3"
                      />
                      <path
                        d="M5.795,16.304c-0.886,-1.244 -1.407,-2.765 -1.407,-4.407c0,-4.201 3.411,-7.612 7.612,-7.612c4.201,0 7.612,3.411 7.612,7.612c0,4.201 -3.411,7.611 -7.612,7.611c-1.59,0 -3.066,-0.488 -4.288,-1.323l-2.862,0.954l0.945,-2.835Z"
                        fill="#00a82d"
                      />
                    </g>
                    <path
                      d="M9.714,13.873c-1.124,-1.374 -1.874,-3.056 -2.109,-4.88c-0.063,-0.508 0.106,-1.018 0.461,-1.387c0.355,-0.369 0.858,-0.558 1.368,-0.515l0.049,0.005c0,0 0.561,0.15 0.868,0.233c0.122,0.033 0.219,0.124 0.26,0.243c0.138,0.41 0.464,1.373 0.618,1.826c0.05,0.147 0.004,0.31 -0.114,0.41c-0.233,0.196 -0.618,0.52 -0.858,0.723c-0.129,0.109 -0.17,0.29 -0.1,0.443c0.279,0.608 0.635,1.176 1.057,1.69c0.434,0.502 0.933,0.949 1.485,1.327c0.14,0.095 0.325,0.085 0.454,-0.024c0.241,-0.202 0.626,-0.526 0.858,-0.722c0.119,-0.1 0.287,-0.117 0.424,-0.043c0.42,0.228 1.314,0.712 1.694,0.918c0.111,0.06 0.185,0.172 0.196,0.297c0.029,0.317 0.083,0.895 0.083,0.895l-0.004,0.049c-0.044,0.51 -0.315,0.974 -0.739,1.261c-0.424,0.288 -0.955,0.368 -1.445,0.22c-1.772,-0.545 -3.313,-1.581 -4.479,-2.937l-0.027,-0.032Z"
                      fill={"#f0f3f3"}
                    />
                  </g>
                </svg>
              </span>
              Botão para comunicação direta com o WhatsApp.
            </li>
            <li className=" w-28">Formulário de Contato</li>
            <li className=" w-28">Segurança: certificado SSL gratuito.</li>
          </ul>
        </section>

        <section className=" flex flex-col justify-center ">
          <em className=" text-5xl text-center">
            Passo a Passo para criarmos o WebSite{" "}
            <span className=" underline underline-offset-1">certo</span> para
            você:
          </em>

          <CardsStep
            step1="Passo 1:"
            text1={`Você nos envia os textos, imagens, fotos, sites modelo... \n
                   Quanto mais detalhes você nos fornecer, melhor!`}
            step2={"Passo 2:"}
            text2={"Enviamos um layout personalizado do site para você!"}
            step3={" Passo 3: "}
            text3={
              "Assim que aprovado o layout, começamos a desenvolver seu site!"
            }
            step4={"Site Concluído"}
            text4={" Seu site estará na internet!"}
          />
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
            Quer postagem <i className=" text-quaternary">mensais</i> no Blog?{" "}
            <br></br>
            Entre em contato conosco!
          </h3>
        </section>
        <section>
          <strong className=" text-3xl">Perguntas Frequentes</strong>
          <details className=" text-lg leading-loose">
            <summary className=" marker:text-quaternary cursor-pointer text-xl font-bold ">
              Por qual motivo devo criar um ter um site para oferecer meus
              serviços como advogado?
            </summary>
            Um site pode ser uma ótima maneira de promover os serviços de um
            advogado e aumentar a visibilidade de sua empresa. Também pode ser
            uma ferramenta útil para construir credibilidade e confiança com
            clientes em potencial. Além disso, um site pode fornecer informações
            valiosas sobre os serviços oferecidos pelo advogado, bem como sua
            experiência e qualificações. Isso pode ajudar os clientes a tomar
            uma decisão informada sobre contratar ou não o advogado. Um site
            também pode ser uma plataforma útil para o advogado se comunicar com
            clientes atuais e potenciais. Por exemplo, o advogado pode usar o
            site para fornecer informações sobre o andamento de um caso ou para
            responder a perguntas frequentes. Em resumo, um site pode ser uma
            ferramenta valiosa para qualquer advogado que queira promover seus
            serviços, estabelecer credibilidade e se comunicar com os clientes.
          </details>
          <details className=" text-lg leading-loose">
            <summary className=" marker:text-quaternary cursor-pointer text-xl font-bold">
              Qual vantagem de criar um site totalmente personalizado para
              oferecer meus serviços advocatícios?
            </summary>
            <ul className=" list-disc">
              <li>
                Personalização: Um site personalizado permite que um escritório
                de advocacia crie uma aparência única que reflita sua marca e
                seus valores. Isso pode ajudar a diferenciar a empresa de outras
                no mercado e construir credibilidade e confiança com os
                clientes.
              </li>
              <li>
                Flexibilidade: Um site personalizado dá ao escritório de
                advocacia o controle total sobre o design, o conteúdo e as
                funcionalidades do site. Isso permite que o escritório adicione
                ou remova recursos conforme necessário, sem ser limitado pelas
                opções pré-definidas de um template.
              </li>
              <li>
                Otimização para SEO: Criar um site personalizado permite que o
                escritório de advocacia otimize o site de acordo com as
                palavras-chave e as práticas de SEO relevantes para o negócio.
                Isso pode ajudar o site a se posicionar melhor nos resultados de
                busca e a atrair mais tráfego orgânico.
              </li>
              <li>
                Experiência do usuário: Um site personalizado pode ser projetado
                de forma a fornecer aos visitantes uma experiência de usuário
                mais agradável e intuitiva. Isso pode aumentar a probabilidade
                de os visitantes se tornarem clientes e de eles recomendarem o
                escritório de advocacia para outras pessoas.
              </li>
            </ul>
            Em resumo, criar um site personalizado para um escritório de
            advocacia pode oferecer mais personalização, flexibilidade,
            otimização para SEO e uma experiência do usuário melhor do que um
            site baseado em um template pré-definido.
          </details>
          <details className=" text-lg leading-loose">
            <summary className=" marker:text-quaternary cursor-pointer text-lg font-bold">
              O que é uma Landing Page?
            </summary>
            Uma landing page é uma página da web projetada para converter
            visitantes em clientes potenciais, geralmente através da realização
            de uma ação, como preencher um formulário ou fazer um pedido. As
            landing pages são geralmente usadas como parte de uma estratégia de
            marketing digital, para direcionar tráfego para uma página
            específica de um site a partir de anúncios online, e-mails ou links
            em redes sociais. O objetivo de uma landing page é capturar
            informações sobre os visitantes, como o nome, o endereço de e-mail
            ou o número de telefone, de modo a poder entrar em contato com eles
            posteriormente. As landing pages também podem ser usadas para vender
            produtos ou serviços diretamente, oferecendo aos visitantes a opção
            de fazer um pedido ou se inscrever para receber mais informações. Em
            resumo, a função principal de uma landing page é converter
            visitantes em clientes potenciais, oferecendo-lhes algo de valor em
            troca de suas informações de contato.
          </details>
          <details className=" text-lg leading-loose">
            <summary className=" marker:text-quaternary cursor-pointer text-lg font-bold">
              Em quanto tempo o site fica pronto?
            </summary>
            Após a aprovação do Layout, o site ficará pronto em até 5 dias
            úteis.
          </details>

          <details className=" text-lg leading-loose">
            <summary className=" marker:text-quaternary cursor-pointer text-lg font-bold">
              É possível que vocês redigiam os textos iniciais do site
              (descrição do escritório, áreas de atuação, etc )?
            </summary>
            Sim, porém há custo adicional. Entre em contato para acertarmos
            valores.
          </details>
          <details className=" text-lg leading-loose">
            <summary className=" marker:text-quaternary cursor-pointer text-lg font-bold text-secondary">
              Ainda não tenho o domínio registrado (www.seusite.com.br), o que
              devo fazer?
            </summary>
            Nossa equipe oferecerá todo o suporte para você adquirir um dominío
            na internet. Indicaremos diversas opções de site de dominios,
            ficando a seu critério a escolha. A titulo de exemplo, os valores de
            um dominío variam entre R$ 50,00 a R$ 150,00 anuais no google
            domains.
          </details>
          <details className=" text-lg leading-loose">
            <summary className=" marker:text-quaternary cursor-pointer text-lg font-bold">
              Quais as formas de pagamento?
            </summary>
            Aceitamos PIX e Cartão de Crédito.
          </details>
          <details className=" text-lg leading-loose">
            <summary className=" marker:text-quaternary cursor-pointer text-lg font-bold">
              Tenho alguma garantia que vou receber meu site no prazo?
            </summary>
            Além do contrato, você pode optar por comprar diretamente em anúncio
            no Mercado Livre, garantindo toda a proteção que a plataforma
            oferece.
          </details>
          <details className=" text-lg leading-loose">
            <summary className=" marker:text-quaternary cursor-pointer text-lg font-bold">
              Há algum valor mensal a ser pago?
            </summary>
            Não, você só pagará pela manutenção do site caso deseje fazer alguma
            modificação como troca de uma imagem ou mudança no layout.
          </details>
          <details className=" text-lg leading-loose">
            <summary className=" marker:text-quaternary cursor-pointer text-lg font-bold">
              Vocês fornecem o código fonte do site desenvolvido?
            </summary>
            Sim, fornecemos o código fonte para, caso você deseje, possa migrar
            para outra plataforma ou outros desenvolvedores.
          </details>
          <details className=" text-lg leading-loose">
            <summary className=" marker:text-quaternary cursor-pointer text-lg font-bold">
              Há um página ou espaço apropriado para eu postar notícias ou
              minhas próprias postagens?
            </summary>
            Sim, em todas as opções ofertadada, há um espaço apropriado para
            postagens. Basta você nos enviar o texto e colocaremos em até 2 dias
            úteis no site, sem custo adicional.
          </details>
          <details>
            <summary className=" marker:text-quaternary cursor-pointer text-lg font-bold">
              Preciso fornecer o acesso do meu WhatsApp para automatizar?
            </summary>
            Você receberá todas as orientações para que o programa rode em seu
            próprio PC, garantindo que não teremos acesso a nenhuma mensagem.
          </details>
        </section>

        <footer className=" bg-secondary h-80 ">
          <h2>Web para Advogados</h2>
          <ul>
            <li>Menu</li>
            <li>Home</li>
            <li>Quem Somos</li>
            <li>Blog</li>
            <li>Contato</li>
          </ul>
          <ul>
            <li>Entre em Contato</li>
            <li>xxxx@webadv.com.br</li>
            <li>WhatsApp: 55 91234-1234</li>
            <li>55 91234-1234</li>
          </ul>
        </footer>
      </main>
    </>
  );
}
