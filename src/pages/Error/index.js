import Handlebars from 'handlebars'
import { errorPage } from './error.tmpl';

export const Error = ({errorCode, messageToClient}) => Handlebars.compile(errorPage)({errorCode, messageToClient});
