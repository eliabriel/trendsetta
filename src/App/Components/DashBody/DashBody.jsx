import CollabSection from "../BodySections/CollabSection";
import DiscoverSection from "../BodySections/DiscoverSection";
import PreviewSection from "../BodySections/PreviewSection";
import RecuringSection from "../BodySections/RecuringSection";

function DashBody() {
  
  return (
    <div className="">
    <DiscoverSection />
    <CollabSection />
      {/*<RecuringSection />*/}
    <PreviewSection />
    </div>
  )
}

export default DashBody;