'use client'

import Link from 'next/link'
import WelcomeSectionSummary from './(sections)/welcome/summary'
import EducationSectionSummary from './(sections)/education/summary'
import ProjectsSectionSummary from './(sections)/projects/summary'
import WorkSectionSummary from './(sections)/work/summary'
import ContactSectionSummary from './(sections)/contact/summary'
import SkillsSectionSummary from './(sections)/skills/summary'

export default function Home() {
  return (
    <>
      <WelcomeSectionSummary />
      <EducationSectionSummary />
      <SkillsSectionSummary />
      <ProjectsSectionSummary />
      <WorkSectionSummary />
      <ContactSectionSummary />
    </>
  )
}
