let frases = {
    1:  '“Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos” – James Cameron, cineasta',
    2:  '“O sucesso normalmente vem para quem está ocupado demais para procurar por ele” – Henry David Thoreau, filósofo',
    3:  '“A vida é melhor para aqueles para quem fazem o possível para terem o melhor – John Wooden, jogador e treinador de basquete',
    4:  '“Os empreendedores falham, em média, 3,8 vezes antes do sucesso final. O que separa os bem-sucedidos dos outros é a persistência” – Lisa M. Amos, executiva',
    5:  '“Se você não está disposto a arriscar, esteja disposto a uma vida comum” – Jim Rohn, empreendedor',
    6:  '“Escolha uma ideia. Faça dessa ideia a sua vida. Pense nela, sonhe com ela, viva pensando nela. Deixe cérebro, músculos, nervos, todas as partes do seu corpo serem preenchidas com essa ideia. Esse é o caminho para o sucesso” – Swami Vivekananda, pensador hindu',
    7:  '“Para de perseguir o dinheiro e comece a perseguir o sucesso” – Tony Hsieh, empreendedor',
    8:  '“Todos os seus sonhos podem se tornar realidade se você tem coragem para persegui-los” – Walt Disney, desenhista e empreendedor',
    9:  '“Ter sucesso é falhar repetidamente, mas sem perder o entusiasmo” – Winston Churchill, político',
    10: '“Sempre que você vir uma pessoa de sucesso, você sempre verá as glórias, nunca os sacrifícios que os levaram até ali” – Vaibhav Shah, pensador',
    11: '“Sucesso? Eu não sei o que isso significa. Eu sou feliz. A definição de sucesso varia de pessoa para pessoa Para mim, sucesso é paz anterior” – Denzel Washington, ator',
    12: '“Oportunidades não surgem. É você que as cria” – Chris Grosser, fotógrafo',
    13: '“Não tente ser uma pessoa de sucesso. Em vez disso, seja uma pessoa de valor” – Albert Einstein, físico',
    14: '“Não é o mais forte que sobrevive, nem o mais inteligente. Quem sobrevive é o mais disposto à mudança” – Charles Darwin, biólogo',
    15: '“A melhor vingança é um sucesso estrondoso” – Frank Sinatra, cantor',
    16: '“Eu não falhei. Só descobri 10 mil caminhos que não eram o certo” – Thomas Edison, inventor',
    17: '“Um homem de sucesso é aquele que cria uma parede com os tijolos que jogaram nele” – David Brinkley, jornalista',
    18: '“Ninguém pode fazer você se sentir inferior sem o seu consentimento” – Eleanor Roosevelt, primeira-dama dos EUA',
    19: '“O grande segredo de uma boa vida é encontrar qual é o seu destino. E realizá-lo” – Henry Ford, empreendedor',
    20: '“Se você está atravessando um inferno, continue atravessando” – Churchill',
    21: '“O que nos parece uma provação amarga pode ser uma bênção disfarçada” – Oscar Wilde, escritor',
    22: '“A distância entre a insanidade e a genialidade é medida pelo sucesso” – Bruce Feirstein, roteirista',
    23: '“Não tenha medo de desistir do bom para perseguir o ótimo” – John D. Rockefeller, empreendedor',
    24: '“A felicidade é uma borboleta que, sempre que perseguida, parecerá inatingível; no entanto, se você for paciente, ela pode pousar no seu ombro” – Nathaniel Hawthorne, escritor',
    25: '“Se você não pode explicar algo de forma simples, então você não entendeu muito bem o que tem a dizer” – Einstein',
    26: '“Há dois tipos de pessoa que vão te dizer que você não pode fazer a diferença neste mundo: as que têm medo de tentar e as que têm medo de que você se dê bem” – Ray Goforth, executivo',
    27: '“Comece de onde você está. Use o que você tiver. Faça o que você puder” – Arthur Ashe, tenista',
    28: '“As pessoas me perguntam qual é o papel que mais gostei de interpretar. Eu sempre respondo: o próximo” – Kevin Kline, ator',
    29: '“Descobri que, quanto mais eu trabalho, mais sorte eu pareço ter” – Thomas Jefferson, político',
    30: '“O ponto de partida de qualquer conquista é o desejo” – Napoleon Hill, assessor político',
    31: '“O sucesso é a soma de pequenos esforços repetidos dia após dia” – Robert Collier, escritor',
    32: '“Todo progresso acontece fora da zona de conforto” – Michael John Bobak',
    33: '“Coragem é a resistência e o domínio do medo, não a ausência dele” – Mark Twain, escritor',
    34: '“Só evite fazer algo hoje se você quiser morrer e deixar assuntos inacabados” – Pablo Picasso, pintor',
    35: '“O único lugar em que o sucesso vem antes do trabalho é no dicionário” – Vidal Sassoon, cabeleireiro',
    36: '“Não sei qual é a chave para o sucesso, mas a chave para o fracasso é tentar agradar a todos” – Bill Cosby, comediante',
    37: '“Embora ninguém possa voltar atrás e começar tudo de novo, qualquer um pode ter um ótimo final” – Carl Bard',
    38: '“Descobri que, se você tem vontade de viver e curiosidade, dormir não é a coisa mais importante” – Martha Stewart, apresentadora',
    39: '“Daqui a vinte anos, você não terá arrependimento das coisas que fez, mas das que deixou de fazer. Por isso, veleje longe do seu porto seguro. Pegue os ventos. Explore. Sonhe. Descubra” – Twain',
    40: '“O primeiro passo rumo ao sucesso é dado quando você se recusa ao ser um refém do ambiente em que se encontra” – Mark Caine, jornalista',
    41: '“Sempre que você se encontrar do lado da maioria, é hora de parar e refletir” – Twain',
    42: '“Continue andando. Haverá a chance de você ser barrado por um obstáculo, talvez por algo que você nem espere. Mas siga, até porque eu nunca ouvi falar de ninguém que foi barrado enquanto estava parado” – Charles F. Kettering, inventor',
    43: '“Se você realmente quer algo, não espere. Ensine você mesmo a ser impaciente” – Gurbaksh Chahal, empreendedor',
    44: '“Se você quer uma mudança permanente, pare de focar no tamanho de seus problemas e comece a focar no seu tamanho!” – T. Harv Eker, autor',
    45: '“Pessoas de sucesso fazem o que pessoas mal sucedidas não querem fazer. Não queira que a vida seja mais fácil. Deseje que você seja ainda melhor” – Rohn',
    46: '“A primeira razão para o fracasso de alguém é escutar amigos, família e vizinhos” – Hill',
    47: '“O sucesso não consiste em não errar, mas não cometer os mesmos equívocos mais de uma vez” – George Bernard Shaw, autor',
    48: '“A motivação é o que faz o empreendedor começar e o hábito é o que nos faz continuar” – Jim Rynn',
    49: '“Nosso maior medo não deve ser o fracasso, mas ser bem-sucedidos em algo que não importa” – Francis Chan, pastor',
    50: '“Se você não traçou um plano para você mesmo, é possível que você caia no plano de outra pessoa. E adivinha o que ele planejou para você? Não muito” – Rohn',
    51: '“Você deve lutar mais de uma batalha para se tornar um vencedor” – Margaret Thatcher, política',
    52: '“Eu devo meu sucesso a meu hábito de respeitosamente ouvir conselhos e fazer exatamente o contrário” – G. K. Chesterton, escritor',
    53: '“Muitas das falhas da vida ocorrem quando não percebemos o quão próximos estávamos do sucesso na hora em que desistimos” – Edison',
    54: '“Quanto maior o artista, maior a dúvida. Confiança grande demais é algo destinados aos menos talentosos como um prêmio de consolação” – Robert Hughes, crítico de arte',
    55: '“Uma fórmula para o sucesso? É bem simples, na verdade: dobre a probabilidade de fracasso da sua empresa. Você pensa que a falha é um inimigo do sucesso. Mas não é, de jeito nenhum. Você pode ser desencorajado com os erros ou aprender com eles, então siga em frente e continue falhando. Erre o máximo que puder É aí que você vai conseguir o sucesso” – Thomas J. Watson, empreendedor',
    56: '“Tenha em mente que o seu desejo em atingir o sucesso é mais importante que qualquer coisa” – Abraham Lincoln, político',
    57: '“Fique contente em agir. Deixe a fala para os outros” – Baltasar Gracián, filósofo',
    58: '“Para conquistar o sucesso, você precisa aceitar todos os desafios que vierem na sua frente. Você não pode apenas aceitar os que você preferir” – Mike Gafka, palestrante',
    59: '“O guerreiro de sucesso é um homem médio, mas com um foco apurado como um raio laser” – Bruce Lee, ator',
    60: '“A lógica pode levar de um ponto A a um ponto B. A imaginação pode levar a qualquer lugar” – Einstein',
}

document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("#btn").addEventListener("click", function(){

        let num = Math.floor(Math.random() * 59 + 1);

        let frase = frases[num];

        document.querySelector('#frase').innerHTML = frase;

    })
})

