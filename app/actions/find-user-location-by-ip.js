export async function getLocationByIP(ip) {
  try {
    const res = await fetch(`https://api.iplocation.net/?ip=${ip}`);
    const data = await res.json();
    // console.log(`data in country action:${JSON.stringify(data.response_code)}`);
    if (data.response_code === "200") {
      return data;
    }
    if (data.response_code === "400") {
      console.error("Failed to complete the request.");
      return {
        status: "error",
        message: data.response_message,
      };
    }
    if (data.response_code === "404") {
      console.error("Command not found.");
      return {
        status: "error",
        message: data.response_message,
      };
    }
  } catch (error) {
    console.log(error);
  }
}
