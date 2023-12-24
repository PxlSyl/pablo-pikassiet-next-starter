import { Project } from '@/types'
import ProjectsCard from '@/components/blog/projectsCard'
import { getSinglePage } from '@/lib/contentParser'
import { genPageMetadata } from '../seo'
import PageHeader from '@/components/partials/PageHeader'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  const projects: Project[] = getSinglePage('projects')
  return (
    <>
      <PageHeader title="Projects" />
      <div className="mb-20 mt-20 flex flex-row justify-center pb-0">
        {projects.map((project: any, index: number) => (
          <div key={index}>
            <ProjectsCard data={project} />
          </div>
        ))}
      </div>
    </>
  )
}
