import img from "/images/chart.jpg";
import { useSelector } from "react-redux";
import { Navigate, NavLink, useLocation } from "react-router-dom";
const PersonalProfile = () => {
  document.title = "Profile";
  const authStatus = useSelector((state) => state.auth.status);
  const location = useLocation();

  if (!authStatus) {
    return <Navigate to="/login" state={{ prevURL: location.pathname }} replace />;
  }

  return (
    <div className=" max-w-[1280px] h-[80vh] mx-auto px-5">
      {authStatus === true ? (
        <main>
          <h1 className="text-5xl px-8 pt-10 mt-16 ">
            Hello <span className="text-orange-500">Model!</span>
          </h1>
          <div className=" flex md:flex-row flex-col -gap-y-10 w-full justify-between items-center px-5 h-full h-[85vh] mb-6 ">
            <div>
              <h1 className="text-[1.5vw] ">
                {" "}
                <br />
                Your Income: 18 LPA <br />
                <span className="mt-5 block">
                  Your Expenses: <br />
                  <br />
                  <div className="ml-16">
                    {" "}
                    <span>
                      Clothing: 18% <br />
                      <br /> Fooding: 36%
                      <br />
                      <br />
                      Recharge And Bills: 10% <br />
                    </span>
                  </div>
                </span>
                <span className="mt-[30px] ml-16 block">
                  {" "}
                  Travel: 2% <br />
                  <br />
                  Miscellaneous: 34%
                </span>
              </h1>
            </div>
            <figure className="md:w-[520px] w-[360px]">
              <img src={img} className="w-full h-full object-cover" alt="" />
            </figure>
          </div>
        </main>
      ) : (
        <div className="flex items-center justify-center w-full h-[85vh] ">
          <NavLink to="/login" className="text-[2.6vw]">
            Login to continue 🥺
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default PersonalProfile;
