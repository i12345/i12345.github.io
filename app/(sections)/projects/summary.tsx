import { Section } from '../section'
import { WorkTimeline } from '../../../src/components/work-timeline'
import { Link } from '@chakra-ui/next-js'
import { ReactNode } from 'react'
import { SimpleDisplayLink } from '../../../src/components/simple-display-link'

interface ProjectItem {
    name: string
    summary: string
    links: [main: string, ...additional: string[]]
    date: string
    description?: string[]
}

const projectHistory: ProjectItem[] = [
    {
        name: "playcanvas-physics-advanced",
        summary: "Physics improvements to PlayCanvas game engine",
        date: "2023",
        links: [
            "https://github.com/i12345/playcanvas-physics-advanced",
            "https://www.npmjs.com/package/playcanvas-physics-advanced"
        ],
        description: [
            "Improvements to PlayCanvas game engine",
            "Upgraded to use latest version of bullet physics",
            "Joints improved and multibody articulations introduced",
            "Work partly done to support other physics engines"
        ]
    },
    {
        name: "ammojs3",
        summary: "Improvements to ammo.js, a wasm build of bullet physics engine",
        date: "2023",
        links: [
            "https://github.com/i12345/ammo.js",
            "https://www.npmjs.com/package/ammojs3",
        ],
        description: [
            "Exported types in IDL",
            "Updated to latest version of bullet physics",
        ]
    },
]

export default function ProjectsSectionSummary() {
    type ProjectItemRendered = Omit<ProjectItem, "name" & "link"> & {
        name: ReactNode
        links: ReactNode
    }
    
    const projects = projectHistory.map(project => ({
        ...project,
        name: <SimpleDisplayLink display={project.name} uri={project.links[0]} isExternal />,
        links: <>{...project.links.map(link => <SimpleDisplayLink uri={link} key={link} isExternal />)}</>
    }) as ProjectItemRendered)

    return (
        <Section header="Projects">
            <WorkTimeline items={projects}
                index={{
                    name: "name",
                    subtitle: "summary",
                    subtitleFade: 'links',
                    secondSubtitle: 'date',
                    details: "description"
                }} />
        </Section>
    )
}
