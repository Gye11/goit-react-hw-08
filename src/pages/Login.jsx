import { useDispatch } from "react-redux";
import { login } from "../redux/auth/operations";

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    dispatch(
      login({
        email: form.email.value,
        password: form.password.value,
      }),
    );

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
