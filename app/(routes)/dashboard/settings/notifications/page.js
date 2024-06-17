import { List, ListItem as Item } from "@/app/UI/components/base";
import { settings } from "@/app/lib/data/settings";
import Link from "next/link";

const Notifications = () => {
  return (
    <List>
      {settings.notifications.map((item) => (
        <Link className="w-full " href={`/settings/${item}`}>
          <Item>{item}</Item>
        </Link>
      ))}
    </List>
  );
};

export default Notifications;
