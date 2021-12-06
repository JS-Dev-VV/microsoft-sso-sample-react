<!--  Create react app with typescript -->
npx create-react-app microsoft-sso-sample-react --template typescript

<!-- Integrate SCSS -->
npm install sass

<!-- Add some usefull plugins -->
npm install react-hook-form
npm install react-toastify
npm i react-router-dom
npm i react-datepicker

<!-- Add microsoft required plugin -->
npm install @azure/msal-browser
npm install @azure/msal-react



<!-- In Azure Cloude Plate -->
<!-- 1- Create an app in app registration section in azure active directory -->
<!-- 2- Choose app available for tenant type ex- only in our organisation -->
<!-- 3- Add redirect URI on successfull auth -->
<!-- 4- On authentication token seciton in created app choose saml2.0 token -->
