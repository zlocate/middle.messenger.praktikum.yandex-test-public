import Handlebars from 'handlebars'
import { profileInfoView } from './profileInfoView.tmpl';

export const ProfileInfoView = ({ inputs, isView, isChange }) => Handlebars.compile(profileInfoView)({ inputs, isView, isChange });