import image from "/images/img10.jpg";
import Layout from "../layout/Layout";
const Kyc = () => {
  document.title="KYC"
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
      <div className="mt-14 flex  w-full h-full justify-center px-4">
        <h1 className="text-xl font-700  ">
         <h2 className="text-center text-4xl -mb-7 "> Know Your Customer</h2>
          <br />VA-YOU offers a user-friendly interface for seamless e-KYC (Know
          Your Customer) processes, making the provision of customer details
          mandatory. By adhering to the industry's standard KYC norms, users are
          ensured an accurate and efficient submission of required documents,
          simplifying the onboarding process.
        </h1>
      </div>
    </div>
      
  );
};

export default Kyc;
