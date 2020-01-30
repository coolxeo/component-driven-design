module.exports = {
  components: 'src/components/**/*.{js,jsx,ts,tsx}',
  assetsDir: 'public',
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,700,900&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    }
  },
  theme: {
    fontFamily: {
      base: '"Roboto", sans-serif'
    }
  },
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: 'Roboto'
      }
    }
  },
  sections: [
    {
      name: 'Account',
      components: 'src/components/Account/*.js'
    },
    {
      name: 'AccountDetails',
      components: 'src/components/Account/AccountDetails/*.js'
    },
    {
      name: 'Button',
      components: 'src/components/Button/*.js'
    },
    {
      name: 'PlayerAccount',
      components: 'src/components/PlayerAccount/*.js'
    },
    {
      name: 'PlayerList',
      components: 'src/components/PlayerList/*.js'
    }
  ]
};