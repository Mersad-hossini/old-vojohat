import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Form } from "react-bootstrap";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
  phoneValidator,
} from "../../validators/rules";
import { useForm } from "../../hooks/useForm";
import Input from "../../components/Form/Input";
import ButtonForm from "../../components/Form/ButtonForm";
import VojohatTitle from "../../components/VojohatTitle/VojohatTitle";

export default function ContactUs() {
  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
      message: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <Form className="mt-3 mb-3">
            <fieldset style={{ border: "1px solid #ccc", padding: "1rem" }}>
              <VojohatTitle title="ارتباط با ما" />
              <div className="row">
                {/* Two inputs side by side */}
                <div className="col-12 col-md-6 mb-3">
                  <Input
                    type="text"
                    id="name"
                    element="input"
                    placeholder="نام و نام خانوادگی"
                    validations={[
                      requiredValidator(),
                      minValidator(4),
                      maxValidator(20),
                    ]}
                    onInputHandler={onInputHandler}
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <Input
                    type="email"
                    placeholder="ایمیل"
                    id="email"
                    element="input"
                    validations={[requiredValidator(), emailValidator()]}
                    onInputHandler={onInputHandler}
                  />
                </div>

                {/* Third input below the first two */}
                <div className="col-12 col-md-6 mb-3">
                  <Input
                    type="text"
                    placeholder="شماره تماس"
                    id="phone"
                    element="input"
                    validations={[requiredValidator(), phoneValidator()]}
                    onInputHandler={onInputHandler}
                  />
                </div>

                {/* Full-width text area */}
                <div className="col-12">
                  <Input
                    id="message"
                    type="text"
                    placeholder="پیام خود را وارد کنید..."
                    element="textarea"
                    validations={[requiredValidator(), minValidator(10)]}
                    onInputHandler={onInputHandler}
                  />
                </div>
              </div>
              <ButtonForm
                className={`btn mt-3 ${
                  formState.isFormValid ? "btn-success" : "btn-danger"
                }`}
                disabled={!formState.isFormValid}
              >
                ارسال
              </ButtonForm>
            </fieldset>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
}
