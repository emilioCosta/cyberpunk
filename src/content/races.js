
const races = [{
	id: 0,
	slug: 'replicant',
	name: 'Replicante / Androide',
	image: 'replicant.png',
	initialPoints: 15,
	limitations: {
		strength: 7,
		agility: 8,
		constitution: 10,
		intelligence: 10,
		wisdom: 0,
		charisma: 1,
	},
	description: `Androides são máquinas criadas para emular sentimentos humanos de forma convincente,
								foram criados pelos Russos com ajuda de Japoneses como uma resposta direta aos humandróides
								americanos, substituindo os mesmo em guerras alguns anos depois de surgirem. Androids podem emular
								perfeitamente emoções humanas e tomar decisões a partir da ética e moral instalada em seu sistema,
								para isso foi necessário que o Android pudesse armazenar e analisar vários Terabytes de informação
								por dia sendo necessário apagar essas informações de 12 em 12 horas, para resolver esse problema
								foi criado a Extranet onde um servidor colossal foi enviado ao espaço e conecta todos os Androids
								Russos e Japoneses em “Nuvem” assim suas informações ficam armazenadas em um único e seguro local,
								utilizando uma rede própria e inhackeável de maneira externa. Com a Extranet era possível também
								rodar o sistema do Android em “Nuvem” fazendo com que ele responde-se muito mais rápido, analisando
								uma situação de modo mais rápido e resolvendo-o de maneira eficaz, tudo isso sendo controlado do
								Espaço. Com todos os Androids conectados, emulando emoções e tomando decisões foi necessário a
								criação também do Protocolo Kulovisk 89 onde era possível realizar um monitoramento em todos os
								robôs impedindo que eles matasse ou oferecesse risco real a alguém sem receber autorização ou que ele
								fosse reprogramado, sendo assim um Android Russo não pode ser reprogramado de maneira alguma e sua
								fiscalização é 24/7, onde toda a informação daquele Android é vista e analisada. Os Androids
								Americanos funcionam de forma diferente em questão de monitoramento, aplicando o Protocolo Kennedy em
								seus sistemas, protocolo esse que impede os Androids de matar humanos sem ficha criminal, que não aja
								de forma agressiva ou que não ofereça riscos a julgamento do Android. Cada Android pode ser controlado
								remotamente a partir de uma central sendo sua criação e a comercialização de modelos com funções mais
								simples é permitida em território nacional, mas é estritamente proibido a criação de androids com
								fisionomia humana.`,
	
}, {
	id: 1,
	slug: 'human',
	name: 'Humano',
	image: 'human.png',
	initialPoints: 10,
	limitations: {
		strength: 3,
		agility: 5,
		constitution: 5,
		intelligence: 4,
		wisdom: 4,
		charisma: 5,
	},
	description: `Os humanos do século XXII tornarem-se quase bioandróides, 95% da população possui algum tipo de 
								implante ou melhoria cibernética no corpo independente da classe social, essas tecnologias tornaram-se tão baratos 
								e populares que os implantes começaram a ser feitos em bebês. Smartphones agora possuem versões on-board e off-board 
								com todos possuindo um ou vários aparelhos. Conceitos antigos como liberdade e anonimato são quase esquecidos em um 
								mundo monitorado em 100% do tempo, as pessoas acabaram aceitando a ideia de serem manipuladas por propagandas 
								exclusivas, o Big Data chegou em um nível que grandes corporações invadiam umas as outras em busca de HD’s com essas 
								informações. No fim, todos os humanos são controlados mesmo que indiretamente pelo interesse maior r corporações e 
								muito não ligam para isso, a vida tornou-se mais fácil para a parcela importante da humanidade. As cidades humanas, 
								com a super população, acabou criando círculos para dividir a parte mais rica da parte mais pobre, o círculo central, 
								cercado por altos muros e com segurança constante separa o mundo dos ricos com Cidades Inteligentes do mundo dos 
								pobres com montes de lixo acumulando-se. A única maneira de um morador da cidade externa entrar no círculo central 
								é pela manhã quando alguns poucos escolhidos vão trabalhar. A maior parte da população das cidades externas vive de 
								uma ajuda mensal dada pelo governo, uma regulamentação exigida pela ONU quando o Círculo Central foi criado nas 
								maiores cidades do mundo.`,
	
}, {
	id: 2,
	slug: 'cyborg',
	name: 'Cyborg',
	image: 'cyborg.png',
	initialPoints: 13,
	limitations: {
		strength: 6,
		agility: 3,
		constitution: 7,
		intelligence: 8,
		wisdom: 3,
		charisma: 3,
	},
	description: `Alguns humanos não estavam contentes com seus envólucros de carne e começaram a modificar tanto seus 
								corpos que era quase impossível distinguir homem e máquina. Humanos com mais de  85% de modificações corporais são 
								considerados cyborgs, algo que não é nem homem e nem máquina, alguns mantém apenas o cérebro dentro de uma carcaça 
								de metal. A sociedade ainda não aceita os cyborgs como pessoas, mesmo que muitos estejam na carreira militar, os 
								cidadãos do círculo central não gostam de todas essas alterações. Para cyborgs, é possível possuir aparelhos 
								tecnológicos integrados ao cérebro e muitos acabam tornando-se Netrunners e normalmente as partes mecânicas são 
								visíveis, sendo que alguns lugares do mundo a existência de cyborgs com aparência humana, assim como andróides, é 
								proibida.`,
	
}, {
	id: 3,
	slug: 'android',
	name: 'Humandróides',
	image: 'android.png',
	initialPoints: 15,
	limitations: {
		strength: 4,
		agility: 5,
		constitution: 6,
		intelligence: 5,
		wisdom: 5,
		charisma: 6,
	},
	description: `Inicialmente soldados criados exclusivamente para Guerra, mais fortes, rápidos e inteligentes que 
								humanos normais. Eles não desertam, não desacatam e nem hesitam em cumprir uma ordem. Os astros de 
								combate de suas épocas, mas foram substituídos por máquinas que faziam exatamente a mesma coisa por 
								um preço mais acessível. Os Humandróides atualmente não são utilizados em guerra, mas para fins mais 
								sórdidos como sessões de masoquismos e inferninhos exclusivos desses seres, continuam perfeitos. 
								Humandróides são criados em laboratórios com objetivos específicos e crescem em tubos de ensaio 
								gigantes, saindo de lá já adultos em apenas 15 meses, seus cérebros muitas vezes são modificados para 
								realizar apenas as funções mais básicas como comer em certos horários e ir fazer suas necessidades em 
								locais adequados. Humandróides atualmente são bonecos de luxo para quem pode pagar o preço, mas nem 
								sempre as coisas saem como esperado, a manipulação genética ainda é complicada e qualquer erro pode 
								gerar uma casualidade no humandróide que sairá do tubo, houve casos em que o humandróide assim que 
								saiu executou um médico e fugiu do laboratório, não se sabe muito bem o porquê isso ocorre, mas 
								eventualmente acontece. Existem muitas discussões sobre a utilização dos humandróides para satisfação 
								pessoal sendo proibido em muitos países, mas como o custo de fabricação de um humano é extremamente 
								alto isso limita o número deles no mundo, sendo estimado que a população dos “quase-humanos” no mundo 
								não passe de 3 mil.`,
	
}];

export default races;
