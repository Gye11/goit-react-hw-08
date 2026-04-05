import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(register({ name, email, password }));

    form.reset();
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <h2 className={css.title}>Create Account</h2>

        <input name="name" type="text" placeholder="👤 Name" required />

        <input name="email" type="email" placeholder="📧 Email" required />

        <input
          name="password"
          type="password"
          placeholder="🔒 Password"
          required
        />

        <button type="submit" className={css.button}>
          Register
        </button>
      </form>
    </div>
  );
}
