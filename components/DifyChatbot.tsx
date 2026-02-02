"use client";

import { useEffect } from "react";

export const DifyChatbot = () => {
  useEffect(() => {
    // @ts-ignore
    window.difyChatbotConfig = {
      token: "d3It3o0hDoRLHtgb",
      inputs: {
        // You can define the inputs from the Start node here
        // key is the variable name
        // e.g.
        // name: "NAME"
      },
      systemVariables: {
        // user_id: 'YOU CAN DEFINE USER ID HERE',
        // conversation_id: 'YOU CAN DEFINE CONVERSATION ID HERE, IT MUST BE A VALID UUID',
      },
      userVariables: {
        // avatar_url: 'YOU CAN DEFINE USER AVATAR URL HERE',
        // name: 'YOU CAN DEFINE USER NAME HERE',
      },
    };

    const scriptId = "d3It3o0hDoRLHtgb";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.src = "https://udify.app/embed.min.js";
    script.id = scriptId;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Optional: Clean up if component unmounts, but usually we want it to persist
    };
  }, []);

  return (
    <style jsx global>{`
      #dify-chatbot-bubble-button {
        background-color: #1c64f2 !important;
      }
      #dify-chatbot-bubble-window {
        width: 24rem !important;
        height: 40rem !important;
      }
    `}</style>
  );
};
