import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./shipping.css";

const Shipping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form className="shippingForm" onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={user.displayName}
          placeholder="Your Name"
          {...register("name", { required: true })}
        />
        <input
          defaultValue={user.email}
          placeholder="Your Email"
          {...register("email", { required: true })}
        />
        <input placeholder="Phone" {...register("phone", { required: true })} />
        <input
          placeholder="Address"
          {...register("address", { required: true })}
        />

        {errors.name && <span className="error">This field is required</span>}
        {errors.email && <span className="error">This field is required</span>}
        {errors.phone && <span className="error">This field is required</span>}
        {errors.address && (
          <span className="error">This field is required</span>
        )}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Shipping;
