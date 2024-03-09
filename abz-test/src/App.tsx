import "./App.scss";

import Navbar from "./component/section/Navbar";
import GetSection from "./component/section/GetSection";
import WelcomeSection from "./component/section/WelcomeSection";
import PostSection from "./component/section/PostSection";
function App() {
  return (
    <>
      <Navbar />
      <WelcomeSection />
      <GetSection />
      <PostSection/>
    </>
  );
}

export default App;
