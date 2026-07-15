import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { isSignup, signup } = useSignup();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm();
  function onSubmit({ fullName, email, password }) {
    signup({ fullName, email, password }, { onSettled: () => reset() });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          disabled={isSignup}
          type="text"
          id="fullName"
          {...register("fullName", { required: "this feild is requird" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          disabled={isSignup}
          type="email"
          id="email"
          {...register("email", {
            required: "this feild is requird",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "provide a valid email",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          disabled={isSignup}
          type="password"
          id="password"
          {...register("password", {
            required: "this feild is requird",
            minLength: {
              value: 8,
              message: "the password must be at least 8 charactars",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          disabled={isSignup}
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "this feild is requird",
            validate: (value) =>
              value === getValues().password || "passwords need to match",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button $variation="secondary" type="reset" onClick={reset}>
          Cancel
        </Button>
        <Button disabled={isSignup}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
