# GESTAO-DE-QUALIDADE-DE-SOFTWARE---testes-de-caixa-branca-e-integracao
AVALIAÇÃO UNIDADE II


Questão 1.

Função calcularDistancia

Objetivo: Garantir que a função calcule corretamente a distância entre dois pontos dados em coordenadas latitude e longitude.

    Teste com pontos idênticos: Verificar se a distância entre dois pontos iguais é zero.
    Teste com pontos diferentes: Verificar a distância entre dois pontos com coordenadas diferentes para validar o cálculo da distância.
    

Função verificarMelhorRota

Objetivo: Garantir que a função encontre a rota com a menor distância total para os pedidos.

    Teste com uma única rota e um único pedido: Verificar se a função retorna a única rota disponível.
    Teste com várias rotas e um único pedido: Verificar se a função retorna a rota com a menor distância.
    Teste com várias rotas e vários pedidos: Verificar se a função calcula corretamente a menor distância total considerando todos os pedidos.
    Teste com rotas vazias: Verificar se a função trata corretamente o caso em que não há rotas.
    Teste com pedidos vazios: Verificar se a função trata corretamente o caso em que não há pedidos.


comandos antes de rodar: 

npm test

Questão 2.

Estrutura do Projeto:

    Criação de um novo diretório de projeto chamado api-entregas.
    Adição das pastas src e tests.

Implementação da API:

    src/index.js: Configuração do servidor Express.
    src/routes.js: Definição das rotas da API.
    src/utils.js: Implementação das funções utilitárias (verificarMelhorRota e calcularDistancia).

Testes de Integração:

    tests/api.test.js: Criação de testes de integração para as rotas da API usando jest e supertest.

Execução dos Testes:

    Uso do comando npm test para rodar os testes, que foram todos aprovados.


