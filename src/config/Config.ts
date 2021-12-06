import { LogLevel } from "@azure/msal-browser";
export const msalConfig = {
  auth: {
    clientId: "<Azure_app_id >",
    authority:
      "https://login.microsoftonline.com/<Azure_organisation_tenant_id_or_client_id>",
    redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level: any, message: any, containsPii: any) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};
export const loginRequest = {
  scopes: ["User.Read"],
};
export const graphConfig = {
  graphMeEndpoint: "Enter_the_Graph_Endpoint_Herev1.0/me",
};
