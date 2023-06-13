import useCSS from "sapsar/use/useCSS"
import reportCSS from "sapsar/use/reportCSS"

import useHead from "sapsar/use/useHead"
import title from "sapsar/base"


useCSS([["global.css"]])
reportCSS("*", ["global"])


useHead(
    '*', 
    Combine(
        title(
            "Sapsar"
        )
    )
)

export default async function Layout(content, data, page){
    return (
        content
    )
}