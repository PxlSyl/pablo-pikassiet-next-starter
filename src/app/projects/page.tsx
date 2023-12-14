import projectsData from '@/config/projectsData'
import ProjectsCard from '@/components/blog/projectsCard'
import { genPageMetadata } from '../seo'
import PageHeader from '@/components/partials/PageHeader'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <PageHeader title="Projects" />
      <section className="section-sm mb-20 pb-0">
        <div className="container">
          <div className="row justify-center">
            {projectsData.map((d) => (
              <ProjectsCard
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
