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
        <div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-2">
          {projects.map((project: any, index: number) => (
            <div key={index} className="w-full">
              <ProjectsCard data={project} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
