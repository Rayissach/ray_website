import './App.css';
import NavBar from './components/Navbar';

function App() {
  return (
    <div>
      <Home>
        <NavBar></NavBar>
        <Header></Header>
        <Hero></Hero>
        <About></About>
      </Home>
      <Projects>
        <ProjectCards></ProjectCards>
      </Projects>
      <Contact>
        <ContactForm></ContactForm>
        <Socials></Socials>
      </Contact>
    </div>
  );
}

export default App;
