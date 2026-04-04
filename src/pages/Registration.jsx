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
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input name="name" placeholder="👤 Name" required />
      <input name="email" placeholder="📧 Email" required />
      <input
        name="password"
        type="password"
        placeholder="🔒 Password"
        required
      />

      <button type="submit">Register</button>
    </form>
  );
}
