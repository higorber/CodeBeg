document.addEventListener('DOMContentLoaded', function() {
  // Quiz data for each course
  const quizzes = {
    html: [
      {
        question: "O que significa HTML?",
        options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
        correct: 0
      },
      {
        question: "Qual tag é usada para criar um parágrafo em HTML?",
        options: ["<p>", "<div>", "<span>", "<h1>"],
        correct: 0
      },
      {
        question: "Qual atributo é usado para definir o texto alternativo de uma imagem?",
        options: ["title", "alt", "src", "href"],
        correct: 1
      },
      {
        question: "Qual tag é usada para criar um link em HTML?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correct: 1
      },
      {
        question: "Qual é a estrutura básica de um documento HTML?",
        options: ["<html><head><body>", "<body><head><html>", "<head><body><html>", "<html><body><head>"],
        correct: 0
      }
    ],
    css: [
      {
        question: "O que significa CSS?",
        options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        correct: 2
      },
      {
        question: "Como selecionar um elemento com id 'header' em CSS?",
        options: [".header", "#header", "header", "*header"],
        correct: 1
      },
      {
        question: "Qual propriedade CSS é usada para alterar a cor do texto?",
        options: ["text-color", "color", "font-color", "text-style"],
        correct: 1
      },
      {
        question: "Como adicionar um comentário em CSS?",
        options: ["// comentário", "/* comentário */", "<!-- comentário -->", "# comentário"],
        correct: 1
      },
      {
        question: "Qual é a propriedade CSS para definir o espaçamento interno de um elemento?",
        options: ["margin", "padding", "border", "spacing"],
        correct: 1
      }
    ],
    js: [
      {
        question: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        options: ["var", "let", "const", "Todas as acima"],
        correct: 3
      },
      {
        question: "Como escrever um comentário de uma linha em JavaScript?",
        options: ["// comentário", "/* comentário */", "<!-- comentário -->", "# comentário"],
        correct: 0
      },
      {
        question: "Qual método é usado para adicionar um elemento ao final de um array?",
        options: ["push()", "add()", "append()", "insert()"],
        correct: 0
      },
      {
        question: "Como verificar se uma variável é um array em JavaScript?",
        options: ["isArray()", "Array.isArray()", "typeof array", "instanceof Array"],
        correct: 1
      },
      {
        question: "Qual operador é usado para comparação estrita em JavaScript?",
        options: ["==", "===", "!=", "!=="],
        correct: 1
      }
    ],
    python: [
      {
        question: "Como imprimir 'Olá, Mundo!' em Python?",
        options: ["print('Olá, Mundo!')", "echo 'Olá, Mundo!'", "console.log('Olá, Mundo!')", "printf('Olá, Mundo!')"],
        correct: 0
      },
      {
        question: "Qual é a extensão de arquivo padrão para scripts Python?",
        options: [".py", ".python", ".pt", ".script"],
        correct: 0
      },
      {
        question: "Como declarar uma lista em Python?",
        options: ["list = []", "list = {}", "list = ()", "list = <>"],
        correct: 0
      },
      {
        question: "Qual palavra-chave é usada para definir uma função em Python?",
        options: ["function", "def", "define", "func"],
        correct: 1
      },
      {
        question: "Como verificar o tipo de uma variável em Python?",
        options: ["type()", "typeof()", "gettype()", "var_type()"],
        correct: 0
      }
    ],
    java: [
      {
        question: "Qual é a assinatura do método main em Java?",
        options: ["public static void main(String[] args)", "public void main(String args)", "static void main(String[] args)", "public static main(String[] args)"],
        correct: 0
      },
      {
        question: "Como declarar uma variável String em Java?",
        options: ["String str;", "string str;", "str String;", "var str;"],
        correct: 0
      },
      {
        question: "Qual palavra-chave é usada para herança em Java?",
        options: ["extends", "implements", "inherits", "super"],
        correct: 0
      },
      {
        question: "Como imprimir no console em Java?",
        options: ["System.out.println();", "console.log();", "print();", "echo();"],
        correct: 0
      },
      {
        question: "Qual é o modificador de acesso padrão em Java?",
        options: ["public", "private", "protected", "package-private"],
        correct: 3
      }
    ],
    php: [
      {
        question: "Como iniciar um bloco PHP?",
        options: ["<?php", "<php>", "<?", "<script>"],
        correct: 0
      },
      {
        question: "Qual função é usada para conectar ao banco de dados MySQL em PHP?",
        options: ["mysql_connect()", "mysqli_connect()", "pdo_connect()", "db_connect()"],
        correct: 1
      },
      {
        question: "Como declarar uma variável em PHP?",
        options: ["$variavel", "var variavel", "variable", "#variavel"],
        correct: 0
      },
      {
        question: "Qual função é usada para incluir um arquivo em PHP?",
        options: ["include()", "require()", "import()", "load()"],
        correct: 0
      },
      {
        question: "Como verificar se uma variável está definida em PHP?",
        options: ["isset()", "defined()", "exists()", "is_set()"],
        correct: 0
      }
    ],
    c: [
      {
        question: "Qual é a função principal em um programa C?",
        options: ["start()", "main()", "begin()", "init()"],
        correct: 1
      },
      {
        question: "Como declarar uma variável inteira em C?",
        options: ["int x;", "integer x;", "var x;", "num x;"],
        correct: 0
      },
      {
        question: "Qual biblioteca contém a função printf()?",
        options: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<math.h>"],
        correct: 0
      },
      {
        question: "Como incluir comentários de uma linha em C?",
        options: ["// comentário", "/* comentário */", "# comentário", "-- comentário"],
        correct: 0
      },
      {
        question: "Qual operador é usado para acesso a ponteiro em C?",
        options: ["&", "*", "#", "@"],
        correct: 1
      }
    ],
    "c++": [
      {
        question: "Qual palavra-chave é usada para entrada/saída em C++?",
        options: ["cin/cout", "input/output", "read/write", "get/put"],
        correct: 0
      },
      {
        question: "Como declarar uma classe em C++?",
        options: ["class NomeClasse {}", "Class NomeClasse {}", "struct NomeClasse {}", "object NomeClasse {}"],
        correct: 0
      },
      {
        question: "Qual é o operador de resolução de escopo em C++?",
        options: [".", "::", "->", ":"],
        correct: 1
      },
      {
        question: "Como incluir a biblioteca iostream em C++?",
        options: ["#include <iostream>", "#include 'iostream'", "import iostream", "using iostream"],
        correct: 0
      },
      {
        question: "Qual palavra-chave é usada para herança em C++?",
        options: ["extends", "inherits", ":", "inherits from"],
        correct: 2
      }
    ],
    cs: [
      {
        question: "Qual é a extensão de arquivo para código C#?",
        options: [".cs", ".csharp", ".c#", ".net"],
        correct: 0
      },
      {
        question: "Como declarar uma variável string em C#?",
        options: ["string str;", "String str;", "str string;", "var str = 'hello';"],
        correct: 0
      },
      {
        question: "Qual palavra-chave é usada para definir uma classe em C#?",
        options: ["class", "Class", "struct", "object"],
        correct: 0
      },
      {
        question: "Como escrever no console em C#?",
        options: ["Console.WriteLine();", "print();", "echo();", "System.out.println();"],
        correct: 0
      },
      {
        question: "Qual é o modificador de acesso padrão em C#?",
        options: ["public", "private", "internal", "protected"],
        correct: 1
      }
    ]
  };

  // Course names mapping
  const courseNames = {
    'html': 'HTML',
    'css': 'CSS',
    'js': 'JavaScript',
    'python': 'Python',
    'java': 'Java',
    'php': 'PHP',
    'c': 'C',
    'c++': 'C++',
    'cs': 'C#'
  };

  // Load quiz for current page
  const currentPage = window.location.pathname.split('/').pop().split('.')[0];
  if (quizzes[currentPage]) {
    loadQuiz(currentPage);
  }

  function loadQuiz(course) {
    const quizContainer = document.getElementById(`quiz-${course}`);
    if (!quizContainer) return;
    
    const questions = quizzes[course];

    questions.forEach((q, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'quiz-question';
      questionDiv.innerHTML = `
        <h4>${index + 1}. ${q.question}</h4>
        <div class="quiz-options">
          ${q.options.map((option, i) => `
            <label class="quiz-option">
              <input type="radio" name="q${index}" value="${i}">
              <span>${option}</span>
            </label>
          `).join('')}
        </div>
      `;
      quizContainer.appendChild(questionDiv);
    });

    // Add click event to quiz options
    document.querySelectorAll('.quiz-option').forEach(option => {
      option.addEventListener('click', function() {
        const radio = this.querySelector('input[type="radio"]');
        radio.checked = true;
        
        // Remove selected class from siblings
        const parent = this.parentElement;
        parent.querySelectorAll('.quiz-option').forEach(opt => {
          opt.classList.remove('selected');
        });
        
        // Add selected class to this option
        this.classList.add('selected');
      });
    });
  }

  // Mark video as watched
  window.markVideoWatched = function(course) {
    const watched = JSON.parse(localStorage.getItem('watchedVideos') || '{}');
    watched[course] = true;
    localStorage.setItem('watchedVideos', JSON.stringify(watched));
    
    const btn = document.getElementById('video-watched-btn');
    btn.textContent = '✓ Vídeo Assistido';
    btn.classList.add('btn-success');
    btn.classList.remove('btn-primary');
    btn.disabled = true;
    
    checkCompletion(course);
  };

  // Submit quiz
  window.submitQuiz = function(course) {
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
      resultDiv.className = 'quiz-result error';
      resultDiv.innerHTML = '<i class="fas fa-exclamation-circle"></i> Por favor, responda todas as perguntas antes de enviar!';
      return;
    }

    const percentage = (correct / total) * 100;
    const passed = percentage >= 70;

    if (passed) {
      resultDiv.className = 'quiz-result success';
      resultDiv.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <strong>Parabéns!</strong> Você acertou ${correct}/${total} perguntas (${percentage.toFixed(1)}%).
        <button class="btn btn-success mt-3" onclick="generateCertificate('${course}', ${percentage.toFixed(1)})">
          <i class="fas fa-certificate"></i> Gerar Certificado
        </button>
      `;
    } else {
      resultDiv.className = 'quiz-result error';
      resultDiv.innerHTML = `
        <i class="fas fa-times-circle"></i>
        Você acertou ${correct}/${total} perguntas (${percentage.toFixed(1)}%). 
        <br>Tente novamente para obter pelo menos 70% e conquistar seu certificado!
      `;
    }

    // Save quiz result
    const quizResults = JSON.parse(localStorage.getItem('quizResults') || '{}');
    quizResults[course] = { correct, total, passed, percentage: percentage.toFixed(1) };
    localStorage.setItem('quizResults', JSON.stringify(quizResults));

    if (passed) {
      checkCompletion(course);
    }
  };

  // Generate certificate
  window.generateCertificate = function(course, percentage) {
    const courseName = courseNames[course] || course.toUpperCase();
    const date = new Date().toLocaleDateString('pt-BR');
    
    // Create certificate HTML
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
        Certificamos que o(a) aluno(a) concluiu com êxito o curso de
      </p>
      
      <h2 class="certificate-course">${courseName}</h2>
      
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
          <p class="signature-name">Beatriz Silva</p>
        </div>
        <p class="signature-title">Coordenadora</p>
      </div>
      
      <div class="signature-block">
        <div class="signature-line">
          <p class="signature-name">Danilo Santos</p>
        </div>
        <p class="signature-title">Instrutor</p>
      </div>
      
      <div class="signature-block">
        <div class="signature-line">
          <p class="signature-name">Eduardo Costa</p>
        </div>
        <p class="signature-title">Desenvolvedor</p>
      </div>
      
      <div class="signature-block">
        <div class="signature-line">
          <p class="signature-name">Larissa Oliveira</p>
        </div>
        <p class="signature-title">Designer</p>
      </div>
      
      <div class="signature-block">
        <div class="signature-line">
          <p class="signature-name">Kennedy Alves</p>
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

  // Check if video was already watched
  const watched = JSON.parse(localStorage.getItem('watchedVideos') || '{}');
  if (watched[currentPage]) {
    const btn = document.getElementById('video-watched-btn');
    if (btn) {
      btn.textContent = '✓ Vídeo Assistido';
      btn.classList.add('btn-success');
      btn.classList.remove('btn-primary');
      btn.disabled = true;
    }
  }
});
