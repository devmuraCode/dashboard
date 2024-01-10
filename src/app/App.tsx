import { Navigate, Route, Routes } from "react-router-dom";
import About from "../components/About";
import { REFRESH_TOKEN_KEY } from "../constants";
import MainLayout from "../layout/layout";

/**
 * ProtectedRoute component.
 * 
 * @param children - The children components to render.
 * @returns The rendered children components if a refresh token exists, or a redirect to the login page otherwise.
 */
const ProtectedRoute = ({ children }: { children: any }) => {
  // Check if a refresh token exists
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

  // Redirect to the login page if no refresh token exists
  if (!refreshToken) {
    return <Navigate to="/login" replace />;
  }

  // Render the children components
  return children;
};

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<MainLayout />} />
      <Route
        index
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
