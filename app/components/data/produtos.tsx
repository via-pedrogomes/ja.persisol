import ImgTeste from '../utils/HeroImages/TestMobile2.jpeg'

//Tradicional
import tradicional1 from '../utils/CortinasImages/Tradicional/cortinaTradicional1.jpg'
import tradicional2 from '../utils/CortinasImages/Tradicional/cortinaTradicional2.jpg'
import tradicional3 from '../utils/CortinasImages/Tradicional/cortinaTradicional3.jpg'

//Blackout
import blackout1 from '../utils/CortinasImages/blackout1.jpeg'
import blackout2 from '../utils/CortinasImages/blackout2.jpeg'
import blackout3 from '../utils/CortinasImages/blackout3.jpeg'
import blackout4 from '../utils/CortinasImages/blackout4.jpeg'

//Wave
import wave1 from '../utils/CortinasImages/Wave/wave1.jpeg'
import wave2 from '../utils/CortinasImages/Wave/wave2.jpeg'
import wave3 from '../utils/CortinasImages/Wave/wave3.jpeg'

//Rolo
import rolo1 from '../utils/PersianasImages/rolo1.jpeg'
import rolo2 from '../utils/PersianasImages/rolo2.jpeg'
import rolo3 from '../utils/PersianasImages/rolo3.jpeg'
import rolo4 from '../utils/PersianasImages/rolo4.jpeg'

//Double Vision
import DV1 from '../utils/PersianasImages/DV1.jpeg'
import DV2 from '../utils/PersianasImages/DV2.jpeg'
import DV2_1 from '../utils/PersianasImages/DV2_1.jpeg'
import DV3 from '../utils/PersianasImages/DV3.jpeg'
import DV4 from '../utils/PersianasImages/DV4.jpeg'
import DV5 from '../utils/PersianasImages/DV5.jpeg'
import DV6 from '../utils/PersianasImages/DV6.jpeg'
import DV7 from '../utils/PersianasImages/DV7.jpeg'
import DV8 from '../utils/PersianasImages/DV8.jpeg'

//Romana
import romana1 from '../utils/PersianasImages/romana1.jpeg'
import romana2 from '../utils/PersianasImages/romana2.jpeg'
import romana3 from '../utils/PersianasImages/romana3.jpeg'
import romana4 from '../utils/PersianasImages/romana4.jpeg'

//Teto
import teto1 from '../utils/PersianasImages/teto1.jpeg'
import teto2 from '../utils/PersianasImages/teto2.jpeg'
import teto3 from '../utils/PersianasImages/teto3.png'
import teto4 from '../utils/PersianasImages/teto4.jpeg'
import teto5 from '../utils/PersianasImages/teto5.jpeg'

//Celular
import celular2 from '../utils/PersianasImages/celular2.jpeg'
import celular3 from '../utils/PersianasImages/celular3.jpeg'
import celular4 from '../utils/PersianasImages/celular4.jpeg'
import celular5 from '../utils/PersianasImages/celular5.jpeg'

//Painel
import painel1 from '../utils/PersianasImages/painel1.jpeg'
import painel2 from '../utils/PersianasImages/painel2.jpeg'

//Shangrilla
import shangrila1 from '../utils/PersianasImages/shangrila1.jpeg'
import shangrila2 from '../utils/PersianasImages/shangrila2.jpeg'
import shangrila3 from '../utils/PersianasImages/shangrila3.jpeg'


//Horizontal Aluminio
import HA1 from '../utils/PersianasImages/HA1.jpeg'
import HA2 from '../utils/PersianasImages/HA2.jpeg'
import HA3 from '../utils/PersianasImages/HA3.jpeg'
import HA4 from '../utils/PersianasImages/HA4.jpeg'
import HA5 from '../utils/PersianasImages/HA5.jpeg'

//Horizontal de Madeira
import HM1 from '../utils/PersianasImages/HM1.jpeg'
import HM2 from '../utils/PersianasImages/HM2.jpeg'


