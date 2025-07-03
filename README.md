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

## Client Server

local/main (diretório local)
origin/main (diretório no github/git)
server/main (diretório lançado na internet/deploy)

Cliente requisita, servidor responde a requisição. Servidor pode fazer requisição para outro servidor. É importante ter esse plano mental, usando o protocolo HTTP em cima do TCP/IP.
Deploy = Depositar, antigamente eles eram enviados para o servidor por meio de FTP

## Como fazer o lançamento do site de maneira gratuita?

Utilizar o vercel, importar o repositório do GIT e fazer o deploy. Ele realizará todo o processo necessário.

## Modelos "orgânico" e "impressora 3d"

Quando algo for criado pela primeira vez, então ela deve ser feita de maneira orgânica.
Vantagens:
Evitar over engeneering e feature creep (projeto com muito recurso que mais atrapalha do que ajuda)

O modelo impressora 3d é utilizado para coisas que já estamos habituados, pois ele é mais rápido.

## Moral (confiança) e prática

a man's trash could be a other man's treasure
organização de tarefas: trabalhar pouco / fazer muito /

## Níveis de organização

Nível 1: Ser lembrado individualmente.
Nível 2: Ser lembrado em grupo.
Nível 3: Expandir o conhecimento.
Nível 4: Gerar métricas
Ideia de métrica: Total de tarefas da semana/ quantas concluídas e porcentagem da conclusão

Issues: pequenas pedras
Milestones: grandes pedras

Configuração do ambiente do trabalho:
Settings Sync do VS (gitHub)
Configurar EditorConfig (definir true, [*] ident style_space e identy_size 2) SERVE PARA ANTES
Configurar o Prettier (npm install prettier -D), envia para o devdependencies SERVE PARA OS ANTERIORES E ATUAL QUE SÃO SALVOS
prettier --check .
prettier --write .
Instalar o prettier extensao, definir o formatter padrao como o prettier, colocar formatação no save, remover o autosave
