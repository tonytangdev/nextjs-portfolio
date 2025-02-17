import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ReviewsSection from "./components/ReviewsSection";

export const metadata = {
  title: "Tony Tang - Lead Tech Web Developer in Paris | Web & Mobile Development, Tutoring",
  description: "Tony Tang is a Paris-based Lead Tech Web Developer specializing in web and mobile development, tutoring, and mentoring. Explore projects and get in touch for collaboration.",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 py-4 mx-auto flex flex-col center">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <ReviewsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
