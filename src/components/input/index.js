import Handlebars from 'handlebars'
import { inputView } from './input_view.tmpl';
import { input } from './input.tmpl';

export const Input = ({style, type, placeholder}) => Handlebars.compile(input)({ style, type, placeholder });
export const InputView = ({style, type, label, value, disabled}) => Handlebars.compile(inputView)({ style, type, label, value, disabled });