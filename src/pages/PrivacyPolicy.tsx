import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"
import { Header } from "../components/sections/Header"
import { Footer } from "../components/sections/Footer"
import { LayoutContainer } from "../components/ui/layout/LayoutContainer"
import { SectionHeader } from "../components/ui/layout/SectionHeader"
import { Reveal } from "../components/animations/Reveal"

const CONTACT_EMAIL = "chepli@chpsmart.com.br"
const CONTACT_PHONE = "+55 (11) 91102-1278"
const COMPANY_CNPJ = "45.455.738/0001-81"
const LAST_UPDATE = "13 de outubro de 2026"

/** Destaca no texto os pontos que ainda precisam ser confirmados/preenchidos. */
function Pending({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded bg-yellow-100 px-1.5 font-medium text-yellow-900">
      {children}
    </mark>
  )
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 leading-relaxed text-gray-600">{children}</p>
}

function List({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-gray-600 marker:text-[rgb(var(--brand-primary))]">
      {children}
    </ul>
  )
}

function Table({ head, rows }: { head: [string, string]; rows: [ReactNode, ReactNode][] }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-2xl border border-black/10">
      <table className="w-full min-w-[480px] border-collapse text-left text-sm">
        <thead className="bg-[#0F2240] text-white">
          <tr>
            <th className="px-4 py-3 font-semibold">{head[0]}</th>
            <th className="px-4 py-3 font-semibold">{head[1]}</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {rows.map(([a, b], i) => (
            <tr key={i} className="border-t border-black/10 align-top">
              <td className="px-4 py-3">{a}</td>
              <td className="px-4 py-3">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const strong = "font-semibold text-gray-900"
const link = "font-medium text-[rgb(var(--brand-secondary))] underline underline-offset-2 hover:opacity-80"

type PolicySectionData = {
  id: string
  title: string
  content: ReactNode
}

const sections: PolicySectionData[] = [
  {
    id: "quem-somos",
    title: "1. Quem somos",
    content: (
      <>
        <P>
          Esta Política explica como a <strong className={strong}>CHP Smart</strong>{" "}
          (<Pending>[RAZÃO SOCIAL]</Pending>, CNPJ {COMPANY_CNPJ}, com sede em São Paulo/SP) trata os
          dados pessoais coletados por meio do site{" "}
          <strong className={strong}>chpsmart.com.br</strong>.
        </P>
        <P>
          Para fins da Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018), a CHP Smart é a{" "}
          <strong className={strong}>controladora</strong> dos dados tratados nos termos deste
          documento, ou seja, quem decide como e para que eles são usados.
        </P>
      </>
    ),
  },
  {
    id: "dados",
    title: "2. Dados que coletamos",
    content: (
      <>
        <P>
          Coletamos apenas o necessário para atender você. Ao preencher o formulário de contato,
          registramos:
        </P>
        <Table
          head={["Dado", "Origem"]}
          rows={[
            ["Nome", "Informado por você no formulário"],
            ["E-mail", "Informado por você no formulário"],
            ["Conteúdo da mensagem", "Escrito por você no formulário"],
            ["Data e hora do envio", "Registradas automaticamente no envio"],
          ]}
        />
        <P>
          Se você falar conosco por e-mail, telefone ou WhatsApp, também trataremos as informações
          enviadas nessas conversas. Pedimos que{" "}
          <strong className={strong}>não inclua dados sensíveis</strong> (como saúde, religião ou
          convicção política) nem documentos pessoais, pois não são necessários para o contato.
        </P>
        <P>
          A infraestrutura de hospedagem do site também pode registrar dados técnicos de acesso,
          como endereço IP, tipo de navegador e data e hora, para fins de segurança e funcionamento.
        </P>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "3. Para que usamos seus dados",
    content: (
      <>
        <List>
          <li>
            <strong className={strong}>Responder ao seu contato</strong>, esclarecendo dúvidas
            institucionais e solicitações enviadas pelo formulário.
          </li>
          <li>
            <strong className={strong}>Prospecção e relacionamento comercial</strong>: identificar
            oportunidades de negócio e parcerias e dar sequência ao diálogo iniciado por você.
          </li>
          <li>
            <strong className={strong}>Comunicação com as marcas do grupo</strong>, quando o
            assunto da sua mensagem envolver uma delas.
          </li>
          <li>
            <strong className={strong}>Segurança e prevenção a abusos</strong>, protegendo o site e
            o formulário contra envios automatizados.
          </li>
          <li>
            <strong className={strong}>Cumprimento de obrigações legais</strong> e exercício
            regular de direitos.
          </li>
        </List>
        <P>
          Não usamos seus dados para finalidades incompatíveis com as acima. Caso venhamos a enviar
          comunicações promocionais recorrentes, você poderá pedir para deixar de recebê-las a
          qualquer momento.
        </P>
      </>
    ),
  },
  {
    id: "bases-legais",
    title: "4. Bases legais",
    content: (
      <>
        <P>Todo tratamento precisa de uma justificativa prevista na LGPD (art. 7º). Utilizamos:</P>
        <List>
          <li>
            <strong className={strong}>Consentimento</strong> (art. 7º, I): ao enviar o formulário,
            você nos autoriza a usar seus dados para responder ao contato. Você pode retirar o
            consentimento quando quiser.
          </li>
          <li>
            <strong className={strong}>Legítimo interesse</strong> (art. 7º, IX): para dar
            continuidade a contatos comerciais e de parcerias iniciados por você, sempre respeitando
            suas expectativas e seus direitos.
          </li>
          <li>
            <strong className={strong}>Cumprimento de obrigação legal ou regulatória</strong> (art.
            7º, II), quando aplicável.
          </li>
        </List>
      </>
    ),
  },
  {
    id: "compartilhamento",
    title: "5. Com quem compartilhamos",
    content: (
      <>
        <P>
          <strong className={strong}>Não vendemos seus dados.</strong> Eles só são compartilhados
          com quem precisa recebê-los para que o atendimento e o site funcionem:
        </P>
        <Table
          head={["Quem", "Para quê"]}
          rows={[
            [
              <strong key="emailjs" className={strong}>EmailJS</strong>,
              "Serviço que envia o conteúdo do formulário do site para a caixa de e-mail da CHP Smart.",
            ],
            [
              <Pending key="mail">[Provedor de e-mail corporativo]</Pending>,
              "Receber e armazenar as mensagens enviadas.",
            ],
            [
              <>
                Vercel <Pending>[confirmar]</Pending>
              </>,
              "Hospedagem do site e registros técnicos de segurança.",
            ],
            [
              "Google (Google Fonts)",
              "Entrega da fonte usada no site. Ao carregá-la, seu navegador pode enviar o endereço IP ao Google.",
            ],
            [
              <>
                Marcas do grupo (IVM Italy, Forthy, BRV Válvulas e Roddex){" "}
                <Pending>[confirmar]</Pending>
              </>,
              "Encaminhamento da sua mensagem à marca correspondente ao assunto.",
            ],
            [
              "WhatsApp (Meta)",
              "Se você optar por falar conosco pelo botão do WhatsApp, a conversa segue os termos e a política de privacidade do WhatsApp.",
            ],
            ["Autoridades públicas", "Quando houver obrigação legal ou ordem judicial."],
          ]}
        />
        <P>
          Os prestadores de serviço atuam como operadores e só podem tratar os dados conforme nossas
          instruções e as regras de proteção de dados aplicáveis.
        </P>
      </>
    ),
  },
  {
    id: "transferencia",
    title: "6. Transferência internacional",
    content: (
      <P>
        Alguns dos serviços que utilizamos, como o EmailJS, a hospedagem e o Google Fonts, podem
        processar ou armazenar dados em servidores fora do Brasil. Quando isso ocorre, adotamos as
        garantias previstas na LGPD (art. 33) para que seus dados continuem protegidos, por exemplo
        por meio de cláusulas contratuais e da escolha de fornecedores com medidas de segurança
        adequadas.
      </P>
    ),
  },
  {
    id: "retencao",
    title: "7. Por quanto tempo guardamos",
    content: (
      <P>
        Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades descritas nesta
        Política. Como regra, as mensagens do formulário são guardadas por{" "}
        <Pending>[ex.: até 24 meses após o último contato]</Pending>, salvo se houver relacionamento
        comercial em andamento ou se a lei exigir prazo maior. Depois disso, os dados são eliminados
        ou anonimizados.
      </P>
    ),
  },
  {
    id: "direitos",
    title: "8. Seus direitos",
    content: (
      <>
        <P>A LGPD (art. 18) garante a você, como titular, o direito de solicitar:</P>
        <List>
          <li>confirmação de que tratamos seus dados e acesso a eles;</li>
          <li>correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
          <li>portabilidade dos dados a outro fornecedor, mediante requisição expressa;</li>
          <li>eliminação dos dados tratados com base no seu consentimento;</li>
          <li>informação sobre as entidades com as quais compartilhamos seus dados;</li>
          <li>informação sobre a possibilidade de não consentir e sobre as consequências da recusa;</li>
          <li>revogação do consentimento, a qualquer momento e de forma gratuita;</li>
          <li>oposição a tratamentos feitos com base em legítimo interesse, quando houver descumprimento da lei.</li>
        </List>
        <div className="mt-6 rounded-xl border-l-4 border-[rgb(var(--brand-primary))] bg-slate-50 p-5 leading-relaxed text-gray-600">
          Para exercer qualquer desses direitos, escreva para{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className={link}>
            {CONTACT_EMAIL}
          </a>{" "}
          informando seu nome e o e-mail usado no contato. Poderemos pedir informações adicionais
          para confirmar sua identidade e responderemos dentro do prazo previsto em lei.
        </div>
      </>
    ),
  },
  {
    id: "seguranca",
    title: "9. Segurança dos dados",
    content: (
      <P>
        Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não
        autorizados, perda, alteração ou divulgação indevida, como conexão segura (HTTPS), controle
        de acesso às caixas de e-mail e uso de fornecedores com práticas reconhecidas de segurança.
        Nenhum sistema é totalmente invulnerável; se ocorrer um incidente que possa gerar risco ou
        dano relevante a você, comunicaremos você e a Autoridade Nacional de Proteção de Dados
        (ANPD), conforme a lei.
      </P>
    ),
  },
  {
    id: "cookies",
    title: "10. Cookies e tecnologias semelhantes",
    content: (
      <>
        <P>
          O site <strong className={strong}>não utiliza cookies de análise, publicidade ou
          rastreamento</strong>, e não usa ferramentas como Google Analytics ou Meta Pixel. Os vídeos
          exibidos são hospedados no próprio site.
        </P>
        <P>
          Se passarmos a utilizar essas ferramentas, atualizaremos esta Política e solicitaremos o
          seu consentimento antes de ativá-las.
        </P>
      </>
    ),
  },
  {
    id: "menores",
    title: "11. Crianças e adolescentes",
    content: (
      <P>
        O site e o formulário são voltados a empresas e a pessoas maiores de 18 anos. Não coletamos
        intencionalmente dados de crianças e adolescentes. Se perceber que algum dado desse tipo nos
        foi enviado, entre em contato para que possamos eliminá-lo.
      </P>
    ),
  },
  {
    id: "alteracoes",
    title: "12. Alterações desta política",
    content: (
      <P>
        Podemos atualizar esta Política para refletir mudanças em nossos serviços ou na legislação.
        A versão vigente estará sempre nesta página, com a data da última atualização indicada no
        topo. Mudanças relevantes serão destacadas no site.
      </P>
    ),
  },
  {
    id: "contato",
    title: "13. Fale conosco",
    content: (
      <>
        <P>
          Dúvidas sobre esta Política ou sobre o tratamento dos seus dados? Fale com a pessoa
          responsável pelo tema de privacidade na CHP Smart:
        </P>
        <address className="mt-4 space-y-1 not-italic leading-relaxed text-gray-600">
          <p>
            <strong className={strong}>E-mail:</strong>{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className={link}>
              {CONTACT_EMAIL}
            </a>
          </p>
          <p>
            <strong className={strong}>Telefone:</strong> {CONTACT_PHONE}
          </p>
          <p>
            <strong className={strong}>Encarregado (DPO):</strong> <Pending>[NOME, se houver]</Pending>
          </p>
        </address>
        <P>
          Você também pode registrar reclamação junto à Autoridade Nacional de Proteção de Dados
          (ANPD), em{" "}
          <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className={link}>
            gov.br/anpd
          </a>
          .
        </P>
        <a
          className="group relative mt-6 inline-flex items-center gap-5 overflow-hidden rounded-full border border-black bg-black p-3 pl-6 text-white transition-colors duration-300 hover:text-black"
          href={`mailto:${CONTACT_EMAIL}`}
        >
          <span
            className="absolute inset-0 origin-left scale-x-0 rounded-full bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100"
            aria-hidden="true"
          />
          <span className="relative z-10">Falar sobre privacidade</span>
          <span className="relative z-10 flex items-center justify-center rounded-full bg-white p-3 text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white">
            <ArrowUpRight />
          </span>
        </a>
      </>
    ),
  },
]

function goToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function PrivacyPolicy() {
  return (
    <>
      <Header />

      {/* Banner (mesmo visual do Hero da Home) */}
      <section aria-labelledby="privacy-title" className="relative w-full pb-16 pt-36 md:pb-24 md:pt-44">
        <div
          aria-hidden
          className="absolute inset-0 z-0 bg-[#0F2240] md:rounded-bl-[96px] lg:rounded-bl-[200px]"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal delay={0.2} direction="right">
            <h1
              id="privacy-title"
              className="text-3xl font-black uppercase leading-snug tracking-[.09rem] text-white xl:text-5xl"
            >
              Política de{" "}
              <span className="block text-[rgb(var(--brand-primary))] min-[400px]:inline">
                Privacidade
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.3} direction="right">
            <p className="mt-5 max-w-2xl text-lg font-medium leading-snug text-[rgb(var(--color-white)/50%)]">
              Transparência sobre como tratamos os dados pessoais de quem fala com a CHP Smart, em
              conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </Reveal>
          <Reveal delay={0.4} direction="right">
            <span className="mt-6 inline-block rounded-md border border-white/40 px-4 py-2 text-sm text-white">
              Última atualização: {LAST_UPDATE}
            </span>
          </Reveal>
        </div>
      </section>

      <LayoutContainer>
        <div className="mx-auto grid max-w-6xl gap-10 py-16 lg:grid-cols-[280px_1fr] lg:gap-14 lg:py-24">
          {/* Índice */}
          <aside
            aria-label="Índice da página"
            className="self-start rounded-3xl border border-black/10 bg-white p-6 shadow-md lg:sticky lg:top-28"
          >
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Nesta página
            </h2>
            <ol className="mt-3 flex flex-col">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      goToSection(section.id)
                    }}
                    className="block rounded-lg px-3 py-1.5 text-sm leading-snug text-gray-700 transition-colors hover:bg-slate-100 hover:text-[rgb(var(--brand-secondary))]"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          {/* Conteúdo */}
          <article className="min-w-0">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-b border-black/10 pb-10 pt-10 first:pt-0 last:border-b-0"
              >
                <SectionHeader title={section.title} />
                <Reveal delay={0.1} direction="up">
                  {section.content}
                </Reveal>
              </section>
            ))}
          </article>
        </div>
      </LayoutContainer>

      <Footer />
    </>
  )
}
