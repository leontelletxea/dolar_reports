import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import About from './components/About';
import Maps from './components/Maps';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-black antialiased">
      <Navbar />
  
      <Carousel />

      <About />
      <Maps />
      
      <Footer />
    </div>
  );
}