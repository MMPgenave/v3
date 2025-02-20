import UserDetailsPage from "@/app/UI/components/base/UserDetailsPage/UserDetailsPage";


const Page = ({ params: { username } }) => {



  return (
    <UserDetailsPage
      username={username}
    />

  );
};

export default Page;
