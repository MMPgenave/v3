import React from "react";
import { CoinBox, ShopItem as Item } from "@/app/UI/components/widgets";
import {
  ShopItemsContainer as Items,
  ShopSection as Section,
} from "@/app/UI/layout";
import { packagesitem } from "@/app/lib/data/images";

const page = () => {
  return (
      <Section>
        <CoinBox />
        <Items title="packages" total="5">
          {packagesitem.map((packageitem) => (
              <Item key={packageitem.id} img={packageitem} price={packageitem.price}></Item>
          ))}
        </Items>

      </Section>
  );
};


export default page;
