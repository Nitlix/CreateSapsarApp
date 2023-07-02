import { div, h1, h2, p } from "sapsar/base"

import useCSS from "sapsar/use/useCSS"
import activeCSS from "sapsar/active/activeCSS"

import activeRender from "sapsar/active/activeRender"

useCSS("exampleComponent.css", "exampleComponent")



export default function(build){
    activeRender(
        async ()=>{
            //Just sleep for 500ms to simulate a slow load
            await new Promise(resolve => setTimeout(resolve, 500));
            return "Actually loaded!"
        }, 
        "#updateMe",
        null,
        build
    )
    

    return(
        div(
            h1(
                "This is a box!"
            ),
            h2(
                "Which is an example of a component...",
                {
                    "id": "updateMe"
                }
            ),
            p(
                `The current time is: ${new Date().toLocaleTimeString()}`
            ),

            {
                class: "exampleComponent"
            },

            activeCSS("exampleComponent")
        )
    )
}