import BannerMovie from "./components/Banner";
import CardFilm from "./components/CardFilm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import MainLayout from "./layout/MainLayout/MainLayout";
import AuthPage from "./pages/Auth";
import LoginForm from "./pages/Auth/LoginForm";
import useRoutesElements from "./routes/useRoutesElements";

function App() {
  const routeElement = useRoutesElements();
  return (
    <>
      {/* <Header />
      <AuthPage />
      <LoginForm />
      <CardFilm />
      <BannerMovie />
      <Footer /> */}
      {/* <Header /> */}
      {routeElement}
      {/* <Footer /> */}
    </>
  );
}

export default App;
