// import "./App.css";
// import ToggleClass from "./tagelClass";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import EmployeeDetails from "./container/EmployeeDetails";
// import PieChart from "./container/PieChart";

// const App = () => {
//   return (
//     // <BrowserRouter>
//     //   <Switch>
//     //     <Route exact path="/" component={EmployeeDetails} />
//     //     <Route exact path="/chart" component={PieChart} />
//     //   </Switch>
//     // </BrowserRouter>
//     <ToggleClass />
//   );
// };

import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
const languages = ["JavaScript", "Python"];

const LanguagesContext = React.createContext({
  language: languages[0],
  toggleLang: () => {},
});

const App = () => {
  // const toggleLang = () => {
  //   setContextData((prevState) => {
  //     return {
  //       ...contextData,
  //       language:
  //         prevState.language === languages[0] ? languages[1] : languages[0],
  //     };
  //   });
  // };
  const [contextData, setContextData] = useState({
    language: languages[0],
    toggleLang: toggleLanguage,
  });

  function toggleLanguage() {
    setContextData((prevState) => {
      return {
        ...contextData,
        language:
          prevState.language === languages[0] ? languages[1] : languages[0],
      };
    });
  }
  return (
    <LanguagesContext.Provider value={contextData}>
      <MainSection />
      <ShowLang />
    </LanguagesContext.Provider>
  );
};

class MainSection extends React.Component {
  render() {
    return (
      <LanguagesContext.Consumer>
        {({ toggleLang }) => {
          return (
            <div>
              <button id="changeFavorite" onClick={toggleLang}>
                Toggle language
              </button>
            </div>
          );
        }}
      </LanguagesContext.Consumer>
    );
  }
}

const ShowLang = () => {
  const contextData = useContext(LanguagesContext);
  console.log("contextData", contextData);
  return (
    <p id="favoriteLanguage">
      Favorite programing language: {contextData.language}
    </p>
  );
};

export default App;
