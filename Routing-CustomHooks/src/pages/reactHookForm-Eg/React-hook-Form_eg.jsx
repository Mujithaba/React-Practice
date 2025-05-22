import { useForm } from "react-hook-form";

export default function ReactHookFormEg() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  function submitData(data) {
    console.log(data, "uui");
    reset()
  }

  console.log(register,'000')


  return (
    <div>
      <h2 style={{ textAlign: "center" }}>React Hook Form</h2>
      <form onSubmit={handleSubmit(submitData)}>
        <div>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            placeholder="Enter Your Email..."
          />
          {errors.email && errors.email.type === "required" ? (
            <p style={{ color: "red", fontWeight: "bold" }}>
              Email is required
            </p>
          ) : null}
        </div>
        <div>
          <input
            type="password"
            name="password"
            {...register("password", { required: true, minLength: 6 })}
            placeholder="Enter your password"
          />
          {errors.password && errors.password.type === "required" ? (
            <p style={{ color: "red", fontWeight: "bold" }}>Password is required</p>
          ) : null}
          {errors.password && errors.password.type === "minLength" ? (
            <p style={{ color: "red", fontWeight: "bold" }}>Password must be 6 character, Please verify.</p>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
