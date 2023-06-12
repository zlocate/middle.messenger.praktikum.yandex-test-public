import Handlebars from 'handlebars'
import { login } from './login.tmpl';

export const Login = () => Handlebars.compile(login)({});
