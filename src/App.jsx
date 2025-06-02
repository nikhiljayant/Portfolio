import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";

function App() {
  console.log("Create with ❤️ by Nikhil Jayant");
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
    </>
  );
}

export default App;
