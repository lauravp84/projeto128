// Suponha que quickDrawDataset seja uma matriz com os dados dos esboços
const quickDrawDataset = [
  // ... seus dados aqui
];

// Gere um número aleatório entre 0 (inclusive) e o comprimento da matriz (exclusivo)
const randomNumber = Math.floor(Math.random() * quickDrawDataset.length);

// Imprima o nome do esboço aleatório no console
console.log("Esboço aleatório:", quickDrawDataset[randomNumber]);

// Atualize o texto da tag span com o nome do esboço a ser desenhado
const sketch = quickDrawDataset[randomNumber];
document.getElementById("sketchToDraw").textContent = `Esboço a Ser Desenhado: ${sketch}`;

// Inicialize as outras variáveis
let timerCounter = 0; // Contador do temporizador
let timerCheck = ""; // Verificação do valor do temporizador
let drawSketch = ""; // Estimativa aproximada do esboço desenhado
let answerHolder = ""; // Valor quando os esboços coincidem
let score = 0; // Pontuação para cada esboço desenhado corretamente

function updateCanvas() {
  // Aqui você atualizaria o canvas com o novo esboço a ser desenhado
  // Implemente essa função de acordo com a sua interface gráfica
}

function setup() {
  // Configurações iniciais do seu aplicativo
  // Crie o canvas, defina o fundo, etc.
}

function draw() {
  // Função chamada continuamente para verificar o esboço desenhado
  checkSketch(); // Chame a função para verificar o tempo e o esboço
  if (drawSketch === sketch) {
    // Se o esboço desenhado for igual ao esboço a ser desenhado
    answerHolder = "set"; // Indique que o esboço foi desenhado corretamente
    score++; // Incremente a pontuação
    // Atualize o texto na tela para mostrar a pontuação
    document.getElementById("scoreDisplay").textContent = `Pontuação: ${score}`;
  }
}

function checkSketch() {
  timerCounter++; // Incrementa o contador de tempo
  // Atualize o texto na tela para mostrar o tempo
  document.getElementById("timerDisplay").textContent = `Tempo: ${timerCounter}`;
  
  // Verifique se o tempo ultrapassou um limite (por exemplo, 400 milissegundos)
  if (timerCounter > 400) {
    timerCounter = 0; // Reinicie o contador de tempo
    timerCheck = "completed"; // Indique que o tempo foi atingido
  }
  
  // Verifique se o tempo foi atingido ou se o esboço foi desenhado corretamente
  if (timerCheck === "completed" || answerHolder === "set") {
    timerCheck = ""; // Reinicie a verificação do tempo
    answerHolder = ""; // Reinicie o valor do esboço
    updateCanvas(); // Atualize o canvas com um novo esboço
  }
}