import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TrustSection from './components/TrustSection';
import HowItWorks from './components/HowItWorks';
import RequestForm from './components/RequestForm';
import Articles from './components/Articles';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ServicePage from './components/ServicePage';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <TrustSection />
      <HowItWorks />
      <RequestForm />
      <Articles />
      <Testimonials />
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service/:serviceId" element={<ServicePage />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
