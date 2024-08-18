import { Field, Form } from "houseform";
import { z } from "zod";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@mui/joy";
const Contact = () => {
  const navigate = useNavigate();

  document.title = "Contact us";
  return (
    <Layout>
      <div className="p-4 w-full  flex justify-center items-center h-[85vh]">
        <div>
          <h1 className="text-4xl mb-8">Contact Us</h1>
          <Form
            onSubmit={(values) => {
              alert("Form was submitted with: " + JSON.stringify(values));
              navigate("/");
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
                          sx={{ width: "400px" }}
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
                <Field name="textbox">
                  {({ value, setValue, onBlur }) => {
                    return (
                      <div>
                        <Textarea
                          value={value}
                          minRows={8}
                          sx={{ marginTop: "20px", width: "400px" }}
                          onBlur={onBlur}
                          variant="outlined"
                          label="comment"
                          onChange={(e) => setValue(e.target.value)}
                          placeholder={"Enter your Query"}
                        />
                      </div>
                    );
                  }}
                </Field>

                <div className="w-[100px] mt-5 mx-auto">
                  <Button
                    disabled={!isValid}
                    type="submit"
                    color="success"
                    variant={"outlined"}
                  >
                    contact
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

export default Contact;
