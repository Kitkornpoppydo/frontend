import { useNavigate } from "react-router-dom";

function HomePage() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-white shadow-sm">

        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-xl font-bold text-blue-600">
            Parking Rental
          </h1>

          <button
            onClick={() => navigate("/profile")}
            className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            Profile
          </button>

        </div>

      </header>


      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-10">

        <h2 className="text-3xl font-bold text-gray-800">
          ยินดีต้อนรับ
        </h2>

        <p className="mt-2 text-gray-500">
          ค้นหาที่จอดรถที่เหมาะกับคุณ
        </p>


        {/* Menu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">


          {/* Search Parking */}
          <div className="bg-white rounded-xl shadow-sm p-6">

            <h3 className="text-xl font-semibold">
              ค้นหาที่จอดรถ
            </h3>

            <p className="text-gray-500 mt-2">
              ค้นหาที่จอดรถตามสถานที่และพื้นที่
            </p>

            <button
              onClick={() => navigate("/parking")}
              className="mt-5 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              ค้นหาที่จอดรถ
            </button>

          </div>


          {/* Profile */}
          <div className="bg-white rounded-xl shadow-sm p-6">

            <h3 className="text-xl font-semibold">
              โปรไฟล์
            </h3>

            <p className="text-gray-500 mt-2">
              ดูข้อมูลบัญชีของคุณ
            </p>

            <button
              onClick={() => navigate("/profile")}
              className="mt-5 w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
            >
              ดู Profile
            </button>

          </div>


          {/* Owner Apply */}
          <div className="bg-white rounded-xl shadow-sm p-6">

            <h3 className="text-xl font-semibold">
              สมัครเป็น Owner
            </h3>

            <p className="text-gray-500 mt-2">
              สมัครเพื่อเป็นเจ้าของพื้นที่จอดรถ
            </p>

            <button
              onClick={() => navigate("/owner/apply")}
              className="mt-5 w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              สมัครเป็น Owner
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default HomePage;