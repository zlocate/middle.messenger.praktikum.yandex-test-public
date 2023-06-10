import Handlebars from 'handlebars'
import { registration } from './registration.tmpl';

export const Registration = () => Handlebars.compile(registration)({});