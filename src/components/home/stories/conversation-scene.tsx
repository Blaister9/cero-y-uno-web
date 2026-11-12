import {
  ArrowUp,
  CheckCheck,
  FileCheck2,
  Headphones,
  LockKeyhole,
  MessageCircle,
  RotateCcw,
} from "lucide-react";
import { useId } from "react";
import { serviceCase } from "@/content/service-case";
import { conversationScene as copy } from "@/content/story-scenes";
import { useConversationPerformance } from "@/lib/use-conversation-performance";
import { SceneShell, WindowBar, type SceneProps } from "./scene-shell";

export function ConversationScene({ stage, progress, onStage }: SceneProps) {
  const response = serviceCase.example.agent;
  const performance = useConversationPerformance(stage, response);
  const portraitId = useId();
  return (
    <SceneShell
      name="conversation"
      label={copy.label}
      stage={stage}
      progress={progress}
      status={copy.states[stage]}
    >
      <div
        className="conversation-portrait"
        data-pose={performance.pose}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1280 720"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <defs>
            <radialGradient id={`${portraitId}-feather`}>
              <stop offset="65%" stopColor="white" />
              <stop offset="100%" stopColor="black" />
            </radialGradient>
            <mask
              id={`${portraitId}-mouth`}
              maskUnits="userSpaceOnUse"
              x="580"
              y="330"
              width="240"
              height="180"
            >
              <ellipse
                cx="688"
                cy="409"
                rx="99"
                ry="68"
                fill={`url(#${portraitId}-feather)`}
              />
            </mask>
          </defs>
          <image href={copy.image} width="1280" height="720" />
          <g mask={`url(#${portraitId}-mouth)`}>
            <image
              className="portrait-mouth portrait-mouth-open"
              href={copy.mouthOpen}
              x="580"
              y="330"
              width="240"
              height="180"
            />
            <image
              className="portrait-mouth portrait-mouth-round"
              href={copy.mouthRound}
              x="580"
              y="330"
              width="240"
              height="180"
            />
          </g>
        </svg>
      </div>
      <div className="conversation-person">
        <span className="story-overline">
          <Headphones size={16} aria-hidden="true" />
          {copy.agent}
        </span>
      </div>
      {stage >= 2 && (
        <div
          className="conversation-speech"
          data-speaking={performance.speaking}
        >
          <div className="speech-heading">
            <span className="speech-wave" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            <span>{performance.delivered ? copy.sent : copy.speaking}</span>
            {stage === 2 && (
              <button
                type="button"
                onClick={performance.replay}
                aria-label={copy.replay}
                title={copy.replay}
              >
                <RotateCcw size={15} aria-hidden="true" />
              </button>
            )}
          </div>
          <p aria-hidden="true">{performance.spoken || "…"}</p>
          <span className="sr-only">{response}</span>
        </div>
      )}
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
                {performance.spoken}
                {!performance.delivered ? (
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
              <p
                className="chat-bubble chat-response"
                data-delivered={performance.delivered}
              >
                {performance.received}
                {!performance.delivered && (
                  <i className="typing-caret" aria-hidden="true" />
                )}
                {performance.delivered && (
                  <CheckCheck size={14} aria-hidden="true" />
                )}
              </p>
              {performance.delivered && (
                <span className="phone-received">{copy.delivered}</span>
              )}
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
