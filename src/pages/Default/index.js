import Handlebars from 'handlebars'
import { defaultPage } from './default.tmpl';

export const Default = () => Handlebars.compile(defaultPage)({
    links: [
        {title: "Login page", href: "/login"},        
        {title: "Registration page", href: "/registration"},
        {title: "Profile page", href: "/profile"},
        {title: "Change Profile page", href: "/changeProfile"},
        {title: "Change Profile Password", href: "/changeProfilePassword"},
        {title: "Error page", href: "/error"},
        {title: "Chat page", href: "/chats"},
    ]
});