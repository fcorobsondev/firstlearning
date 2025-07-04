# 📘 Guia de Estudo – Curso.dev

## 1. **Controle de Versão**

### 1.1. Fundamentals

- **O que é VCS?** Um sistema de controle de versão registra todas as alterações em arquivos ao longo do tempo.
- **Modo Centralizado (CVCS)**: único repositório central (SVN, CVS); arquivos são reservados para evitar conflitos.
- **Modo Distribuído (DVCS)**: cada dev tem cópia completa do repositório. Git é o mais popular.

### 1.2. Como funciona o Git

- **Snapshots (“fotos”)**: cada commit registra o estado completo do projeto, apontando para blobs (arquivos).
- **Fluxo**:
  - `git add` → adiciona ao _staging_
  - `git commit -m "msg"` → cria snapshot
  - `git commit --amend` → modifica último commit
  - `git push`, `git pull`, `git merge`

### 1.3. Branches

- `git checkout -b <nova>` para criar
- `git merge <branch>` para juntar
- `git push -u origin <branch>` para enviar

## 2. **Ferramentas de Projeto Node.js**

### 2.1. `.nvmrc`

- Especifica versão do Node.js para consistência.

### 2.2. `package.json`

- Define metadados, dependências e scripts do projeto.

## 3. **Next.js x React x React‑DOM**

### 3.1. React e React‑DOM

- **React**: cria interfaces com componentes.
- **React‑DOM**: renderiza no navegador.

### 3.2. Next.js

- Framework sobre React com SSR, SSG, roteamento automático.

## 4. **Protocolos de Rede**

- **HTTP**: transferência de hipertexto
- **FTP**: arquivos
- **SMTP**: e-mails
- **TCP**: confiável
- **UDP**: rápido, sem garantia

## 5. **Arquitetura Cliente‑Servidor / Deploy**

- Cliente requisita, servidor responde (via HTTP).
- `local/main`, `origin/main`, `server/main`
- Deploy gratuito com Vercel.

## 6. **Modelos de Desenvolvimento**

- **Orgânico**: evita feature creep.
- **Impressora 3D**: replica rápido.

## 7. **Produtividade & Organização**

- Organização: “trabalhar pouco, fazer muito”.
- Níveis: individual → grupo → conhecimento → métricas
- Issues = pequenas tarefas, Milestones = metas maiores

### Ambiente de Dev

- VSCode: Settings Sync, EditorConfig, Prettier

## 8. **Crescimento de Ideias**

- Modelo McDonalds: uma ideia gera outras.

## 9. **SLAs & Uptime**

- SLAs preveem descontos se uptime cair.
- Use Status Page para monitorar.
