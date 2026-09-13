
import CardSection, { type IcardType } from "./CardSection";
import YourStack from "./YourStack";

const DevCard = ({ cardPromise, isSelected, setIsSelected }: IcardType) => {


   return (
      <>
         <div className="container mx-auto space-y-2">
            <h2 className="text-3xl font-bold">Explore the <span className="bg-gradient-to-r from-[#EC4899]  to-[#D81B7E] bg-clip-text text-transparent">Technologies</span></h2>
            <p className="text-gray-500">Pick one technology per category to build your ideal stack.</p>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-12 container mx-auto gap-10 mt-12">

            <div className="col-span-9">
               <CardSection cardPromise={cardPromise} isSelected={isSelected} setIsSelected={setIsSelected} />
            </div>
            {/* side items */}
            <div className="col-span-3">
               <YourStack isSelected={isSelected} setIsSelected={setIsSelected} />
            </div>
         </div>
      </>
   );
};

export default DevCard;