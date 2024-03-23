"use server";

export default async function loginUser(formData: FormData) {
  console.log(formData.get("email"));
  await new Promise((resolve) => {
    setTimeout(resolve, 3 * 1000);
  });
  console.log("-----------------------");
  // hanlde all auth-api-logic here and return from here
}
