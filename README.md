Início do aprendizado no curso.dev

# Tutorial GIT

## Versionamento de Código

### Centralizado:

SCCS
RCS
CVS
SVN

Ele guarda apenas o diff (Delta Encoding)
Há a reserva do arquivo, por meio do checkout e só uma pessoa pode utilizá-lo.
Isso ocorria para evitar o merge e evitar erros.

### Distribuído:

GIT

Esse controle foi distribuído para várias pessoas, e agora o merge pode ser utilizado de maneira segura.
Merge conflict pode ser resolvido.

Podem ser tiradas várias "fotos" do meu repositório.
Vamos supor que tenho dois arquivos: users.csv e colors.ts
se eu tirar uma "foto" de ambos, então ambos terão um arquivo blob no git, que são a cópia deles.
Agora se eu altero apenas o users.csv e tiro foto, então agora tenho uma "foto" que aponta para o novo blob de users.csv e que aponta para o blob já existente de colors.ts, visto que é a versão mais atualizada dele.
Resumindo, terei sempre uma nova cópia a cada "foto" tirada, sendo que a última foto sempre apontará para a versão mais nova do arquivo.
A foto é um commit.

## Comandos GIT

git log = ver todos commits realizados
git log --stat = situação atual do repositório online comparado com o local
git log --oneline

Estágios do GIT:
Modificado
Staged (escolher quais arquivos adicionar para o commit)
Commit (Comprometer-se)

git add (adicionar mudanças)
git commit -m "msg" (assumir compromissos pelas mudanças e tirar "foto")
git commit --amend (pega os arquivos staged e emenda com o commit anterior)
Os commits são imutáveis
git push (subir mudanças para o repositório git online)
git push -f(subir mudanças para o repositório git online forçando, ao usar o amend) e substituir o git anterior
git pull (puxar dados)

git checkout -b criaemudaparanovabranch
git checkout mudarparabranch
git branch crianovabranch
git merge branchquevaiserjuntadanabranchatual
git push -u origin nomedabranchaserenviada

## Para que serve o arquivo .nvmrc?

O arquivo .nvmrc serve para indicar qual versão do Node.js deve ser usada em um projeto, quando você está usando o NVM (Node Version Manager).

## Para que serve o arquivo package.json

O package.json é o arquivo que define as informações, dependências e scripts de execução de um projeto Node.js.
Ex: dizer que o next vai usar a versão x e o react vai usar a versão y.
Cria-se esse arquivo usando o node package manager, npm -i

## Diferença entre o next e o react e o react-dom

React constrói a interface (é como se fosse os elementos)
react-dom mostra essa interface no navegador,
e Next.js organiza tudo isso em um framework completo e pronto para produção. É como se fosse as rotas;

## O que são protocolos

São instruções que ambos personagens sabem o que devem seguir
HTTP = Hypertext transfer protocol (Documentos com referências para outros documentos)
FTP = File transfer protocol
SMTP = Simple mail transfer protocol
TCP = Informações que devem ser confiáveis e sem erros.
UDP = Informações que precisam ser rápidas e podem ter erros.

## O que fazer para levantar um servidor web?

Podemos utilizar o next, por meio do comando next dev. Foi feito um script no packet.json para levantá-lo.
Criamos o script "dev" que roda para gente o "next dev" e para rodar o script deve-se escrever "npm run dev"
Irá da erro, pois o next usa o file-based routing. Para poder mantê-lo ativo, precisaremos de ao menos uma página, que pode ser feita criando uma page/index.js e uma função. Depois exportá-la.

## Irei upar o que criei na web pelo vercel

Resumindo o que eu fiz até agora:
-Meu projeto irá utilizar javascript, framework react (permitindo a utilização do plugin jsx que possibilita a criação de páginas web de maneira declarativa), next.js para subir o servidor e o vercel para fazer o deploy do site.
