import image from "/images/img133.jpg";
const Allocation = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
      }}
      className="px-2"
    >
      <div className="relative top-[10%] ">
        <h1 className="text-center font-semibold text-7xl text-white mt-14 relative top-[40%]">
          Allocation <span className="text-red-500">&</span> order
        </h1>
        <h2 className="mt-[200px] w-[680px] text-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          obcaecati tempora? Facilis odio neque sapiente libero a sed asperiores
          perspiciatis, facere maiores, laudantium, doloribus nobis expedita
          magni harum quisquam eum reprehenderit minima? Molestias quia ipsam
          aspernatur, labore reprehenderit libero accusamus!
        </h2>
      </div>
    </div>
  );
};

export default Allocation;
