import { h1,p } from "sapsar/base"

import Combine from "sapsar/basic/Combine"

import useStaticPage from "sapsar/use/useStaticPage"

import Layout from "../../layouts/Layout.js"

useStaticPage(";hello/;page")

export default async function Page(data, build, params){    
    return (
        Layout(
            Combine(
                h1(
                `Hello, Sapsar! (${params.hello}) (${params.page})`
                ),
                p(
                    `${Date.now()}`
                )
            )
        )
    )
}
