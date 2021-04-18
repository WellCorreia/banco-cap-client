# banco-cap-client
É um client desenvolvido como parte de um desafio proposto pela CAPGEMINI utilizando como base o VueJS.

## Estrutura do Projeto

```
banco-cap-client
└───public                                        # Public
└───src
     └───assets                                   # Assets
     └───components                               # Componentes gerais (NavBar, SideBar, Footer...)
     └───features                                 # Contem as features trabalhadas ou que serão trabalhadas
            └───operacao                          # Feature que será trabalhada
                  └───index.js                    # Index para agrupamento das routes, services e store
                  └───routes.js                   # Routes para cada página
                  └───services.js                 # Servicos utilizados pelas páginas
                  └───Operacao.vue                #Página destinada as operação de deposito e saque
                  └───Saldo.vue                   #Página para consulta de saldo
                  └───store                       # Contem as definições de mutation, action e state
                        └───actions.js            # Métodos de requisição
                        └───index.js              # Junção e exportação do store
                        └───mutation-types.js     # Definição dos tipos das mutations
                        └───mutations.js          # Definição das mutations
                        └───state.js              # Inicialização dos estados
            └───conta                             # Testes das páginas da feature
                  └───index.js                    # Index para agrupamento das routes, services e store
                  └───routes.js                   # Routes para cada página
                  └───services.js                 # Servicos utilizados pelas páginas
                  └───Conta.vue                   # Página de criação de conta
                  └───Saldo.vue                   # Página para consulta de saldo
                  └───store                       # Contem as definições de mutation, action e state
                        └───actions.js            # Métodos de requisição
                        └───index.js              # Junção e exportação do store
                        └───mutation-types.js     # Definição dos tipos das mutations
                        └───mutations.js          # Definição das mutations
                        └───state.js              # Inicialização dos estados
    └───http                                      # Configuração de comunicação com a API
          └───index.js                            # Configuração de acesso para a API
          └───services.js                         # Configuração dos serviços que usão da comunicação
    └───plugins                                   # Plugins
    └───router                                    # Contém definição e verificação de rotas
          └───beforeEach.js                       # Gerenciador de páginas
          └───index.js                            # Configurador das routes 
          └───services.js                         # Agrupador dos serviços que irão utilizar
    └───store                                     # Definição de acesso a feature
    └───App.vue                                   # Base da interface
    └───main.js                                   # Main
    └───.browserslistrc
    └───.editorconfig 
    └───.eslintrc.js 
    └───.gitignore 
    └───babel.config.js 
    └───LICENSE 
    └───package.json 
    └───README.md
    └───vue.config.js
    └───yarn.lock
    
```
## Decisão da Estrutura Utilizada

A decisão de utilizar dessa estrutura é pela simplicidade em seu desenvolvimento após a configuração do mesmo. Implementado com a utilização do VueX para o padrão de gestão de estado foi possível centralizar todos os componentes da aplicação de forma que só é possivel alterar um estado com regras especificas dos mesmos.

### Instalação
Após o download ou clonagem do repositório é necessário rodar os seguintes comando:

Para a instalação dos pacotes deverá ser utilizado um dos comandos:
```bash
$ yarn install
```
 ou
 
 ```bash
$ npm install
```
 
# Execução

Para executar o projeto é necessário apenas está na pasta raiz e executar um dos comandos:

```bash
$ yarn serve
```
 ou
 
 ```bash
$ npm run serve
```

A aplicação iniciará na porta 8080.

