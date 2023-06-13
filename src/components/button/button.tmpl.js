import "./button.scss";

export const button = `
<button class="{{#each style}} {{this}} {{/each}}">
    {{title}}
</button>
`;
