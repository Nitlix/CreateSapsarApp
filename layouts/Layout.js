import useCSS from "sapsar/use/useCSS"
import useLeveledCSS from "sapsar/use/useLeveledCSS"

import useHead from "sapsar/use/useHead"
import Combine from "sapsar/basic/Combine"
import { title, meta } from "sapsar/base"


await useCSS("global.css")


useHead(
    '*', 
    Combine(
        title(
            "Sapsar"
        ),
        meta(
            {
                name: "description",
                content: "Sapsar is a lightspeed web-framework used to build sophisticated websites."
            }
        )
    )
)

export default async function(content){
    return (
        Combine(
            useLeveledCSS("global"),
            content
        )
    )
}