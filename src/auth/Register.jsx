import { Field, Form } from "houseform";
import { z } from "zod";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  document.title = "Sign Up";
  return (
    <Layout>
      <div className="p-4 w-full h-[85vh] flex justify-center items-center">
        <div>
          <h1 className="text-4xl mb-8">Register</h1>
          <Form
            onSubmit={(values) => {
              alert("Form was submitted with: " + JSON.stringify(values));
              navigate('/login');
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
                  name="Remail"
                  onBlurValidate={z.string().email("This must be an email")}
                >
                  {({ value, setValue, onBlur, errors }) => {
                    return (
                      <div>
                        <TextField
                          value={value}
                          onBlur={onBlur}
                          variant="outlined"
                          label="email"
                          onChange={(e) => setValue(e.target.value)}
                          placeholder={"Email"}
                        />
                        {errors.map((error) => (
                          <p key={error}>{error}</p>
                        ))}
                      </div>
                    );
                  }}
                </Field>
                <Field name="Phone">
                  {({ value, setValue, onBlur, errors }) => {
                    return (
                      <div>
                        <TextField
                          style={{ marginTop: "10px" }}
                          type="number"
                          value={value}
                          onBlur={onBlur}
                          variant="outlined"
                          label="phone"
                          onChange={(e) => setValue(e.target.value)}
                          placeholder={"Phone Number"}
                        />
                        {errors.map((error) => (
                          <p key={error}>{error}</p>
                        ))}
                      </div>
                    );
                  }}
                </Field>
                <Field
                  name="Rpassword"
                  onChangeValidate={z
                    .string()
                    .min(8, "Must be at least 8 characters long")}
                >
                  {({ value, setValue, onBlur, errors }) => {
                    return (
                      <div>
                        <TextField
                          style={{ marginTop: "10px" }}
                          value={value}
                          onBlur={onBlur}
                          variant="outlined"
                          label="password"
                          onChange={(e) => setValue(e.target.value)}
                          placeholder={"Password"}
                          type="password"
                        />
                        {errors.map((error) => (
                          <p key={error}>{error}</p>
                        ))}
                      </div>
                    );
                  }}
                </Field>
                <Field
                  name="Rconfirmpassword"
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
                        />
                        {isTouched &&
                          errors.map((error) => <p key={error}>{error}</p>)}
                      </div>
                    );
                  }}
                </Field>
                <div>
                  <NavLink to="/login">
                    <p className="text-red-500 text-xs underline py-2">already user?</p>
                  </NavLink>
                </div>
                <div className="w-[100px] mt-5 mx-auto">
                  <Button
                    disabled={!isValid}
                    type="submit"
                    color="success"
                    variant={"outlined"}
                  >
                    Register
                  </Button>
                </div>
              </form>
            )}
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
