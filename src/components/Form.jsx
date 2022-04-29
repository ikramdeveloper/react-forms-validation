import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(8).max(20).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="Form">
      <h2 className="title">Sign Up</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your firstname..."
          {...register("firstName")}
        />
        <p> {errors.firstName?.message} </p>
        <input
          type="text"
          placeholder="Enter your lastname..."
          {...register("lastName")}
        />
        <p>{errors.lastName?.message}</p>
        <input
          type="text"
          placeholder="Enter your email..."
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <input
          type="text"
          placeholder="Enter your age..."
          {...register("age")}
        />
        <p>{errors.age?.message}</p>
        <input
          type="text"
          placeholder="Enter password..."
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <input
          type="text"
          placeholder="Confirm password..."
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword && "Passwords do not match"}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
