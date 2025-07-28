import { useRouter } from "next/router";
// import { authentication } from "../../../firebase/clientApp";
import { auth } from "../../../firebase/setup";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";
import firebase from "firebase/app";
import { useState } from "react";
import axios from "axios";
import VerifyOtp from "./VerifyOtp";

const Login = () => {
  const [verifyOtpActive, setVerifyOtpActive] = useState(false);
  const [phone, setPhone] = useState();
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(
        auth,
        `+91${phone}`,
        recaptcha
      );
      setUser(confirmation);
      setVerifyOtpActive(true);
      console.log("confirmation=", confirmation);
      // router.push("/verify_otp");
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      const data = await user?.confirm(otp);
      console.log("data", data);
      const apiEndpoint =
        "https://ams.techgebra.com/api/v1/customer-mobile-signin/";
      const dataToSend = {
        username: `${phone}`,
        fcm_token: "qwe",
      };

      const response = await axios.post(apiEndpoint, dataToSend);
      if (response?.data?.status) {
        localStorage.setItem("access", response?.data?.access);
        setMessage("Sign-in successful");
        setPhone("");
        setOtp("");
        router.push("/account_deletion");
      } else {
        setMessage(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
      setMessage("Sign-in failed");
    }
  };
  return (
    <section className="bg-gray-100 flex justify-center items-center p-20 min-h-[calc(100vh-96px)]">
      <div
        className={`bg-white rounded-md shadow-md p-8 w-full sm:max-w-md ${
          verifyOtpActive ? "opacity-0 absolute -z-50" : ""
        } transition-all duration-300 ease-in-out`}
      >
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <p>Enter Your Registered Mail ID</p>
        <div className="flex flex-col gap-8">
          <div>
            <input
              type="email"
              placeholder="Email ID"
              className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
              onChange={({ target }) => setPhone(target?.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md py-2 focus:outline-none hover:bg-blue-600"
              onClick={(e) => {
                sendOtp(e);
              }}
            >
              Login
            </button>
            <div className="flex justify-center mt-4">
              <div id="recaptcha"></div>
            </div>
          </div>
        </div>
      </div>
      <VerifyOtp
        setOtp={setOtp}
        verifyOtp={verifyOtp}
        message={message}
        verifyOtpActive={verifyOtpActive}
      />
    </section>
  );
};

export default Login;
