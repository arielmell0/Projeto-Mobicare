# API Tarefas - Ariel Oliveira de Mello
API que consiste em um CRUD de tarefas para o desafio da Mobi+Akross

## Pré requisitos para rodar a API
Você deve ter o [MySQL](https://www.mysql.com/downloads/) e o [NodeJS](https://nodejs.org/en/download/) instalados em sua máquina

## Executando a API
Você deve instalar as dependências primeiramente para poder rodar o nosso servidor.
````
$ npm i
````
Após instaladas as dependências é só executar o nosso servidor
````
$ npm start
````

## Modelo de dados
Você pode utilizar o [Insomnia](https://insomnia.rest/download) para testar as requisições

| Rota  |  Método  | Dados Body
| ------------------- | ------------------- | ------- |
|  /tarefas |  GET |  |
|  /tarefa/id |  GET |  |
|  /tarefas |  POST | "nome":String, "autor":String, "conteudo": String |
|  /tarefa/id |  PATCH | "nome":String, "autor":String, "conteudo": String |
|  /tarefa/id |  DELETE |  |
Exemplo de criação de tarefa na rota /tarefas com o método POST
````
{
	"nome": "Escrever poemas",
	"autor": "Machado de Assis",
	"conteudo": "Escrever um poema sobre aquela linda goiaba"
}
````