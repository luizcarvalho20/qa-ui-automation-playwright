# QA UI Automation - Playwright

## Sobre o projeto
Projeto prático de automação de testes de interface com Playwright, com foco na validação de fluxos end-to-end (E2E) em uma aplicação web de e-commerce.

A proposta deste repositório é construir uma base sólida de automação UI com cenários reais, cobrindo fluxos críticos da aplicação, execução cross-browser, geração de relatórios e preparação para evolução com boas práticas e integração contínua.

## Objetivos
- Estruturar um projeto de automação UI com Playwright
- Automatizar fluxos críticos end-to-end
- Validar execuções em diferentes navegadores
- Gerar relatórios HTML de execução
- Organizar evidências das execuções realizadas
- Preparar a base para evolução com reuso, manutenção e CI

## Fluxos automatizados
Atualmente, o projeto cobre os seguintes cenários E2E:

- Login com credenciais válidas
- Adição de produto ao carrinho
- Finalização de checkout com sucesso

## Cenários implementados
- **CT-E2E-001** — Login com credenciais válidas
- **CT-E2E-002** — Adicionar produto ao carrinho com sucesso
- **CT-E2E-003** — Finalizar checkout com sucesso

## Ferramentas utilizadas
- Playwright
- TypeScript
- Node.js
- Git
- GitHub
- VS Code

## Estrutura do projeto
- `.github/` → arquivos de workflow para automação e integração contínua
- `evidencias/` → capturas de tela das execuções e relatórios
- `node_modules/` → dependências instaladas no projeto
- `playwright-report/` → relatório HTML gerado após a execução dos testes
- `test-results/` → artefatos gerados durante as execuções
- `tests/` → arquivos de testes automatizados
  - `login.spec.ts` → cenário de login válido
  - `cart.spec.ts` → cenário de adição de produto ao carrinho
  - `checkout.spec.ts` → cenário de finalização de checkout
- `playwright.config.ts` → arquivo de configuração global do Playwright
- `package.json` → configuração e dependências do projeto Node.js
- `package-lock.json` → lockfile das dependências instaladas
- `.gitignore` → arquivos e pastas ignorados no versionamento

## Instalação
Após clonar o repositório, instale as dependências com:

```bash
npm install
```

Caso necessário, instale também os navegadores usados pelo Playwright:

```bash
npx playwright install
```

## Como executar

### Executar todos os testes
```bash
npx playwright test
```

### Executar um teste específico
```bash
npx playwright test login.spec.ts
npx playwright test cart.spec.ts
npx playwright test checkout.spec.ts
```

### Executar em modo headed
```bash
npx playwright test --headed
```

### Executar em modo UI
```bash
npx playwright test --ui
```

### Abrir o relatório HTML
```bash
npx playwright show-report
```

## Cobertura atual
A suíte atual valida os seguintes comportamentos:

### Login
- acesso à página de login
- preenchimento de credenciais válidas
- autenticação com sucesso
- redirecionamento para a área de produtos

### Carrinho
- login do usuário
- adição de item ao carrinho
- validação do badge de quantidade
- acesso ao carrinho
- validação do produto adicionado

### Checkout
- login do usuário
- adição de item ao carrinho
- início do fluxo de checkout
- preenchimento dos dados obrigatórios
- validação da etapa de revisão
- finalização da compra com sucesso

## Execução validada
Os cenários foram executados com sucesso nos navegadores configurados no Playwright:

- Chromium
- Firefox
- WebKit

Com isso, o projeto já demonstra execução cross-browser de fluxos críticos E2E.

## Evidências
- `evidencias/EV-UI-001-testes-iniciais-html.png`
- `evidencias/EV-UI-002-testes-iniciais-ui.png`
- `evidencias/EV-UI-003-test-login-terminal.png`
- `evidencias/EV-UI-004-test-login-navegador.png`
- `evidencias/EV-UI-005-test-carrinho.png`
- `evidencias/EV-UI-006-test-checkout.png`
- `evidencias/EV-UI-007-tests-login-cart-checkout.png`

## Evoluções previstas
- reduzir repetição com hooks como `beforeEach`
- melhorar organização e legibilidade dos testes
- adicionar cenários negativos de login
- adicionar cenários de remoção de item do carrinho
- evoluir para padrões de reuso como helpers ou Page Objects
- integrar execução automática com GitHub Actions

## Status
Projeto funcional de automação UI com Playwright, já cobrindo fluxos críticos de login, carrinho e checkout com execução cross-browser e geração de relatório HTML.

## Autor
Luiz Felipe Carvalho
