# Bermutex Investment Limited: Website

React + Vite website for Bermutex Investment Limited.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local address Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

The finished site is in `dist/`.

## Deploy on Vercel

Push this folder to GitHub, then import the repository in Vercel (framework: Vite).
`vercel.json` is already set up, so links such as `/divisions/real-estate` work when opened directly.

## Where to edit things

| What | File |
| --- | --- |
| Phone number, WhatsApp message, company name | `src/data/content.js` (`COMPANY`, `DEFAULT_WA_MESSAGE`) |
| Division names, descriptions and services | `src/data/content.js` (`DIVISIONS`) |
| Leadership profiles (flip book pages) | `src/data/content.js` (`LEADERS`) |
| Colours, fonts, spacing, animations | `src/styles/global.css` (top of file) |
| Photos and logo | `public/images/` |
| Favicon | `public/favicon.png`, `public/favicon.ico`, `public/apple-touch-icon.png` |

## Pages

- `/`: Home
- `/about`: About Us
- `/divisions`: All divisions
- `/divisions/real-estate`, `/divisions/environmental`, `/divisions/agro-allied`, `/divisions/marketing`, `/divisions/oil-and-gas`
- `/leadership`: Leadership flip book
- `/contact`: Contact (form opens WhatsApp with the message filled in)

## Still to add when available

- Office street address (currently shows "Umuahia, Abia State, Nigeria")
- Social media links
- Project photos (a Projects page can be added later)
- More engagement photos (see `ENGAGEMENT` in `src/data/content.js`)
