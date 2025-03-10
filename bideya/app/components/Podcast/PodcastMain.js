
import PodcastRecherche from  "./PodcastRecherche";
import PodcastDetails from  "./PodcastDetails";
import Library from "./Library";
import PodcastHeader from "./PodcastHeader";
import PodcastFooter from "./PodcastFooter";
import MiddleContainer from "./MiddleContainer";
const PodcastMain  = () => {
  return (
    <div>
       <PodcastHeader/>
      <PodcastRecherche/>
      <PodcastDetails/> 
      <MiddleContainer/>
      <Library/>
      <PodcastFooter/>

    </div>
  );
};

export default PodcastMain;
