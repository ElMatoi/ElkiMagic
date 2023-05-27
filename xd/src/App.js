
import './App.css';
import { PrimerComponente } from './componentes/PrimerComponente';
import { SegundoComponente } from './componentes/SegundoComponente';
import { TercerComponente } from './componentes/TercerComponente';



function Header() {
  return (
    <header>
      <PrimerComponente/>
      <SegundoComponente/>
    </header>
  );

}

function MainContent() {
  return (
    <main>
     <TercerComponente/>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
