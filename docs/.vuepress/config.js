module.exports = {
  title: 'Minetorch Document',
  description: '',
  configureWebpack: {
    resolve: {
      alias: {
        '@image': '/static/image'
      }
    }
  },
	themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Api', link: '/api/' },
      { text: 'About', link: '/about' },
    ],
    sidebar: {
      '/guide/': [
        '',
        'one',
        'two'
      ],
      '/api/': [
        '',
        'one',
        'two'
      ],
      '/': [
        '',
        'contact',
        'about'
      ]
    },
    displayAllHeaders: true
  }
}
