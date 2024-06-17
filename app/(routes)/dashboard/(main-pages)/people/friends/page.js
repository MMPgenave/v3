import { DialogDemo } from "@/app/UI/components/base/pupop/popup.js";
import { AuthorFriends } from "@/app/UI/components/base/AuthorFriends/AuthorFriends";
const page = async () => {
  return (
    <div className="relative ">
      <DialogDemo />
      <AuthorFriends />
    </div>
  );
};

export default page;
