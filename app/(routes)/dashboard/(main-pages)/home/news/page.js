import { news } from "@/app/lib/data/news";
const News = () => {
  return (
    <div className="flex flex-col gap-2  bg-[url('/img/img7.jpeg')]  items-center p-6 pt-8">
      {news.map((item) => (
        <Items key={item.title} title={item.title} icon={item.icon} />
      ))}
    </div>
  );
};

export default News;

const Items = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-4 p-4 w-full bg-slate-100 rounded-md ">
      <i className={`bi bi-${icon} text-purple font-bold text-2xl `}></i>
      <div className=" text-slate-600 text-xl capitalize font-bold">{title}</div>
    </div>
  );
};
