import { Project } from '@/types'
import ProjectsCard from '@/components/blog/projectsCard'
import { getSinglePage } from '@/lib/contentParser'
import { genPageMetadata } from '../seo'
import PageHeader from '@/components/partials/PageHeader'

export const metadata = genPageMetadata({ title: 'Projects', description: 'Projects' })

export default function Projects() {
  const projects: Project[] = getSinglePage('projects')
  return (
    <>
      <PageHeader title="Projects" />
      <div className="mb-20 mt-20 flex flex-col items-center justify-center">
        <ProjectsCard projects={projects} />
      </div>
    </>
  )
}
