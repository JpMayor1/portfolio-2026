"use client";

import React from "react";

interface DevIconProps {
  className?: string;
  iconClass: string;
}

// Wrapper component for devicon icons
const DevIcon: React.FC<DevIconProps> = ({ className, iconClass }) => {
  // Extract size from className and convert to font-size
  // w-10 = 2.5rem (40px), w-12 = 3rem (48px)
  const getFontSize = () => {
    if (className?.includes("w-12") || className?.includes("md:w-12")) {
      return "3rem";
    }
    return "2.5rem"; // default to w-10 size
  };

  return (
    <i
      className={iconClass}
      style={{
        fontSize: getFontSize(),
        display: "inline-block",
        width: "1em",
        height: "1em",
      }}
    />
  );
};

// Zustand icon component
export const ZustandIcon: React.FC<{ className?: string }> = ({
  className,
}) => {
  return <DevIcon iconClass="devicon-zustand-plain" className={className} />;
};

// Framer Motion icon component
export const FramerMotionIcon: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <DevIcon iconClass="devicon-framermotion-plain" className={className} />
  );
};

// VS Code icon component
export const VSCodeIcon: React.FC<{ className?: string }> = ({ className }) => {
  return <DevIcon iconClass="devicon-vscode-plain" className={className} />;
};

// Cursor icon component
export const CursorIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height="1em"
      style={{ flex: "none", lineHeight: 1 }}
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Cursor</title>
      <path d="M22.106 5.68L12.5.135a.998.998 0 00-.998 0L1.893 5.68a.84.84 0 00-.419.726v11.186c0 .3.16.577.42.727l9.607 5.547a.999.999 0 00.998 0l9.608-5.547a.84.84 0 00.42-.727V6.407a.84.84 0 00-.42-.726zm-.603 1.176L12.228 22.92c-.063.108-.228.064-.228-.061V12.34a.59.59 0 00-.295-.51l-9.11-5.26c-.107-.062-.063-.228.062-.228h18.55c.264 0 .428.286.296.514z" />
    </svg>
  );
};

// n8n icon component
export const N8nIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height="1em"
      style={{ flex: "none", lineHeight: 1 }}
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>n8n</title>
      <path
        clipRule="evenodd"
        d="M24 8.4c0 1.325-1.102 2.4-2.462 2.4-1.146 0-2.11-.765-2.384-1.8h-3.436c-.602 0-1.115.424-1.214 1.003l-.101.592a2.38 2.38 0 01-.8 1.405c.412.354.704.844.8 1.405l.1.592A1.222 1.222 0 0015.719 15h.975c.273-1.035 1.237-1.8 2.384-1.8 1.36 0 2.461 1.075 2.461 2.4S20.436 18 19.078 18c-1.147 0-2.11-.765-2.384-1.8h-.975c-1.204 0-2.23-.848-2.428-2.005l-.101-.592a1.222 1.222 0 00-1.214-1.003H10.97c-.308.984-1.246 1.7-2.356 1.7-1.11 0-2.048-.716-2.355-1.7H4.817c-.308.984-1.246 1.7-2.355 1.7C1.102 14.3 0 13.225 0 11.9s1.102-2.4 2.462-2.4c1.183 0 2.172.815 2.408 1.9h1.337c.236-1.085 1.225-1.9 2.408-1.9 1.184 0 2.172.815 2.408 1.9h.952c.601 0 1.115-.424 1.213-1.003l.102-.592c.198-1.157 1.225-2.005 2.428-2.005h3.436c.274-1.035 1.238-1.8 2.384-1.8C22.898 6 24 7.075 24 8.4zm-1.23 0c0 .663-.552 1.2-1.232 1.2-.68 0-1.23-.537-1.23-1.2 0-.663.55-1.2 1.23-1.2.68 0 1.231.537 1.231 1.2zM2.461 13.1c.68 0 1.23-.537 1.23-1.2 0-.663-.55-1.2-1.23-1.2-.68 0-1.231.537-1.231 1.2 0 .663.55 1.2 1.23 1.2zm6.153 0c.68 0 1.231-.537 1.231-1.2 0-.663-.55-1.2-1.23-1.2-.68 0-1.231.537-1.231 1.2 0 .663.55 1.2 1.23 1.2zm10.462 3.7c.68 0 1.23-.537 1.23-1.2 0-.663-.55-1.2-1.23-1.2-.68 0-1.23.537-1.23 1.2 0 .663.55 1.2 1.23 1.2z"
      />
    </svg>
  );
};
