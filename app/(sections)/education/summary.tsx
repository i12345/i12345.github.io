import { WorkTimeline } from '../../../src/components/work-timeline'
import { Section } from '../../../src/components/section'

interface EducationItem {
    degree: string
    school: string
    location: string
    date: string
    notes?: string[]
}

const educationHistory: EducationItem[] = [
    {
        degree: "Bachelor of Science Computer Science",
        school: "University of Texas at Arlington",
        date: "Summer 2020 - Spring 2024",
        location: "Arlington, TX",
        notes: [
            // special courses here
        ]
    },
    {
        degree: "Associate's in Science",
        date: "2014 - 2018",
        school: "Navarro Community College",
        location: "Waxahachie, TX",
        notes: [
            "Dual credit with high school"
        ]
    },
    {
        degree: "HS Diploma",
        date: "2014 - 2018",
        school: "Waxahachie Global High School",
        location: "Waxahachie, TX",
    }
]

export default function EducationSectionSummary() {
    return (
        <Section header="Education">
            <WorkTimeline items={educationHistory}
                index={{
                    name: "degree",
                    subtitle: "school",
                    subtitleFade: "location",
                    secondSubtitle: "date",
                    details: "notes"
                }} />
        </Section>
    )
}
