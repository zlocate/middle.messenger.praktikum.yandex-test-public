import Handlebars from 'handlebars'
import { card } from './card.tmpl';

export const Card = ({style, title, inputs, buttons }) => Handlebars.compile(card)({ style, title, inputs, buttons });
