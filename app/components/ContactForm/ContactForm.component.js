import { useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Dropzone from 'react-dropzone';

import { StyledDropzone } from '@/app/components/Dropzone';

import {
  Form,
  FormName,
  FormPhone,
  FormEmail,
  FormPostcode,
  FormArea,
  FormMessage,
  //   FormCaptcha,
  FormDropzone,
  SubmitContainer,
  DropzoneContainer,
} from './ContactForm.styles';

export const ContactForm = () => {
  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors },
  } = useForm();
  const hiddenFileInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState(''); // State to track phone number input

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    // Remove non-digit characters and limit to 12 digits
    const formattedInput = input.replace(/\D/g, '').slice(0, 12);

    // Format the phone number with underscores
    const formattedPhoneNumber = formattedInput
      .split('')
      .map((char, index) => (index % 4 === 3 && index < 11 ? char + ' ' : char))
      .join('');

    setPhoneNumber(formattedPhoneNumber);
    console.log(formattedPhoneNumber);
  };
  const handleChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      const body = new FormData();
      body.append('image', i);
    }
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch('api/sendFreeQuote', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error(error);
    }
    // try {
    //   // Handle form data and submit to the server
    //   console.log(data);
    //   // Send data to your API or backend

    //   // Reset the reCAPTCHA field
    //   //   setValue('recaptcha', '');

    //   // Reset the form
    //   //   document.getElementById('contact-form').reset();
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <Form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
      <FormName>
        <Controller
          name='name'
          control={control}
          defaultValue=''
          rules={{ required: 'Name is required' }}
          render={({ field }) => <input placeholder='Name' {...field} />}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </FormName>

      <FormPhone>
        <Controller
          name='phone'
          control={control}
          defaultValue=''
          //   rules={{ required: 'Phone number is required' }}
          render={({ field }) => (
            <input
              {...field}
              //   type='tel'
              //   placeholder={phoneNumber ? '____ ____ ____' : 'Phone'}
              //   value={phoneNumber}
              //   onChange={handlePhoneChange}
              //   maxLength={12}
            />
          )}
        />

        {errors.phone && <p>{errors.phone.message}</p>}
      </FormPhone>

      <FormEmail>
        <Controller
          name='email'
          control={control}
          defaultValue=''
          rules={{ required: 'Email is required' }}
          render={({ field }) => <input placeholder='Email' {...field} />}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </FormEmail>

      <FormPostcode>
        <Controller
          name='postcode'
          control={control}
          defaultValue=''
          render={({ field }) => <input placeholder='Postcode' {...field} />}
        />
      </FormPostcode>

      <FormArea>
        <Controller
          name='interests'
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <select {...field}>
              <option value='option0'>Area of Interest (Please Select)</option>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </select>
          )}
        />
      </FormArea>

      <FormMessage>
        <Controller
          name='message'
          control={control}
          defaultValue=''
          render={({ field }) => <textarea placeholder='Ask Us a Question' {...field} rows='4' />}
        />
      </FormMessage>
      <FormMessage>
        <Controller
          name='file'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <input
              type='file'
              ref={hiddenFileInput}
              onChange={handleChange}
              accept='image/*'
              style={{ display: 'none' }}
            />
          )}
        />
        <button onClick={handleClick}>click</button>
        {/* <IconButton onClick={handleClick} size="xx-small" pos="absolute" zIndex="10" left="5px" bottom="5px"
 aria-label="file upload " icon={<BiCloudUpload />} /> */}
      </FormMessage>
      {/* <FormCaptcha>
        <Controller
          name='recaptcha'
          control={control}
          defaultValue=''
          rules={{ required: 'Please complete the reCAPTCHA challenge.' }}
          render={({ field }) => (
            <>
              <ReCAPTCHA sitekey='YOUR_RECAPTCHA_SITE_KEY' onChange={(value) => field.onChange(value)} />
              <input type='hidden' {...field} />
            </>
          )}
        />
        {errors.recaptcha && <p>{errors.recaptcha.message}</p>}
      </FormCaptcha> */}

      {/* <FormDropzone>
        <Controller
          control={control}
          name='file'
          rules={{
            required: { value: true, message: 'This field is required' },
          }}
          render={({ field: { onChange, onBlur }, fieldState }) => (
            <input type='file' name='avatar' accept='image/png, image/jpeg' multiple />
            // <Dropzone
            //   noClick
            //   onDrop={(acceptedFiles) => {
            //     setValue('file', acceptedFiles, {
            //       shouldValidate: true,
            //     });
            //   }}
            // >
            //   {({ getRootProps, getInputProps, open, isDragActive, acceptedFiles }) => {
            //     console.log(acceptedFiles);
            //     const files = acceptedFiles.map((file) => (
            //       <li key={file.path}>
            //         {file.path} - {file.size}kb
            //       </li>
            //     ));
            //     return (
            //       <div>
            //         <DropzoneContainer {...getRootProps()} onClick={open}>
            //           <input {...getInputProps()} />
            //           {acceptedFiles.length === 0 && (
            //             <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
            //           )}
            //           <div>
            //             <ul>{files}</ul>
            //           </div>
            //         </DropzoneContainer>
            //       </div>
            //     );
            //   }}
            // </Dropzone>
          )}
        />
      </FormDropzone> */}

      <SubmitContainer>
        <button type='submit'>Submit</button>
      </SubmitContainer>
    </Form>
  );
};
