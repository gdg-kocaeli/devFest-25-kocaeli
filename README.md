# DevFest 2025 Kocaeli 🎉

![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)

Official website for **DevFest 2025 Kocaeli** - A community-led developer conference organized by [Google Developer Groups (GDG) Kocaeli](https://gdg.community.dev/gdg-kocaeli/).

## 📅 Event Details

- **Date:** December 6, 2025 at 10:00 AM
- **Venue:** Kocaeli Congress Center, Turkey
- **Registration:** [Register Here](https://gdg.community.dev/events/details/google-gdg-kocaeli-presents-devfest25-kocaeli/)

## ✨ Features

- 🎨 Modern and responsive design
- ⏱️ Live countdown timer to the event
- 🎤 Speakers showcase section
- 📋 Event schedule display
- 🤝 Sponsors section
- 👥 Organizing team profiles
- 📱 Mobile-friendly navigation
- 🌐 Smooth scrolling navigation

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** Turbopack

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/devfest-25-kocaeli.git
cd devfest-25-kocaeli
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
devfest-25-kocaeli/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── sections/
│   │   │   ├── ContactSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ScheduleSection.tsx
│   │   │   ├── SpeakersSection.tsx
│   │   │   ├── SponsorsSection.tsx
│   │   │   └── TeamSection.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Countdown.tsx
│   │       ├── ProfileCard.tsx
│   │       ├── ScheduleCard.tsx
│   │       └── SponsorCard.tsx
│   ├── styles/
│   │   ├── design-tokens.ts
│   │   └── style-utils.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── [images and assets]
├── package.json
└── tsconfig.json
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |

## 🎨 Customization

### Design Tokens

Design tokens are located in `app/styles/design-tokens.ts`. You can customize colors, typography, and spacing from there.

### Styling

Global styles are defined in `app/globals.css`. The project uses Tailwind CSS for utility-first styling.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Google Developer Groups](https://developers.google.com/community/gdg) for organizing DevFest events worldwide
- All speakers, sponsors, and volunteers who make DevFest Kocaeli possible
- The amazing developer community of Kocaeli

---

<p align="center">
  Made with ❤️ by <a href="https://gdg.community.dev/gdg-kocaeli/">GDG Kocaeli</a>
</p>
