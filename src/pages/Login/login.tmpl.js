import { Card } from '../../components/card';
import { Input } from "../../components/input/index";
import { Button } from "../../components/button/index";

export const login = `
    ${Card({ 
        style: "card",
        title: "Sign in",
        inputs: [
            Input({ style: "input", type: "text", placeholder: "login" }),
            Input({ style: "input", type: "password", placeholder: "password" })
        ],
        buttons: [
            Button({ style: ["button", "buttonPrimary"], title: 'Sign in' }),
            Button({ style: ["button", "buttonSecondary"], title: 'Create account' })
        ]
})}
`
