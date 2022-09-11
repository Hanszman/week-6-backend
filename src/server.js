// Declaração de Constantes
const express = require('express'); // Middleware do Node
const mongoose = require('mongoose'); // Biblioteca do Node o MongoDB
const path = require('path'); // Biblioteca do Node para caminhos
const cors = require('cors'); // Módulo que determina quem vai poder acessar a aplicação, sem ele o frontend não consegue acessar o backend estando em um domínio diferente

// Definição do app utilizando o Express
const app = express();

// Definição do cors
app.use(cors());

// Utilizando o Socket.io que serve para ouvir requisições tanto em protocolo http como em websocket
const server = require('http').Server(app);
const io = require('socket.io')(server);
io.on('connection', socket => { // Serve para separar em salas os sockets, para cada usuário ter acesso somente a sua própria box com seus próprios files
    socket.on('connectRoom', box => { // O socket é a representação da conexão do usuário com a parte de realtime do servidor
        socket.join(box); // A partir disso o usuário ficará isolados do restante dos outros usuários que estão na aplicação
    })
})

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.myxkemn.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

// Middleware global para o socket.io
app.use((req, res, next) => {
    req.io = io;
    // O next vai processar o middleware e vai passar pro restante das rotas.
    return next(); // Se não colocar o next, todas as requisições parariam nesse momento do código
});

// Aplicação pode receber body tanto em formato de json como em urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Toda vez que receber uma requisição na rota files, utiliza o static para acessar os arquivos no caminho da pasta tmp
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

// Utilizando arquivo de rotas
app.use(require('./routes'));

// Execução da Aplicação na Porta 3333 utilizando o server do socket.io
server.listen(proccess.env.PORT || 3333);