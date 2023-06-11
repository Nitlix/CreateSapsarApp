import { meta, title } from "sapsar/base"

import useCSS from "sapsar/use/useCSS"
import reportCSS from "sapsar/use/reportCSS"
import useHead from "sapsar/use/useHead"

import Combine from "sapsar/basic/Combine"


useCSS([["flame.css"], ["global.css"]])
reportCSS("*", ["global"])

useHead('*', 
    Combine(
        title("Sapsar"),
        meta({
            name: "description",
            content: "Sapsar is a lightspeed web framework designed for dynamically rendered pages using components.s"
        })
    )
)

export default async function Layout(content, data, page){
    return (
        content
    )
}