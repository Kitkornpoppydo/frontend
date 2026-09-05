import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import authService from "../../Service/authService";

function ProfilePage() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const loadProfile = async () => {

      try {

        const userId = localStorage.getItem("userId");

        if (!userId) {
          setError("ไม่พบข้อมูล User");
          return;
        }

        const data =
          await authService.getMe(userId);

        setUser(data);

      } catch (error) {

        console.error(error);

        setError(
          error.response?.data?.message ||
          "ไม่สามารถโหลดข้อมูล Profile ได้"
        );

      } finally {

        setLoading(false);

      }
    };

    loadProfile();

  }, []);


  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center">
        กำลังโหลดข้อมูล...
      </div>
    );

  }


  if (error) {

    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  }


  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-white shadow-sm">

        <div className="max-w-3xl mx-auto px-6 py-4">

          <button
            onClick={() => navigate("/home")}
            className="text-blue-600"
          >
            ← กลับ Home
          </button>

        </div>

      </header>


      {/* Profile */}
      <main className="max-w-3xl mx-auto px-6 py-10">

        <div className="bg-white rounded-2xl shadow-sm p-8">

          <h1 className="text-2xl font-bold mb-8">
            My Profile
          </h1>


          <div className="space-y-5">

            <div>
              <p className="text-sm text-gray-500">
                User ID
              </p>

              <p className="font-medium">
                {user.userId}
              </p>
            </div>


            <div>
              <p className="text-sm text-gray-500">
                ชื่อ
              </p>

              <p className="font-medium">
                {user.firstName} {user.lastName}
              </p>
            </div>


            <div>
              <p className="text-sm text-gray-500">
                Email
              </p>

              <p className="font-medium">
                {user.email}
              </p>
            </div>


            <div>
              <p className="text-sm text-gray-500">
                Phone
              </p>

              <p className="font-medium">
                {user.phone || "-"}
              </p>
            </div>


            <div>
              <p className="text-sm text-gray-500">
                Role
              </p>

              <span className="inline-block px-3 py-1 mt-1 rounded-full bg-blue-100 text-blue-700">
                {user.roleName}
              </span>
            </div>


            <div>
              <p className="text-sm text-gray-500">
                Status
              </p>

              <span className="inline-block px-3 py-1 mt-1 rounded-full bg-green-100 text-green-700">
                {user.status}
              </span>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default ProfilePage;