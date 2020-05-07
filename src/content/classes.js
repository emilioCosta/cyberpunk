const classes = {
  title: `A classe define como o personagem interage com o mundo. Ela diz 
          muito sobre o personagem, principalmente o círculo que ele
          frequenta, se é um executivo rico que vive em festa da alta sociedade ou um nômade 
          do submundo que vive com a escória.`,
  classes: [{
    id: 0,
    slug: 'netrunner',
    title: 'Netrunner',
    image: '',
    available: [1, 2, 0],
    description: `Os “surfistas da rede” adquiriram a capacidade de plugar suas  mentes em uma interface da internet 
                chamada de “Webnet“, uma interface gráfica feita para emular a própria internet da melhor maneira 
                possível. Em humanos, é necessário uma alteração no cérebro e um plug na base da nuca.`,
  }, {
    id: 1,
    slug: 'hacker',
    title: 'Hacker',
    image: '',
    available: [1, 2, 3, 0],
    description: `São os maiores ativistas online, se juntam em grupos para atacar grandes corporações e no quesito 
                “internet” são os maiores especialistas. Quando estão em uma cidade inteligente eles podem literalmente 
                controlar esse mundo, dirigir carros, modificar sinais de trânsito, ativar a polícia e muitas outras 
                possibilidades.`,
  }, {
    id: 2,
    slug: 'cyber-soldier',
    title: 'Cyber Soldier',
    image: '',
    available: [1, 2, 3],
    desciption: `Muitas corporações são voltadas para área militar, após a Última Guerra e o Tratado de Turcomenistão 
                com a redução dos exércitos e a necessidade de força militar, os investimentos em avanços tecnológicos 
                na área transformou a maneira de se fazer guerra. Os soldados agora contam com Exo-Esqueletos, implantes 
                de realidade aumentada, armas superiores e muito outros equipamentos de alta tecnologia.`,
  }, {
    id: 3,
    slug: 'engineer',
    title: 'Engineer',
    image: '',
    available: [1, 2, 3],
    description: `Especializados na construção e manutenção de todo tipo de equipamento, possuem grande importância para 
                grandes corporações e por isso acabam recebendo grandes salários já que suas especializações são cada 
                vez mais difíceis. Os engenheiros podem manipular drones e até androids caso consiga acesso a eles.`,
  }, {
    id: 4,
    slug: 'nomad',
    title: 'Nomad',
    image: '',
    available: [1, 3],
    description: `Quando a podridão das grandes corporações são demasiadas para alguns funcionários e eles resolvem se 
                rebelar revelando informações ou sabotando alguma ação, eles acabando tornando-se nômades. As grandes 
                corporações não deixam barato funcionários que as atacam, destruindo suas vidas profissionais e podem 
                manipular informações para transformá-los em fugitivos da polícia. Assim, nômades vivem esgueirando-se 
                nas Cidades Externas e tentam viver suas vidas por baixo dos panos.`,
  }, {
    id: 5,
    slug: 'fixer',
    title: 'Hacker',
    image: '',
    available: [1, 3],
    description: `São contrabandistas do mercado negro das cidades, lidam com as piores pessoas da sociedade e conhecem 
                bem as ruas. Por serem negociantes possuem boa lábia e a manha das ruas, mas são vistos como pouco 
                confiáveis por todos.`,
  }, {
    id: 6,
    slug: 'executive',
    title: 'Executive',
    image: '',
    available: [1, 3],
    description: `São o extremo oposto dos hackers, são grandes líderes das corporações e vivem para seus interesses 
                próprios ou de sua corporação. São abastados financeiramente e sempre possuem bons contados 
                judicialmente e politicamente, homens e mulheres poderosos que tem a capacidade de mudar o mundo, mas 
                escolhem mantê-lo como está por interesse próprio.`,
  }]
};

export default classes;
