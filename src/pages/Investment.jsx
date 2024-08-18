import image from "../../public/images/img8.jpg";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Investment = () => {
  document.title = "Investment";
  const location = useLocation();
      const authStatus = useSelector((state) => state.auth.status);
  // setTimeout(()=>{
  //   <div>sign in please</div>
  // },3000)

   if (!authStatus) {
     return <Navigate to="/login" state={{ prevURL: location.pathname }} replace />;
   }
  // useEffect(()=>{},[authStatus])
  return (
    <div>
      {authStatus ? (
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
          <div className="flex items-center justify-around h-[100vh] mt-14">
            <h1 className="w-1/2 text-lg text-blue-700">
              VA-You offers comprehensive guidance to individuals seeking to
              make informed investment decisions. We achieve this by
              meticulously evaluating the investment strategies offered by
              various financial institutions and marketplaces. Our objective is
              to recommend investment plans that align with the unique financial
              profiles of our users. By tailoring our recommendations to their
              income levels, we design a strategic roadmap that empowers
              investors to effectively oversee and administer their investment
              plans.
            </h1>
            <div>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const formData = new FormData(event.currentTarget);
                  const formJson = Object.fromEntries(formData.entries());
                  alert(JSON.stringify(formJson));
                }}
              >
                <Stack spacing={2} alignItems="flex-start">
                  <Select
                    placeholder="Savings"
                    name="invest"
                    required
                    sx={{ minWidth: 200 }}
                  >
                    <Option value="5to10">5 to 10 inr</Option>
                    <Option value="10to20">10 to 20 inr</Option>
                    <Option value="20to50">20 to 50 inr</Option>
                    <Option value="50to100000">50 to 100000 inr</Option>
                    <Option value="50to100000">100000 to 1000000 inr</Option>
                  </Select>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{ backgroundColor: "orange", color: "black" }}
                  >
                    Submit
                  </Button>
                </Stack>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[80vh] text-center flex items-center justify-center">
          <h1 className="text-5xl text-black ">Login to continue 🥺</h1>
        </div>
      )}
    </div>
  );
};

export default Investment;
