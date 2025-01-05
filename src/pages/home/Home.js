import Subtitle from "./Subtitle";
import ActionButtons from "./ActionButtons";
import { HeroText } from "../../components/StyledTags";

function Home() {
  return (
    <div className="px-8 pt-48 pb-8 flex flex-col gap-5 items-center text-center">
      <HeroText>Connect. Chat. Study.</HeroText>
      <Subtitle/>
      <ActionButtons/>
    </div>
  );
}

export default Home;