
import "./error.scss"

export const errorPage = `
<div class="error_page">
    <p class="error_page_code">{{errorCode}}</p>
    <p class="error_page_message">{{messageToClient}}</p>
    <a href="/chats">Назад к чатам</a>
</div>
`
