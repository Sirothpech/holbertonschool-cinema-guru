## Implement an App in React


**Curriculum:**  
[C#20] Spe - Web Stack Programming  


---

**Project Title:**  
Implement an App in React

**Project Description:**

In this project, you will build a pocket movie app that allows users to keep track of their favorite movies and set up a watch later list. Utilizing the ReactJs knowledge you've accumulated from previous projects, you will develop the interface and display data from an API.

### Learning Objectives:

- Manage state and props in a React component
- Use React hooks to achieve specific behavior
- Implement a design with JSX and CSS (React)
- Implement a frontend app with React

### Requirements:

- Class components are not allowed
- A README.md file, at the root of the project folder, is mandatory
- Try to use ES6 features

### Read or Watch:

- React Hooks
- React Font Awesome
- React Router
- Axios
- ES6
- JWT Authentication

---

## Setting Up the Backend

### Prerequisites:

1. **Installing Docker:**  
   Follow the steps in [this link](https://docs.docker.com/engine/install/ubuntu/) to install Docker based on your system.

2. **Installing Docker-Compose:**  
   Refer to the [official documentation](https://docs.docker.com/compose/install/) to install Docker Compose.

3. **Cloning and Running the Backend Server:**  
   - Clone this repository on your local machine.
   - Navigate into the repository folder and run the following commands:
     ```sh
     docker-compose build --no-cache --force-rm
     docker-compose up
     ```
   - After running the commands, you should see an output indicating that the backend and database are running.

---

## Project Structure

### General Folder Structuring:

```
public/
src/
  assets/
  components/
  routes/
```

Ensure all your source files are under the repository root and not under a subdirectory.

### Package Installation:

You will need the following packages:

- @fortawesome/fontawesome-svg-core 6.1.0
- @fortawesome/free-solid-svg-icons 6.1.0
- @fortawesome/react-fontawesome 0.1.18
- axios 0.26.1
- lodash 4.17.21
- normalize.css 8.0.1

Install them and make sure they are added as dependencies.

---

## Tasks

### 0. Cloning the Figma Project

1. **Create an account on Figma** if you don’t have one.
2. Open the [Figma project](https://www.figma.com/design/RPc247kHDXz5QeFNUM3Gs6/Holbertonschool---Cinema-Guru?node-id=0-1&t=8XfN5YSuf70J9pti-0) and “Duplicate to your Drafts” to have access to all design details.


### 1. Setting up the Workspace

1. **Create React App:**
   ```sh
   yarn create react-app my-app
   ```
2. **Remove unnecessary files:**
   - `src/App.test.js`
   - `src/reportWebVitals.js`
   - `src/setupTests.js`
   - `src/logo.svg`

3. **Ensure the `App` component returns an empty `div` with `className="App"`:**
   ```jsx
   function App() {
     return <div className="App"></div>;
   }
   export default App;
   ```

### 2. Adding General Use Components

Create the following components in `src/components/general/`:

1. **Input Component**
2. **SelectInput Component**
3. **Button Component**
4. **SearchBar Component**

### 3. Initialize the Main App Component

Edit `src/App.js` to include:

- State management using `useState` for `isLoggedIn` and `userUsername`.
- Use `useEffect` to fetch and verify the JWT token from localStorage.
- Conditional rendering for `Dashboard` or `Authentication` components based on `isLoggedIn` state.

### 4. Authentication - Component Behavior

Create the following components in `src/routes/auth/`:

1. **Authentication Component**
2. **Login Component**
3. **Register Component**

### 5. Authentication - API Integration

Implement `handleSubmit` function in `src/routes/auth/Authentication.js` to manage login and registration via API requests using Axios.

### 6. Navigation - Adding the Header

Create the following components:

1. **Header Component** in `src/components/navigation/`
2. **Dashboard Component** in `src/routes/dashboard/`

### 7. Navigation - Sidebar

Create the following components:

1. **Activity Component** in `src/components/`
2. **SideBar Component** in `src/components/navigation/`

### 8. Dashboard Routing

Edit `src/routes/dashboard/Dashboard.js` to include routing using `react-router-dom`.

### 9. Dashboard - Setting Up Child Components

Create the following components in `src/components/movies/`:

1. **Tag Component**
2. **Filter Component**
3. **MovieCard Component**

### 10. Dashboard - Main Pages

Create the following components in `src/routes/dashboard/`:

1. **HomePage Component**
2. **Favorites Component**
3. **WatchLater Component**

---

## Conclusion

This project involves building a full-fledged React application with state management, API integration, and routing. By completing it, you will enhance your skills in React and be able to create a dynamic and responsive web application.

---

