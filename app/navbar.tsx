"use client";

import { Link } from "@chakra-ui/next-js";
import React, { forwardRef } from "react";
import { Nav, Navbar } from "rsuite";

const navMenu = {
    title: "Isaac Valdez",
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

export const NavBar = forwardRef<HTMLDivElement>(({ }, ref) => {
    return (
        <Navbar ref={ref}>
            <Navbar.Brand href="/" as={Link}>{navMenu.title}</Navbar.Brand>
            <Nav>
                {navMenu.sections.map(section => 
                    <Nav.Item as={Link} key={section.url} href={section.url}>{section.name}</Nav.Item>
                )}
            </Nav>
        </Navbar>
    )
})