
import image from "/images/img11.jpg";
const Recommendation = () => {
  document.title="Recommendation"
  return (
  
      <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // height: "100vh",
      }}
      className="px-2  flex items-center justify-center h-[100vh]"
    >
      <h1 className="text-center text-xl tracking-wider ml-36 w-1/2">
        VA-YOU provides regular notifications on bill payments by recognizing
        the pattern of the monthly expenses by the user. Your sincere behaviour
        of regular bill payments will be judged by the VA-YOU and the connecting
        offers will be offered like cashback and discounts. Regular discounts on
        the particular product based websites will be provided and user can
        enjoy the best deals without any failure
      </h1>
    </div>

  );
};

export default Recommendation;
