import { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";

import {
  Form,
  FormName,
  FormPhone,
  FormEmail,
  FormPostcode,
  FormArea,
  FormMessage,
  SubmitContainer,
  SubmitButton,
} from "./ContactForm.styles";
import { ThankYouMessage } from "../ThankYouMessage";
import { Loader } from "../Loader";

export const ContactForm = () => {
  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors },
  } = useForm();
  const hiddenFileInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState(""); // State to track phone number input
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    // Remove non-digit characters and limit to 12 digits
    const formattedInput = input.replace(/\D/g, "").slice(0, 12);

    // Format the phone number with underscores
    const formattedPhoneNumber = formattedInput
      .split("")
      .map((char, index) => (index % 4 === 3 && index < 11 ? char + " " : char))
      .join("");

    setPhoneNumber(formattedPhoneNumber);
  };

  const onSubmit = async (data) => {
    setSending(true);
    try {
      const response = await fetch("api/sendFreeQuote", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSending(false);
      setSent(true);
      console.log("sent");
    } catch (error) {
      setSending(false);
      console.error(error);
    }
  };

  return (
    <>
      {sent ? (
        <ThankYouMessage />
      ) : (
        <Form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <FormName>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: "Name is required" }}
              render={({ field }) => <input placeholder="Name" {...field} />}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </FormName>

          <FormPostcode>
            <Controller
              name="postcode"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input placeholder="Postcode" {...field} />
              )}
            />
          </FormPostcode>

          <FormPhone>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              //   rules={{ required: 'Phone number is required' }}
              render={({ field }) => (
                <input
                  {...field}
                  type="tel"
                  placeholder="Phone"
                  maxLength={12}
                />
              )}
            />

            {errors.phone && <p>{errors.phone.message}</p>}
          </FormPhone>

          <FormEmail>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "Email is required" }}
              render={({ field }) => <input placeholder="Email" {...field} />}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </FormEmail>

          <FormMessage>
            <Controller
              name="message"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <textarea placeholder="Ask Us a Question" {...field} rows="4" />
              )}
            />
          </FormMessage>

          <SubmitContainer>
            <SubmitButton type="submit" disabled={sending}>
              {sending ? <Loader /> : "Submit"}
            </SubmitButton>
          </SubmitContainer>
        </Form>
      )}
    </>
  );
};
