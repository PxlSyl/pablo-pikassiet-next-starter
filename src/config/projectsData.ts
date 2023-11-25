type Project = {
  title: string
  description: string
  imgSrc: string
  href: string
}

type ProjectsData = {
  [locale: string]: Project[]
}

const projectsData: ProjectsData = {
  en: [
    {
      title: 'Web template for artists and musicians',
      description: `Creating a site can be expensive, and not everyone has the means and/or the desire to learn.
      You also have to deal with the technical problems that you inevitably encounter... Not to mention SEO and
      of all the optimization that must be carried out! That's why I'm trying to create an open-source template based on my own site...`,
      imgSrc: '/static/images/artist-template.jpg',
      href: '/blog/projects/artist-template',
    },
  ],
  fr: [
    {
      title: 'Template web pour artistes et musiciens',
      description: `Créer un site, cela peut coûter cher, et tout le monde n'en a pas les moyens, et/ou l'envie d'apprendre.
      Il faut en plus se confronter aux problèmes techniques que l'on rencontre inévitablement... Sans même parler du SEO et
      de toute l'optimisation qu'il faut mener! C'est pourquoi je cherche à créer un template open-source sur la base de mon propre site...`,
      imgSrc: '/static/images/artist-template.jpg',
      href: '/blog/projects/artist-template',
    },
  ],
}

export default projectsData
