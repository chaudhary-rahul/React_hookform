import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { useForm } from "react-hook-form";
function App() {
  const { 
    register,
     handleSubmit,
     formState:{errors}
   } = useForm();
  const onSubmit=(data)=>{
    // e.preventDefault();
      console.log(data)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)} className="container m-auto ">
        <div className="form-control mt-5">
          <input
            placeholder="email"
            name="email"
            {...register("email",{
              required:'email is required',
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message:'email is not valid'
            })}
            className="form-control mt-5"
          />
          {errors.email&& <p>{errors.email.message}</p>}
         
          <input
            placeholder="password"
            type={"password"}
            name="password"
            {...register("password",
            {
              required:'password is required ',
              minLength:6,
              message:'password is not valid'
            })}
            className="form-control mt-5"
          />
          {errors.password && <p>{errors.password.message}</p>}
          {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg">
              Password should be at-least 6 characters.
            </p>
          )}
          <button type="submit" className="btn mt-5 bg-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
