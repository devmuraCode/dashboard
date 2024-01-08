import AuthPage from "./pages/AuthPage";
import ToasterProvider from "./providers/ToasterProvider";

const App = () => {
  return (
    <div>
      <ToasterProvider/>
      <AuthPage/>
    </div>
  );
};

export default App;
