# 🚀 Guia de Instalação - CodeBeg

## 📋 Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional para testes)
- Conexão com internet (para CDNs do Bootstrap e Font Awesome)

---

## 📦 Instalação

### Opção 1: Servidor Web Local

#### Usando Python (recomendado):
```bash
# Navegue até a pasta do projeto
cd CodeBeg

# Inicie o servidor (Python 3)
python3 -m http.server 8080

# Ou Python 2
python -m SimpleHTTPServer 8080
```

Acesse: `http://localhost:8080`

#### Usando Node.js:
```bash
# Instale o http-server globalmente
npm install -g http-server

# Navegue até a pasta do projeto
cd CodeBeg

# Inicie o servidor
http-server -p 8080
```

Acesse: `http://localhost:8080`

#### Usando PHP:
```bash
# Navegue até a pasta do projeto
cd CodeBeg

# Inicie o servidor
php -S localhost:8080
```

Acesse: `http://localhost:8080`

---

### Opção 2: Abrir Diretamente no Navegador

1. Extraia o arquivo `CodeBeg-Atualizado.zip`
2. Navegue até a pasta `CodeBeg`
3. Abra o arquivo `index.html` no navegador

**Nota:** Alguns recursos podem não funcionar corretamente devido a restrições CORS.

---

### Opção 3: Deploy em Servidor Web

#### Apache:
1. Copie a pasta `CodeBeg` para `/var/www/html/`
2. Configure as permissões:
```bash
sudo chown -R www-data:www-data /var/www/html/CodeBeg
sudo chmod -R 755 /var/www/html/CodeBeg
```
3. Acesse via `http://seu-servidor/CodeBeg`

#### Nginx:
1. Copie a pasta `CodeBeg` para `/usr/share/nginx/html/`
2. Configure as permissões:
```bash
sudo chown -R nginx:nginx /usr/share/nginx/html/CodeBeg
sudo chmod -R 755 /usr/share/nginx/html/CodeBeg
```
3. Acesse via `http://seu-servidor/CodeBeg`

---

## 🔧 Configuração

### Verificar Dependências CDN

O projeto utiliza as seguintes CDNs:

1. **Bootstrap 5.1.3**
   - CSS: `css/bootstrap.min.css` (local)
   - JS: `js/bootstrap.bundle.min.js` (local)

2. **Font Awesome 6.0.0**
   - CDN: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css`

3. **Google Fonts - Poppins**
   - CDN: `https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap`

---

## 🧪 Testar Funcionalidades

### 1. Testar Menu Lateral
- Abra qualquer página de curso
- Clique no botão circular no canto superior esquerdo
- Verifique se o menu abre com todos os cursos
- Teste a navegação entre cursos

### 2. Testar Transcrição
- Abra qualquer página de curso
- Clique no botão "Ver Transcrição"
- Verifique se o modal abre com o conteúdo
- Teste o fechamento (X, ESC, clique fora)

### 3. Testar Responsividade
- Redimensione a janela do navegador
- Teste em diferentes dispositivos
- Verifique o comportamento em mobile

---

## 📁 Estrutura de Pastas

```
CodeBeg/
├── css/
│   ├── main.css                 # Estilos principais + novos estilos
│   ├── bootstrap.min.css        # Bootstrap
│   └── ...
├── js/
│   ├── transcricao.js           # ✨ NOVO - Sistema de transcrição
│   ├── sidebar.js               # ✨ NOVO - Menu lateral
│   ├── quiz.js                  # Sistema de quiz
│   ├── navbar.js                # Navbar dinâmica
│   ├── footer.js                # Footer dinâmico
│   └── ...
├── pag/
│   ├── html.html                # ✅ Atualizado
│   ├── css.html                 # ✅ Atualizado
│   ├── js.html                  # ✅ Atualizado
│   ├── python.html              # ✅ Atualizado
│   ├── java.html                # ✅ Atualizado
│   ├── php.html                 # ✅ Atualizado
│   ├── c.html                   # ✅ Atualizado
│   ├── c++.html                 # ✅ Atualizado
│   └── cs.html                  # ✅ Atualizado
├── imgs/                        # Imagens dos cursos
├── imgCodeBeg/                   # Imagens do site
├── index.html                   # Página inicial
├── contato.html                 # Página de contato
├── footer.html                  # Template do footer
├── navbar.html                  # Template da navbar
├── MELHORIAS.md                 # Documentação completa
├── INSTALACAO.md                # Este arquivo
└── README.md                    # Readme original
```

---

## 🐛 Solução de Problemas

### Problema: Menu lateral não aparece
**Solução:** Verifique se o arquivo `js/sidebar.js` está carregado e se você está em uma página de curso (dentro da pasta `pag/`).

### Problema: Transcrição não abre
**Solução:** Verifique se o arquivo `js/transcricao.js` está carregado e se o botão tem os atributos `data-course` e `data-video-id`.

### Problema: Estilos não aplicados
**Solução:** Verifique se o arquivo `css/main.css` está carregado corretamente e se não há erros no console do navegador.

### Problema: Ícones não aparecem
**Solução:** Verifique a conexão com internet, pois o Font Awesome é carregado via CDN.

### Problema: Vídeos não carregam
**Solução:** Os vídeos são do YouTube. Verifique se as playlists ainda estão disponíveis e se há conexão com internet.

---

## 🔒 Segurança

### Recomendações:
1. **HTTPS**: Use sempre HTTPS em produção
2. **Headers de Segurança**: Configure headers apropriados
3. **Validação**: Valide todos os inputs do formulário de contato
4. **Atualizações**: Mantenha as dependências atualizadas

---

## 📊 Performance

### Otimizações Implementadas:
- ✅ CSS minificado (Bootstrap)
- ✅ JavaScript otimizado
- ✅ Lazy loading de imagens (via browser)
- ✅ Uso de CDN para bibliotecas

### Sugestões Futuras:
- Minificar arquivos CSS e JS customizados
- Implementar cache de assets
- Otimizar imagens (WebP, compressão)
- Implementar Service Worker para PWA

---

## 🌐 Compatibilidade

### Navegadores Suportados:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

### Dispositivos Testados:
- ✅ Desktop (1920x1080)
- ✅ Laptop (1366x768)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667)

---

## 📞 Suporte

Para dúvidas ou problemas:
1. Consulte a documentação em `MELHORIAS.md`
2. Verifique o console do navegador para erros
3. Entre em contato via página de contato do site

---

## ✅ Checklist de Instalação

- [ ] Extrair arquivos do ZIP
- [ ] Verificar estrutura de pastas
- [ ] Iniciar servidor web local
- [ ] Acessar `index.html`
- [ ] Testar navegação entre páginas
- [ ] Testar menu lateral
- [ ] Testar sistema de transcrição
- [ ] Testar responsividade
- [ ] Verificar console para erros
- [ ] Testar em diferentes navegadores

---

**Instalação concluída com sucesso!** 🎉

Aproveite o **CodeBeg** e bons estudos!
