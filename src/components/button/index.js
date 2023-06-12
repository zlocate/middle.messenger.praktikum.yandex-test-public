import Handlebars from 'handlebars'
import { button } from './button.tmpl';

export const Button = ({style, title}) => Handlebars.compile(button)({ style, title });
