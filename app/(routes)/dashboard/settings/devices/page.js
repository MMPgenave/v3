import { List, ListItem as Item } from "@/app/UI/components/base";
import { settings } from "@/app/lib/data/settings";
import Link from "next/link";

const Devices = () => {
  return (
    <List>
      {settings.devices.map((item) => (
        <Link href={`/settings/${item}`} key={item}>
          <Item>{item}</Item>
        </Link>
      ))}
    </List>
  );
};

export default Devices;
