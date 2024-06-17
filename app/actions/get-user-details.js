import { routes } from "../lib/config/routes";
export async function getUserDataByUserName(UserName) {
  try {
    const res = await fetch(`${routes.GETUSERDETAILS}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserName,
      }),
    });
    const data = await res.json();
    // console.log(`data is ${JSON.stringify(data)}`);
    if (res.statusCode === 422) {
      return {
        status: "error",
        message: data.message,
        errors: data.errors,
      };
    }
    if (data.Status !== "success") {
      return {
        status: "error",
        message: data.message,
      };
    } else if (data.Status === "success") {
      return data.Data.User;
    }
  } catch (error) {
    console.error(error);
  }
}
export async function getUserDataById(userId) {
  try {
    const res = await fetch(`${routes.GET_USER_DETAILS_BY_ID}/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // console.log(`data in getUserDataById action: ${JSON.stringify(data)}`);
    if (res.statusCode === 422) {
      return {
        status: "error",
        message: data.message,
        errors: data.errors,
      };
    }
    if (data.Status !== "success") {
      return {
        status: "error",
        message: data.message,
      };
    } else if (data.Status === "success") {
      return data.Data.User;
    }
  } catch (error) {
    console.error(error);
  }
}
