export const defaultPage = `
<nav>
    <ul >
        {{#each links}}
            <li>
                <a href={{this.href}}>
                    {{this.title}}
                </a>
            </li>
        {{/each}}
    </ul>
</nav>
`