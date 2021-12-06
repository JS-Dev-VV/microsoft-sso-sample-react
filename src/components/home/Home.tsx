import { AuthenticatedTemplate } from "@azure/msal-react";

const Home = (props: any) => {
  return (
    <>
      <section>
        <AuthenticatedTemplate>
          <h1> Success</h1>
        </AuthenticatedTemplate>
      </section>
    </>
  );
};

export default Home;
