import Hero from "./assets/Hero.png"
import { FaGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function App() {
  

  return (
    <section className="bg-zinc-600 w-full h-[2200px]">
      <div className="flex gap-20">
       <div className="w-[380px] h-[2200px] bg-zinc-800  pt-20  ">

        <div className="flex flex-col items-center ">
         <img src={Hero} alt="" className="rounded-full h-[250px] w-[250px] mb-5 " />
       </div>

       <div className="flex flex-col items-start px-5 mt-8 w-full h-2 bg-white ">

       <div className="">
        <div>
        <h1 className="mt-7 text-3xl text-white font-bold mb-3">CONTATO</h1>
        </div>
        <div className="flex gap-2 flex-col">
          <p className="flex items-center gap-4 text-xl text-slate-200 font-normal"><FaGithub size={24} color="#fff" />Odiegodev1</p>
          <p className="flex items-center gap-2 text-xl text-slate-200 font-normal"><AiFillInstagram size={24} color="#fff"/>devDiego.</p>
          <p className="flex items-center gap-2 text-xl text-slate-200 font-normal"><FaLinkedin size={24} color="#fff"/>Diego-santos</p>
          <p className="flex items-center gap-2 text-xl text-slate-200 font-normal"><IoLogoWhatsapp size={24} color="#fff"/>(22) 998672800</p>
         </div>
       </div>

 </div>
 <div className="w-full h-2 bg-white mt-64 px-5 pt-2">
        <div>
        <h1 className="mt-7 text-3xl text-white font-bold mb-3">HABILIDADES E COMPENTECIAS</h1>
        </div>
        <div className="flex gap-2 flex-col">
          <p className="flex items-center gap-4 text-xl text-slate-200 font-normal">Linguagens de Programação: JavaScript (React, Node.js), Python (Pygame), HTML, CSS, SQL1</p>
          <span className="bg-red-700 w-full h-2"></span>
          <p className="flex items-center gap-2 text-xl text-slate-200 font-normal">Frameworks e Bibliotecas: React, Tailwind CSS, Pygame, Express.js</p>
          <span className="bg-red-700 w-full h-2"></span>
          <p className="flex items-center gap-2 text-xl text-slate-200 font-normal">React.js: Desenvolvimento de interfaces dinâmicas e interativas, integração com APIs, gerenciamento de estado e roteamento com react-router.</p>
          <span className="bg-red-700 w-full h-2"></span>
          <p className="flex items-center gap-2 text-xl text-slate-200 font-normal">Proatividade: Gosto de buscar soluções criativas para problemas e sou autodidata na aprendizagem de novas tecnologias.</p>
          <span className="bg-red-700 w-full h-2 mb-20"></span>

          <h1 className="mt-7 text-3xl text-white font-bold mb-3">INFORMAÇÕES ADICIONAIS	</h1>
          <div className="bg-white w-full h-2 "></div>
          <p className="flex items-center gap-2 text-xl text-slate-200 font-normal">Lider do projeto em desenvolvimento do SAQUAONIBUS projeto feito na faculdade</p>
          <span className="bg-red-700 w-full h-2 "></span>
          <p className="flex items-center gap-2 text-xl text-slate-200 font-normal">Trabalhei como tecnico de manutenção de computadores e celulares</p>
          <span className="bg-red-700 w-full h-2 "></span>
            


         </div>
       </div>

       </div>

       <div className="mt-20 px-5 pt-2">
        <div>
        <h1 className="mt-7 text-3xl text-white font-bold mb-3 text-center  ">DIEGO SANTOS MENDES</h1>
        <div className="bg-white w-full h-2 mb-28"></div>
        </div>
        <div className="flex gap-2 flex-col">
          <h1 className="mt-7 text-3xl text-white font-bold mb-3">RESUMO</h1>
          <p className="flex items-center gap-4 text-xl text-slate-200 font-normal">Sou proativo, autodidata e tenho facilidade em aprender novas tecnologias. Tenho forte capacidade de trabalho em equipe e comunicação clara, o que me permite colaborar de forma eficaz em projetos colaborativos. Além disso, sou apaixonado por resolução de problemas, sempre buscando soluções criativas para os desafios que surgem no desenvolvimento de software.

Estou em busca de oportunidades que me permitam aplicar minhas habilidades em desenvolvimento e contribuir para projetos inovadores, ao mesmo tempo em que continuo meu crescimento como desenvolvedor full stack.</p>
          <span className="bg-white w-full h-2 mb-20"></span>
          <h1 className="mt-7 text-3xl text-white font-bold mb-3">PROJETOS PESSOAIS</h1>
          <p className="flex items-center gap-2 text-xl text-slate-200 font-normal">LinkBio (Linktree One)<br/>
Plataforma personalizada para consolidar links em uma única página.

Tecnologias: React, Tailwind CSS
Descrição: Criação de uma versão personalizada do Linktree, permitindo aos usuários compartilhar diversos links de forma organizada em uma única página. A interface é responsiva e adaptável para diferentes dispositivos, com fácil personalização de cores e layout.<br/>
Status: Concluído</p>
          <span className="bg-red-700 w-full h-2"></span>
          <p className="flex items-center gap-2 text-xl text-slate-200 font-normal">Comparador de Preços<br/>
Ferramenta para comparar preços de produtos em diferentes plataformas de e-commerce.

Tecnologias: React, Tailwind CSS, API Mercado Livre
Descrição: Desenvolvi um comparador de preços utilizando a API do Mercado Livre, permitindo que os usuários encontrem as melhores ofertas de produtos e acompanhem as variações de preço. A aplicação foi construída com uma interface limpa e moderna, com filtros de busca e exibição de resultados em tempo real.<br/>
Status: Concluído</p>
          <span className="bg-red-700 w-full h-2"></span>
          <p className="flex items-center gap-2 text-xl text-slate-200 font-normal">SaquaÔnibus<br/>
Desenvolvimento de uma plataforma de informações de transporte público em tempo real.

Tecnologias: React, Node.js, MongoDB, API (ViaCEP), Google Maps
Descrição: Criação de um sistema para fornecer informações de horários e rotas de ônibus em tempo real, com previsão de chegada em pontos específicos e alertas de alterações de rotas. O projeto visa facilitar a mobilidade para os habitantes de Saquarema, oferecendo uma interface simples e eficiente.<br/>
Status: Em andamento</p>
          <span className="bg-red-700 w-full h-2 mb-20"></span>
          <h1 className="mt-7 text-3xl text-white font-bold mb-3">FORMAÇÃO ACADEMICA</h1>
          <span className="bg-white w-full h-2"></span>
          <p className="flex items-center gap-2 text-xl text-slate-200 font-normal">CURSANDO ENG. SOFTWARE - 08/2024 - EM ANDAMENTO</p>
          
          <p className="flex items-center gap-2 text-xl text-slate-200 font-normal">UNIVERSIDADE VASSOURAS- RIO DE JANEIRO RJ</p>
          <div className="bg-zinc-900 w-full h-2"></div>
         </div>
       </div>

       </div>
    </section>
  )
}

export default App
