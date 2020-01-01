# Boilerplate

## BUILD

[![CircleCI](https://circleci.com/gh/mariobrusarosco/webpack-boilerplate/tree/master.svg?style=svg)](https://circleci.com/gh/mariobrusarosco/webpack-boilerplate/tree/master)

[![Build Status](https://travis-ci.com/mariobrusarosco/webpack-boilerplate.svg?token=PA7NZ9iXiX1dfpxMANEu&branch=master)](https://travis-ci.com/mariobrusarosco/webpack-boilerplate)

## INSTALAÇÃO

Comando:
```sh
$ yarn 
```

## Como rodar localmente

Comando:

```sh
$ yarn dev-front
```
O projeto rodará na porta `8080` --> `localhost:8080`

----
<br/>

## Como rodar os testes

> ### TESTES UNITÁRIOS

```sh
$ yarn unit-test
```

> ### TESTES UNITÁRIOS,  OUVINDO MODIFICAÇÕES

```sh
$ yarn unit-test:watch
```

> ### TESTES END-TO-END

#### Esses testes utilizam: [Cypress](https://docs.cypress.io)

```sh
$ yarn e2e-prod
```

> ### TESTES END-TO-END,  OUVINDO MODIFICAÇÕES  ``` em localhost:8080 ```

```sh
$ yarn e2e-dev
```

#### Esses testes utilizam: [Cypress](https://docs.cypress.io)
Esse comando abrirá o utilitário do  ```Cypress ``` em sua máquina. 

----
<br/>

## Como fazer o deploy

```sh
$ yarn prod-front
```

> O resultado estará dentro de uma pasta ```/dist``` no nĩvel raiz do projeto

----
<br/>

## Como servir o deploy

```sh
$ yarn server
```

> O resultado do ```deploy``` será servido ```localhost:5000```

----
<br/><br/>

## Features
---

### Performance
  * Você pode usar imports dinâmicos: ```import()```
  * O ```deploy``` gera os assets em ```gzip``` e ```brotli``` (.gz & .br)
  * ```LazyLoading``` das imagens. [Explicação](#LAZY-LOADING)
  * Code Splitting and React Suspense <br/>
    > Arquivos que nâo serão utilizados no load inicial da página são separados em novos chunks: Via System.import() ou somente import() 

    > Códigos específicos das rotas serâo carregados em chunks separados, somente quando a rota for acessada!

---

### Estrutura
  * Você pode usar caminhos relativos considerando o diretório inicial sendo o ```src```
    ``` 
    import YourHelper from 'utils/YourHelper'

    ```
    
    Ao invés de:
    ``` 
    import YourHelper from '../../../YourHelper'

  * Favicons

  > A partir de um único ícone, a build irá criar diversas versões da favicons para vários navegadores

  * Manifesto

  > É possível configurar propriedas de PWA dentro de um ```manifest.json```
---

### Workflow

  * ```Prettier``` - [Configuração](#Configurar-Prettier). Será rodado em todos os arquivos comitados 
  * ```ES Lint``` e ```Style Lint```. Serão rodados em todos os arquivos comitados
  * Ações trigadas em comandos do GIT (Hooks - via Husky ou Lint Staged) - [Configuração](#Configurar-Ações-trigadas-em-comandos-do-GIT)
---

### Testes
  * Lugares onde você pode rodar os testes: 
    * Antes de cada  `git push` (ou outro comando do GIT)
    * No `CircleCI` - [Configuração](#Configurar-CircleCI) 
    * No `Travis CI` - [Configuração](#Configurar-Travis-CI)
---

## CI
  * Circle CI
  * Travis

---

### CSS
  * CSS Modules
  * CSS Puro
  * CSS Custom Properties (com Fallback)
  * SCSS
  * SCSS partials podem ficar disponíveis 'Globalmente', podendo ser acessados por qualquer arquivo .scss
    >  [Adicionar novo Partial](#Adicionar-Novo-Partial)

  * Fontes próprias podem ser hospedadas no projeto. No caso de fontes que nâo estejam no Google Fonts
    >  [Adicionar Fonte](#Adicionar-Nova-Fonte)
  * Suport para lint de CSS (StyleLint). [Configuração](#Configurar-StyleLint). <br/><br/> Rodará automaticamente em 'development', mas poderá ser rodado em separado com:
    ```bash
      $ yarn stylelint
    ``` 
---

### Javascript
  * Hot Module Replacement
  * Babel - [Configuração](#Configurar-Babel) 
  * React Support
  * Suport para lint de JS (eslint). [Configuração](#Configurar-Eslint). <br/><br/> Rodará automaticamente em 'development', mas poderá ser rodado em separado com:
    ```bash
      $ yarn eslint
    ``` 
---

### CONFIGURAÇÕES GLOBAIS DO PROJETO

Você pode definir ```variáveis``` e ```constantes``` que ficarão disponíveis em qualquer parte do projeto. Você acessa através da ```constante``` : 

Exemplo dessa constante: ```APP```

```js
{
  API: {
    API_ROOT: "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/"
  },
  APP_NAME: "Boilerplate",
  E2E: {
    HEADER: "araDk_lKOpq"
    HOME: "AD4_sdrpaaegp"
  },
  VERSION: "0.0.1"
}
```

Para configurar: Dentro da pasta ```config``` (no nível raiz) você pode setar suas informações de acordo com o ambiente desejado:


Caso você precise chamar um endpoint, mas ele será diferente para três ambientes diferentes ```local```, ```development``` e ```production```:

> no arquivo ```config/local.js```
```js
{
  API: {
    API_ROOT: "localhost:8080/some-address.com/"
  },
}
```

> no arquivo ```config/development.js```
```js
{
  API: {
    API_ROOT: "http://dev.some-address.com/"
  },
}
```

> no arquivo ```config/production.js```
```js
{
  API: {
    API_ROOT: "http://prod.some-address.com/"
  },
}
```

Caso esse endpoint, seja o mesmo nos três ambientes, você pode setá-lo somente em:

>  ```config/common/index.js```
```js
{
  API: {
    API_ROOT: "http://common.some-address.com/"
  },
}
```


Nesse útlimo caso, não importa o ambiente... ```API_ROOT``` sempre terá o valor ```http://common.some-address.com/```

---

### LAZY LOADING

Quando esse ```util``` é inicializado no código, ele cria um objeto que mapeia o suporte a ```Lazy Load``` mais apropriado para a aplicação

```js
{
  native: false,
  modern: true,
  legacy: false
}
```

A partir daí, um ```chunk``` específico é carregado e as imagens passarão a ser carregadas conforme estiverem no ```viewport```

* ```legacy```: Suporte para navegadores antigos
  > Utiliza eventos nativos e personalizados para analizar as imagens presentes no DOM e identificar quais ainda precisam ser carregadas
* ```modern```: Suporte para navegagores modernos com  ```IntersectionObserver API```
* ```native```: Suporte para ```Native LazyLoading```
  > Verifica a propriedade ```loading``` no ```prototype``` do construtor ```HTMLImageElement``` Com essa flag ativa, o componente de Imagem seta o atributo ```loading``` como ```lazy```.  Fica a cargo do browser analizar qual o melhor momento para carregar a imagem. Hoje, o cálculo é hardcoded e considera:
    * Se a tag é ```<img>``` ou ```<iframe>``` e a ```velocidade``` da conexão do usuário! 

---
### CONFIGURAÇÕES

### Adicionar Novo Partial

> ```webpack/loaders/development``` ou  ```webpack/loaders/production```
> 
```js
{
  loader: 'sass-loader',
  options: {
    data: `
      @import 'variables';
      @import 'functions_mixins/media-query';
      @import 'sua-pasta/nome-do-seu-partial';
    `,
    includePaths: ['./src/styles']
  }
}

```

### Adicionar Nova Fonte

> Insira sua font aqui: ```assets/fonts/``` <br/>
> Crie sua font-face rule em:  ```assets/fonts/fonts.css```

### Configurar StyleLint

> Em ```.stylelintrc``` (no nível raiz do projeto)

### Configurar Eslint

> Em ```.eslintrc``` (no nível raiz do projeto)

### Configurar CircleCI

> Em ```.circleci/config.yml```

### Configurar Travis CI

> Em ```travis.yml``` (no nível raiz)

### Configurar Prettier
> Em ```.prettierrc```   (no nível raiz do projeto
> Em ```.prettierignore```  (no nível raiz do projeto) (para aquivos ignorados)

### Configurar Babel

> Em ```babelrc```  (no nível raiz do projeto

### Configurar Jest

> Em ```.jest.config.js```  (no nível raiz do projeto


### Configurar Ações trigadas em comandos do GIT

> Em ```.package.json```

``` json
  "husky": {
    "hooks": {
      "pre-commit": "seu npm script",
      "pre-push": "seu npm script"
    }
  },
```


