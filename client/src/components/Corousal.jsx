import { Carousel } from 'flowbite-react';
import aerialViewBusinessTeam from '../../Photos_coro/aerial-view-business-team.jpg';
// import femalePlumberWorking from '../../Photos_coro/female-plumber-working-fix-problems-client-s-house.jpg';
import fullShotPeopleCleaning from '../../Photos_coro/full-shot-people-cleaning-office.jpg';
import manElectricalTechnician from '../../Photos_coro/man-electrical-technician-working-switchboard-with-fuses.jpg';
import sidewaysWomanWorking from '../../Photos_coro/mech_img.jpg';

export default function Corousal() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel className="w-full h-full bg-cover bg-center">
        <img src={aerialViewBusinessTeam} alt="Aerial View Business Team" className="w-full h-full object-cover" />
        {/* <img src={femalePlumberWorking} alt="Female Plumber Working Fix Problems Client's House" className="w-full h-full object-cover" /> */}
        <img src={fullShotPeopleCleaning} alt="Full Shot People Cleaning Office" className="w-full h-full object-cover" />
        <img src={manElectricalTechnician} alt="Man Electrical Technician Working Switchboard With Fuses" className="w-full h-full object-cover" />
        <img src={sidewaysWomanWorking} alt="Sideways Woman Working Car Service" className="w-full h-full object-cover" />
      </Carousel>
    </div>
  );
}
