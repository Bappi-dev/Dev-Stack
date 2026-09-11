
import CardSection, { type IcardType } from "./CardSection";


const DevCard = ({ cardPromise }: IcardType) => {
   return (
      <>

         <div className="container mx-auto space-y-2">
            <h2 className="text-3xl font-bold">Explore the <span className="bg-gradient-to-r from-[#EC4899]  to-[#D81B7E] bg-clip-text text-transparent">Technologies</span></h2>
            <p className="text-gray-500">Pick one technology per category to build your ideal stack.</p>
         </div>
         <div className="grid grid-cols-12 container mx-auto gap-10 mt-12">

            <div className="col-span-9">
               <CardSection cardPromise={cardPromise} />
            </div>
            {/* side items */}
            <div className="col-span-3 border border-gray-200 h-50 rounded-2xl">
               <div className="py-2 space-y-2">
                  <h2 className="text-2xl font-bold px-5">Your Stack</h2>
                  <p className="px-5 text-gray-400 ">No technologies selected yet.</p>
               
               </div>

            </div>
         </div>
      </>
   );
};

export default DevCard;