import { Component, OnInit } from '@angular/core';

const EMOJIS = [
    '>.<',
    'o.o',
    'UnU',
    'O.o',
    'o.O',
    'O.O',
    '>n<',
    ' ° ͜ʖ °',
    '¯\\_(ツ)_/¯',
    '◉_◉',
    '7.7',
    '🤨',
    '😫',
    '🙃',
    '😖',
];

const MESSAGES = [
    '¿Cómo es que te perdiste?',
    'Aquí no está lo que buscas.',
    'Los pollitos se fueron a otro lado.',
    'No, no intentes cambiar las notas, así no funciona.',
    'Cambiar la URL sólo hará que te salga otro numerito arriba.',
    'Pervertido, deja de toquetear la URL.',
    'Buena suerte regresando donde estabas.',
    '¿Te pido un taxi para regresar?',
    'Ya entendimos, querías ver si eras Hackerman, lo entiendo.',
    'Siempre puedes visitar Google para salir de aquí.',
];

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
    emoji;
    message;

    constructor() {
        const emoNumber = Math.round(Math.random() * (EMOJIS.length - 1));
        this.emoji = EMOJIS[emoNumber];

        const messNumber = Math.round(Math.random() * (MESSAGES.length - 1));
        this.message = MESSAGES[messNumber];
    }

    ngOnInit() {
        return;
    }
}
