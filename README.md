## PoC x MVP

Proof of Concept and Minimum viable product
MVP é fazer o mínimo para resolver problemas, não se preocupar em resolver todos os problemas, mas apenas o mínimo.

## Fundação de Aplicação

Por que usar um banco de dados local?
Pois será melhor para quando formos configurar para um banco de dados remoto.

## Overengeneering

Possui muitos impactos, pois o excesso compromete desempenho, segurança e qualidade.

## Arquitetura de software x Organização das pastas

O que é o MVC = Model View Controller
Model = É uma caixa de ferramentas, que consegue fazer algo útil

## Testes Automatizados

### Instalando o test runner

Geralmente utiliza-se o jest
Teste é um código que executa outro código
O teste retorna um report (relatório)
Como instalar o jest?
npm i --save-dev jest@29.6.2
comandos de teste:
jest
jest --watch

### Criando um teste do teste

test("nome do teste",função)
expect é a expectativa

test("nome do teste", () =>{
console.log("Olá")
})

test("espero que 1 seja 1", () =>{
expect(1+1).toBe(2)
})
EXPECT é o que o sistema vai enviar e o TOBE é o EXPECT, o que eu espero, é invertido

TDD (desenvolvimento orientado a testes/test driven development) primeiro coloca o resultado e depois busca a função que isso vai realizar]

tipos de teste do Martin Fowler e Mike Kohn:
unit = teste de elementos individuais
integration = teste dos elementos individuais integrados entre si (serviços)
e2e = teste junto com a interface, simulando o do cliente ( UI)
Dificuldade de fácil para difícil

Atualmente muitos programadores já partem dos testes de integração

## Criar endpoint /status (ponto final)

Definir um endereço da API (Interface de Porgramação de Aplicações)
Tudo é uma interface
API é o filé-mignon das interfaces, utilizado facilmente pelos programas.
A interface de usuário tem como fim o usuário padrão
A interface de API tem como fim o dev (dados que o dev vai utilizar)
function status(response, request){
response.status(200).json({chave:"valor"})
}
curl Client URL
curl link --verbose

O que o curl está fazendo

- Host localhost:3000 was resolved.
- IPv6: ::1
- IPv4: 127.0.0.1
- Trying [::1]:3000...
- Connected to localhost (::1) port 3000
- using HTTP/1.x
  O que foi enviado pelo servidor
  > GET /api/status HTTP/1.1
  > Host: localhost:3000
  > User-Agent: curl/8.13.0
  > Accept: _/_
- Request completely sent off
  reposta do servidor
  < HTTP/1.1 200 OK
  < Content-Type: application/json; charset=utf-8
  < ETag: "15g6frwer6f1h"
  < Content-Length: 55
  < Vary: Accept-Encoding
  < Date: Sat, 05 Jul 2025 14:50:23 GMT
  < Connection: keep-alive
  < Keep-Alive: timeout=5
  <
- Connection #0 to host localhost left intact
  {"chave":"os alunos do curso.dev são acima da média"}%

Treinando curl:

curl -v https://github.com -o /dev/null
retorna as informações de verbose, porém sem o body (-o /dev/null)
curl https://20.201.28.151 --verbose --insecure -o /dev/null (IP obtido, porém não possui o header que eu busco)
curl https://20.201.28.151 --verbose --insecure -o /dev/null --header 'Host:github.com' (Retorno obtido com sucesso, pois agora o ip retornou o head que eu busco)

Breaking Change -> Mudanças que quebram a interface
Non-breaking Change -> Se houver mudança não há quebra da interface
Maneiras de fazer o NBC:

1. URI PATH VERSIONING:
   cria uma nova pasta com uma nova versão, e o cliente que utilizará a API escolhe qual versão da API usar
2. Header Versioning
   Cliente envia o cabeçalho com a versão que quer utilizar.

Métodos HTTP:
get
post
delete
put
patch
