// import React from "react";
// import HireDeveloper from "./HireDeveloper";

// const AppDeveloper = () => {
//   return (
//     <div>
//       <HireDeveloper />
//     </div>
//   );
// };

// export default AppDeveloper;
import React from "react";
import HireDeveloper from "./HireDeveloper";
import { Helmet } from "react-helmet"; // Use react-helmet for meta tags

const AppDeveloper = () => {
  return (
    <div>
      <Helmet>
        {/* <title>Hire App Developers - Expert App Development Services</title> */}
        <meta
          name="description"
          content="Hire experienced app developers for your project. We offer expert app development services to bring your ideas to life."
        />
        <meta
          name="keywords"
          content="hire app developer, app development, mobile app developers, web app developers"
        />
        <link rel="canonical" href="https://Eurosom.com/hire-app-developer" />
      </Helmet>
      
      {/* <header>
        <h1>Hire Expert App Developers</h1>
        <p>Find top-notch developers for your app development needs.</p>
      </header> */}
      
      <main>
        <HireDeveloper />
      </main>
    </div>
  );
};

export default AppDeveloper;
