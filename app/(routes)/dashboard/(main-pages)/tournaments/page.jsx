import { Section } from "@/app/UI/layout";
import { tournaments } from "@/app/lib/data/tournaments";
import Image from "next/image";
const Tournaments = () => {
  return (
    <Section className="flex flex-col gap-3 bg-[url('/img/img7.jpeg')] max-sm:mt-[164px] mt-[112px] max-sm:pb-[70px]">
      {tournaments.map((item) => (
        <Card key={item.description} index={item.id} imgUrl={item.imgUrl} description={item.description} />
      ))}
    </Section>
  );
};

export default Tournaments;

const Card = ({ index, imgUrl, description }) => {
  return (
    <div className={`bg-blackTheme flex items-center rounded-md justify-between  pr-4  w-full py-2`}>
      <div className="flex items-center gap-2">
        <div className="flex flex-col gap-1 items-center">
          <div className=" bg-[#FA8A4A] text-xs px-2  lg:px-4 text-slate-200 ">1st PRIZE</div>
          <Image src={imgUrl} height={60} width={60} alt="f" className=" rounded object-contain " />
        </div>
        <div>
          <div className=" text-[#FFE792] capitalize font-bold md:text-lg text-md ">Tournament</div>
          <div className=" text-sm max-sm:line-clamp-1">{description}</div>
        </div>
      </div>
      <div className=" bg-gold rounded-md px-3 py-1 flex items-center gap-2 w-fit cursor-pointer ml-2 ">
        <i class="bi bi-coin text-yellow-600"></i>
        <div className=" text-black">Join</div>
      </div>
    </div>
  );
};
