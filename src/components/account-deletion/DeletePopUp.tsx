import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const DeletePopUp = ({ deletePopupActive, setDeletePopupActive }: any) => {
    const [message, setMessage] = useState("");
    const router = useRouter();
    const handleDelete = () => {
        const accessToken = localStorage.getItem("access");
        console.log("accessToken", accessToken);

        if (accessToken) {
            const config = {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            };

            axios
                .delete(
                    "https://ams.techgebra.com/api/v1/delete-user-account/",
                    config
                )
                .then((response) => {
                    console.log("User account deleted:", response.data);
                    router.push("/");
                })
                .catch((error) => {
                    console.error("Error deleting user account:", error);
                    setMessage("Error deleting user account");
                });
        } else {
            console.error("Access token not found in local storage");
        }
    };
    return (
        <section
            className={`py-14 min-h-[calc(100vh-92px)] flex justify-center items-center ${
                !deletePopupActive ? "hidden" : ""
            } transition-all duration-300 ease-in-out`}
        >
            <section className="wrapper">
                <div className="p-10 rounded-lg max-w-3xl mx-auto">
                    <p className="text-2xl mb-6 text-center">
                        Attention: Account Deletion Confirmation
                    </p>
                    <p className="text-center text-base flex flex-col gap-4 max-w-2xl mx-auto">
                        <span className="font-semibold">
                            If you are absolutely certain about deleting your
                            account and understand the consequences mentioned
                            above, please confirm your intention by clicking the
                            “Delete Account“ button below. Alternatively, if you
                            have changed your mind or require further
                            assistance, please select the “Cancel“ option.
                        </span>
                        <span>
                            Please note that by proceeding with the account
                            deletion, you agree to release AMS from any
                            liability or responsibility pertaining to the
                            removal of your personal information and the
                            termination of your account.
                        </span>
                    </p>
                    <div className="flex items-center gap-4">
                        <button
                            className="bg-red-500 text-white w-full py-3 rounded-lg mt-6"
                            onClick={() => {
                                // setDeletePopupActive(true);
                                handleDelete();
                            }}
                        >
                            Delete Account
                        </button>
                        <button
                            className="bg-blue-500 text-white w-full py-3 rounded-lg mt-6 cursor-pointer"
                            onClick={() => {
                                setDeletePopupActive(false);
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                    {message && <p className="text-red-500">{message}</p>}
                </div>
            </section>
        </section>
    );
};

export default DeletePopUp;
