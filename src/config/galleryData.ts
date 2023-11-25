interface ImageFile {
  href: boolean
  fileName: string
  serie: string
  tags: string[]
  name: string
  description: string
  width: number
  height: number
}

export const imageFileNames: ImageFile[] = [
  {
    href: false,
    fileName: 'Cliff by the sea',
    serie: 'Landscape',
    tags: ['Landscape'],
    name: 'Cliff by the sea',
    description: '',
    width: 533,
    height: 400,
  },

  {
    href: false,
    fileName: 'Country village',
    serie: 'Landscape',
    tags: ['Landscape'],
    name: 'Country village',
    description: '',
    width: 533,
    height: 400,
  },

  {
    href: false,
    fileName: 'Mountain lake',
    serie: 'Landscape',
    tags: ['Landscape'],
    name: 'Mountain lake',
    description: '',
    width: 400,
    height: 533,
  },

  {
    href: false,
    fileName: 'Nature landscape',
    serie: 'Landscape',
    tags: ['Landscape'],
    name: 'Paysage sauvage',
    description: '',
    width: 533,
    height: 400,
  },

  {
    href: false,
    fileName: 'Sunflower and mill',
    serie: 'Landscape',
    tags: ['Landscape'],
    name: 'Champs de tournesol et moulin',
    description: '',
    width: 533,
    height: 400,
  },

  {
    href: false,
    fileName: 'Waterfront house',
    serie: 'Landscape',
    tags: ['Landscape'],
    name: 'Waterfront house',
    description: '',
    width: 533,
    height: 400,
  },

  {
    href: true,
    fileName: 'PinusBonsai',
    serie: 'Bonsai',
    tags: ['Bonsai', 'Tree'],
    name: 'Pine bonsai',
    description: 'Drawing entirely made in Indian ink, and using very fine calligraphy nibs.',
    width: 400,
    height: 533,
  },

  {
    href: true,
    fileName: 'JupinerusBonsai',
    serie: 'Bonsai',
    tags: ['Bonsai', 'Tree'],
    name: 'Juniper bonsai',
    description:
      "Dessin entièrement réalisé à l'encre de Chine : plumes à calligraphie très fines et feutres Faber Castell spéciaux. J'ai essayé de reproduire les beaux bois morts que l'on peut voir sur les vieux arbres travaillés depuis parfois des générations.",
    width: 400,
    height: 533,
  },

  {
    href: true,
    fileName: 'FaerieBonsai',
    serie: 'Bonsai',
    tags: ['Bonsai', 'Tree', 'Fantasy'],
    name: 'Bonsaï féerique',
    description:
      'Drawing entirely made in Indian ink: very fine calligraphy nibs and special Faber Castell markers for the yellow-orange touch. A little fairy resting in the shade of an old split but beautifully flowered stump!',
    width: 400,
    height: 533,
  },

  {
    href: true,
    fileName: 'ChineseBonsai',
    serie: 'Bonsai',
    tags: ['Bonsai', 'Tree'],
    name: 'Chinese bonsai',
    description:
      "Drawing made in Indian ink, using very fine calligraphy nibs and special Faber Castell markers, with a touch of watercolour. Representation of a small bonsai with aerial roots in a very Chinese style. It adorns the wall of a friend's tattoo parlor.",
    width: 400,
    height: 533,
  },

  {
    href: true,
    fileName: 'Flyingtree',
    serie: 'Bonsai',
    tags: ['Bonsai', 'Tree', 'Fantasy'],
    name: 'Arbre volant',
    description:
      "Dessin entièrement réalisé à l'encre de Chine, à l'aide de plumes à calligraphie très fines . Un petit arbre sur sa roche, très aérien, qui orne le mur d'une amie.",
    width: 400,
    height: 533,
  },

  {
    href: true,
    fileName: 'PalmatumBonsai',
    serie: 'Bonsai',
    tags: ['Bonsai', 'Tree'],
    name: 'Japanese maple',
    description:
      "Dessin entièrement réalisé à l'encre de chine : plumes à calligraphie très fines et feutres spéciaux Faber Castell. Très prisé des amateurs de bonsaï, j'ai essayé de représenter ce cousin de nos arbres champêtres entourant un petit rocher, avec ses magnifiques couleurs chatoyantes.",
    width: 400,
    height: 533,
  },

  {
    href: true,
    fileName: 'lespuguevenus',
    serie: 'Dryad',
    tags: ['Dryad', 'Fantasy', 'Tree', 'Statue'],
    name: 'Venus gaïa of Lespugue',
    description:
      'Entirely made in India ink and using very fine feathers. A kind of homage to prehistoric artists and statuettes found, and revisited in a very fantasy style!',
    width: 400,
    height: 533,
  },

  {
    href: true,
    fileName: 'arachnodryad',
    serie: 'Dryad',
    tags: ['Dryad', 'Fantasy', 'Tree'],
    name: 'Arachnodryad',
    description:
      'A completely whimsical dryad created entirely in Indian ink, including the colors!',
    width: 400,
    height: 533,
  },

  {
    href: true,
    fileName: 'Fancydryad',
    serie: 'Dryad',
    tags: ['Dryad', 'Fantasy', 'Tree'],
    name: 'Dryade pin-up',
    description:
      "Elle est belle et elle le sait, regarde comme elle fait la maligne! Réalisée à l'encre de Chine pour le noir, et à l'aquarelle.",
    width: 400,
    height: 533,
  },

  {
    href: true,
    fileName: 'Buddhadryad',
    serie: 'Dryad',
    tags: ['Dryad', 'Fantasy', 'Tree'],
    name: "Bouddh'Arbre",
    description:
      'A very zen tree, which meditates for eternity. Made in Indian ink for the black, and watercolor.',
    width: 400,
    height: 533,
  },

  {
    href: true,
    fileName: 'Fancydryad2',
    serie: 'Dryad',
    tags: ['Dryad', 'Fantasy', 'Tree'],
    name: 'Dryade ensoleillée',
    description:
      'This one grew in the sun, and therefore benefited from generous shapes... Its bunches of fruit look delicious! Chinese ink and watercolour.',
    width: 400,
    height: 533,
  },

  {
    href: true,
    fileName: 'ghostdryad',
    serie: 'Dryad',
    tags: ['Dryad', 'Fantasy', 'Tree'],
    name: 'Dryade fantôme',
    description:
      'A ghostly dryad, whose wandering soul finds no peace. Take care that it does not come to haunt your dreams! Made entirely in India ink, including the colors.',
    width: 400,
    height: 533,
  },

  {
    href: true,
    fileName: 'shivadryad',
    serie: 'Dryad',
    tags: ['Dryad', 'Fantasy', 'Tree'],
    name: 'Dryade Shiva',

    description:
      "Une dryade hindoue assez funky, et plutôt douée pour des danses étranges! Réalisé entièrement à l'encre de Chine (plume et feutres).",
    width: 400,
    height: 533,
  },

  {
    href: true,
    fileName: 'willendorfvenus',
    serie: 'Dryad',
    tags: ['Dryad', 'Fantasy', 'Tree', 'Statue'],
    name: 'Vénus gaïa de Willendorf',
    description:
      "Entièrement réalisé à l'encre de Chine et à l'aide de plumes très fines. Une sorte d'hommage aux artistes de la préhistoire et aux statuettes retrouvées, et revisité dans un style très fantasy! Cette pièce orne la maison d'une amie",
    width: 400,
    height: 533,
  },
]
