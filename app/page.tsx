import Booking from "@/components/Booking";
import Feedback from "@/components/Feedback";
import FinalMessage from "@/components/FinalMessage";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Booking />
      <Feedback />
      <FinalMessage />
    </main>
  );
}
