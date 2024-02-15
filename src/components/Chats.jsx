import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
export const Chats = () => {
  const [isLoading, setLoading] = useState();
  const { user } = useAuth();
  const Navigate = useNavigate();
  const handelLogOut = async () => {
    await auth.signOut();
    Navigate("/");
  };

  const getFile = async (Url) => {
    const response = await fetch(Url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpg" });
  };

  useEffect(() => {
    if (!user) {
      Navigate("/");
      return;
    }
    const response = axios.get("https://api.chatengine.io/users/me", {
      headers: {
        "project-Id": `${process.env.REACT_APP_CHAT_ENGINE_kEY}`,
        "user-name": user.email,
        "user-secret": user.uid,
      },
    }).then(() => setLoading(false))
    .catch((e) => {
      let formdata = new FormData();
      formdata.append("email", user.email);
      formdata.append("username", user.email);
      formdata.append("secret", user.uid);

      getFile(user.photoURL).then((avatar) => {
        formdata.append("avatar", avatar, avatar.name);

        axios
          .post("https://api.chatengine.io/users", formdata, {
            headers: { "private-key": `${process.env.REACT_APP_CHAT_ENGINE_SECRET}` },
          })
          .then(() => setLoading(false))
          .catch((error) => console.log(error));
      });
    });
  }, [user, Navigate])
    
  if (!user || isLoading) return "loading ...";

  return (
    <div>
      <div className="bg-blue-600 w-screen h-20 flex justify-between ">
        <span className="text-white text-4xl mt-5 ml-3 font-bold">Unichat</span>{" "}
        <span
          onClick={handelLogOut}
          className="text-xl text-white mt-5 mr-5 cursor-pointer "
        >
          log out
        </span>{" "}
      </div>
      <div>
        <div className="col-span-3">
          <ChatEngine
            height="calc(100vh-68px)"
            projectID={process.env.REACT_APP_CHAT_ENGINE_kEY}
            userName={user.email}
            userSecret={user.uid}
          />
        </div>
      </div>
    </div>
  );
};
