import Layout from "../layout/Layout";
import Card from "../components/Card";
import img12 from "/images/img12.jpg";
import img2 from "/img2.jpg";
import robo from "/robo.png";
import i1 from "/images/i1.jpeg";
import i2 from "/images/i2.jpeg";
import i3 from "/images/i3.jpeg";
import i4 from "/images/i4.jpeg";
import i5 from "/images/i5.jpeg";
import "../index.css";

// import '../../index.css'
import { TypeAnimation } from "react-type-animation";
import { useMemo } from "react";

const Home = () => {
  document.title = "VA-YOU";
  // const params = useParams();

  const arr = useMemo(() => {
    return [
      { img: img12, heading: "Investment", content: "", ind: 0 },
      { img: i1, heading: "Rate of Interest", content: "", ind: 1 },
      { img: i2, heading: "Personal Profile", content: "", ind: 2 },
      { img: i3, heading: "Know your Customer", content: "", ind: 3 },
      { img: i4, heading: "Recommendation & offer", content: "", ind: 4 },
      { img: i5, heading: "Allocation & colateral", content: "", ind: 5 },
    ];
  }, []);
  return (
    <Layout>
      <main className="flex w-full bg-[#251e1e] items-center justify-between p-4 md:h-[660px] h-[500px] ">
        <div className="md:text-5xl text-2xl text-white  p-4  md:w-[500px]  w-[200px] ">
          <TypeAnimation
            sequence={[
              "VA-You",
              2000,
              "A Personal Finance Virtual Assistant for you.",
              2000,
            ]}
            speed={20}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
        <div className="w-[27vw] mt-[12px]">
          <img
            src={robo}
            alt=""
            className="w-full h-full object-cover object"
          />
        </div>
      </main>
      <div
        style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
        }}
        className="px-2"
      ></div>
      <main className="bg-[#251e1e] w-full pt-10 p-4 ">
        <div className="bg-[#251e1e] justify-between w-full flex-wrap items-center  px-4 flex md:flex-row flex-col gap-y-10 ">
          {arr?.map((element, i) => {
            return (
              <div key={i}>
                <Card
                  img={element.img}
                  heading={element.heading}
                  content={element.content}
                  index={element.ind}
                />
              </div>
            );
          })}
        </div>
      </main>
      {/* <div style={{backgroundImage:URL("img2")}}></div> */}
    </Layout>
  );
};

export default Home;
