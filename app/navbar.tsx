"use client";

import { usePathname, useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation"
import React from "react"

const navMenu = {
    home: "/",
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
    const url = usePathname()
    
    return (
        <span>
            <div>
                <h2>Isaac Valdez</h2>
                Web developer
            </div>
            <div>path = {url}</div>
        </span>
    )
}