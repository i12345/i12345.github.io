import { Box, Heading } from "@chakra-ui/react";
import { kebab } from "case";
import { PropsWithChildren, ReactNode, Ref, forwardRef } from "react";

export interface SectionProps extends PropsWithChildren {
    header: ReactNode
    headerID?: string
}

export const Section = forwardRef(({ header, headerID, children }: SectionProps, ref: Ref<HTMLDivElement>) => {
    headerID ??= kebab(String(header))
    if (headerID === "")
        headerID = undefined

    return (
        <Box ref={ref} m="1em" as="section">
            <Heading as="h1" id={headerID}>{header}</Heading>
            {children}
        </Box>
    )
})