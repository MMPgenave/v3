import { routes } from "@/app/lib/config/routes";
import { BottomNavButton, GameNavButton , BottomNavButtonImage } from "../../components/base";
export const BottomMenu = () => {
  return (

    <nav style={{'background-color': 'rgb(2 0 65)' , 'border-bottom-color': '#008fff' , padding: '5px'}} className=" fixed bottom-0 md:flex-col md:h-full md:top-12 md:w-1/4 lg:w-1/5 xl:w-1/6 w-full text-secondary flex justify-evenly items-center text-2xl md:text-xl  border-t-2 border-t-primary ">
      <BottomNavButton
        icon="house-fill"
        href={routes.HOME.FEED}
        title="home"
      ></BottomNavButton>
      <BottomNavButtonImage
        icon="CupIcon"
        href={routes.TOURNAMENTS}
        title="tournaments"
      ></BottomNavButtonImage>
      <GameNavButton href={routes.FUN.GAMES} title="games" />
      <BottomNavButton icon="shop" href={"/dashboard/shop/items"} title="shop"></BottomNavButton>
      <BottomNavButton icon="person-circle" href={routes.PROFILE} title="profile"></BottomNavButton>
    </nav>
  );
};
