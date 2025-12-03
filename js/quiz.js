document.addEventListener('DOMContentLoaded', function() {

  // Quiz data for each course
const quizzes = {
  html: [
    {
      question: "Qual é a função principal das tags em HTML?",
      options: [
        "Criar estilos",
        "Estruturar conteúdo da página",
        "Controlar banco de dados",
        "Inserir Python"
      ],
      correct: 1
    },
    {
      question: "Tag usada para link:",
      options: ["&lt;p&gt;", "&lt;a&gt;", "&lt;link&gt;", "&lt;h1&gt;"],
      correct: 1
    },
    {
      question: "Função da tag <body>:",
      options: [
        "Armazenar título",
        "Conter elementos visíveis da página",
        "Definir CSS",
        "Inserir metadados"
      ],
      correct: 1
    },
    {
      question: "O que vai dentro de <head>?",
      options: [
        "Parágrafos",
        "Conteúdo principal",
        "Informações da página, título e estilos",
        "Rodapé"
      ],
      correct: 2
    },
    {
      question: "Tag para parágrafos:",
      options: ["&lt;text&gt;", "&lt;p&gt;", "&lt;h1&gt;", "&lt;div&gt;"],
      correct: 1
    }
  ],

  css: [
    {
      question: "Significado de CSS:",
      options: [
        "Computer Style System",
        "Cascading Style Sheets",
        "Central Style Service",
        "Code Style Syntax"
      ],
      correct: 1
    },
    {
      question: "Para que serve CSS?",
      options: [
        "Criar conteúdo",
        "Controlar estrutura",
        "Definir estilos e aparência",
        "Executar lógica"
      ],
      correct: 2
    },
    {
      question: "Cor de fundo correta:",
      options: [
        "background-color: blue;",
        "bg-blue: true",
        "color-background",
        "style.background"
      ],
      correct: 0
    },
    {
      question: "Seletor de ID:",
      options: [".", "#", "*", "@"],
      correct: 1
    },
    {
      question: "Propriedade de tamanho da fonte:",
      options: ["font-weight", "font-size", "text-style", "size-font"],
      correct: 1
    }
  ],

  js: [
    {
      question: "O que é JavaScript?",
      options: [
        "Linguagem de estilo",
        "Linguagem de programação usada na web",
        "Banco de dados",
        "Editor de texto"
      ],
      correct: 1
    },
    {
      question: "Comando para exibir no console:",
      options: ["print()", "show()", "console.log()", "display()"],
      correct: 2
    },
    {
      question: "Como declarar variável corretamente?",
      options: [
        `var nome = "João";`,
        `variable nome = "João";`,
        `let nome: "João"`,
        "make nome"
      ],
      correct: 0
    },
    {
      question: "Símbolo para comentário de linha:",
      options: ["&lt;!-- --&gt;", "//", "**", "##"],
      correct: 1
    },
    {
      question: "Operador de soma:",
      options: ["-", "*", "/", "+"],
      correct: 3
    }
  ],

  java: [
    {
      question: "Qual IDE foi utilizada no curso?",
      options: ["Eclipse", "NetBeans", "IntelliJ IDEA", "BlueJ"],
      correct: 2
    },
    {
      question: "O que são classes Wrappers?",
      options: [
        "Versões orientadas a objetos dos tipos primitivos",
        "Tipos que armazenam apenas texto",
        "Não podem ser convertidas",
        "Usadas só em POO"
      ],
      correct: 0
    },
    {
      question: "Qual representa um loop while correto?",
      options: [
        "while (i < 10) { i++; }",
        "while i < 10 { i++; }",
        "loop (i < 10)",
        "for (int i = 0; …)"
      ],
      correct: 0
    },
    {
      question: "O que é um objeto?",
      options: [
        "Um método",
        "Uma variável primitiva",
        "Instância de classe com atributos e métodos",
        "Função global"
      ],
      correct: 2
    },
    {
      question: "Função dos getters e setters:",
      options: [
        "Criar classes",
        "Acessar e modificar atributos privados de forma controlada",
        "Executar loops",
        "Substituir construtor"
      ],
      correct: 1
    }
  ],

  php: [
    {
      question: "Tag correta de abertura:",
      options: ["&lt;?php … ?&gt;", "&lt;php&gt;", "&lt;? … ?&gt;", "//php"],
      correct: 0
    },
    {
      question: "Tipo que guarda texto:",
      options: ["int", "float", "string", "boolean"],
      correct: 2
    },
    {
      question: "Loop quando não se sabe quantas repetições haverá:",
      options: ["for", "do…while", "while (condição) { }", "switch"],
      correct: 2
    },
    {
      question: "Sintaxe correta de função:",
      options: [
        "function calcular($a, $b) { }",
        "função calcular",
        "def calcular",
        "function calcular[a, b]"
      ],
      correct: 0
    },
    {
      question: "Extensão moderna e segura para BD:",
      options: ["mysql_query", "mysqli_* ou PDO", "pg_query", "db_query"],
      correct: 1
    }
  ],

  python: [
    {
      question: "O que é uma linguagem de programação?",
      options: [
        "Apenas uma forma de desenhar",
        "Um jogo de computador",
        "Um conjunto de instruções usadas para criar programas",
        "Um tipo de banco de dados"
      ],
      correct: 2
    },
    {
      question: "Para que serve print()?",
      options: [
        "Apagar variáveis",
        "Exibir algo na tela",
        "Criar funções",
        "Fechar o programa"
      ],
      correct: 1
    },
    {
      question: "O que são variáveis?",
      options: [
        "Funções especiais",
        "Pastas do computador",
        "Espaços que guardam valores",
        "Comandos de repetição"
      ],
      correct: 2
    },
    {
      question: "Qual número representa um decimal?",
      options: ["10", "3.14", "8", "1"],
      correct: 1
    },
    {
      question: "Para que serve input()?",
      options: [
        "Finalizar o programa",
        "Ler informações digitadas pelo usuário",
        "Criar listas",
        "Converter texto em número"
      ],
      correct: 1
    }
  ],

  c: [
    {
      question: "Para que serve C?",
      options: [
        "Apenas para criar sites",
        "Usada para sistemas, drivers, embarcados e softwares de alta performance",
        "Somente para jogos",
        "Apenas para cálculos simples"
      ],
      correct: 1
    },
    {
      question: "O que é main()?",
      options: [
        "Um laço de repetição",
        "Função principal onde o programa começa",
        "Biblioteca externa",
        "Variável global"
      ],
      correct: 1
    },
    {
      question: "O que faz printf(\"Olá\");?",
      options: [
        "Cria um arquivo",
        "Exibe o texto \"Olá\" no terminal",
        "Apaga uma variável",
        "Inicia um loop"
      ],
      correct: 1
    },
    {
      question: "O que é variável em C?",
      options: [
        "Janela do sistema",
        "Espaço que guarda valores",
        "Função automática",
        "Arquivo externo"
      ],
      correct: 1
    },
    {
      question: "Por que precisa do ponto e vírgula ; ?",
      options: [
        "Para decorar o código",
        "Para separar letras",
        "Para indicar o fim do comando ao compilador",
        "Para iniciar comentários"
      ],
      correct: 2
    }
  ],

  "c++": [
    {
      question: "Significado da sigla C++:",
      options: ["C Mais Mais", "C Programming", "Code Progressive", "Computer Plus"],
      correct: 0
    },
    {
      question: "Criador do C++:",
      options: [
        "James Gosling",
        "Bjarne Stroustrup",
        "Dennis Ritchie",
        "Guido van Rossum"
      ],
      correct: 1
    },
    {
      question: "Década de criação:",
      options: ["1950", "1960", "1970", "1980"],
      correct: 3
    },
    {
      question: "Tipo de linguagem:",
      options: ["Interpretada", "Visual", "Compilada", "Scripts"],
      correct: 2
    },
    {
      question: "Base do C++:",
      options: ["Java", "Python", "C", "Ruby"],
      correct: 2
    }
  ],

  cs: [
    {
      question: "C# é lido como:",
      options: ["C Sharp", "C Hash", "C Square", "C Code"],
      correct: 0
    },
    {
      question: "Quem desenvolveu C#?",
      options: ["Google", "Microsoft", "IBM", "Apple"],
      correct: 1
    },
    {
      question: "Criado como parte de:",
      options: ["DirectX", ".NET Framework", "MS-DOS", "Windows XP"],
      correct: 1
    },
    {
      question: "Usos mais comuns:",
      options: ["Android", "Jogos 2D", "Desktop, web e jogos", "Apenas HTML"],
      correct: 2
    },
    {
      question: "Plataforma principal:",
      options: ["Unity", "Unreal", ".NET", "Visual Basic"],
      correct: 2
    }
  ]
};


  // Mapa de nomes bonitos para certificado
  const courseNames = {
    html: "HTML",
    css: "CSS",
    js: "JavaScript",
    python: "Python",
    java: "Java",
    php: "PHP",
    c: "C",
    "c++": "C++",
    cs: "C#"
  };

  // Reset progress
  function resetProgress(course) {
    localStorage.removeItem("watchedVideos");
    localStorage.removeItem("quizResults");
    localStorage.removeItem("completedCourses");

    const btn = document.getElementById("video-watched-btn");
    if (btn) {
      btn.textContent = "Marcar como Assistido";
      btn.classList.remove("btn-success");
      btn.classList.add("btn-primary");
      btn.disabled = false;
    }

    const resultDiv = document.getElementById(`quiz-result-${course}`);
    if (resultDiv) {
      resultDiv.innerHTML = "";
      resultDiv.className = "quiz-result mt-3";
    }
  }

  // Load quiz automatically
  const currentPage = window.location.pathname.split("/").pop().split(".")[0];
  if (quizzes[currentPage]) {
    resetProgress(currentPage);
    loadQuiz(currentPage);
  }

  function loadQuiz(course) {
    const quizContainer = document.getElementById(`quiz-${course}`);
    if (!quizContainer) return;

    const questions = quizzes[course];

    questions.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.className = "quiz-question";
      questionDiv.innerHTML = `
        <h4>${index + 1}. ${q.question}</h4>
        <div class="quiz-options">
          ${q.options
            .map(
              (option, i) => `
            <label class="quiz-option">
              <input type="radio" name="q${index}" value="${i}">
              <span>${option}</span>
            </label>
          `
            )
            .join("")}
        </div>
      `;
      quizContainer.appendChild(questionDiv);
    });

    document.querySelectorAll(".quiz-option").forEach(option => {
      option.addEventListener("click", function () {
        const radio = this.querySelector('input[type="radio"]');
        radio.checked = true;

        const parent = this.parentElement;
        parent.querySelectorAll(".quiz-option").forEach(opt => {
          opt.classList.remove("selected");
        });

        this.classList.add("selected");
      });
    });
  }

  // Mark video as watched
  window.markVideoWatched = function (course) {
    const watched = JSON.parse(localStorage.getItem("watchedVideos") || "{}");
    watched[course] = true;
    localStorage.setItem("watchedVideos", JSON.stringify(watched));

    const btn = document.getElementById("video-watched-btn");
    btn.textContent = "✓ Vídeo Assistido";
    btn.classList.add("btn-success");
    btn.classList.remove("btn-primary");
    btn.disabled = true;

    checkCompletion(course);
  };

  // Submit quiz
  window.submitQuiz = function (course) {
    const questions = quizzes[course];
    const resultDiv = document.getElementById(`quiz-result-${course}`);
    let correct = 0;
    let total = questions.length;
    let allAnswered = true;

    questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      if (!selected) {
        allAnswered = false;
      } else if (parseInt(selected.value) === q.correct) {
        correct++;
      }
    });

    if (!allAnswered) {
      resultDiv.className = "quiz-result error";
      resultDiv.innerHTML = '<i class="fas fa-exclamation-circle"></i> Por favor, responda todas as perguntas antes de enviar!';
      return;
    }

    const percentage = (correct / total) * 100;
    const passed = percentage >= 70;

    if (passed) {
      resultDiv.className = "quiz-result success";
      resultDiv.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <strong>Parabéns!</strong> Você acertou ${correct}/${total} perguntas (${percentage.toFixed(1)}%).
        <div id="certificate-form-${course}" class="mt-3">
          <p>Insira seu nome completo para emissão do certificado:</p>
          <input type="text" id="full-name-${course}" class="form-control mb-2" placeholder="Seu Nome Completo" required>
          <button class="btn btn-success" onclick="requestCertificate('${course}', ${percentage.toFixed(1)})">
            <i class="fas fa-certificate"></i> Gerar Certificado
          </button>
        </div>
      `;
    } else {
      resultDiv.className = "quiz-result error";
      resultDiv.innerHTML = `
        <i class="fas fa-times-circle"></i>
        Você acertou ${correct}/${total} perguntas (${percentage.toFixed(1)}%). 
        <br>Tente novamente para obter pelo menos 70% e conquistar seu certificado!
      `;
    }

    const quizResults = JSON.parse(localStorage.getItem("quizResults") || "{}");
    quizResults[course] = {
      correct,
      total,
      passed,
      percentage: percentage.toFixed(1)
    };
    localStorage.setItem("quizResults", JSON.stringify(quizResults));

    if (passed) checkCompletion(course);
  };

  window.requestCertificate = function (course, percentage) {
    const fullNameInput = document.getElementById(`full-name-${course}`);
    const fullName = fullNameInput.value.trim();

    if (fullName.length < 5) {
      alert("Por favor, insira seu nome completo (mínimo 5 caracteres) para a emissão do certificado.");
      fullNameInput.focus();
      return;
    }

    generateCertificate(course, percentage, fullName);
  };

  // Generate certificate
  window.generateCertificate = function (course, percentage, fullName) {
    const courseName = courseNames[course] || course.toUpperCase();
    const date = new Date().toLocaleDateString("pt-BR");

    // CERTIFICATE HTML (interrompido)
    const certificateHTML = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Certificado - ${courseName}</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
    
    .certificate-container {
      background: white;
      max-width: 900px;
      width: 100%;
      padding: 60px 80px;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      text-align: center;
      position: relative;
      border: 15px solid #3ca2a7;
    }
    
    .certificate-container::before {
      content: '';
      position: absolute;
      top: 20px;
      left: 20px;
      right: 20px;
      bottom: 20px;
      border: 2px solid #3ca2a7;
      pointer-events: none;
    }
    
    .certificate-header {
      margin-bottom: 30px;
    }
    
    .certificate-logo {
      font-size: 3rem;
      color: #3ca2a7;
      font-weight: 700;
      margin-bottom: 10px;
    }
    
    .certificate-title {
      font-size: 2.5rem;
      color: #333;
      font-weight: 700;
      margin-bottom: 20px;
      text-transform: uppercase;
      letter-spacing: 3px;
    }
    
    .certificate-subtitle {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 40px;
    }
    
    .certificate-body {
      margin: 40px 0;
      line-height: 2;
    }
    
    .certificate-text {
      font-size: 1.1rem;
      color: #444;
      margin-bottom: 20px;
    }
    
    .certificate-course {
      font-size: 2rem;
      color: #3ca2a7;
      font-weight: 700;
      margin: 30px 0;
      text-transform: uppercase;
    }
    
    .certificate-score {
      font-size: 1.3rem;
      color: #28a745;
      font-weight: 600;
      margin: 20px 0;
    }
    
    .certificate-date {
      font-size: 1rem;
      color: #666;
      margin: 30px 0;
    }
    
    .certificate-footer {
      margin-top: 50px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 20px;
    }
    
    .signature-block {
      text-align: center;
      min-width: 200px;
    }
    
    .signature-line {
      border-top: 2px solid #333;
      margin-bottom: 10px;
      padding-top: 5px;
    }
    
    .signature-name {
      font-weight: 600;
      color: #333;
      font-size: 0.95rem;
    }
    
    .signature-title {
      font-size: 0.85rem;
      color: #666;
    }
    
    .print-button {
      position: fixed;
      top: 20px;
      right: 20px;
      background: #3ca2a7;
      color: white;
      border: none;
      padding: 15px 30px;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(60, 162, 167, 0.4);
      transition: all 0.3s ease;
      z-index: 1000;
    }
    
    .print-button:hover {
      background: #2e8b91;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(60, 162, 167, 0.6);
    }
    
    @media print {
      body {
        background: white;
      }
      
      .print-button {
        display: none;
      }
      
      .certificate-container {
        box-shadow: none;
        max-width: 100%;
        page-break-inside: avoid;
      }
    }
    
    @media (max-width: 768px) {
      .certificate-container {
        padding: 40px 30px;
      }
      
      .certificate-title {
        font-size: 1.8rem;
      }
      
      .certificate-course {
        font-size: 1.5rem;
      }
      
      .print-button {
        padding: 12px 24px;
        font-size: 0.9rem;
      }
    }
  </style>
</head>
<body>
  <button class="print-button" onclick="window.print()">🖨️ Imprimir / Salvar PDF</button>
  
  <div class="certificate-container">
    <div class="certificate-header">
      <div class="certificate-logo">CodeBeg</div>
      <h1 class="certificate-title">Certificado de Conclusão</h1>
      <p class="certificate-subtitle">Portal de Programação para Iniciantes</p>
    </div>
    
    <div class="certificate-body">
      <p class="certificate-text">
        Certificamos que o(a) aluno(a)
      </p>
      
      <h2 class="certificate-course" style="font-size: 2.5rem; color: #333; margin: 10px 0;">${fullName}</h2>
      
      <p class="certificate-text">
        concluiu com êxito o curso de
      </p>
      
      <h3 class="certificate-course">${courseName}</h3>
      
      <p class="certificate-score">
        Com aproveitamento de ${percentage}%
      </p>
      
      <p class="certificate-date">
        Emitido em ${date}
      </p>
    </div>
    
    <div class="certificate-footer">
      <div class="signature-block">
        <div class="signature-line">
          <p class="signature-name">Beatriz Lima</p>
        </div>
        <p class="signature-title">Coordenadora</p>
      </div>
      
      <div class="signature-block">
        <div class="signature-line">
          <p class="signature-name">Danillo Santos</p>
        </div>
        <p class="signature-title">Instrutor</p>
      </div>
      
      <div class="signature-block">
        <div class="signature-line">
          <p class="signature-name">Eduardo Sousa</p>
        </div>
        <p class="signature-title">Desenvolvedor</p>
      </div>
      
      <div class="signature-block">
        <div class="signature-line">
          <p class="signature-name">Larissa da Silva</p>
        </div>
        <p class="signature-title">Designer</p>
      </div>
      
      <div class="signature-block">
        <div class="signature-line">
          <p class="signature-name">Kennedy Samuel</p>
        </div>
        <p class="signature-title">Diretor</p>
      </div>
    </div>
  </div>
</body>
</html>
    `;
    
    // Open certificate in new window
    const newWindow = window.open('', '_blank');
    newWindow.document.write(certificateHTML);
    newWindow.document.close();
  };

  function checkCompletion(course) {
    const watched = JSON.parse(localStorage.getItem('watchedVideos') || '{}');
    const quizResults = JSON.parse(localStorage.getItem('quizResults') || '{}');

    if (watched[course] && quizResults[course]?.passed) {
      const completed = JSON.parse(localStorage.getItem('completedCourses') || '[]');
      if (!completed.includes(course)) {
        completed.push(course);
        localStorage.setItem('completedCourses', JSON.stringify(completed));
      }
    }
  }

  // Removed redundant check as resetProgress handles it on load
});
