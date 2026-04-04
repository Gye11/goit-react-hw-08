import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";

export default function Registration() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      register({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      }),
    );

    form.reset();
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Create Account ✨</h2>

        <input name="name" type="text" placeholder="👤 Name" required />

        <input name="email" type="email" placeholder="📧 Email" required />

        <input
          name="password"
          type="password"
          placeholder="🔒 Password"
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
