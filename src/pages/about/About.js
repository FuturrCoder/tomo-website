import { HeroText } from "../../components/StyledTags";
import ActionButton from "../../components/ActionButton";

function About() {
  return (
    <div className="px-12 pt-16 lg:w-1/2 flex flex-col items-start gap-5">
      <HeroText>About Us</HeroText>
      <p className="text-neutral-gray">Sunt minim sint aliqua excepteur reprehenderit in dolore laboris. Veniam nisi
        nisi laborum ex et ad laboris ut aliquip ut incididunt do. Ad est est incididunt nostrud nulla cillum nulla.</p>
      <ActionButton to="/classes" text="Get Started" className="bg-primary text-white"/>
      <h1 className="text-5xl font-bold font-display text-primary pt-10">Lorem Ipsum</h1>
      <p className="text-neutral-gray">Sunt minim sint aliqua excepteur reprehenderit in dolore laboris. Veniam nisi
        nisi laborum ex et ad laboris ut aliquip ut incididunt do. Ad est est incididunt nostrud nulla cillum nulla.</p>
    </div>
  );
}

export default About;