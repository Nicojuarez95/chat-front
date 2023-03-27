import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    return (
          <div style={{height: "100vh"}}>
            <PrettyChatWindow
              projectId="c30caf59-67d4-4bdb-9fbb-7b873f8d6777"
              username={props.user.username}
              secret={props.user.secret}
              style={{ height: "100vh" }}
            />
          </div>
    )
  };
  
  export default ChatsPage;