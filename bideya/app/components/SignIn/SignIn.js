'use client';
import { FaRegSquareCheck } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="border-2 border-[#E4E5E0] flex bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl w-full">
        {/* Welcome section */}
        <div
          className="relative w-[50%] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: 'url(/img2.jpg)',
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
          <div className="relative z-10 bg-[#D9D9D9] rounded-[20px] p-8 w-[90%] h-[90%] text-center">
            <h1 className="text-3xl font-bold text-[#013069]">🚀 WELCOME 🚀</h1>
            <h2 className="text-xl font-semibold mt-2 text-[#013069]">🚀 TO BIDEYA BOOST 🚀</h2>
            <p className="mt-4 text-sm Konkhmer Sleokchher font-semibold text-[#013069]">
              Your future starts here! Bideya Boost empowers students and graduates with <u>personalized guidance</u>, <u>expert mentorship</u>, and <u>real-world opportunities</u> to make informed career and education choices.
            </p>
            <ul className="mt-6 text-sm text-[#013069] Konkhmer Sleokchher font-semibold space-y-2">
              <li> Discover your strengths</li>
              <li> Gain expert insights</li>
              <li> Connect with professionals</li>
              <li> Unlock your potential</li>
            </ul>
            <div className="mt-6">
              <p className="text-md text-[#013069] font-semibold ">
                Log in now and take control of your journey!
              </p>
              <div className="w-full h-[1px] bg-[#013069] my-5"></div>
              <p className="mt-2 text-sm text-[#013069] text-center">
                Follow us on our social media
              </p>
            </div>
            <div className="mt-4 flex justify-center space-x-5">
              <FaFacebook className="text-[#1877F2] text-2xl hover:scale-100 transition-transform cursor-pointer" />
              <FaInstagram className="text-[#C13584] text-2xl hover:scale-100 transition-transform cursor-pointer" />
              <FaXTwitter className="text-black text-2xl hover:scale-100 transition-transform cursor-pointer" />
              <FaYoutube className="text-red-600 text-2xl hover:scale-100 transition-transform cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Sign-In Section */}
        {/* Sign-In Section */}
<div className="p-4 w-[50%]">
  <h2 className="text-3xl font-bold text-[#013069] text-center mb-6">Sign in</h2> {/* Added mb-6 for margin-bottom */}
  <form className="space-y-2 rounded-[20px]">
    <div className="grid grid-cols-2 gap-4">
      <input type="text" placeholder="Full Name" className="input-field" />
      <select className="input-field">
        <option>Profession</option>
        <option>Student</option>
        <option>Graduate</option>
        <option>Professional</option>
      </select>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <input type="text" placeholder="Phone" className="input-field" />
      <input type="date" className="input-field" />
    </div>
    <input type="text" placeholder="Scholar Level" className="input-field" />
    <input type="email" placeholder="Email" className="input-field" />
    <input type="password" placeholder="Password" className="input-field" />

    <div className="flex items-center justify-center my-6 w-[400px] mx-auto">
      <div className="w-[400%] h-px bg-[#E4E5E0]"></div>
      <span className="mx-4 text-[12px] text-[#E4E5E0]">OR</span>
      <div className="w-[400%] h-px bg-[#E4E5E0]"></div>
    </div>

    <div className="text-center">
      <button
        type="button"
        className="w-[300px] h-[35px] text-131900 rounded-md mt-4 focus:outline-none focus:ring-2 border-2 border-[#E4E4E0] flex items-center justify-center mx-auto"
      >
        <FcGoogle className="w-5 h-5 mr-3" />
        <span>Sign in with Google</span>
      </button>
    </div>

    <div className="flex items-center mt-4 space-x-1">
      <FaRegSquareCheck className="text-[#0C9BAB] mr-2 h-4 w-4 ml-12" />
      <span className="text-sm text-gray-600">
        I acknowledge and accept the <a href="#" className="text-blue-600">terms and conditions</a>.
      </span>
    </div>

    <div className="text-center">
      <button
        type="submit"
        className="mt-6 py-2 w-[250px] h-[35px] bg-blue-600 text-white rounded-[30px] hover:bg-blue-700 transition"
      >
        Sign In
      </button>
    </div>
  </form>
</div>
</div>

      <style jsx>{`
        .input-field {
          padding: 10px;
          outline: none;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 20px;
          width: 100%;
          background-color: #E7E7E7;
        }
        .input-field:focus {
          border-color: #013069;
          box-shadow: 0 0 3px rgba(1, 48, 105, 0.5);
        }
      `}</style>
    </div>
  );
}