import React, { useState } from "react";
import "./VojohatPayment.css";

import { Form } from "react-bootstrap";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
  phoneValidator,
  codeMelliValidator,
} from "../../validators/rules";
import { useForm } from "../../hooks/useForm";
import Input from "../../components/Form/Input";
import ButtonForm from "../../components/Form/ButtonForm";
import VojohatTitle from "../VojohatTitle/VojohatTitle";

export default function VojohatPayment() {
  const [genderChoose, setGenderChoose] = useState("female");
  const [receipt, setReceipt] = useState(true);

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
      codemelli: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const handleGenderClick = (gender) => {
    setGenderChoose(gender);
  };

  const handleReceiptClick = (receiptOption) => {
    setReceipt(receiptOption);
  };

  return (
    <div className="container">
      <div className="row">
        <fieldset
          style={{
            border: "1px solid #ccc",
            borderRadius: "15px",
            padding: "1rem",
          }}
        >
          <VojohatTitle title="ثبت نام در سامانه پرداخت وجوهات" />

          <Form className="mt-3 mb-3">
            <div className="row">
              <div className="col-6 col-md-3 mb-3">
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
              <div className="col-6 col-md-3 mb-3">
                <Input
                  type="email"
                  placeholder="ایمیل"
                  id="email"
                  element="input"
                  validations={[requiredValidator(), emailValidator()]}
                  onInputHandler={onInputHandler}
                />
              </div>
              <div className="col-6 col-md-3 mb-3">
                <Input
                  type="text"
                  placeholder="شماره تماس"
                  id="phone"
                  element="input"
                  validations={[requiredValidator(), phoneValidator()]}
                  onInputHandler={onInputHandler}
                />
              </div>
              <div className="col-6 col-md-3 mb-3">
                <Input
                  type="text"
                  placeholder="کد ملی"
                  id="codemelli"
                  element="input"
                  validations={[requiredValidator(), codeMelliValidator()]}
                  onInputHandler={onInputHandler}
                />
              </div>

              <div className="col-6 col-md-3 mb-3 d-flex align-items-center gender_button">
                <p className="m-0">جنسیت</p>
                <button
                  onClick={() => handleGenderClick("female")}
                  type="button"
                  className={`ms-3 ${
                    genderChoose === "female" ? "gender_selected" : ""
                  }`}
                >
                  زن
                </button>
                <button
                  onClick={() => handleGenderClick("male")}
                  type="button"
                  className={`${
                    genderChoose === "male" ? "gender_selected" : ""
                  }`}
                >
                  مرد
                </button>
              </div>

              <div className="col-8 mb-3 d-flex align-items-center receipt_button">
                <p className="m-0">مایل به دریافت رسید هستید؟</p>
                <button
                  onClick={() => handleReceiptClick(true)}
                  type="button"
                  className={`ms-3 ${receipt ? "receipt_selected" : ""}`}
                >
                  بله
                </button>
                <button
                  onClick={() => handleReceiptClick(false)}
                  type="button"
                  className={`${!receipt ? "receipt_selected" : ""}`}
                >
                  خیر
                </button>
              </div>

              <div className="row justify-content-center mb-3 pe-4">
                <div className="col-12 col-sm-8 col-md-6 selectBox_Vojohat">
                  <Form.Select aria-label="Default select example">
                    <option>-- یک گزینه را انتخاب کنید --</option>
                    <option value="کفارات">کفارات</option>
                    <option value="زکات">زکات</option>
                    <option value="زکات فطره">زکات فطره</option>
                    <option value="نماز روزه استیجاری">
                      نماز روزه استیجاری
                    </option>
                    <option value="روزه">روزه</option>
                    <option value="ختم قرآن">ختم قرآن</option>
                    <option value="خمس">خمس</option>
                  </Form.Select>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-center selectBox_Vojohat_button_wrapper mt-3">
                      <button
                        type="button"
                        className="btn btn-dark selectBox_Vojohat_button"
                      >
                        عام
                      </button>
                      <button
                        type="button"
                        className="btn btn-dark selectBox_Vojohat_button"
                      >
                        سادات
                      </button>
                    </div>
                  </div>
                  <div className="row justify-content-center mt-3">
                    <div className="col-6">
                      <Form.Control
                        type="number"
                        id="inputNumber"
                        placeholder="مبلغ"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-6 w-25">
                <Form.Control className="last_price" placeholder="مبلغ کل" disabled />
              </div>
              <div className="col-12 text-center mt-3">
                <button className="btn btn-primary pay_btn">پرداخت</button>
              </div>
            </div>
          </Form>
          <div className="diagonal-divider"></div>
        </fieldset>
      </div>
    </div>
  );
}
