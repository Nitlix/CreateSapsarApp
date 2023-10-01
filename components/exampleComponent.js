import { div, h1, h2, p } from "sapsar/base"

import useCSS from "sapsar/use/useCSS"
import ActiveCSS from "sapsar/active/ActiveCSS"

import ActiveMultiRender from "sapsar/active/ActiveMultiRender"

useCSS("exampleComponent.css", "exampleComponent")



export default function(build){
    ActiveMultiRender(
        async ()=>{
            //Just sleep for 500ms to simulate a slow load
            await new Promise(resolve => setTimeout(resolve, 500));
            return {
                "#h1": `This isn't a perfect box! ${build}`,
                "#updateMe": "Updated after 500ms!",
            }
        }, 
        null,
        build
    )
    

    return(
        div(
            h1(
                "This is a box!",
                {
                    id: "h1"
                }
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

            ActiveCSS("exampleComponent")
        )
    )
}