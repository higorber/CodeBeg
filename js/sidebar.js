// Menu Lateral - Navegação entre cursos
document.addEventListener('DOMContentLoaded', function() {
  
  // Dados dos cursos
  const courses = [
    { id: 'html', name: 'HTML', icon: 'fab fa-html5', url: 'html.html' },
    { id: 'css', name: 'CSS', icon: 'fab fa-css3-alt', url: 'css.html' },
    { id: 'js', name: 'JavaScript', icon: 'fab fa-js', url: 'js.html' },
    { id: 'c', name: 'C', icon: 'fas fa-code', url: 'c.html' },
    { id: 'c++', name: 'C++', icon: 'fas fa-code', url: 'c++.html' },
    { id: 'cs', name: 'C#', icon: 'fas fa-code', url: 'cs.html' },
    { id: 'java', name: 'Java', icon: 'fab fa-java', url: 'java.html' },
    { id: 'python', name: 'Python', icon: 'fab fa-python', url: 'python.html' },
    { id: 'php', name: 'PHP', icon: 'fab fa-php', url: 'php.html' }
  ];
  
  // Criar estrutura do menu lateral
  function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.id = 'course-sidebar';
    sidebar.className = 'course-sidebar';
    
    // Botão de toggle
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'sidebar-toggle';
    toggleBtn.className = 'sidebar-toggle';
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Conteúdo do sidebar
    const sidebarContent = document.createElement('div');
    sidebarContent.className = 'sidebar-content';
    
    // Cabeçalho
    const header = document.createElement('div');
    header.className = 'sidebar-header';
    header.innerHTML = `
      <h3><i class="fas fa-graduation-cap"></i> Cursos</h3>
      <button class="sidebar-close"><i class="fas fa-times"></i></button>
    `;
    
    // Lista de cursos
    const courseList = document.createElement('ul');
    courseList.className = 'sidebar-course-list';
    
    // Obter página atual
    const currentPage = window.location.pathname.split('/').pop();
    
    courses.forEach(course => {
      const li = document.createElement('li');
      const isActive = currentPage === course.url;
      li.className = isActive ? 'active' : '';
      
      li.innerHTML = `
        <a href="${course.url}">
          <i class="${course.icon}"></i>
          <span>${course.name}</span>
        </a>
      `;
      
      courseList.appendChild(li);
    });
    
    // Montar sidebar
    sidebarContent.appendChild(header);
    sidebarContent.appendChild(courseList);
    sidebar.appendChild(sidebarContent);
    
    // Adicionar ao body
    document.body.appendChild(toggleBtn);
    document.body.appendChild(sidebar);
    
    // Adicionar eventos
    setupSidebarEvents(toggleBtn, sidebar);
  }
  
  // Configurar eventos do sidebar
  function setupSidebarEvents(toggleBtn, sidebar) {
    const closeBtn = sidebar.querySelector('.sidebar-close');
    
    // Abrir sidebar
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.add('open');
    });
    
    // Fechar sidebar
    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('open');
    });
    
    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    });
    
    // Fechar ao pressionar ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        sidebar.classList.remove('open');
      }
    });
  }
  
  // Verificar se está em uma página de curso
  const currentPath = window.location.pathname;
  if (currentPath.includes('/pag/')) {
    createSidebar();
  }
});
