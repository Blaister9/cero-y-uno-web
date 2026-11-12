import {
  ArrowUp,
  CheckCheck,
  FileCheck2,
  Headphones,
  LockKeyhole,
  MessageCircle,
} from "lucide-react";
import { serviceCase } from "@/content/service-case";
import { conversationScene as copy } from "@/content/story-scenes";
import { SceneShell, WindowBar, type SceneProps } from "./scene-shell";

export function ConversationScene({ stage, progress, onStage }: SceneProps) {
  const response = serviceCase.example.agent;
  const typing =
    stage >= 3 ? 1 : Math.max(0, Math.min(1, (progress - 0.5) * 5));
  const received =
    stage >= 3 ? 1 : Math.max(0, Math.min(1, (progress - 0.54) * 5.5));
  return (
    <SceneShell
      name="conversation"
      label={copy.label}
      image={copy.image}
      stage={stage}
      progress={progress}
      status={copy.states[stage]}
    >
      <div className="conversation-person">
        <span className="story-overline">
          <Headphones size={16} aria-hidden="true" />
          {copy.agent}
        </span>
      </div>
      <div
        className="conversation-console"
        data-visible={stage >= 1}
        aria-hidden={stage < 1}
      >
        <WindowBar title={copy.queue} />
        <div className="console-layout">
          <div className="console-rail" aria-hidden="true">
            <MessageCircle />
            <FileCheck2 />
          </div>
          <div className="console-thread">
            <span className="story-overline">{copy.current}</span>
            <h4>{serviceCase.example.topic}</h4>
            <p className="console-assigned">
              {stage === 1 ? copy.waiting : copy.assigned}
            </p>
            <p className="chat-bubble">{serviceCase.example.visitor}</p>
            {stage === 1 && (
              <button
                type="button"
                className="story-action"
                onClick={() => onStage?.(2)}
              >
                {copy.action}
              </button>
            )}
            {stage >= 2 && (
              <p className="chat-bubble chat-response">
                {response.slice(0, Math.ceil(response.length * typing))}
                {typing < 1 ? (
                  <i className="typing-caret" aria-hidden="true" />
                ) : (
                  <CheckCheck size={14} aria-hidden="true" />
                )}
              </p>
            )}
            {stage === 3 && (
              <div className="transcript">
                <FileCheck2 size={20} aria-hidden="true" />
                <div>
                  <strong>{copy.saved}</strong>
                  <span>{copy.events.join(" · ")}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="conversation-phone">
        <div className="phone-camera" aria-hidden="true" />
        <div className="phone-top">
          <LockKeyhole size={11} aria-hidden="true" />
          {copy.portal}
        </div>
        <div className="phone-service">
          <MessageCircle size={24} aria-hidden="true" />
          <div>
            <strong>{copy.agent}</strong>
            <span>{copy.online}</span>
          </div>
        </div>
        <div className="phone-messages">
          <span className="story-overline">{copy.visitor}</span>
          <p className="chat-bubble">{serviceCase.example.visitor}</p>
          {stage >= 2 && (
            <>
              <span className="story-overline">{copy.agent}</span>
              <p className="chat-bubble chat-response">
                {response.slice(0, Math.ceil(response.length * received))}
                {received < 1 && (
                  <i className="typing-caret" aria-hidden="true" />
                )}
              </p>
            </>
          )}
          {stage === 1 && (
            <span className="chat-waiting" aria-label={copy.waiting}>
              <i />
              <i />
              <i />
            </span>
          )}
        </div>
        <div className="phone-input">
          {stage === 3 ? copy.closed : copy.placeholder}
          {stage < 3 && <ArrowUp size={19} aria-hidden="true" />}
        </div>
      </div>
    </SceneShell>
  );
}
