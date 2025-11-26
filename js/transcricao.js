// Sistema de Transcrição de Vídeos
document.addEventListener('DOMContentLoaded', function() {
  
  // Função para inicializar o botão de transcrição
  function initTranscriptionButton() {
    const transcriptionBtn = document.getElementById('transcription-btn');
    if (!transcriptionBtn) return;
    
    transcriptionBtn.addEventListener('click', function() {
      const videoId = this.getAttribute('data-video-id');
      const courseName = this.getAttribute('data-course');
      
      if (!videoId || !courseName) {
        showTranscriptionModal('Erro', 'Informações do vídeo não encontradas.');
        return;
      }
      
      // Simular carregamento de transcrição
      showTranscriptionModal('Carregando...', 'Gerando transcrição do vídeo...');
      
      setTimeout(() => {
        const transcription = getTranscription(courseName);
        showTranscriptionModal(`Transcrição - ${courseName}`, transcription);
      }, 1500);
    });
  }
  
  // Função para obter transcrição simulada
  function getTranscription(course) {
    const transcriptions = {
      'html': `
        <p><strong>Introdução ao HTML</strong></p>
        <p>Olá! Bem-vindo ao curso de HTML. HTML significa HyperText Markup Language, que é a linguagem de marcação padrão para criar páginas web.</p>
        <p>Neste curso, você aprenderá:</p>
        <ul>
          <li>Estrutura básica de um documento HTML</li>
          <li>Tags e elementos HTML</li>
          <li>Atributos e valores</li>
          <li>Semântica HTML5</li>
          <li>Formulários e validação</li>
        </ul>
        <p>Vamos começar com a estrutura básica de um documento HTML...</p>
      `,
      'css': `
        <p><strong>Introdução ao CSS</strong></p>
        <p>Olá! Bem-vindo ao curso de CSS. CSS significa Cascading Style Sheets, que é usado para estilizar páginas web.</p>
        <p>Neste curso, você aprenderá:</p>
        <ul>
          <li>Seletores CSS</li>
          <li>Propriedades e valores</li>
          <li>Box Model</li>
          <li>Flexbox e Grid</li>
          <li>Responsividade</li>
        </ul>
        <p>Vamos começar entendendo como o CSS funciona...</p>
      `,
      'js': `
        <p><strong>Introdução ao JavaScript</strong></p>
        <p>Olá! Bem-vindo ao curso de JavaScript. JavaScript é a linguagem de programação da web.</p>
        <p>Neste curso, você aprenderá:</p>
        <ul>
          <li>Variáveis e tipos de dados</li>
          <li>Funções e escopo</li>
          <li>Manipulação do DOM</li>
          <li>Eventos</li>
          <li>Programação assíncrona</li>
        </ul>
        <p>Vamos começar com os fundamentos do JavaScript...</p>
      `,
      'python': `
        <p><strong>Introdução ao Python</strong></p>
        <p>Olá! Bem-vindo ao curso de Python. Python é uma linguagem versátil e poderosa.</p>
        <p>Neste curso, você aprenderá:</p>
        <ul>
          <li>Sintaxe básica do Python</li>
          <li>Estruturas de dados</li>
          <li>Funções e módulos</li>
          <li>Programação orientada a objetos</li>
          <li>Bibliotecas populares</li>
        </ul>
        <p>Vamos começar com os conceitos básicos do Python...</p>
      `,
      'java': `
        <p><strong>Introdução ao Java</strong></p>
        <p>Olá! Bem-vindo ao curso de Java. Java é uma linguagem robusta e multiplataforma.</p>
        <p>Neste curso, você aprenderá:</p>
        <ul>
          <li>Sintaxe Java</li>
          <li>Programação orientada a objetos</li>
          <li>Coleções e estruturas de dados</li>
          <li>Tratamento de exceções</li>
          <li>Threads e concorrência</li>
        </ul>
        <p>Vamos começar com os fundamentos do Java...</p>
      `,
      'php': `
        <p><strong>Introdução ao PHP</strong></p>
        <p>Olá! Bem-vindo ao curso de PHP. PHP é a linguagem do lado do servidor mais popular.</p>
        <p>Neste curso, você aprenderá:</p>
        <ul>
          <li>Sintaxe PHP</li>
          <li>Variáveis e tipos</li>
          <li>Conexão com banco de dados</li>
          <li>Sessões e cookies</li>
          <li>Segurança web</li>
        </ul>
        <p>Vamos começar com os conceitos básicos do PHP...</p>
      `,
      'c': `
        <p><strong>Introdução ao C</strong></p>
        <p>Olá! Bem-vindo ao curso de C. C é a base da programação moderna.</p>
        <p>Neste curso, você aprenderá:</p>
        <ul>
          <li>Sintaxe C</li>
          <li>Ponteiros e memória</li>
          <li>Estruturas de dados</li>
          <li>Funções e bibliotecas</li>
          <li>Gerenciamento de memória</li>
        </ul>
        <p>Vamos começar com os fundamentos do C...</p>
      `,
      'c++': `
        <p><strong>Introdução ao C++</strong></p>
        <p>Olá! Bem-vindo ao curso de C++. C++ é uma linguagem poderosa e eficiente.</p>
        <p>Neste curso, você aprenderá:</p>
        <ul>
          <li>Sintaxe C++</li>
          <li>Programação orientada a objetos</li>
          <li>Templates e STL</li>
          <li>Gerenciamento de memória</li>
          <li>Programação moderna C++</li>
        </ul>
        <p>Vamos começar com os conceitos básicos do C++...</p>
      `,
      'cs': `
        <p><strong>Introdução ao C#</strong></p>
        <p>Olá! Bem-vindo ao curso de C#. C# é a linguagem principal do .NET.</p>
        <p>Neste curso, você aprenderá:</p>
        <ul>
          <li>Sintaxe C#</li>
          <li>Programação orientada a objetos</li>
          <li>LINQ e coleções</li>
          <li>Async/Await</li>
          <li>Desenvolvimento .NET</li>
        </ul>
        <p>Vamos começar com os fundamentos do C#...</p>
      `
    };
    
    return transcriptions[course] || '<p>Transcrição não disponível para este curso.</p>';
  }
  
  // Função para exibir modal de transcrição
  function showTranscriptionModal(title, content) {
    // Remover modal existente se houver
    const existingModal = document.getElementById('transcription-modal');
    if (existingModal) {
      existingModal.remove();
    }
    
    // Criar modal
    const modal = document.createElement('div');
    modal.id = 'transcription-modal';
    modal.className = 'transcription-modal';
    modal.innerHTML = `
      <div class="transcription-modal-content">
        <div class="transcription-modal-header">
          <h3>${title}</h3>
          <button class="transcription-modal-close">&times;</button>
        </div>
        <div class="transcription-modal-body">
          ${content}
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Adicionar evento de fechar
    const closeBtn = modal.querySelector('.transcription-modal-close');
    closeBtn.addEventListener('click', () => {
      modal.remove();
    });
    
    // Fechar ao clicar fora do modal
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }
  
  // Inicializar
  initTranscriptionButton();
});
