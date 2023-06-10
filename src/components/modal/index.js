import Handlebars from 'handlebars'
import { modal } from './modal.tmpl';

export const Modal = ({style, title, inputs, buttons }) => Handlebars.compile(modal)({ style, title, inputs, buttons });