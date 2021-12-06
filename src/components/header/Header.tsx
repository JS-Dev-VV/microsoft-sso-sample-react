import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { loginRequest } from "../../config/Config";

interface HeaderModel {
  title: string;
}

const Header = ({ title }: HeaderModel) => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((e) => {
      console.error(e);
    });
  };

  const handleLogout = () => {
    instance.logoutPopup();
  };
  return (
    <>
      <section className="bg-grad-1">
        <div className="h-4rem d-flex box-y-center">
          <div className="w-50 ">
            <h1 className="c-ffffff fw-bold f-32px px-2rem">{title}</h1>
          </div>
          <div className="w-50 text-right px-2rem">
            <AuthenticatedTemplate>
              <button
                className="bg-grad-1 px-2rem py-05rem c-ffffff fw-bold f-24px br-10px b-none shadow-464646 cursor-pointer"
                onClick={() => handleLogout()}
              >
                Logout
              </button>
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
              <button
                className="bg-grad-1 px-2rem py-05rem c-ffffff fw-bold f-24px br-10px b-none shadow-464646 cursor-pointer"
                onClick={() => handleLogin()}
              >
                Login
              </button>
            </UnauthenticatedTemplate>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
