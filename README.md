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

## Subir banco de dados local

### Qual banco de dados escolher?

1. Escolher o DBMS/SGBD - Data Base Management System
2. Query - Consultar
3. Migrations (Migrações)

---

1. Sistema gerenciador de banco de dados:
   ex: MySQL, PostgresSQL, Oracle Database, MongoDB, Microsoft SQL Server
   Tipos de banco de dados:

- Relacional (SQL) Structured Query Language (Declarativa)
- Não relacional (NoSQL)
  POSTGRES selecionado

2. Query
   ORM Object-Relation Mapping conectar o banco de dados relacionais com o objeto
   pg é o node-postgres que vai ser utilizado para se conectar e fazer as querys

3. Migrations
   Arquivo que instrue uma modificação no Banco de Dados.
   node-pg-migrate para gerenciar as migrates

Virtual Machine: Permite rodar um SO dentro do próprio sistema.
Teoricamente ele gastaria muita memória.

Então foi criado o dock,

Namespaces e cgroups foi utilizado para a criação do docker (namespaces 2002 e cgroups 2007)
Virtualbox foi criado em 2007
Vagrant foi criado em 2010
Docker (PID namespaces) foi criado em 2013

Ex:
Virtual Machine: máquina -> SO -> Virtualizador -> SO virtual 1 e 2 > aplicação e Banco de Dados
Docker: máquina -> SO -> Container Engine -> Aplicação e Banco de Dados

Formato de configuração do docker é o compose.yaml (não é uma linguagem de marcação), parece com python
Dockerfile: precisa ser compilado em uma -> imagem -> que só pode ser executado em um container
A Imagem é uploaded no dockerhub
baixar imagem do postgres

### Como levantar o banco de dados?

criar o arquivo compose.yaml
escrever)
services:
database:
image:
enviroment:
POSTGRES PASSWORD:

rodar o comando docker compose up
psql: é o cli oficial do postgres

sudo docker compose up --detach (roda o docker por fora)
 psql --host=localhost --username=postgres --port=5432 ele não consegue entrar no container do docker, para isso deve-se criar no compose os ports
ports:
-"5432:5432"

agora deve reiniciar o docker: docker compose down ou docker compose up -d --force-recreate

ao alterar a pasta eu devo colocar o caminho dessa maneira:
docker compose --file infra/compose.yaml up
