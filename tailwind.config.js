module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.{vue,ts}']
  },
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': [
        'Helvetica Neue',
        'Helvetica',
        'Hiragino Sans',
        'Hiragino Kaku Gothic ProN',
        'Arial',
        'Yu Gothic',
        'Meiryo',
        'ui-sans-serif'
      ],
      'serif': [
        'Times New Roman',
        'YuMincho',
        'Hiragino Mincho ProN',
        'Yu Mincho',
        'MS PMincho',
        'ui-serif'
      ]
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
