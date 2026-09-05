import LoginForm from "../../Components/Auth/LoginForm";
import authService from "../../Service/authService";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    try {

      const response = await authService.login(data);

      // เก็บข้อมูล Login
      localStorage.setItem("token", response.token);
      localStorage.setItem("userId", response.userId);
      localStorage.setItem("roleId", response.roleId);

      // Login สำเร็จ → Tenant Home
      if (response.roleId === 1) {
        navigate("/admin");
      }
      else if (response.roleId === 2) {
        navigate("/owner");
      }
      else {
        navigate("/home");
      }

    } catch (error) {

      console.error(error);

    }
  };

  return (
    <LoginForm onSubmit={handleLogin} />
  );
}

export default LoginPage;