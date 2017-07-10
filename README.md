
# conversation-nodejs
Projeto exemplo em NodeJS usando Watson Conversation

# Instalação e configuração

## Clone e instale as dependencias
```
git clone https://github.com/hackatruck/conversation-nodejs.git
cd conversation-nodejs
npm install
```

## Configure as credenciais do serviço Watson Conversation

1. Acesse [bluemix.net](bluemix.net)
2. Crie uma instância do serviço Waatson Conversation
3. Copie as credenciais do serviço (username e password) para o arquivo config.js

## Crie um novo workspace

1. Acesse o editor do serviço conversation em [https://www.ibmwatsonconversation.com](https://www.ibmwatsonconversation.com)
2. Crie um novo workspace ou importe o workspace de exemplo no arquivo workspace.json
3. Copie o workspace_id para o arquivo config.js


# Execute a aplicação
Execute a aplicação com o comando

    node app.js
