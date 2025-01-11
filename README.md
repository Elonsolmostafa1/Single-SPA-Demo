# Single-SPA Microfrontend Demo

This repository demonstrates the use of the **Single-SPA** framework for building a microfrontend architecture with Angular applications. The setup consists of a root configuration application and two independent Angular micro apps.

## 📦 Project Structure

### 1. **Root Config App** (Container)
   - The **root-config** application serves as the container for all micro apps.
   - It uses **TypeScript** and the **Layout Engine** for structured loading of microfrontends.
   - It handles the registration and orchestration of micro apps within the project.

### 2. **Micro Apps (Angular)**
   - **HomeApp**: An Angular application loaded **by default**.
   - **ProductApp**: An Angular application loaded on the route `/product`.

## 🚀 What is Single-SPA?
**Single-SPA** (Single Single-Page Application) is a JavaScript framework for building microfrontend architectures. It allows multiple frontend frameworks or applications to coexist and operate together within a single web application.

### Key Features:
- **Multiple Framework Support:** Angular, React, Vue, etc.
- **Independent Deployment:** Each micro app can be developed and deployed independently.
- **Shared Resources:** Share utilities and components between micro apps.

## 📖 How It Works
- The **root-config app** registers the micro apps using Single-SPA's `registerApplication`.
- **HomeApp** loads by default.
- **ProductApp** loads when the user navigates to `/product`.

## 📥 Getting Started
1. Clone the repository:
   ```bash
   git clone <repo-url>
   ```
2. Install dependencies for each app:
   ```bash
   cd root-config && npm install
   cd ../homeApp && npm install
   cd ../productApp && npm install
   ```
3. Run the root-config app:
   ```bash
   cd root-config
   npm start
   ```
4. Run micro apps:
   ```bash
   cd ../homeApp
   npm start
   cd ../productApp
   npm start
   ```
5. Access the app at `http://localhost:9000`.


---

**Happy Coding! 🚀**

