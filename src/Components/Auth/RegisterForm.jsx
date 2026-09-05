import { useState } from "react";

function RegisterForm({ onSubmit }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="First Name"
        onChange={(e) =>
          setForm({
            ...form,
            firstName: e.target.value,
          })
        }
      />

      <input
        placeholder="Last Name"
        onChange={(e) =>
          setForm({
            ...form,
            lastName: e.target.value,
          })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <input
        placeholder="Phone"
        onChange={(e) =>
          setForm({
            ...form,
            phone: e.target.value,
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value,
          })
        }
      />

      <button type="submit">
        Register
      </button>
    </form>
  );
}

export default RegisterForm;