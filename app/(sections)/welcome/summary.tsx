'use client'

import { Box } from "@chakra-ui/react"
import { Section } from '../../../src/components/section'

export default function WelcomeSectionSummary() {
    return (
        <Section header="Welcome!" sectionID="">
            <Box fontSize="md"><strong>Isaac Valdez</strong> Web developer</Box>
            <p>
                I develop custom web applications and components like (example)!
            </p>
        </Section>
    )
}
