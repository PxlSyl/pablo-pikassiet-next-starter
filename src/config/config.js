// config.js

const config = {
  site: {
    /*    title: 'Pablo Pikassiet',

    base_url: 'https://nextplate.netlify.app',
    base_path: '/',
    trailing_slash: false,
    favicon: '/images/favicon.png',
    logo: '/images/logo.svg',
    logo_darkmode: '/images/logo-darkmode.svg',
    logo_width: '225',
    logo_height: '60',
    logo_text: 'Pablo Pikassiet', */
  },

  settings: {
    sticky_header: true,
    theme_switcher: true,
    default_theme: 'system',
    summary_length: 200,
    blog_folder: 'blog',
  },

  params: {
    contact_form_action: '#',
    copyright: 'Designed and developed by <u>[PxlSyl](https://pxlsyl.art)</u> ',
    credits:
      'Credits: <u>[Zeon Studio](https://zeon.studio)</u>  and <u>[Timlrx](https://www.timlrx.com/)<u>',
  },

  navigation_button: {
    enable: true,
    label: 'Get Started',
    link: 'https://github.com/zeon-studio/nextplate',
  },

  metadata: {
    meta_author: 'Themefisher',
    meta_image: '/images/og-image.png',
    meta_description: 'Next Boilerplate',
  },
}

module.exports = config