import * as Yup from "yup";
const PasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols"),
  retypeNewPassword: Yup.string().when("newPassword", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("newPassword")],
      "Password and Confirm Password didn't match"
    )
  })
});
export default PasswordSchema;
