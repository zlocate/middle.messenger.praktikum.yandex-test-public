import Handlebars from 'handlebars'
import { profile } from './profile.tmpl';

export const Profile = ({view, change, changePassword}) => Handlebars.compile(profile)({view, change, changePassword});
