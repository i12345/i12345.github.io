import { WorkTimeline } from '../../../src/components/work-timeline'
import { Section } from '../../../src/components/section'

interface WorkItem {
  employer: string
  location: string
  date: string
  role: string
  description?: string[]
}

const workHistory: WorkItem[] = [
  {
    employer: "University of Texas at Arlington",
    location: "Arlington, TX",
    date: "May - August 2023",
    role: "Undergraduate research assistant",
    description: [
      "Researched performance of tiered memory using Transparent Page Placement.",
      "Researched predictability of memory access patterns."
    ]
  },
  {
    employer: "MedFit Health Center",
    location: "DeSoto, TX",
    date: "July 2018 - November 2021",
    role: "Data entry",
    description: [
      "Prepared, sorted, and labeled incoming electronic fax documents",
      "Charted analytes & records of CMS quality measures",
      "Other data entry jobs"
    ]
  },
  {
    employer: "Whataburger",
    location: "Midlothian, TX",
    date: "May - August 2018",
    role: "Crew member"
  },
  {
    employer: "Schlotzsky's",
    location: "Midlothian, TX",
    date: "June - August 2017",
    role: "Crew member"
  },
  {
    employer: "McDonald's",
    location: "Midlothian, TX",
    date: "June - August 2016",
    role: "Crew member"
  }
]

export default function WorkSectionSummary() {
  return (
    <Section header="Work">
      <WorkTimeline items={workHistory}
        index={{
          name: "role",
          subtitle: "employer",
          subtitleFade: "location",
          secondSubtitle: "date",
          details: "description"
        }} />
    </Section>
  )
}
