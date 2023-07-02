import MergeProps from "sapsar/basic/MergeProps"
import ParseArgs from "sapsar/basic/ParseArgs"

import { h1 } from "sapsar/base"

export default function(...args) {
    const {
        content,
        props
    } = ParseArgs(args)

    return (
        h1(
            content, 
            MergeProps(
                {   
                    styles: {
                        color: "green",
                        border: "solid 1px black"
                    }
                },
                props
            )
        )
    )
}