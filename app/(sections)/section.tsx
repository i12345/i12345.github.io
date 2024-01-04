import { Box, Heading } from "@chakra-ui/react";
import { PropsWithChildren, ReactNode, Ref, forwardRef } from "react";

export interface SectionProps extends PropsWithChildren {
    header: ReactNode
}

export const Section = forwardRef(({ header, children }: SectionProps, ref: Ref<HTMLDivElement>) => {
    return (
        <Box ref={ref} m="1em" as="section">
            <Heading as="h1">{header}</Heading>
            {children}
        </Box>
    )
})