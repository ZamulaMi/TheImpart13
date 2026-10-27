export const ROBOTS_TXT_BODY = `# https://www.theimpart.com/robots.txt
# Конфігурація індексації для пошукових систем видання The Impart

User-agent: *
Allow: /
Allow: /sitemap.xml
Allow: /sitemap-*.xml
Allow: /news-sitemap.xml
Allow: /news-sitemap-*.xml
Allow: /api/sitemap
Allow: /api/news-sitemap
Allow: /api/article-image
Allow: /api/render-page
Allow: /uploads/

# Заборона індексації адміністративних та службових розділів
Disallow: /admin
Disallow: /admin/
Disallow: /editor
Disallow: /editor/
Disallow: /login
Disallow: /login/
Disallow: /api/auth
Disallow: /api/drafts
Disallow: /api/upload
Disallow: /api/settings
Disallow: /api/stats

# Карти сайту (Sitemap)
Sitemap: https://www.theimpart.com/sitemap.xml
Sitemap: https://www.theimpart.com/news-sitemap.xml
`;
