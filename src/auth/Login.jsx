import { Field, Form } from "houseform";
import { z } from "zod";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import Layout from "../layout/Layout";
import { useDispatch } from "react-redux";
import { login } from "../config/authSlice";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  document.title = "Login";
  return (
    <div>
      <Layout>
        <div className="p-4 w-full h-[85vh] flex justify-center items-center">
          <div>
            <h1 className="text-4xl  mb-8">Login</h1>
            <Form
              onSubmit={(values) => {
                alert("Form was submitted with: " + JSON.stringify(values));
                dispatch(login(values));
                navigate(
                  location?.state?.prevURL ? location?.state?.prevURL : "/"
                );
              }}
            >
              {({ isValid, submit }) => (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submit();
                  }}
                >
                  <Field
                    name="email"
                    onBlurValidate={z.string().email("This must be an email")}
                  >
                    {({ value, setValue, onBlur, errors }) => {
                      return (
                        <div>
                          <TextField
                            value={value}
                            onBlur={onBlur}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder={"Email"}
                            variant="outlined"
                            label="email"
                            contained={value.toString()}
                            autoComplete=""
                            className="text-white"
                          />
                          {errors.map((error) => (
                            <p key={error}>{error}</p>
                          ))}
                        </div>
                      );
                    }}
                  </Field>
                  <Field
                    name="password"
                    onChangeValidate={z
                      .string()
                      .min(8, "Must be at least 8 characters long")}
                  >
                    {({ value, setValue, onBlur, errors }) => {
                      return (
                        <div>
                          <TextField
                            className="text-white"
                            style={{ marginTop: "10px" }}
                            value={value}
                            onBlur={onBlur}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder={"Password"}
                            variant="outlined"
                            label="password"
                            type="password"
                            autoComplete=""
                            contained={value.toString()}
                          />
                          {errors.map((error) => (
                            <p key={error}>{error}</p>
                          ))}
                        </div>
                      );
                    }}
                  </Field>
                  <Field
                    name="confirmpassword"
                    listenTo={["password"]}
                    onChangeValidate={(val, form) => {
                      if (val === form.getFieldValue("password")?.value) {
                        return Promise.resolve(true);
                      } else {
                        return Promise.reject("Passwords must match");
                      }
                    }}
                  >
                    {({ value, setValue, onBlur, errors, isTouched }) => {
                      return (
                        <div>
                          <TextField
                            value={value}
                            style={{ marginTop: "10px" }}
                            onBlur={onBlur}
                            variant="outlined"
                            label="confirm"
                            onChange={(e) => setValue(e.target.value)}
                            placeholder={"Password Confirmation"}
                            type="password"
                            autoComplete=""
                            contained={value.toString()}
                          />
                          {isTouched &&
                            errors.map((error) => <p key={error}>{error}</p>)}
                        </div>
                      );
                    }}
                  </Field>
                  <div>
                    <NavLink to="/register">
                      <p className="text-red-500 text-xs underline py-1">
                        New to our website ?
                      </p>
                    </NavLink>
                  </div>
                  <div className="w-[100px] mt-5 mx-auto">
                    <Button
                      disabled={!isValid}
                      type="submit"
                      color="success"
                      variant={"outlined"}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              )}
            </Form>
          </div>
        </div>
      </Layout>
    </div>
  );
}

// This is simulating a check against a database
