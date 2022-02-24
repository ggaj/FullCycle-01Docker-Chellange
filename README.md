# full-cycle-3.0

Este repositório contêm o código-fonte dos desafios propostos durante o curso Full Cycle 3.0.

## Docker

O primeiro módulo apresenta dois desafios.

1. Aplicação Golang para imprimir 'Code.education Rocks!'.
2. Aplicação Node.js servidor Express, para imprimir informações do Banco de Dados (Mysql) e com proxy reverso implementado pelo Nginx.

### Aplicação Golang

Está aplicação deverá mostrar na tela a mensagem "Code.education Rocks!" quando executada. A aplicação está disponível através de uma imagem Docker armazenada no Docker Hub. Para executá-la, basta rodar o comando a seguir:

```bash
    docker run --rm gildoaraujo/codeeducation
```

O código-fonte da aplicação está disponível em [docker/desafio-go](golang/app.go).

### Aplicação Node

Está aplicação deverá listar a mensagem "Full Cycle Rocks!" juntamente com a listagem de nomes cadastrados no banco de dados. Para iniciá-la, basta rodar o comando a seguir:

```bash
    docker-compose up -d
```

O código-fonte da aplicação está disponível em [docker/desafio-node](nodejs/app).
