import { SVGProps } from "react";

export function HelpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 17v.01m0-3.51a1.5 1.5 0 0 1 1-1.5a2.6 2.6 0 1 0-3-4"></path>
      </g>
    </svg>
  );
}
