"use client"

import { Link } from "@chakra-ui/next-js"
import { StyleProps, isStyleProp } from "@chakra-ui/react"
import * as URI from "uri-js"

export interface SimpleDisplayLinkProps extends StyleProps {
    uri: string
    display?: string
    isExternal?: boolean
}

export const defaultDomains = new Map([
    ["github.com", "GitHub"],
    ["www.npmjs.com", "NPM"],
])

export function SimpleDisplayLink(props: SimpleDisplayLinkProps) {
    let { uri, display, isExternal } = props
    const styleProps = Object.fromEntries(Object.entries(props).filter(([key]) => isStyleProp(key))) as StyleProps
    
    if (!display) {
        const domain = URI.parse(uri).host

        if (domain) {
            if (defaultDomains.has(domain))
                display = defaultDomains.get(domain)!
            else display = domain
        }
    }

    return <Link href={uri} isExternal={isExternal} {...styleProps}>{display ?? uri}</Link>
}