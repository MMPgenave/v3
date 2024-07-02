import { List, ListItem as Item } from "@/app/UI/components/base";
import { settings } from "@/app/lib/data/settings";
import Link from "next/link";

const Language = () => {
  return (
    <List>
      {settings.language.map((item) => (
        <Link className="w-full " href={`/settings/${item}`} key={item}>
          <Item>{item}</Item>
        </Link>
      ))}
    </List>
  );
};

export default Language;
