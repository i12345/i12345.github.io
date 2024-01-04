import { Section } from '../section'
import { WorkTimeline } from '../../../src/components/work-timeline'
import { Link } from '@chakra-ui/next-js'
import { ReactNode } from 'react'

interface ProjectItem {
    name: string
    summary: string
    uri: string
    uriDomain: string
    date: string
    description?: string[]
}

const projectHistory: ProjectItem[] = [
    {
        name: "playcanvas-physics-advanced",
        summary: "Physics improvements to PlayCanvas game engine",
        date: "2023",
        uri: "https://github.com/i12345/playcanvas-physics-advanced",
        uriDomain: "Code on GitHub",
        description: [
            "Improvements to PlayCanvas game engine",
            "Upgraded to use latest version of bullet physics",
            "Joints improved and multibody articulations introduced",
            "Work started to support other physics engines"
        ]
    }
]

export default function ProjectsSectionSummary() {
    type ProjectItemRendered = Omit<ProjectItem, "link"> & { link: ReactNode }
    
    const projects = projectHistory.map(project => ({
        ...project,
        link: <Link href={project.uri} isExternal>{project.uriDomain}</Link>
    }) as ProjectItemRendered)

    return (
        <Section header="Projects">
            <WorkTimeline items={projects}
                index={{
                    name: "name",
                    subtitle: "summary",
                    subtitleFade: 'link',
                    secondSubtitle: 'date',
                    details: "description"
                }} />
        </Section>
    )
}
