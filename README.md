# QA UI Automation - Playwright

## Sobre o projeto
Projeto prático de automação de testes de interface com Playwright, com foco na preparação de um framework inicial para testes end-to-end (E2E) em aplicações web.

A proposta deste repositório é servir como base para evolução de cenários automatizados, aplicando boas práticas de organização, execução local e futura integração contínua.

## Objetivos
- Estruturar um projeto de automação UI com Playwright
- Configurar o ambiente inicial para testes E2E
- Validar a execução do framework em diferentes navegadores
- Gerar relatórios de execução em HTML
- Preparar a base para evolução de cenários reais de teste

## Ferramentas utilizadas
- Playwright
- TypeScript
- Node.js
- Git
- GitHub
- VS Code

## Estrutura do projeto
- `.github/` → workflow de CI gerado no setup inicial
- `evidencias/` → capturas de tela das execuções realizadas
- `node_modules/` → dependências instaladas no projeto
- `playwright-report/` → relatório HTML gerado após execução dos testes
- `test-results/` → artefatos de execução dos testes
- `tests/` → arquivos de testes automatizados
- `playwright.config.ts` → arquivo de configuração do Playwright
- `package.json` → configuração do projeto Node.js
- `package-lock.json` → versionamento das dependências instaladas
- `.gitignore` → arquivos e pastas ignorados no versionamento

## Instalação
Após clonar o repositório, instale as dependências com:

```bash
npm install
```

## Como executar
### Executar todos os testes
```bash
npx playwright test
```

### Abrir o relatório HTML
```bash
npx playwright show-report
```

### Executar em modo UI
```bash
npx playwright test --ui
```

## Resultado inicial
O projeto foi configurado com sucesso e a suíte inicial do Playwright foi executada com aprovação total dos testes de exemplo.

Resumo da execução inicial:
- 6 testes executados
- 6 testes aprovados
- Execução validada com sucesso
- Relatório HTML gerado
- Modo UI validado

## Evidências
- `evidencias/EV-UI-001-testes-iniciais-html.png`
- `evidencias/EV-UI-002-testes-iniciais-ui.png`

## Próximos passos
- Substituir o teste de exemplo por cenários reais
- Estruturar melhor a organização dos testes
- Implementar automação de fluxos críticos de interface
- Evoluir o projeto com boas práticas de manutenção e reuso

## Status
Framework inicial configurado e pronto para evolução dos testes automatizados de interface com Playwright.

## Autor
Luiz Felipe Carvalho