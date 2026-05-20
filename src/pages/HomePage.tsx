import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Featured } from '@/components/Featured';
import { Contact } from '@/components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <Contact />
    </>
  );
}
