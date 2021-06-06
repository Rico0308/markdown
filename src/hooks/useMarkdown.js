import { useState } from 'react'

const initialState = `
This is a paragraph
**This is a bolded text**
> Block Quotes!

# Heading!
## Heaging 2

- List Item 1
- List Item 2
- List Item 3

[Visit my perfil of CodePen](https://codepen.io/rico0308/pens/)

This is a Inline \`<div></div>\`
This is a block of code:

\`\`\`
 let x = 1
 let y = 2
 let z = x * y
\`\`\`

![React](https://goo.gl/Umyytc)

`;

const useMarkdown = () => {

    const [state, setState] = useState({
        text: initialState
    });

    const handleChange = (e) => {
        setState({
            text: e.target.value
        })

    }

    return [
        state,
        handleChange
    ]
}

export default useMarkdown
