import "./profileInfoView.scss";
import emptyAvatar from '../../components/assets/emptyAvatar.svg';
import { Button } from "../../components/button/index"


export const profileInfoView = `
<div class="profile_avatar">
    <img src=${emptyAvatar} alt="emptyAvatar"/>
</div>
{{#if view}}
    <p class="profile_dispalyName">Ivan</p>
{{/if}}
<div class="profile_info">

    <div class="profile_info_view">
        {{#each inputs}}
            {{{this}}}
        {{/each}}
    </div>

</div>

{{#if isView}}
    <div class="profile_changeData">
        <p>Изменить данные</p>
        <p>Изменить пароль</p>
    </div>

    <div class="profile_out">
        <a href="/">Выйти</a>
    </div>
{{/if}}

{{#if isChange}}
    <div class="profile_save">
        ${Button({ style: ["button", "buttonPrimary"], title: 'Save' })}
    </div>
{{/if}}
`;