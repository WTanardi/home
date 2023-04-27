import React from "react";
import avatarImage from "../assets/img/avatar.jpg";

interface ChatBubbleProps {
  content: string;
  isFromMe: boolean;
  avatarIcon?: boolean;
  replyTo?: string;
  image?: string;
  replyImage?: string;
}

const ChatBubble = ({
  content,
  isFromMe,
  avatarIcon,
  image,
  replyTo,
  replyImage,
}: ChatBubbleProps) => {
  const containerClass = isFromMe
    ? "flex justify-end mt-2 relative"
    : "flex justify-start mt-2 relative ml-8";

  const bubbleClass = isFromMe
    ? "bg-blue-500 text-white rounded-2xl px-3 py-2 max-w-sm break-word whitespace-pre-line text-sm inline-block"
    : "bg-gray-200 rounded-2xl px-3 py-2 max-w-sm break-word whitespace-pre-line text-sm inline-block";

  const avatarClass = isFromMe
    ? ""
    : "w-6 h-6 rounded-full absolute bottom-0 left-0 -ml-8 -mb-1";

  const replyClass =
    replyTo || replyImage
      ? "flex flex-col border-l-4 border-gray-500 pl-2 mt-1"
      : "";

  const replyContent = replyTo ? (
    <div>
      <span className="text-gray-400 text-xs ml-3">Replied to you</span>
      <div className={replyClass}>
        <span className="bg-blue-500 text-white rounded-2xl px-3 py-2 max-w-sm break-word whitespace-pre-line text-sm">
          {replyTo}
        </span>
      </div>
    </div>
  ) : null;

  const replyImageContent = replyImage ? (
    <div>
      <span className="text-gray-400 text-xs ml-3">Replied to your story</span>
      <div className={replyClass}>
        <img src={replyImage} className="rounded-lg w-20" alt="replyImage" />
      </div>
    </div>
  ) : null;

  return (
    <div className={`${containerClass}`}>
      {!isFromMe && !avatarIcon && (
        <img src={avatarImage} className={avatarClass} alt="avatar" />
      )}
      {image && (
        <div className="relative">
          <img src={image} className="rounded-lg w-36" alt="image" />
        </div>
      )}
      {replyImageContent}
      {content !== "" && (
        <div>
          {replyContent}
          <div
            className={`${bubbleClass} ${replyTo || replyImage ? "mt-1" : ""}`}
          >
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
