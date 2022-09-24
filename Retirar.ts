import { Mostrar } from './Mostrar';
import PromptSync = require('prompt-sync');


const prompt = PromptSync();


function Retirar(lista) {
    Mostrar
    const posicaoRemover = prompt('O que você deseja retirar da lista? ');
    const posicao = Number(posicaoRemover) -1
    lista.splice(posicao, 1);
}

export {Retirar};