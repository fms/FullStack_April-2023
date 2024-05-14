import style from "./dogChat.module.scss";
import { ChatHistoryProps } from "../../types/ChatHistoryType";
import { Socket } from "socket.io-client";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

type DogChatProps = {
    socket: Socket,
}

export default function DogChat({socket}: DogChatProps) {
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [chatHistory, setChatHistory] = useState<ChatHistoryProps[]>([])

    function inputNameHandler(ev: ChangeEvent<HTMLInputElement>) {
        const value = ev.target.value;
        setName(value);
      }

      function inputMessageHandler(ev: ChangeEvent<HTMLInputElement>) {
        const value = ev.target.value;
        setMessage(value);
      }

      function submitMessageHandler(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault();
        socket.emit("chatMessage", {name,message});
      }

      useEffect(() => {
        socket.on("chatMessage", (arg) => {
            setChatHistory(prevChatHistory => [...prevChatHistory, arg]);
        });

        return () => {
          socket.off("messageFromServer");
      };
    }, [socket]);
    

    function buttonNameHandler(ev: MouseEvent<HTMLInputElement, globalThis.MouseEvent>): void {
        if(ev.target) {
            const name = document.querySelector(`#chatName`) as HTMLInputElement;
            name.readOnly = true;
        }
    }

  return (
      <div className={style.chatWrapper}>
        <form action="" className={style.formWrapper} onSubmit={(ev) => submitMessageHandler(ev)}>
          <div className={style.chatDiv}>
            <div className={style.chat}>
            {chatHistory.map((item, index) => (
              <p key={index}>{item.name}: {item.message}</p>
            ))}
            </div>
          </div>
          <div className = {style.chatSubmit}>
            <input
              type="text"
              placeholder="Type your message here"
              className={style.inputText}
              onChange={(ev) => inputMessageHandler(ev)}
              value={message}
            />
            <input type="submit" className={style.inputSubmit} value={"Send"}/>
          </div>
        </form>
        <h6 className={style.chatTitle}>Chat</h6>
        <div className={style.nameDiv}>
            <input
            type="text"
            placeholder="write your name"
            className={style.inputName}
            onChange={(ev) => inputNameHandler(ev)}
            value={name}
            id="chatName"
            />
            <input type="button" className = {style.buttonName} onClick={(ev) =>buttonNameHandler(ev)} value={`Submit`} />
        </div>
      </div>
  )
}