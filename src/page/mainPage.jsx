import { useState } from "react";
import ChatAi from "../component/chatAi";
import ImageAi from "../component/imageAi";

const MainPage = () => {
  const [isChatMode, setIsChatMode] = useState(true);
  const handleToggleMode = () => {
    setIsChatMode(!isChatMode);
  };

  return (
    <div className="chat-bot">
      <h1>Hayal Et</h1>
      <button onClick={handleToggleMode}>
        {isChatMode ? "bir Resim iste" : "Bir şEy SoR"}
      </button>
      {isChatMode ? <ChatAi /> : <ImageAi />}
    </div>
  );
};

export default MainPage;
