# Wiki Dance - Copilot Instructions

## Project Overview

Wiki Dance is a community-based platform for dancers to enhance their knowledge about the dance they practice. The app features role-based access control, content versioning, publishing mechanisms, and community moderation.

## Repository Structure

This is a monorepo containing three main applications:

- **`site/`** - Public-facing marketing site (Express + Pug + Vite)
- **`api/`** - Backend REST API (Express + Prisma + PostgreSQL)
- **`dashboard/`** - Admin dashboard (React + Vite + Mantine UI)

Each application has its own `package.json`, dependencies, and build process.

## Build & Development Commands

### Site (Marketing Site)
```bash
cd site/
npm run dev          # Start dev server with Vite HMR
npm run build:client # Build client assets with Vite
npm run build        # Full build (install deps + client + TypeScript)
npm run serve        # Serve production build
```

### API (Backend)
```bash
cd api/
npm run dev          # Start dev server with nodemon
npm run build        # Full build (install deps + TypeScript)
npm run serve        # Serve production build
npm run db:migrate   # Run Prisma migrations (dev)
npm run db:deploy    # Deploy migrations (production)
npm run email:dev    # Email development server on port 3005
```

### Dashboard (Admin)
```bash
cd dashboard/
npm run dev          # Start Vite dev server on port 3000
npm run build        # Build for production
npm run preview      # Preview production build
```

### Docker Compose (Full Stack)
```bash
docker-compose up    # Start all services (client, server, db, redis, nginx, pgadmin)
```

Services:
- Dashboard: `localhost:3000`
- API: `localhost:5000`
- PostgreSQL: `localhost:5432`
- PgAdmin: `localhost:5002`
- Redis: `localhost:6379`
- Nginx (proxy): `localhost:80`

## Architecture Overview

### Site Application
- **Framework**: Express 5 with Pug templates
- **Frontend**: Vite for bundling TypeScript + SCSS
- **Dev Mode**: Vite dev middleware integrated into Express for HMR
- **Build**: Vite builds to `public/dist/` with manifest
- **Views**: Pug templates in `views/`, scripts in `views/scripts/`
- **Alias**: `@` resolves to `views/`

### API Application
- **Framework**: Express 5 with TypeScript
- **Database**: PostgreSQL via Prisma ORM
- **Session**: Redis-backed express-session
- **Auth**: Session-based with bcrypt password hashing
- **Email**: Nodemailer for transactional emails
- **Schema**: Multi-file Prisma schema in `prisma/schema/`
- **Middleware**: Custom response formatter, error handler, CORS
- **Routing**: Centralized routes in `src/app/index.ts`

### Dashboard Application
- **Framework**: React 19 with TypeScript
- **UI Library**: Mantine UI v8 (forms, modals, dropzone, date pickers)
- **Routing**: React Router v7
- **State**: Redux Toolkit + React Redux
- **Editor**: TipTap (ProseMirror-based rich text editor)
- **i18n**: i18next + react-i18next
- **Validation**: Yup with mantine-form-yup-resolver
- **Bundler**: Vite with React Compiler plugin
- **Alias**: `@` resolves to `src/`

## Key Conventions

### Code Style (from .github/instructions/)

**TypeScript/JavaScript** (all apps):
- Use ES2022+ features with Node.js 20+ ESM modules
- Prefer Node.js built-in modules; ask before adding dependencies
- Always use `async/await` (no callbacks)
- Use `undefined` for optional values, never `null`
- Prefer functions over classes
- Arrow functions only
- Use `const` by default, `let` only when necessary
- Template literals for string concatenation
- No magic strings/numbers - use constants
- Limit lines to 80 characters max
- 2 spaces indentation, single quotes, semicolons required
- Opening braces on same line as control statement
- Always use brackets for control structures

**Naming Conventions**:
- `PascalCase`: Component/model names
- `camelCase`: Variables, functions
- `UPPER_SNAKE_CASE`: Constants (e.g., `MAX_RETRY_ATTEMPTS`)
- `use` prefix: Custom hooks (in `/hooks/` folder)
- `T` prefix: TypeScript types (prefer types over interfaces)
- `.model.ts` suffix: Model files

**Site-Specific** (site/):
- Prefer DOM API and vanilla JS over external dependencies
- SCSS syntax with BEM naming for class names
- Pug for HTML templates with semantic elements
- Follow accessibility best practices

**Dashboard-Specific** (dashboard/):
- PascalCase for React component file names
- `.model.ts` suffix for model files
- All components, helpers, and hooks should have unit tests

### Testing
- Framework: Vitest (configured but not yet in package.json scripts)
- Test all new features, bug fixes, edge cases, error handling
- Never change original code to make testing easier

### Database (Prisma)
- Multi-file schema organization: `prisma/schema/*.prisma`
- Run `npm run db:migrate` after schema changes in dev
- Use `npm run db:deploy` for production migrations

### Comments
- Do not add comments unless absolutely necessary
- Code should be self-explanatory

## Important Notes

- Always ask before adding new dependencies
- No test scripts are currently configured (use Vitest when adding)
- Session management uses Redis (required for API)
- CORS whitelist configured in API via `CORS_WHITELIST` constant
- React Compiler plugin enabled in dashboard for optimization
- Email templates are separate (use `npm run email:dev` for preview)

## Development Workflow

1. Start from repository root: `/home/trust/projects/Wiki`
2. Navigate to relevant app directory before running commands
3. Use Docker Compose for full-stack development
4. Each app runs independently with its own dev server
5. Changes trigger hot reloading in development mode
6. Update Prisma schema → migrate → client regenerates automatically
