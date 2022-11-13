import React, { useState, useEffect } from "react";
import "./Demo.css";
import $ from "jquery";

function Left({ handleClick }) {
  let lastclick = "";
  const [chatlist, ChangeChatList] = useState(["karthikeyan", "aaa", "bbb"]);
  const [original, copyReal] = useState(chatlist);
  const [chatdiv, ChangeChatdiv] = useState([]);
  useEffect(() => {
    const check=setInterval(() => {
      console.log("checking");
    }, 1000);
    let i = 0;
    ChangeChatdiv([]);
    chatlist.forEach((element) => {
      console.log(element + i);
      ChangeChatdiv((prev) => [
        ...prev,
        <div
          id={element + i}
          onClick={(event) => {
            handleClick(element);
            document.getElementById(element + "3").style.background = "#878787";

            if (lastclick !== "" && lastclick !== element + "3") {
              document.getElementById(lastclick).style.background = "white";
            }
            console.log(lastclick, element + "3");
            lastclick = element + "3";
          }}
          className="item"
          key={"item" + i + element}
        >
          <div className="pic" key={"pic" + i + element}>
            <img
              src={
                "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
              }
              alt={
                "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
              }
              height={"40"}
              width={"40"}
            ></img>
          </div>
          <div className="main-content">
            <div className="font" key={"font" + i + element}>
              {element}
            </div>
            <div className="msg" key={"msg" + i + element}>
              {element}
            </div>
          </div>
        </div>,
      ]);
      i++;
    });
    return ()=>{
      clearInterval(check);
    }
  }, [chatlist]);
  return (
    <div className="left">
      <div className="left-statusbar">
        <input
          onKeyUp={(e) => {
            console.log("original", original);
            ChangeChatList(original);
            let filter = [];
            if (e.target.value.toLowerCase() !== "") {
              filter = chatlist.filter((chat) => {
                return chat
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase());
              });
              ChangeChatList(filter);
            }
            console.log(filter);
            console.log(e.target.value);
          }}
          type={"search"}
          placeholder={"search contacts"}
        ></input>
      </div>
      <div className="left-inner">{chatdiv}</div>
    </div>
  );
}
export default Left;
