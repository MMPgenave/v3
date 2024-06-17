import { CoinBox, ShopItem as Item } from "@/app/UI/components/widgets";
import { ShopItemsContainer as Items, ShopSection as Section } from "@/app/UI/layout";
import { collectibles } from "@/app/lib/data/images";
import Link from "next/link";
const page = () => {
  return (
    <div className="flex justify-center">
      <Section>
        <CoinBox />
        <Items title="game upgrades" total="460">
          {collectibles.map((collectible) => {
            return (
              <Link
                key={collectible.id}
                href={`/dashboard/nft-items/${collectible.id}?price=${300}&name=${collectible.alt}`}
              >
                <Item img={collectible} price={300}></Item>
              </Link>
            );
          })}
        </Items>
        <Items title="banners" total="120">
          {collectibles.map((collectible) => (
            <Link
              key={collectible.id}
              href={`/dashboard/nft-items/${collectible.id}?price=${300}&name=${collectible.alt}`}
            >
              <Item img={collectible} price={89}></Item>
            </Link>
          ))}
        </Items>
        <Items title="chat upgrades" total="94">
          {collectibles.map((collectible) => (
            <Link
              key={collectible.id}
              href={`/dashboard/nft-items/${collectible.id}?price=${300}&name=${collectible.alt}`}
            >
              <Item img={collectible} price={269}></Item>
            </Link>
          ))}
        </Items>
        <Items title="hats & frames" total="101">
          {collectibles.map((collectible) => (
            <Link
              key={collectible.id}
              href={`/dashboard/nft-items/${collectible.id}?price=${300}&name=${collectible.alt}`}
            >
              <Item img={collectible} price={179}></Item>
            </Link>
          ))}
        </Items>
        <Items title="badges & stickers" total="56">
          {collectibles.map((collectible) => (
            <Link
              key={collectible.id}
              href={`/dashboard/nft-items/${collectible.id}?price=${300}&name=${collectible.alt}`}
            >
              <Item img={collectible} price={299}></Item>
            </Link>
          ))}
        </Items>
        <Items title="bundles" total="32">
          {collectibles.map((collectible) => (
            <Link
              key={collectible.id}
              href={`/dashboard/nft-items/${collectible.id}?price=${300}&name=${collectible.alt}`}
            >
              <Item img={collectible} price={2500}></Item>
            </Link>
          ))}
        </Items>
      </Section>
    </div>
  );
};

export default page;
