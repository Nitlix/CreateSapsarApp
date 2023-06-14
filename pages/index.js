import { h1 } from "sapsar/base"

import exampleComponent from "../components/exampleComponent.js"

export default async function Page(data){    
    return (
        h1(
            "Hello, Sapsar!"
        ),
        exampleComponent()
    )
}
