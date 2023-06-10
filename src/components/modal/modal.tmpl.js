import "./modal.scss";
import { Button } from "../button/index";

export const modal = `
<form class={{style}}>
    <div class="modalBlock">
        <h2>{{title}}</h2>

        <div class="modalContent">
            {{#each inputs}}
                {{{this}}}
            {{/each}}
        </div>
       
        <div class="modalFooter">
            {{#each buttons}}
                {{{this}}}
            {{/each}}
            
        </div>
    </div>
</form>
`;