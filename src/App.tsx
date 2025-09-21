import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import About from './components/About';
import Maps from './components/Maps';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-black antialiased flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto py-14 flex flex-col items-center">
        <Carousel />
      </main>

      <About />
      <Maps />
      <Footer />
    </div>
  );
}