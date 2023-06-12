import "./card.scss";

export const card = `
<form class={{style}}>
    <div class="cardBlock">
        <h2>{{title}}</h2>

        <div class="cardContent">
            {{#each inputs}}
                {{{this}}}
            {{/each}}
        </div>
       
        <div class="cardFooter">
            {{#each buttons}}
                {{{this}}}
            {{/each}}
            
        </div>
    </div>
</form>
`;
