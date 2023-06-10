import Combine from "sapsar/basic/Combine"
import useComponent from "sapsar/use/useComponent"

import { p } from "sapsar/base"


const Header = await useComponent("index", "global/header")




export default async function Page(data){    

    return (
        Combine(
            Header(
                "index"
            ),
            p(
                `It's ${new Date().toLocaleTimeString()}!`
            )
            
        )
    )
}
