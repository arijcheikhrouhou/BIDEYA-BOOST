import { FaCalendarAlt, FaUserMd, FaMapMarkerAlt, FaEnvelope, FaQuestionCircle, FaPhoneAlt } from "react-icons/fa";
import NavBar from "../homePage/nav";
export default function BookingConfirmation() {
  return (
    <>
      <NavBar />
  
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-yellow-500 text-center py-3">
          <h2 className="text-xl font-semibold text-gray-900">Booking Confirmation</h2>
        </div>

        {/* Success Message */}
        <div className="p-4 text-gray-800">
          <p className="text-lg">🎉 Congratulations! Your booking has been successfully confirmed.</p>
        </div>

        {/* Booking Details */}
        <div className="bg-blue-900 text-white px-4 py-2 font-semibold">Booking Details</div>
        <div className="p-4 space-y-3 text-gray-700">
          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-red-500" />
            <span>Date & Time: <strong>March 7, 2025 - 2:00 PM</strong></span>
          </p>
          <p className="flex items-center gap-2">
            <FaUserMd className="text-yellow-500" />
            <span>Expert: <strong>Dr. Sophie Martin - Physiotherapist</strong></span>
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            <span>Location: <strong>Online (link sent via email)</strong></span>
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-gray-600" />
            <span>A confirmation email has been sent to your address.</span>
          </p>
        </div>

        {/* Available Actions */}
        <div className="bg-blue-900 text-white px-4 py-2 font-semibold">Available Actions</div>
        <div className="p-4 space-y-3">
          <button className="w-full flex items-center gap-2  text-gray-900 px-4 py-2 rounded-md ">
            🟢 Add to calendar
          </button>
          <button className="w-full flex items-center gap-2  text-gray-900 px-4 py-2 rounded-md ">
            🟡 Modify my booking (until March 5, 2025 - 11:59 PM)
          </button>
          <button className="w-full flex items-center gap-2  text-black px-4 py-2 rounded-md ">
            🔴 Cancel the booking
          </button>
        </div>

        {/* Support & Contact */}
        <div className="bg-yellow-500 text-gray-900 px-4 py-2 font-semibold">Support & Contact</div>
        <div className="p-4 space-y-3 text-gray-700">
          <p className="flex items-center gap-2">
            <FaQuestionCircle className="text-red-500" />
            Need help?
          </p>
          <p className="flex items-center gap-2">
            📖 Check the FAQ
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-green-500" />
            Contact us
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
