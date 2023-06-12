import { Login } from './pages/Login';
import { Default } from './pages/Default';
import { Registration } from './pages/Registration'
import { Profile } from './pages/Profile'
import { Error } from './pages/Error'
import { Chats } from './pages/Chats'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');

    function getPage() {
        switch(window.location.pathname) {
            case '/':
                return Default();
            case '/login':
                return Login();
            case '/registration':
                return Registration();
            case '/chats':
                return Chats();
            case '/profile':
                return Profile({view: true});
            case '/changeProfile':
                return Profile({change: true});
            case '/changeProfilePassword':
                return Profile({changePassword: true});
            case '/changeProfilePassword':
                return Profile({changePassword: true});
            case '/error':
                return Error({errorCode: 500, messageToClient: "Мы уже фиксим"});
            default:
                return Error({errorCode: 404, messageToClient: "Не туда попали"});
        }
    }
    root.innerHTML = getPage();
});
