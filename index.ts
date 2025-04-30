import { Instrumento } from "./instrumento";
import { Violin } from "./violin";
import { Piano } from "./piano";
import { Flauta } from "./flauta";
import { Orquesta } from "./orquesta";
const flauta1 = new Flauta("Flauta","Traversa", "metal");
const violin1 = new Violin("violin", "stradivarius",4);
const piano1 = new Piano("Piano","Piano de Cola", 88);

const orquesta = new Orquesta();
orquesta.setInstrumento(flauta1);
orquesta.setInstrumento(violin1);
orquesta.setInstrumento(piano1);

orquesta.ejecutarOrquesta();
piano1.afinar();
