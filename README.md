# Cube

Cube is a Next.js application built with TypeScript, Shadcn, Faker, Zustand, and Unsplash. This project demonstrates a modern stack for building a responsive and interactive web application.

<p align="center">
  <a href="https://your-live-deployment-url.com" target="_blank">View Live Deployment</a>
</p>

## Getting Started

To get started with the Cube application, follow these steps:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/cube.git
cd cube
```

### 2. Install Dependencies

Install the necessary dependencies using your preferred package manager:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Configure Environment Variables

Create a .env.development file based on the .env.example file:

```bash
cp .env.example .env.development
```

Update the .env.development file with your Unsplash API key:

```bash
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```

### 4. Run the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 in your browser to view the application.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/) - Learn about Next.js features and API.
- [Shadcn](https://ui.shadcn.com/) - Learn about Shadcn components.
- [Faker](https://fakerjs.dev/) - Learn about Faker for generating fake data.
- [Zustand](https://zustand-demo.pmnd.rs/) - Learn about Zustand for state management.
- [Unsplash API](https://unsplash.com/developers) - Learn about the Unsplash API for fetching photos.
