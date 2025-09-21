import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-black antialiased flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-8 py-12 flex flex-col items-center">
        <Carousel />
      </main>

      <Footer />
    </div>
  );
}