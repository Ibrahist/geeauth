![Progress](https://img.shields.io/badge/Progress-85%25-success?style=for-the-badge)

> 🚧 **Project Progress: 85% Complete**

GeeAuth is designed as a practical authentication project demonstrating how modern Next.js applications can implement secure user authentication, authorization, database integration, and social sign-in.

## 🚀 Features

* 🔐 User authentication
* 👤 User authorization
* 🔑 Secure session management
* 🌐 Social authentication support
* 🗄️ Prisma ORM integration
* 🛡️ Better Auth integration
* 🔒 Clerk authentication integration
* ⚡ Next.js App Router
* 🎨 Modern responsive UI
* 📦 Component-based architecture
* 🧩 Reusable hooks and components
* 🗃️ Database schema managed with Prisma

## 🛠️ Tech Stack

| Technology       | Purpose                            |
| ---------------- | ---------------------------------- |
| **Next.js**      | Full-stack React framework         |
| **React**        | User interface                     |
| **TypeScript**   | Type-safe development              |
| **Prisma**       | Database ORM                       |
| **Better Auth**  | Authentication                     |
| **Clerk**        | Authentication and user management |
| **Tailwind CSS** | Styling                            |
| **PostgreSQL**   | Database                           |

## 📁 Project Structure

```text
geeauth/
├── app/                  # Next.js application routes
├── components/           # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and application logic
├── prisma/               # Prisma schema and database configuration
├── public/               # Static assets
│
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── prisma.config.ts
├── tsconfig.json
└── README.md
```

## 📋 Prerequisites

Before running GeeAuth locally, make sure you have:

* **Node.js** 18+ installed
* **npm**, **pnpm**, **yarn**, or **bun**
* A supported database configured for Prisma
* Authentication provider credentials if using social authentication

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Ibrahist/geeauth.git
```

### 2. Enter the project directory

```bash
cd geeauth
```

### 3. Install dependencies

Using npm:

```bash
npm install
```

Or using pnpm:

```bash
pnpm install
```

Or using yarn:

```bash
yarn install
```

## 🔑 Environment Variables

Create a `.env` file in the root of the project.

```env
DATABASE_URL="your_database_connection_string"

BETTER_AUTH_SECRET="your_better_auth_secret"
BETTER_AUTH_URL="http://localhost:3000"

# OAuth providers
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"

# Clerk, if enabled
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
```

> **Important:** Never commit `.env` files or authentication secrets to GitHub.

## 🗄️ Database Setup

GeeAuth uses Prisma for database access.

After configuring `DATABASE_URL`, generate the Prisma client:

```bash
npx prisma generate
```

Apply your database schema:

```bash
npx prisma db push
```

For projects using Prisma migrations, you can instead use:

```bash
npx prisma migrate dev
```

To inspect your database using Prisma Studio:

```bash
npx prisma studio
```

## 🔐 Authentication Configuration

### Better Auth

Configure Better Auth using the appropriate environment variables and authentication configuration used by the application.

For OAuth authentication, configure your provider credentials in the provider's developer console and make sure the callback URLs match your local or production application URL.

### Google Authentication

Create OAuth credentials in Google Cloud and configure the appropriate callback URL for your application.

For local development, the callback URL will generally follow the authentication route configured by Better Auth.

### GitHub Authentication

Create an OAuth application in GitHub Developer Settings and configure its callback URL according to your Better Auth configuration.

> Make sure the callback URLs configured with Google and GitHub exactly match the URLs expected by your application.

## ▶️ Running the Application

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

The application will automatically reload when you modify the source code.

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 🧹 Code Quality

Run ESLint:

```bash
npm run lint
```

Keep authentication secrets, database credentials, and other sensitive configuration outside the source code.

## 🗃️ Prisma Commands

Useful Prisma commands:

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# Create a migration
npx prisma migrate dev

# Open Prisma Studio
npx prisma studio

# Check Prisma schema
npx prisma validate
```

## 🔒 Security Notes

When deploying GeeAuth:

* Never expose `CLERK_SECRET_KEY`.
* Never expose `GOOGLE_CLIENT_SECRET`.
* Never expose `GITHUB_CLIENT_SECRET`.
* Never commit `.env` files.
* Use HTTPS in production.
* Configure production OAuth callback URLs.
* Use a strong `BETTER_AUTH_SECRET`.
* Keep dependencies updated.
* Use environment variables for sensitive configuration.

## 🧪 Development

The application follows the standard Next.js App Router architecture.

Main application code is located inside:

```text
app/
components/
hooks/
lib/
prisma/
```

The repository also contains configuration and development files for Next.js, Prisma, TypeScript, ESLint, and project tooling.

## 🚀 Deployment

GeeAuth can be deployed to platforms that support Next.js applications.

For a typical deployment:

1. Push the project to GitHub.
2. Connect the repository to your hosting provider.
3. Configure all required environment variables.
4. Configure the production database.
5. Configure Google/GitHub OAuth callback URLs.
6. Run the production build.
7. Start the application.

For Vercel deployments, configure the environment variables in the project's Vercel settings and deploy the repository.

## 🐛 Troubleshooting

### Prisma Client cannot be found

Run:

```bash
npx prisma generate
```

If the problem persists, reinstall dependencies:

```bash
rm -rf node_modules
npm install
npx prisma generate
```

On Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
npm install
npx prisma generate
```

### OAuth login does not work

Check:

* OAuth client ID and secret
* Application URL
* OAuth callback URL
* Better Auth configuration
* Environment variables
* Browser console errors
* Server-side logs

Make sure the OAuth callback URL registered with the provider exactly matches the route expected by the application.

### Database connection errors

Verify:

```env
DATABASE_URL="..."
```

Then test the Prisma configuration:

```bash
npx prisma validate
```

and regenerate the client:

```bash
npx prisma generate
```

## 📚 Resources

* [Next.js Documentation](https://nextjs.org/docs)
* [Prisma Documentation](https://www.prisma.io/docs)
* [Better Auth Documentation](https://www.better-auth.com/docs)
* [Clerk Documentation](https://clerk.com/docs)

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/my-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git commit -m "Add my feature"
```

5. Push the branch.

```bash
git push origin feature/my-feature
```

6. Open a Pull Request.

## 📄 License

This project does not currently specify a license in the repository. If you intend to allow others to reuse or distribute the code, add an appropriate `LICENSE` file.

## 👨‍💻 Author

**Ibrahist**

GitHub: [@Ibrahist](https://github.com/Ibrahist)

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

Repository:

https://github.com/Ibrahist/geeauth

---

**GeeAuth** — Modern authentication and authorization with Next.js, Prisma, Better Auth, and Clerk.
