

👤 **Gabriel Luiz Porto**

* Github: [@GabrielP0rt0](https://github.com/GabrielP0rt0)
* LinkdIn: [@gabriel luiz porto](https://www.linkedin.com/in/gabriel-luiz-porto-4688411b1/)

---

#### Nesta Página:

* [Projeto](#projeto)
* [Alternativas para aplicação](#aplicacao)
* [Instalando dependências](#dependencias)
* [Inicializando aplicação](init)
* [Iniciando json server](#jsonServer)

<span id="projeto"></span>
## Projeto

A página explorando o framework faz referência ao curso 1 da formação de angular feita pela alura, o projeto consiste em uma página utilizada para a criação de transferência e uma página para exibição do histórico das mesmas. O projeto foi feito em angular e utiliza api Rest através de [Jason Server](#jsonServer).

<span id="aplicacao"></span>
## Alternativas para a aplicação

Ao baixar o código todo, ou (se preferir) abrir diretamente em [Bytebank.App](https://formacao-angular-xi.vercel.app/extrato), deve-se inicializar o [Jason Server](#jsonServer) através da pasta dados encontrada nesta pasta. A pasta dados é a única que deve ser baixada obrigatóriamente para correto funciomaneto da aplicação. Caso prefira baixar o código todo, basta seguir os passos abaixos em [Instalando dependências](dependencias).

<span id="dependencias"></span>
## Instalando dependências

Ao baixar o projeto abra uma console de comandos na pasta raíz e utilize o seguinte comando:

```js
npm install
```

ou 

```js
yarn install
```

<span id="init"></span>
## Inicializando aplicação

Para iniciar a aplicação abra novamente o console de comando na pasta raíz e utilize o comando 

```js
ng s -o
```

Uma página será inicializada no navegador com a aplicação em Angular, para que a aplicação funcione corretamente leia "[Inicializando json server](#jsonServer)"

<span id="jsonServer"></span>
##Inicializando json server

Os dados da minha aplicação utilizam o json server, caso ainda não o tenha instalado abra um console de comando e utilize:
```js
npm install -g json-server
```
Após isso, abra um console de comando dentro da pasta "dados" e utilize:
```js
json-server --watch db.json
```
Não feche esse console de comando enquanto deseja que a aplicação rode. Com o servidor Json rodando e a aplicação frontend (seja pelo link fornecido ou pela aplicação inicializada em sua máquina) a aplicação do Bytebank está pronto para uso!!

