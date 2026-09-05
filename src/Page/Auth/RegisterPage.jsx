import RegisterForm from "../../Components/Auth/RegisterForm";
import authService from "../../Service/authService";

function RegisterPage() {
  const handleRegister = async (data) => {
    try {
      await authService.register(data);

      alert("Register Success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RegisterForm
      onSubmit={handleRegister}
    />
  );
}

export default RegisterPage;