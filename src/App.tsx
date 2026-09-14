import { RouterProvider, useRouter } from './context/RouterContext';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Nav } from './components/Nav';
import { Preloader } from './components/Preloader';
import { Problem } from './components/Problem';
import { Process } from './components/Process';
import { QuoteBand } from './components/QuoteBand';
import { Results } from './components/Results';
import { ScrollProgress } from './components/ScrollProgress';
import { Services } from './components/Services';
import { ServiceDetail } from './components/ServiceDetail';
import { Testimonials } from './components/Testimonials';
import { ToTop } from './components/ToTop';
import { Why } from './components/Why';

function MainLayout() {
  const { serviceSlug } = useRouter();

  return (
    <>
      <ScrollProgress />
      <Preloader />
      <Nav />
      <main id="main-content">
        {serviceSlug ? (
          <ServiceDetail slug={serviceSlug} />
        ) : (
          <>
            <Hero />
            <Marquee />
            <Problem />
            <QuoteBand />
            <Services />
            <Why />
            <Process />
            <Results />
            <Testimonials />
            <Faq />
            <FinalCta />
          </>
        )}
      </main>
      <Footer />
      <ToTop />
    </>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <MainLayout />
    </RouterProvider>
  );
}
