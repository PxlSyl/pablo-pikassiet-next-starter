'use client'

import { Project } from '@/types'
import { plainify } from '@/lib/utils/textConverter'
import Image from './Image'
import Link from './Link'
import { motion } from 'framer-motion'

type ProjectsCardProps = { projects: Project[] }

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -25, y: 0 },
  show: { opacity: 1, x: 0, y: 0 },
}

const ProjectsCard = ({ projects }: ProjectsCardProps) => (
  <motion.ul
    variants={container}
    initial="hidden"
    animate="show"
    className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-2"
  >
    {projects.map((project, index: number) => {
      const { title, imgSrc, href, description } = project.frontmatter
      return (
        <motion.li variants={item} key={index} className="w-full">
          <div className="max-w-[544px] p-4">
            <div
              className={`${
                imgSrc && 'h-full'
              }  rounded-2xl bg-gradient-to-b from-body to-theme-light dark:from-darkmode-body dark:to-darkmode-theme-light`}
            >
              <Link href={href} aria-label={`Link to ${title}`}>
                <Image
                  alt={title}
                  src={imgSrc}
                  className="rounded-2xl object-cover object-center md:h-36 lg:h-48"
                  width={544}
                  height={306}
                />
              </Link>
              <div className="p-6">
                <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                  <Link href={href} aria-label={`Link to ${title}`}>
                    {title}
                  </Link>
                </h2>
                <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                  {plainify(description.slice(0, Number(149)))}...
                </p>
                <Link
                  href={href}
                  className="text-base font-medium leading-6 text-highlighted hover:opacity-80 dark:text-darkmode-highlighted"
                  aria-label={`Link to ${title}`}
                >
                  {href.startsWith('http') ? 'Visit project' : 'Read more'} &rarr;
                </Link>
              </div>
            </div>
          </div>
        </motion.li>
      )
    })}
  </motion.ul>
)

export default ProjectsCard
