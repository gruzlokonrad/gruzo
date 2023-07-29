module.exports = {
  siteUrl: process.env.SITE_URL || 'https://gruzo.dev',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      }
    ]
  }
}