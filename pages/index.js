import { h1 } from "sapsar/base"

import Combine from "sapsar/basic/Combine"

import exampleComponent from "../components/exampleComponent.js"
import Layout from "../layouts/Layout.js"

export default async function Page(data){    
    return (
        Layout(
            Combine(
                h1(
                    "Hello, Sapsar!"
                ),
                exampleComponent()
            )
        )
    )
}