export const produtos = [
    {
        slug: "cortina-tradicional",
        nome: "Cortina Tradicional",
        sub: "Elegância e Versatilidade para Qualquer Ambiente",
        modelos: "Translúcido linho e Translúcido poliéster",
        categoria: "cortinas",
        img: ImgTeste,
        imagens: [tradicional1, tradicional2, tradicional3],
        descricao: (
            <div className="space-y-4">
                <p>
                    A cortina tradicional é a escolha perfeita para quem busca <strong>sofisticação, leveza e funcionalidade</strong>.
                </p>

                <p>
                    Com grande variedade de tecidos, cores e acabamentos, ela se adapta facilmente a qualquer estilo de ambiente — do <strong>clássico ao moderno</strong>.
                </p>

                <p>
                    Além de valorizar a decoração, proporciona <strong>controle de luminosidade</strong> e mais conforto no dia a dia.
                </p>

                <div>
                    <p className="font-semibold">Benefícios:</p>

                    <ul className="list-disc list-inside space-y-1">
                        <li>Ampla variedade de tecidos e cores</li>
                        <li>Combina com qualquer ambiente</li>
                        <li>Controle de entrada de luz</li>
                        <li>Toque decorativo elegante</li>
                        <li>Pode ser motorizada</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        slug: "cortina-blackout",
        nome: "Cortina Blackout",
        sub: 'Conforto, Privacidade e Controle Total da Luz',
        modelos: 'Semi blackout 70% e Blackout 100%',
        categoria: "cortinas",
        img: ImgTeste,
        imagens: [blackout1, blackout2, blackout3, blackout4],
        descricao: (
            <div className="space-y-4">
                <p>
                    Ideal para quem busca <strong>escuridão total e mais conforto</strong>, a cortina blackout bloqueia a entrada de luz externa, sendo perfeita para <strong>quartos, salas de TV e ambientes que exigem maior privacidade</strong>.
                </p>

                <p>
                    Além disso, contribui para o <strong>isolamento térmico</strong>, ajudando a manter o ambiente mais agradável.
                </p>

                <div>
                    <p className="font-semibold">Benefícios:</p>

                    <ul className="list-disc list-inside space-y-1">
                        <li>Bloqueio quase total da luz</li>
                        <li>Mais privacidade</li>
                        <li>Redução de calor e luminosidade</li>
                        <li>Ideal para quartos e home theater</li>
                        <li>Pode ser combinada com tecidos decorativos</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        slug: "cortina-wave",
        nome: "Cortina Wave",
        sub: 'Design Moderno e Sofisticação em Movimento',
        modelos: "Translúcido linho e Translúcido poliéster",
        categoria: "cortinas",
        img: ImgTeste,
        imagens: [wave1, wave2, wave3],
        descricao: (
            <div className="space-y-4">
                <p>
                    A cortina wave se destaca pelo seu <strong>caimento uniforme em ondas</strong>, trazendo um <strong>visual moderno e sofisticado</strong> ao ambiente.
                </p>

                <p>
                    Muito utilizada em projetos contemporâneos, ela oferece um <strong>acabamento impecável</strong> e valoriza ainda mais a decoração, sendo perfeita para <strong>salas e espaços integrados</strong>.
                </p>

                <div>
                    <p className="font-semibold">Benefícios:</p>

                    <ul className="list-disc list-inside space-y-1">
                        <li>Visual moderno e elegante</li>
                        <li>Ondas uniformes e bem definidas</li>
                        <li>Acabamento sofisticado</li>
                        <li>Ideal para projetos de alto padrão</li>
                        <li>Pode ser motorizada</li>
                    </ul>
                </div>
            </div>
        )
    },
    // PERSIANAS
    {
        slug: "persiana-rolo",
        nome: "Rolo",
        sub: 'Elegância e Versatilidade para Qualquer Ambiente',
        categoria: "persianas",
        modelos: "Screen, Translúcida, Blackout e Blackout com guia laterais",
        img: ImgTeste,
        imagens: [rolo1, rolo2, rolo3, rolo4],
        descricao: (
            <div className="space-y-4">
                <p>
                    A persiana rolo é perfeita para quem busca um <strong>visual clean e moderno</strong>. Seu sistema prático permite <strong>controle eficiente da luminosidade</strong>, com opções que vão desde telas solares até blackout total.
                </p>

                <p>
                    Ideal para <strong>ambientes residenciais e corporativos</strong>.
                </p>

                <div>
                    <p className="font-semibold">Benefícios:</p>

                    <ul className="list-disc list-inside space-y-1">
                        <li>Design minimalista</li>
                        <li>Fácil de usar e manter</li>
                        <li>Opções de transparência ou blackout</li>
                        <li>Combina com qualquer ambiente</li>
                        <li>Pode ser motorizada</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        slug: "persiana-double-vision",
        nome: "Double Vision",
        sub: 'Elegância e Versatilidade para Qualquer Ambiente',
        modelos: "Translúcido e Semi Blackout ",
        categoria: "persianas",
        img: ImgTeste,
        imagens: [DV1, DV2, DV2_1, DV3, DV4, DV5, DV6, DV7, DV8],
        descricao: (
            <div className="space-y-4">
                <p>
                    Com seu <strong>design inovador em faixas alternadas</strong>, a persiana double vision permite <strong>ajustar a entrada de luz com precisão</strong>, criando diferentes níveis de luminosidade e privacidade.
                </p>

                <p>
                    Um <strong>equilíbrio perfeito entre tecnologia e sofisticação</strong>.
                </p>

                <div>
                    <p className="font-semibold">Benefícios:</p>

                    <ul className="list-disc list-inside space-y-1">
                        <li>Controle de luz ajustável</li>
                        <li>Visual moderno e elegante</li>
                        <li>Alta versatilidade</li>
                        <li>Ideal para salas e escritórios</li>
                        <li>Pode ser motorizada</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        slug: "persiana-romana",
        nome: "Romana",
        sub: 'Elegância e Versatilidade para Qualquer Ambiente',
        modelos: "Screen, Blackout e Translúcido",
        categoria: "persianas",
        img: ImgTeste,
        imagens: [romana1, romana2, romana3, romana4],
        descricao: (
            <div className="space-y-4">
                <p>
                    Com seu <strong>sistema de recolhimento em dobras</strong>, a persiana romana une o <strong>charme das cortinas</strong> com a praticidade das persianas.
                </p>

                <p>
                    Perfeita para quem busca um <strong>ambiente aconchegante e elegante</strong>.
                </p>

                <div>
                    <p className="font-semibold">Benefícios:</p>

                    <ul className="list-disc list-inside space-y-1">
                        <li>Visual sofisticado</li>
                        <li>Acabamento em tecido</li>
                        <li>Controle de luminosidade</li>
                        <li>Ideal para ambientes internos</li>
                        <li>Pode ser motorizada</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        slug: "persiana-teto",
        nome: "Teto",
        sub: 'Elegância e Versatilidade para Qualquer Ambiente',
        modelos: "Screen, Blackout e Translúcido",
        categoria: "persianas",
        img: ImgTeste,
        imagens: [teto1, teto2, teto3, teto4, teto5],
        descricao: (
            <div className="space-y-4">
                <p>
                    Desenvolvidas para <strong>coberturas e claraboias</strong>, as persianas de teto controlam a <strong>entrada de luz e calor</strong>, proporcionando mais conforto sem abrir mão da iluminação natural.
                </p>

                <div>
                    <p className="font-semibold">Benefícios:</p>

                    <ul className="list-disc list-inside space-y-1">
                        <li>Controle de luz e calor</li>
                        <li>Ideal para tetos de vidro</li>
                        <li>Conforto térmico</li>
                        <li>Solução moderna</li>
                        <li>Pode ser motorizada</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        slug: "persiana-celular",
        nome: "Celular",
        sub: 'Elegância e Versatilidade para Qualquer Ambiente',
        modelos: "Blackout e Translúcido",
        categoria: "persianas",
        img: ImgTeste,
        imagens: [celular2, celular4, celular5],
        descricao: (
            <div className="space-y-4">
                <p>
                    Com estrutura em formato de <strong>colmeia</strong>, a persiana celular oferece <strong>excelente isolamento térmico e acústico</strong>, garantindo mais conforto e economia de energia.
                </p>

                <div>
                    <p className="font-semibold">Benefícios:</p>

                    <ul className="list-disc list-inside space-y-1">
                        <li>Isolamento térmico eficiente</li>
                        <li>Redução de ruídos</li>
                        <li>Design moderno</li>
                        <li>Economia de energia</li>
                        <li>Pode ser motorizada</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        slug: "persiana-painel",
        nome: "Painel",
        sub: 'Elegância e Versatilidade para Qualquer Ambiente',
        modelos: "Screen, Blackout e Translúcido",
        categoria: "persianas",
        img: ImgTeste,
        imagens: [painel1, painel2],
        descricao: (
            <div className="space-y-4">
                <p>
                    Ideal para <strong>portas de vidro e janelas amplas</strong>, a persiana painel desliza suavemente, proporcionando <strong>praticidade e um visual moderno</strong>.
                </p>

                <div>
                    <p className="font-semibold">Benefícios:</p>

                    <ul className="list-disc list-inside space-y-1">
                        <li>Ideal para grandes espaços</li>
                        <li>Fácil deslizamento</li>
                        <li>Visual sofisticado</li>
                        <li>Ótima cobertura de áreas amplas</li>
                        <li>Pode ser motorizada</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        slug: "persiana-shangrilla",
        nome: "Shangrilla",
        sub: 'Elegância e Versatilidade para Qualquer Ambiente',
        modelos: "Translúcido",
        categoria: "persianas",
        img: ImgTeste,
        imagens: [shangrila1, shangrila2, shangrila3],
        descricao: (
            <div className="space-y-4">
                <p>
                    Com lâminas suspensas entre tecidos translúcidos, a persiana Shangri-lá proporciona <strong>controle suave da luz</strong> com um <strong>visual leve e sofisticado</strong>.
                </p>

                <div>
                    <p className="font-semibold">Benefícios:</p>

                    <ul className="list-disc list-inside space-y-1">
                        <li>Design premium</li>
                        <li>Luz suave e difusa</li>
                        <li>Alta sofisticação</li>
                        <li>Ideal para ambientes elegantes</li>
                        <li>Pode ser motorizada</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        slug: "persiana-horizontal-aluminio",
        nome: "Horizontal de aluminio - 50mm",
        sub: 'Elegância e Versatilidade para Qualquer Ambiente',
        modelos: "50mm",
        categoria: "persianas",
        img: ImgTeste,
        imagens: [HA1, HA2, HA3, HA4, HA5],
        descricao: (
            <div className="space-y-4">
                <p>
                    Clássica e funcional, permite <strong>controle preciso da luz</strong> através da inclinação das lâminas. Ideal para <strong>ambientes residenciais e corporativos</strong>.
                </p>

                <p>
                    Disponível em <strong>50mm</strong>.
                </p>

                <div>
                    <p className="font-semibold">Benefícios:</p>

                    <ul className="list-disc list-inside space-y-1">
                        <li>Controle preciso da luz</li>
                        <li>Alta durabilidade</li>
                        <li>Fácil limpeza</li>
                        <li>Versátil e funcional</li>
                        <li>Ótimo custo-benefício</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        slug: "persiana-horizontal-madeira",
        nome: "Horizontal de madeira e madeira sintetica - 50mm",
        sub: 'Elegância e Versatilidade para Qualquer Ambiente',
        modelos: "50mm",
        categoria: "persianas",
        img: ImgTeste,
        imagens: [HM1, HM2],
        descricao: (
            <div className="space-y-4">
                <p>
                    Com lâminas de <strong>50mm</strong>, a persiana de madeira traz um <strong>visual elegante e natural</strong>, ideal para <strong>projetos de alto padrão</strong>. Também disponível em <strong>madeira sintética</strong>, com maior resistência.
                </p>

                <div>
                    <p className="font-semibold">Benefícios:</p>

                    <ul className="list-disc list-inside space-y-1">
                        <li>Acabamento premium</li>
                        <li>Design sofisticado</li>
                        <li>Alta durabilidade</li>
                        <li>Opção em madeira sintética</li>
                        <li>Ideal para ambientes de luxo</li>
                    </ul>
                </div>
            </div>
        )
    },
]