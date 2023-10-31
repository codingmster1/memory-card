import uniqid from 'uniqid';
import guts from './assets/guts-GA.webp';
import casca from './assets/casca-GA.png';
import griffith from './assets/Griffith_Card_GA.webp';
import zodd from './assets/zodd-fly.png';
import Void from './assets/void.webp';
import slan from './assets/slan.png';
import conrad from './assets/Conrad_Manga.webp';
import count from './assets/count.webp';
import femto from './assets/femto.jpg';
import skullknight from './assets/skull-knight.jpg';

const characters = [
    {
        id: uniqid(),
        name: 'Guts',
        src: guts,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Casca',
        src: casca,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Griffith',
        src: griffith,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Zodd',
        src: zodd,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Void',
        src: Void,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Slan',
        src: slan,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'conrad',
        src: conrad,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Count',
        src: count,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Femto',
        src: femto,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'skull knight',
        src: skullknight,
        clicked: false,
    },
];

export default characters;