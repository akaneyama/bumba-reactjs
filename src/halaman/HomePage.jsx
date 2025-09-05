
import TampilanAwal from '../components/tampilanawal';
import KalkulatorKarbon from '../components/KalkulatorKarbon';
import Pohontermonitor from '../components/Pohontermonitor';
import ProgramKami from '../components/ProgramKami';
import MitraKami from '../components/MitraKami';
import DonasiTerkumpul from '../components/DonasiTerkumpul';

function HomePage() {
  return (
    <>
    <TampilanAwal />
    <KalkulatorKarbon />
     <Pohontermonitor/>
    <ProgramKami/> 
    <MitraKami/>
    <DonasiTerkumpul/>
  </>

  );
}
export default HomePage;