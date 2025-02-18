import { routes } from "../lib/config/routes";
import { Knock } from "@knocklabs/node";
import { toast } from "react-toastify";
const KnockClient = new Knock("sk_test_amLsV98Sm_1FWsTVA--BKZYSMp0i2D9E7E3-S2AkC9Y");

export async function addToFriend(id, user_TTID, userData_TTID) {
  try {
    const res = await fetch(routes.ADDFRIENDS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ID: id,
      }),
    });
    const data = await res.json();
    if (res.statusCode === 422) {
      toast(` ${data.message}`);

      return {
        status: "error",
        message: data.message,
        errors: data.errors,
      };
    }
    if (data.Status !== "success") {
      toast(` ${data.message}`);

      return {
        status: "error",
        message: data.message,
      };
    } else if (data.Status === "success") {
      toast(` successfully friend added`);
      await KnockClient.notify("new-following-in-game-app", {
        actor: user_TTID,
        recipients: [userData_TTID],
      });
      return;
    }
  } catch (error) {
    console.log("error in addToFriend", error);
  }
}