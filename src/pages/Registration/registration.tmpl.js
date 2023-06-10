import { Modal } from '../../components/modal';
import { Input } from "../../components/input/index";
import { Button } from "../../components/button/index";

export const registration = `
${Modal({ 
    style: 'modal',
    title: 'Registration',
    inputs: [
        Input({ style: "input", type: "email", placeholder: "email" }),
        Input({ style: "input", type: "text", placeholder: "login" }),
        Input({ style: "input", type: "text", placeholder: "first_name" }),
        Input({ style: "input", type: "text", placeholder: "second_name" }),
        Input({ style: "input", type: "tel", placeholder: "phone" }),
        Input({ style: "input", type: "password", placeholder: "password" }),
        Input({ style: "input", type: "password", placeholder: "password again" })
    ],
    buttons: [
        Button({ style: ["button", "buttonPrimary"], title: 'Create account' }),
        Button({ style: ["button", "buttonSecondary"], title: 'Sign in' })
    ]
})}
`