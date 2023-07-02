import { Routes, Route } from "react-router-dom";
import Main from "./components/main";
import LiveChat from "./components/live-chat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/livechat" element={<LiveChat />} />
      </Routes>
    </>
  );
}

export default App;
