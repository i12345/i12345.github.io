import { Box, Heading } from "@chakra-ui/react";
import { kebab } from "case";
import { PropsWithChildren, ReactNode, Ref, forwardRef } from "react";
import { AffixedCompensated } from "./affixed-container";

export interface SectionProps extends PropsWithChildren {
    header: ReactNode
    sectionID?: string
}

export const Section = forwardRef(({ header, sectionID, children }: SectionProps, ref: Ref<HTMLDivElement>) => {
    sectionID ??= kebab(String(header))
    if (sectionID === "")
        sectionID = undefined
    
    return (
        <Box ref={ref} m="1em" id={sectionID} as="section">
            <AffixedCompensated>
                <Heading as="h1" mt={1}>{header}</Heading>
            </AffixedCompensated>
            {children}
        </Box>
    )
})