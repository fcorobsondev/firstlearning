# Guia Completo de Estudos 🚀

## 1. Controle de Versão

### 1.1 Conceitos e Modelos

- **VCS**: rastreia mudanças, permite revert, comparar versões e colaborar.
- **CVCS (SVN/CVS)**: repositório central; arquivos podem ser bloqueados.
- **DVCS (Git)**: cada dev tem cópia completa; trabalho off‑line e independente.

### 1.2 Funcionamento do Git (Snapshots)

- Git registra _snapshots_ (commits) com _blobs_ para cada arquivo.
- Apenas os blobs alterados são armazenados, economizando espaço e aumentando segurança.

### 1.3 Comandos principais

- `git init`, `git clone`, `git status`, `git add`, `git commit -m "msg"`
- `git commit --amend`, `git push`, `git push -f`, `git pull`
- `git branch`, `git checkout`, `git merge`
- `git rebase`, `git cherry-pick`, `git hooks` (avançado)

### 1.4 Melhores práticas com Git

- Commits **pequenos e atômicos**
- Mensagens claras: verbo no imperativo presente.
- Use **branching model** apropriado: feature branches, GitFlow, trunk‑based
- Revisão de código com pull requests
- Proteção de branches sensíveis/com assinatura de commits
- Limpeza de branches obsoletos
- Evitar `.gitignore` mal configurado e não versionar arquivos grandes
- Para dados grandes: use DVC (Data Version Control)

---

## 2. Node.js & NVM

### 2.1 Gerenciamento de versões com NVM

- Use `.nvmrc` com a versão, e `nvm use` ao entrar no projeto
- Declare `"engines": { "node": "18.x" }` em `package.json`

### 2.2 `package.json` – estrutura e melhores práticas

- Separe `dependencies` vs `devDependencies`
- Inclua `package-lock.json` no Git
- Use `"scripts"` para documentar tarefas comuns: `test`, `lint`, `build`
- Use `.npmrc` para configurações específicas

### 2.3 Organização de projeto & boas práticas

```
  src/
    controllers/
    models/
    routes/
  test/
  public/
  .nvmrc
  package.json
```

- Use ESLint seguindo estilos (Airbnb, Google) e pre-commit linting
- Documentação via JSDoc

---

## 3. Frameworks e Testes

### 3.1 React / React-DOM / Next.js

- **React**: criação de componentes UI.
- **React-DOM**: renderiza no navegador.
- **Next.js**: framework React com SSR, SSG e roteamento prontos.

### 3.2 Testes automatizados

- Instale o Jest (`npm i --save-dev jest@29.6.2`).
- Comandos: `jest`, `jest --watch`
- Exemplo de testes:

```js
test("1 + 1 = 2", () => {
  expect(1 + 1).toBe(2);
});
```

### 3.3 TDD

- Escreva primeiro o teste (`expect`) e depois implemente o código correspondente.
- Tipos de teste:
  - **unit**: funções isoladas
  - **integration**: componentes juntos
  - **e2e**: simula comportamento do usuário

---

## 4. Redes e Deploy

### 4.1 Protocolos comuns

- **HTTP** (web), **FTP** (arquivos), **SMTP** (email)
- **TCP** (confiável), **UDP** (rápido, sem garantias de entrega)

### 4.2 Cliente vs Servidor

- Cliente envia requisição HTTP, servidor envia resposta.
- Fluxo comum: `local/main → origin/main (GitHub) → produção`

### 4.3 Deploy

- **Vercel**: deploy automático via integração com GitHub.
- Outras opções: DigitalOcean, Kubernetes, AWS, Docker.

---

## 5. Docker e Banco de Dados

### 5.1 Docker vs VM

- VM: iso geral, pesado.
- Docker: containers leves; usa namespaces, cgroups.

### 5.2 Compose e Dockerfile

```yaml
services:
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: exemplosenha
    ports:
      - "5432:5432"
```

- `docker compose up -d` e `docker compose down`
- Use `docker compose --file infra/compose.yaml up`

#### Dockerfile exemplo:

```Dockerfile
FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```

---

## 6. CI/CD e Deploy Automatizado

### 6.1 Integração com testes & pipelines

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: 18
      - run: npm ci
      - run: npm test
```

### 6.2 Estratégias avançadas

- **Blue/Green** com PM2
- **Rolling updates** via Kubernetes
- **GitOps** com repositório → deploy automático
- **Monitoramento**: logs via Winston

### 6.3 Segurança

- Escaneie vulnerabilidades com **Snyk** integrado ao pipeline

---

## 7. Arquitetura, Organização e Produtividade

- **MVP**: entregue o mínimo viável.
- Evite _overengineering_: prejudica performance e tempo.
- Siga MVC: Model (dados), View (frontend), Controller (lógica).
- Use Issues, Milestones, métricas para organização.
- Ferramentas úteis: EditorConfig, Prettier, Settings Sync.

---

## 8. SLAs / Uptime / Status Page

- SLAs definem penalidades por downtime.
- Mantenha uma **Status Page** pública para informar falhas.
