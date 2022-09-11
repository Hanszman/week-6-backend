// Declaração de Constantes
const multer = require('multer'); // Biblioteca para gerencia de armazenamento de arquivos
const path = require('path'); // Biblioteca do Node para caminhos
const crypto = require('crypto'); // Biblioteca do Node para gerar hashes ou criptografias

// Exportação
module.exports = {
    // Destino onde serão armazenados os arquivos (pasta temporária)
    dest: path.resolve(__dirname, '..', '..', 'tmp'), // O resolve irá padronizar a escrita dos caminhos dentro do Node para cada ambiente diferente. Ex: Windows, Linux
    storage: multer.diskStorage({ // Disco onde serão armazenados os arquivos
        destination: (req, file, cb) => { // Destino do arquivo
            cb(null, path.resolve(__dirname, '..', '..', 'tmp')); // Função de callback: primeiro parâmetro é o de erro, segundo parâmetro é o caminho
        },
        filename: (req, file, cb) => { // Nome único para o arquivo
            crypto.randomBytes(16, (err, hase) => { // 16 bytes de caracteres aleatórios, depois um callback
                if (err) cb(err); // Se der erro, envio de erro no callback

                file.key = `${hash.toString('hex')}-${file.originalname}`; // hash-nomeunicodoarquivo.extensão
                
                cb(null, file.key); // Calback caso não der erro
            })
        }
    })
};