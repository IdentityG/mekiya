import Category from '../components/Category';
import Contact from '../components/Contact';
import Feature from '../components/Feature';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Service from '../components/Service';
import Status from '../components/Status';

export default function Home() {
  return (
    <div>
    
      <Hero />
      <main className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="mt-12">
          <Status /> 
          <Category /> 
          <Feature />
          <Service /> 
          <Gallery />
          <Contact />
        </div>
      </main>
    </div>
  );
}
