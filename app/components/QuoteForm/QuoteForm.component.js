import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import {
  Form,
  FormName,
  FormPhone,
  FormEmail,
  FormPostcode,
  FormArea,
  FormMessage,
  FormCaptcha,
  SubmitContainer,
} from "./QuoteForm.styles";

export const QuoteForm = () => {
  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const [phoneNumber, setPhoneNumber] = useState(""); // State to track phone number input

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
    try {
      // Handle form data and submit to the server
      console.log(data);
      // Send data to your API or backend

      // Reset the reCAPTCHA field
      setValue("recaptcha", "");

      // Reset the form
      document.getElementById("contact-form").reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
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

      <FormPhone>
        {/* Phone input with the desired behavior */}
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <input
              {...field}
              type="tel"
              placeholder={phoneNumber ? "____ ____ ____" : "Phone"}
              value={phoneNumber}
              onChange={handlePhoneChange}
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

      <FormPostcode>
        <Controller
          name="postcode"
          control={control}
          defaultValue=""
          render={({ field }) => <input placeholder="Postcode" {...field} />}
        />
      </FormPostcode>

      <FormArea>
        <Controller
          name="interests"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <select {...field}>
              <option value="option0">Area of Interest (Please Select)</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          )}
        />
      </FormArea>

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
        <button type="submit">Submit</button>
      </SubmitContainer>
    </Form>
  );
};
