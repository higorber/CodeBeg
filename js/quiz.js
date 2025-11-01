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
    cpp: [
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

  // Load quiz for current page
  const currentPage = window.location.pathname.split('/').pop().split('.')[0];
  if (quizzes[currentPage]) {
    loadQuiz(currentPage);
  }

  function loadQuiz(course) {
    const quizContainer = document.getElementById(`quiz-${course}`);
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
              ${option}
            </label>
          `).join('')}
        </div>
      `;
      quizContainer.appendChild(questionDiv);
    });
  }

  // Mark video as watched
  window.markVideoWatched = function(course) {
    const watched = JSON.parse(localStorage.getItem('watchedVideos') || '{}');
    watched[course] = true;
    localStorage.setItem('watchedVideos', JSON.stringify(watched));
    alert('Vídeo marcado como assistido!');
    checkCompletion(course);
  };

  // Submit quiz
  window.submitQuiz = function(course) {
    const questions = quizzes[course];
    const resultDiv = document.getElementById(`quiz-result-${course}`);
    let correct = 0;
    let total = questions.length;

    questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      if (selected && parseInt(selected.value) === q.correct) {
        correct++;
      }
    });

    const percentage = (correct / total) * 100;
    const passed = percentage >= 70; // 70% to pass

    if (passed) {
      resultDiv.className = 'quiz-result success';
      resultDiv.textContent = `Parabéns! Você acertou ${correct}/${total} perguntas (${percentage.toFixed(1)}%).`;
    } else {
      resultDiv.className = 'quiz-result error';
      resultDiv.textContent = `Você acertou ${correct}/${total} perguntas (${percentage.toFixed(1)}%). Tente novamente para obter pelo menos 70%.`;
    }

    // Save quiz result
    const quizResults = JSON.parse(localStorage.getItem('quizResults') || '{}');
    quizResults[course] = { correct, total, passed };
    localStorage.setItem('quizResults', JSON.stringify(quizResults));

    if (passed) {
      checkCompletion(course);
    }
  };

  function checkCompletion(course) {
    const watched = JSON.parse(localStorage.getItem('watchedVideos') || '{}');
    const quizResults = JSON.parse(localStorage.getItem('quizResults') || '{}');

    if (watched[course] && quizResults[course]?.passed) {
      // Mark course as completed
      const completed = JSON.parse(localStorage.getItem('completedCourses') || '[]');
      if (!completed.includes(course)) {
        completed.push(course);
        localStorage.setItem('completedCourses', JSON.stringify(completed));
        alert('Parabéns! Você completou o curso de ' + course.toUpperCase() + '!');
      }
    }
  }
});
