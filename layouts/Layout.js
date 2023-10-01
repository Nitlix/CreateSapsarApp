import useCSS from "sapsar/use/useCSS"
import LoadCSS from "sapsar/load/LoadCSS"


import useHead from "sapsar/use/useHead"
import ParseArgs from "sapsar/basic/ParseArgs"

import { title, meta } from "sapsar/base"


useCSS(
    "global.css",
    "*"
)


useHead(
    title("Sapsar"),
    meta({
        name: "description",
        content: "Sapsar is a framework for building websites with JavaScript."
    }),
    {
        page: "*"
    }
)


export default function(...args){
    const {content} = ParseArgs(args)

    return [
        LoadCSS("*"),
        content   
    ]
}