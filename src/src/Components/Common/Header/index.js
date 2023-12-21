import React, { useEffect } from "react";
import "./style.css";
import TemporaryDrawer from "./Drawer";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import CustomizedSwitches from "../ThemeButton";
import { ThemeProvider } from "../../ThemeContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../config/firebase";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      navigate("/home");
    }
  }, [user]);

  function handleLogout() {
    try {
      signOut(auth).then(() => {
        toast.success('Logged Out Successfully!')
        navigate('/')
      }).catch((error) => {
        toast.error(error.message)
      });
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <ThemeProvider>
      <div className="navbar">
        <div>
          {user?<Link to="/home">
            <h1 className="logo">
              CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
            </h1>
          </Link>:<h1 className="logo">
              CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
            </h1>}
          
        </div>
        <div className="links-container">
          <div div className="ab">
            <CustomizedSwitches />
            {user? (
              <>
            <p className="link logout" onClick={handleLogout}>Logout</p>
            <div className="links">
              <Link to="/home">
                <p className="link">Home</p>
              </Link>
              <Link to="/compare">
                <p className="link">Compare</p>
              </Link>
              <Link to="/watchlist">
                <p className="link">Watchlist</p>
              </Link>
              <Link to="/dashboard">
                <Button
                  className="dash"
                  text={"Dashboard"}
                  outlined={false}
                  onClick={() => console.log("btn clicked")}
                />
              </Link>
            </div>
            </>
            ):<></>}
            
          </div>
          <div className="mobile-drawer">
            <TemporaryDrawer />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Header;
