import { Routes, Route } from "react-router-dom";
import "./style/App.css";
import Main from "./routes/main";
import MovieDetail from "./routes/movieDetail";
import LiveChat from "./routes/liveChat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/moviedetail/:id" element={<MovieDetail />}></Route>
        <Route path="/livechat" element={<LiveChat />} />
      </Routes>
    </>
  );
}

export default App;
