import { useState } from "react";
import DeletePopUp from "./DeletePopUp";

const AccountDeletion = () => {
    const [deletePopupActive, setDeletePopupActive] = useState(false);
    return (
        <>
            <section
                className={`py-14 min-h-[calc(100vh-92px)] flex justify-center items-center ${
                    deletePopupActive ? "opacity-0 absolute -z-50" : ""
                } transition-all duration-300 ease-in-out`}
            >
                <section className="wrapper">
                    <div
                        className={`border border-red-500 p-10 rounded-lg max-w-3xl mx-auto`}
                    >
                        <p className="text-2xl mb-6">Account Deletion</p>
                        <p className="text-base flex flex-col gap-4">
                            <span>
                                Once you delete the account, there is no going
                                back. Please be certain.
                            </span>
                            <span>
                                Deleting your account will result in the
                                permanent removal of all your personal
                                information, including profile details, contact
                                information, and purchase history. This action
                                cannot be undone, and you will no longer have
                                access to any services or benefits provided by
                                our platform.
                            </span>
                            <span>
                                Before proceeding with the account deletion,
                                please consider the following:
                            </span>
                            <span>
                                1. Loss of Data: All your account data,
                                including preferences, settings, and associated
                                information, will be irretrievably deleted.
                            </span>
                            <span>
                                2. Inability to Recover: You will no longer be
                                able to access your account or retrieve any
                                information related to it in the future.
                            </span>
                            <span>
                                3. Loss of Privileges: Any benefits, rewards, or
                                special access tied to your account will be
                                forfeited.
                            </span>
                        </p>
                        <button
                            className="bg-red-500 text-white w-full py-3 rounded-lg mt-6"
                            onClick={() => {
                                setDeletePopupActive(true);
                            }}
                        >
                            Delete Account
                        </button>
                    </div>
                </section>
            </section>
            <DeletePopUp
                deletePopupActive={deletePopupActive}
                setDeletePopupActive={setDeletePopupActive}
            />
        </>
    );
};

export default AccountDeletion;
