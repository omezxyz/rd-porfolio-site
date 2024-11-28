const Sitemap = require('react-router-sitemap').default;

function generateSitemap() {
  const paramsConfig = {
    '/#about': [{}],
    '/#portfolio': [{}],
    '/#hire-me': [{}],
  };

  const router = [
    { path: '/' },
    { path: '/#about' },
    { path: '/#portfolio' },
    { path: '/#hire-me' },
  ];

  return new Sitemap(router)
    .applyParams(paramsConfig)
    .build('https://rdravaart.com') // Replace with your website URL
    .save('./public/sitemap.xml');
}

generateSitemap();
