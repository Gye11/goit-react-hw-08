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
      <input name="name" placeholder="Name" />
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}
