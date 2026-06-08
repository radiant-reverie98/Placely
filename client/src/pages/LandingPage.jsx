``
import Footer from '../components/general/Footer';
import Navbar from '../components/general/Navbar'
import AIFeedbackSection from '../components/landing-page/AIFeedbackSection';
import CTA from '../components/landing-page/CTA';
import HeroSection from '../components/landing-page/HeroSection';
import ProblemSection from '../components/landing-page/ProblemSection';
import ProductShowcase from '../components/landing-page/ProductShowCase';
import SolutionSection from '../components/landing-page/SolutionSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0B0F14]">
      <Navbar/>
      <HeroSection/>
      <ProblemSection/>
      <SolutionSection/>
      <ProductShowcase/>
      <AIFeedbackSection/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default LandingPage;
