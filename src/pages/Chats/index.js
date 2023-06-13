import Handlebars from 'handlebars'
import { chats } from './chats.tmpl';

export const Chats = () => Handlebars.compile(chats)({});
