Início do aprendizado no curso.dev

## Comandos git

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

React constrói a interface,
react-dom mostra essa interface no navegador,
e Next.js organiza tudo isso em um framework completo e pronto para produção.

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
