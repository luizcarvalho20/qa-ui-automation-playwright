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
Atualmente o projeto cobre fluxos críticos E2E da aplicação SauceDemo, incluindo:

- Login com credenciais válidas
- Adição de produto ao carrinho com sucesso
- Finalização de checkout com sucesso
- Validação de erro ao tentar continuar o checkout sem preencher os campos obrigatórios

## Cenários implementados
- **CT-E2E-001** — Login com credenciais válidas
- **CT-E2E-002** — Adicionar produto ao carrinho com sucesso
- **CT-E2E-003** — Finalizar checkout com sucesso
- **CT-E2E-004** — Exibir erro ao continuar checkout sem preencher dados obrigatórios

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
- `fixtures/` → massa de dados centralizada para os testes
  - `testData.ts` → credenciais, dados de checkout e dados auxiliares de teste
- `pages/` → Page Objects com ações e elementos reutilizáveis da aplicação
  - `LoginPage.ts` → ações da tela de login
  - `InventoryPage.ts` → ações da tela de produtos
  - `CartPage.ts` → ações da tela de carrinho
  - `CheckoutPage.ts` → ações da tela de checkout
- `playwright-report/` → relatório HTML gerado após a execução dos testes
- `test-results/` → artefatos gerados durante as execuções
- `tests/` → arquivos de testes automatizados
  - `login.spec.ts` → cenário de login válido
  - `cart.spec.ts` → cenário de adição de produto ao carrinho
  - `checkout.spec.ts` → cenários de checkout positivo e negativo
- `playwright.config.ts` → arquivo de configuração global do Playwright
- `package.json` → configuração e dependências do projeto Node.js
- `package-lock.json` → lockfile das dependências instaladas
- `.gitignore` → arquivos e pastas ignorados no versionamento

## Boas práticas adotadas
Durante a evolução do projeto, a estrutura foi refatorada para melhorar legibilidade, reutilização e manutenção dos testes automatizados.

Práticas adotadas:
- Separação dos testes por fluxo funcional
- Uso de locators estáveis com `data-test`
- Centralização de dados de teste em arquivo dedicado
- Reutilização de ações por meio de Page Objects
- Redução de duplicação de código
- Organização do projeto para facilitar escalabilidade

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
npx playwright test tests/login.spec.ts
npx playwright test tests/cart.spec.ts
npx playwright test tests/checkout.spec.ts
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
- validação de fluxo negativo ao tentar continuar sem preencher os campos obrigatórios

## Execução validada
Os cenários foram executados com sucesso nos navegadores configurados no Playwright:

- Chromium
- Firefox
- WebKit

Com isso, o projeto demonstra execução cross-browser de fluxos críticos E2E.

## Evidências
- `evidencias/EV-UI-001-testes-iniciais-html.png`
- `evidencias/EV-UI-002-testes-iniciais-ui.png`
- `evidencias/EV-UI-003-test-login-terminal.png`
- `evidencias/EV-UI-004-test-login-navegador.png`
- `evidencias/EV-UI-005-test-carrinho.png`
- `evidencias/EV-UI-006-test-checkout.png`
- `evidencias/EV-UI-007-tests-login-cart-checkout.png`
- `evidencias/EV-UI-008-test-checkout-negativo-campos-obrigatorios.png`

## Evoluções previstas
- adicionar cenário de remoção de item do carrinho
- adicionar cenários negativos de login
- ampliar cobertura de validações no checkout
- integrar execução automática com GitHub Actions
- evoluir a suíte com novas camadas de reuso conforme o projeto crescer

## Status
Projeto funcional de automação UI com Playwright, cobrindo fluxos críticos de login, carrinho e checkout com execução cross-browser, Page Objects, dados centralizados e geração de relatório HTML.

## Autor
Luiz Felipe Carvalho
