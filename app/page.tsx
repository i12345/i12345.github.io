'use client'

import Link from 'next/link'
import WelcomeSectionSummary from './(sections)/welcome/summary'
import EducationSectionSummary from './(sections)/education/summary'
import ProjectsSectionSummary from './(sections)/projects/summary'
import WorkSectionSummary from './(sections)/work/summary'
import ContactSectionSummary from './(sections)/contact/summary'

export default function Home() {
  return (
    <div>
      <section id="">
        <WelcomeSectionSummary />
      </section>
      <section id="education">
        <EducationSectionSummary />
      </section>
      <section id="projects">
        <ProjectsSectionSummary />
      </section>
      <section id="work">
          <WorkSectionSummary />
      </section>
      <section id="contact">
        <ContactSectionSummary />
      </section>
    </div>
  )
}
