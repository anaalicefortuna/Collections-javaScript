import PromptSync = require('prompt-sync');
import { Adicionar } from './Adicionar';
import { Retirar } from './Retirar';
import { Menu } from './Menu';
import { Mostrar } from './Mostrar';


const prompt = PromptSync();
const lista: string[] = [];
let opcao = 0;

do {
    Menu();
    opcao = Number(prompt('Selecione uma das opções: '));

    switch (opcao) {
        case 1:
            Adicionar(lista);
            break;
        case 2:
            Retirar(lista);
            break;
        case 3:
            Mostrar(lista);
            Retirar(lista);
            Adicionar(lista);
            break;
        case 4:
            Mostrar(lista);
            break;
        case 5:
            console.log('Programa finalizado');
            break;
    }
} while (opcao != 5);