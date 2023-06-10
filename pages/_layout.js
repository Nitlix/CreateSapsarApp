


import { meta, title } from "sapsar/base"
import useCSS from "sapsar/use/useCSS"
import reportCSS from "sapsar/use/reportCSS"
import useHead from "sapsar/use/useHead"
import Combine from "sapsar/basic/Combine"


useCSS([["flame.css"], ["global.css"]])
reportCSS("*", ["global"])




useHead('*', Combine(
    title("FalconJS"),
    meta({
        name: "description",
        content: "FalconJS is a static site generator written in JavaScript."
    }))
)


export default async function Layout(content, data, page){
    return (
        content
    )
}