import { div, h1, h2, p } from "sapsar/base"

import useCSS from "sapsar/use/useCSS"
import useLeveledCSS from "sapsar/use/useLeveledCSS"

useCSS("exampleComponent.css", "exampleComponent")


export default function(){
    return(
        div(
            h1(
                "This is a box!"
            ),
            h2(
                "Which is an example of a component..."
            ),
            p(
                `The current time is: ${new Date().toLocaleTimeString()}`
            ),

            {
                class: "exampleComponent"
            },

            useLeveledCSS("exampleComponent")
        )
    )
}