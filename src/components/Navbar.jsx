import { Button } from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { deepOrange } from "@mui/material/colors";
import { logout } from "../config/authSlice";
import Avatar from "@mui/material/Avatar";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const authData = useSelector((state) => state.auth.userData);
  // console.log(authData[0].toupperCase());
  const logOut = () => {
    dispatch(logout());
    navigate("/");
  };
  // useEffect(() => { }, [authStatus]);
  console.log();
  return (
    <div className="bg-black w-full fixed top-0 flex justify-between px-4 py-2 items-center z-[1000]">
      <Link
        to="/"
        className="text-4xl font-extrabold tracking-loose text-white"
      >
        VA-YOU
      </Link>
      <div className="text-red w-[500px] md:block hidden ">
        <ul className="flex justify-evenly  text-white ">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cartdata/4"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Offer
          </NavLink>
          <NavLink
            to="/cartdata/2"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/contactus"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            contact us
          </NavLink>
          <NavLink
            to="/cartdata/5"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Our Recommendations
          </NavLink>
        </ul>
      </div>
      {authStatus ? (
        <div className="flex justify-between gap-4">
          <Button onClick={() => logOut()} variant={"outlined"}>
            Logout
          </Button>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>{authData[0]}</Avatar>
        </div>
      ) : (
        <div className="flex gap-4">
          <Button onClick={() => navigate("/login")} variant={"outlined"}>
            Login
          </Button>
          <Button onClick={() => navigate("/register")} variant={"outlined"}>
            Register
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
