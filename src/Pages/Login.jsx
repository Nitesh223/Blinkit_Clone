import { IoArrowBack } from "react-icons/io5";
import logo from "../assets/app_logo.svg"

const LoginModal = ({ closeModal }) => {
    return (
        <div className="fixed inset-0 backdrop:blur-3xl bg-opacity-60 flex items-center justify-center z-50" onClick={closeModal}>

            <div className="bg-white w-[90%] sm:w-[420px] rounded-2xl p-8 shadow-lg relative
             " onClick={(e) => e.stopPropagation()}>

                <button className="absolute left-4 top-4 text-gray-600" onClick={closeModal}>
                    <IoArrowBack size={20} className="cursor-pointer"/>
                </button>

                <div className="flex justify-center mb-3">
                    <div className="w-14 h-14  rounded-xl flex items-center justify-center font-bold text-xl text-[#00A82D]">
                        <img src={logo} alt="" />
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-center">India's last minute app</h2>
                <p className="text-center text-gray-600 mb-6">Log in or Sign up</p>

                <div className="border rounded-lg p-3 flex items-center gap-3 mb-4">
                    <span className="font-medium">+91</span>
                    <input
                        type="number"
                        placeholder="Enter mobile number"
                        className="w-full outline-none"
                    />
                </div>

                <button className="w-full bg-gray-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-gray-800">
                    Continue
                </button>

                {/* Terms */}
                <p className="text-center text-gray-600 text-xs mt-4">
                    By continuing, you agree to our{" "}
                    <span className="underline cursor-pointer">Terms of service</span> &
                    <span className="underline cursor-pointer"> Privacy policy</span>.
                </p>
            </div>
        </div>
    );
};

export default LoginModal;
