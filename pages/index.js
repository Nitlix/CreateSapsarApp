import Layout from "../layouts/Layout.js"

import LoadJS from "sapsar/load/LoadJS"


import exampleText from "../components/exampleText.js"

import useMJS from "sapsar/use/useMJS"
import useJS from "sapsar/use/useJS"
import ActiveJS from "sapsar/active/ActiveJS"


await useMJS(()=>{console.log("useMJS")}, "index.js")
// await useJS("index.js")


export default async function Page(data, build){    
    return [
        LoadJS(
            "touch"
        ),
        ActiveJS(
            "index.js"
        ),
        Layout(
            exampleText(
            "Hello, Sapsar!!!",
            {
                styles: {
                    color: "red",
                    background: "blue"
                },
            }
            )
        )
    ]
}