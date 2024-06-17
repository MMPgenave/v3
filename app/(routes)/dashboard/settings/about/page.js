import { List, ListItem as Item } from "@/app/UI/components/base";
import { settings } from "@/app/lib/data/settings";
import Link from "next/link";

const About = () => {
  return (
    <List>
      {settings.about.map((item) => (
        <Link href={`/settings/${item}`}>
          <Item>{item}</Item>
        </Link>
      ))}
    </List>
  );
};

export default About;
