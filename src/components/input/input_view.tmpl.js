import "./input.scss";

export const inputView = `
<div class="input_view">
    <p>
        {{label}}
    </p>
    <input type={{type}}  value={{value}} {{#if disabled}}disabled={{disabled}}{{/if}}>
</div>
`;