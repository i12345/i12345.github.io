"use client";

import { Button, ButtonGroup, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import { usePathname, useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation"
import React from "react"

const navMenu = {
    title: "Isaac Valdez",
    home: "Portfoilio",
    sections: [
        {
            name: "Education",
            url: "/#education"
        },
        {
            name: "Projects",
            url: "/#projects"
        },
        {
            name: "Work",
            url: "/#work"
        },
        {
            name: "Contact",
            url: "/#contact"
        },
    ]
} as const

export function NavBar(): React.ReactElement {
    return (
        <Flex minWidth='max-content' align="bottom" p={2} gap={2} bg="blue.50" backdropBlur={10}>
            <Heading as="header" size="md">{navMenu.title}</Heading>
            <Spacer />
            <ButtonGroup>
                {navMenu.sections.map(section => (
                    <Link key={section.name} href={section.url}>{section.name}</Link>
                ))}
            </ButtonGroup>
        </Flex>
    )
}