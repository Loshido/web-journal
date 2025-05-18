import type Props from "./types";
export default (props: Props) => (
<svg
            {...props}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-blue-400"
            fill="currentColor"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              className="text-white"
              fill="currentColor"
            />
            <path
              d="M17,11H11V9.86a1,1,0,0,0-1.5-.69L6.38,11.31a.82.82,0,0,0,0,1.38L9.5,14.83a1,1,0,0,0,1.5-.69V13h6a1,1,0,0,0,0-2Z"
              fill="currentColor"
            />
          </svg>
);
