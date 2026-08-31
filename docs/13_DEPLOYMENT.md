# 13. Deployment & Hosting Guide

## Static Production Deployment
The application compiles into a completely static distribution folder (`dist/`) that can be hosted on any modern CDN, cloud storage bucket, or web platform (e.g. Vercel, Netlify, Cloudflare Pages, AWS S3 + CloudFront, GCP Cloud Storage).

### Build Command
```bash
npm run build
```

### Output Directory
`dist/`

### SPA Routing Rule
Ensure all non-file route requests fallback to `/index.html` (standard SPA rewrite rule).
