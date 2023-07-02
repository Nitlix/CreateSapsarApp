import { h1 } from "sapsar/base"

import Combine from "sapsar/basic/Combine"
import Link from "sapsar/basic/Link"


import Layout from "../layouts/Layout.js"



import exampleComponent from "../components/exampleComponent.js"
import exampleText from "../components/exampleText.js"




export default async function Page(data, build){    
    return (
        Layout(
            Combine(
                exampleText(
                "Hello, Sapsar!!!",
                {
                    styles: {
                        color: "red",
                        background: "blue"
                    }
                }
                ),
                exampleComponent(build),
                Link(
                    "Go to about page",
                    {
                        href: "/api/hello"
                    }
                )
            )
        )
    )
}
