import Head from "next/head";
import fs from "node:fs";
import parse from "node-html-parser";
// import "@/public/assets/css/bootstrap.min.css";
// import "@/public/assets/css/animate.min.css";
// import "@/public/assets/css/animate.min.css";
// import "@/public/assets/css/fontawesome.min.css";
// import "@/public/assets/css/jquery-ui.min.css";
// import "@/public/assets/css/magnific.min.css";
// import "@/public/assets/css/nice-select.min.css";
// import "@/public/assets/css/owl.min.css";
// import "@/public/assets/css/responsive.css";
// import "@/public/assets/css/slick-slide.min.css";
// import "@/public/assets/css/style.css";
const HTMLComponent = ({ filename }) => {
  const htmlContent = fs.readFileSync(`./public/${filename}`, "utf-8");
  const parsedHTML = parse(htmlContent);
  const cssLinks = parsedHTML.querySelectorAll('link[rel="stylesheet"]');
  const body = parsedHTML.querySelector("body");
  return (
    parsedHTML && (
      <div>
        <Head>
          {cssLinks.map((link) => (
            <link key={link.href} rel="stylesheet" href={link.href} />
          ))}
        </Head>
        <div dangerouslySetInnerHTML={{ __html: body.innerHTML }} />
      </div>
    )
  );
};
export default HTMLComponent;
