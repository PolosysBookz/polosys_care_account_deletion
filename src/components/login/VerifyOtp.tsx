import React from "react";

const VerifyOtp = ({ verifyOtp, setOtp, message, verifyOtpActive }: any) => {
    const inputfocus = (e: any) => {
        if (e.key === "Delete" || e.key === "Backspace") {
            e.target?.previousElementSibling?.focus();
        } else {
            e.target?.nextElementSibling?.focus();
        }
    };

    return (
        <div
            className={`bg-white rounded-md shadow-md p-8 w-full sm:max-w-md ${
                !verifyOtpActive ? "hidden" : ""
            } transition-all duration-300 ease-in-out`}
        >
            <h2 className="text-2xl font-semibold mb-4">Verify OTP</h2>
            <div>
                <div className="flex gap-2">
                    <input
                        type="text"
                        className="w-full border rounded-md px-3 py-2 text-center focus:outline-none focus:border-blue-500"
                        maxLength={6}
                        onChange={(e) => {
                            setOtp(e.target.value);
                        }}
                    />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                    Enter the 6-digit code sent to your phone
                </p>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white rounded-md py-2 mt-4 focus:outline-none hover:bg-blue-600"
                    onClick={(e) => {
                        verifyOtp(e);
                    }}
                >
                    Verify
                </button>
                {message && <p className="text-gray-600">{message}</p>}
            </div>
            {/* <div className="flex justify-center items-center mt-4">
                    <span className="mr-1">Didn't receive the code?</span>
                    <button className="text-blue-500 focus:outline-none">
                        Resend
                    </button>
                </div> */}
        </div>
    );
};

export default VerifyOtp;
