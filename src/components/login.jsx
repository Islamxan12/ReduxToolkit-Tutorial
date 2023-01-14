import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { icon } from "../constans/index";
import {loginUserStart} from "../slice/auth";
import { Input } from "../ui";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.auth);

  const loginHandler = e => {
    e.preventDefault();
    dispatch(loginUserStart());
  };

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form onSubmit={loginHandler}>
          <img className="mb-2" src={icon} alt="" width="60" height="50" />
          <h1 className="h3 mb-3 fw-normal">Please sign Login</h1>

          <Input state={email} label={"Email adress"} setState={setEmail} />
          <Input
            state={password}  
            label={"Password"}
            type="password"
            setState={setPassword}
          />

          <button
            disabled={isLoading}
            onClick={loginHandler}
            className="w-100 btn btn-lg btn-primary mt-2"
            type="submit"
          >
            {isLoading ? "Loading..." : "login"}
          </button>
        </form>
      </main>
    </div>
  );
}

export default Login;
