import goBack from '../../components/assets/goBack.svg';
import emptyAvatar from '../../components/assets/emptyAvatar.svg';
import { ProfileInfoView } from "../../modules/profile_info_view";
import { InputView } from '../../components/input/index';
import "./profile.scss"

export const profile = `
   <div class="profile">
        <button onclick="location.href='/'" class="profile_goBack">
            <img src=${goBack} alt="goBackButton"/>
        </button>

        <section class="profile_mainContainer">
            {{#if view}}
                ${ProfileInfoView({
                    inputs: [
                        InputView({style: "input_view", type: "text", label: "Почта", value: "pochta@yandex.ru", disabled: true}),
                        InputView({style: "input_view", type: "text", label: "Логин", value: "ivanivanov", disabled: true}),
                        InputView({style: "input_view", type: "text", label: "Имя", value: "Имя", disabled: true}),
                        InputView({style: "input_view", type: "text", label: "Фамилия", value: "Фамилия", disabled: true}),
                        InputView({style: "input_view", type: "text", label: "Имя в чате", value: "Иван", disabled: true}),
                        InputView({style: "input_view", type: "tel", label: "Телефон", value: "+79099673030", disabled: true}),
                    ],
                    isView: true,
                    isChange: false
            })}
            {{/if}}
            {{#if change}}
                ${ProfileInfoView({
                    inputs: [
                        InputView({style: "input_view", type: "text", label: "Почта", value: "pochta@yandex.ru", disabled: false}),
                        InputView({style: "input_view", type: "text", label: "Логин", value: "ivanivanov", disabled: false}),
                        InputView({style: "input_view", type: "text", label: "Имя", value: "Имя", disabled: false}),
                        InputView({style: "input_view", type: "text", label: "Фамилия", value: "Фамилия", disabled: false}),
                        InputView({style: "input_view", type: "text", label: "Имя в чате", value: "Иван", disabled: false}),
                        InputView({style: "input_view", type: "tel", label: "Телефон", value: "+79099673030", disabled: false}),
                    ],
                    isView: false,
                    isChange: true
            })}
            {{/if}}

            {{#if changePassword}}
                ${ProfileInfoView({
                    inputs: [
                        InputView({style: "input_view", type: "password", label: "Старый пароль", value: "pochta@yandex.ru", disabled: false}),
                        InputView({style: "input_view", type: "password", label: "Новый пароль", value: "Новый пароль", disabled: false}),
                        InputView({style: "input_view", type: "password", label: "Новый пароль", value: "Повторите новый пароль", disabled: false})
                    ],
                    isView: false,
                    isChange: true
            })}
            {{/if}}
        </section>
   </div>
`