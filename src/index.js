var rs = require('readline-sync')

var perguntas = ["Em que estado brasileiro nasceu a apresentadora Xuxa, 1) RIO DE JANEIRO, 2) RIO GRANDE DO SUL, 3) SANTA CATARINA 4) GOIÁS", "Qual é o nome dado ao estado da água em forma de gelo?, 1) LÍQUIDO, 2) SÓLIDO, 3) GASOSO, 4) VAPOROSO",
    "Qual era o apelido da cantora Elis Regina?, 1) GAUCHINHA, 2) PAULISTINHA, 3) PIMENTINHA, 4) ANDORINHA ", "Quem é a namorada do Mickey?, 1) MARGARIDA, 2) MINNIE, 3) A PEQUENA SEREIA 4) OLÍVIA PALITO", "Qual é o personagem do folclore brasileiro que tem uma perna só?, 1) CUCA, 2) NEGRINHO DO PASTOREIO, 3) BOITATÁ, 4) SACI-PERERÊ",
    " Fidel Castro nasceu em que país?, 1) JAMAICA, 2) CUBA, 3) EL SALVADOR,4) MÉXICO", "Quem proclamou a república no Brasil em 1889?, 1) DUQUE DE CAXIAS, 2) MARECHAL RONDON, 3) DOM PEDRO II, 4) MARECHAL DEODORO",
    "Quem é o patrono do exército brasileiro?, 1) MARECHAL DEODORO, 2) BARÃO DE MAUÁ, 3) DUQUE DE CAXIAS, 4) MARQUÊS DE POMBAL", " Quem era o apresentador que reprovava os calouros tocando uma buzina?, 1) RAUL GIL, 2) BOLINHA, 3) FLÁVIO CAVALCANTI, 4) CHACRINHA",
    "O que era Frankenstein, de Mary Shelley?, 1) MONSTRO, 2) GORILA, 3) PRÍNCIPE, 4) SAPO", "Qual é o signo do zodíaco de quem nasce no dia do ano-novo?, 1) VIRGEM, 2) AQUÁRIO, 3) CAPRICÓRNIO, 4) ÁRIES",
    "Quem fundou a fábrica de automóveis Ford?, 1) HARRISON FORD, 2) GERALD FORD, 3) HENRY FORD, 4) ANNA FORD", "Qual é a cor que se associa com os grupos ecológicos?, 1) PRETA, 2) VERMELHA, 3) AZUL, 4) VERDE",
    "A água ferve a quantos graus centígrados ?, 1) 200, 2) 100, 3) 170, 4) 220", "Quando é comemorado o dia da independência do Brasil ?, 1) 21 DE ABRIL, 2) 12 DE OUTUBRO, 3) 7 DE SETEMBRO, 4) 25 DE DEZEMBRO",
    "Qual lugar é também chamado de Santa Sé ?, 1) VENEZA, 2) VITÓRIA, 3) VANCOUVER, 4) VATICANO", "Quem tem por lema a frase: “Sempre alerta”?, 1) MÉDICOS, 2) ESCOTEIROS, 3) BOMBEIROS, 4) POLICIAIS",
    "Quem foi o grande amor de Julieta ?, 1) ROMEU, 2) ORFEU, 3) HAMLET, 4) IAGO", "Quantos signos formam o zodíaco ?, 1) NOVE, 2) DEZ, 3) ONZE, 4) DOZE", "Vatapá é uma comida típica de qual estado ?, 1) PARANÁ, 2) SANTA CATARINA, 3) SÃO PAULO, 4) BAHIA",
    "Como se chama o lugar onde são armazenadas as balas de um revólver ?, 1) CANO, 2) TAMBOR, 3) AGULHA, 4) GATILHO"]


var respostas = ["2", "2", "3", "2", "2", "3", "2", "4", "2", "4", "3", "4", "1", "3", "3", "4", "2", "3", "4", "2", "1", "4", "4", "2", "2", "2"]


var iniciar = rs.question("Deseja iniciar o jogo? ")
var pular = 3
var premio = 1000

for (cont = 0; cont <= 10; cont++) {
    if (iniciar == "sim" || iniciar == "Sim" || iniciar == "SIM " || iniciar == "s" || iniciar == "S") {
        var quest = Math.floor(Math.random() * 20 + 1)
        console.log(perguntas[quest])
    } else {
        console.log("voce nao iniciou o jogo")
    } var resp = rs.question("Digite a alternativa escolhida ou digite 'X' para parar ou 'P' para pular : ")
        if ( resp == respostas[quest]){
            console.log("Parabens voce acertou")
        }else console.log("Infelizmente voce errou")
        break

}



console.log(respostas[quest])
/*else if (resp !== respostas[quest] || resp !== "P" || resp !== "p" || resp !== "X" || resp !== "x") {
    console.log("Infelizmente voce perdeu!")
    break*/

/* } else if (resp == "P" || resp == "p") {
       pular = pular - 1
       if (pular == 0) {
           console.log("Voce nao tem mais pulos")
       } else console.log("Voce pulou te sobram ", pular, "pulos")
       delete perguntas[quest]
   } else if (resp == "x" || resp == "X") {
       console.log("Obrigado por participar seu premio é de R$", (premio / 2))
       break
   }*/