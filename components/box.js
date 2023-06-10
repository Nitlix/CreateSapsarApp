import { br, div, h1 } from "../.falcon/components/base.js";
import mergeProps from "../.falcon/components/mergeProps.js";
import parseArgs from "../.falcon/components/parseArgs.js";



export default function Box(...args){
    const {content, props} = parseArgs(args);

    return (
        div(
            content,
            h1(
                "I'm a box!",
                br(),
                "I'm a box!",
            ),
            mergeProps(
                props,
                {
                    class: "box"
                }
            )
        )
    )
}
