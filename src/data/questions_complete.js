const data = [
  {
    category: "Python",
    questions: [
      {
        question: "Qual é a função utilizada para imprimir algo no console em Python?",
        options: ["print()", "display()", "output()", "write()"],
        answer: "print()",
        tip: " É uma função muito comum e amplamente utilizada em Python para exibir informações.",
      },
      {
        question: "Qual dos seguintes não é um tipo de dado em Python?",
        options: ["Inteiro (int)", "Booleano (bool)", "Complexo (complex)", "Caractere (char)"],
        answer: "Caractere (char)",
        tip: "Python não possui um tipo de dado específico chamado char",
      },
      {
        question: "Qual é a sintaxe correta para definir uma função em Python?",
        options: ["function minha_funcao():", "define minha_funcao():", "def minha_funcao():", "func minha_funcao():"],
        answer: "def minha_funcao():",
        tip: "A palavra-chave def é utilizada para definir funções em Python.",
      },
      {
        question: "Qual é o operador utilizado para calcular o resto da divisão em Python?",
        options: ["%", "/", "//", "**"],
        answer: "//",
        tip: " É um operador matemático que retorna o resto da divisão entre dois números.",
      },
      {
        question: "Qual é o operador de comparação utilizado para verificar se dois valores são iguais em Python?",
        options: ["==", "=", "!=", "<>"],
        answer: "==",
        tip: "Este operador é usado para fazer uma comparação de igualdade entre dois valores.",
      },
    ],
  },
  {
    category: "Java",
    questions: [
      {
        question: "Qual é o método principal utilizado como ponto de entrada em programas Java?",
        options: ["main()", "start()", "execute()", "run()"],
        answer: "main()",
        tip: "Esse método é o primeiro a ser executado em um programa Java.",
      },
      {
        question: "Qual é a palavra-chave utilizada para definir uma classe em Java?",
        options: ["object", "define", "class", "struct"],
        answer: "class",
        tip: "Essa palavra-chave é usada para criar uma nova classe em Java.",
      },
      {
        question: "Qual é a estrutura de controle utilizada para executar um bloco de código repetidamente enquanto uma condição for verdadeira?",
        options: ["if-else", "switch", "for", "while"],
        answer: "while",
        tip: "Essa estrutura de controle permite a execução repetida de um bloco de código enquanto uma condição for verdadeira.",
      },
      {
        question: "Qual é a diferença entre um array e uma lista em Java?",
        options: [
          "Um array é uma estrutura de dados fixa, enquanto uma lista é uma estrutura de dados flexível.",
          "Um array armazena apenas dados de um tipo específico, enquanto uma lista pode armazenar dados de diferentes tipos.",
          "Um array é uma coleção ordenada de elementos, enquanto uma lista é uma coleção desordenada.",
          "Um array tem tamanho dinâmico, enquanto uma lista tem tamanho fixo."],
        answer: "Um array é uma estrutura de dados fixa, enquanto uma lista é uma estrutura de dados flexível.",
        tip: "Um array em Java tem um tamanho fixo, definido no momento da criação, enquanto uma lista pode crescer ou encolher dinamicamente.",
      },
      {
        question: "Qual é a forma correta de declarar uma variável constante em Java?",
        options: ["final int x = 10;", "constant x = 10;", "static final int x = 10;", "const int x = 10;"],
        answer: "static final int x = 10;",
        tip: "A combinação de static e final é usada para declarar uma constante em Java.",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "O que é Vanilla JavaScript?",
        options: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript",
        ],
        answer: "JavaScript puro",
      },
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question:
          "Qual destas propriedades da a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
    ],
  },
];

export default data;
