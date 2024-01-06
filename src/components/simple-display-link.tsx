import { Link } from "@chakra-ui/next-js"
import * as URI from "uri-js"

export interface SimpleDisplayLinkProps {
    uri: string
    display?: string
    isExternal?: boolean
}

export const defaultDomains = new Map([
    ["github.com", "GitHub"],
    ["www.npmjs.com", "NPM"],
])

export function SimpleDisplayLink({ uri, display, isExternal }: SimpleDisplayLinkProps) {
    if (!display) {
        const domain = URI.parse(uri).host

        if (domain) {
            if (defaultDomains.has(domain))
                display = defaultDomains.get(domain)!
            else display = domain
        }
    }

    return <Link href={uri} isExternal={isExternal} mx={1}>{display ?? uri}</Link>
}