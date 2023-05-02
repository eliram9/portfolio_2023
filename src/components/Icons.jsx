// github icon
export const GithubIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill=""
        viewBox="0 0 24 24"
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z" />
    </svg>
)

export const DarkModeIcon = ({ className="", ...rest }) => (
<svg xmlns="http://www.w3.org/2000/svg" 
     width={23} 
     height={23} 
     viewBox="0 0 24 24" 
     className={`w-full h-auto ${className}`}
     {...rest}>
        <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
        <g fill="none" stroke="currentColor" strokeDasharray="2" strokeDashoffset="2" strokeLinecap="round" strokeWidth="2">
            <path d="M0 0">
                <animate fill="freeze" attributeName="d" begin="1.2s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1" />
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="2;0" />
            </path>
            <path d="M0 0">
                <animate fill="freeze" attributeName="d" begin="1.5s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5" />
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="1.2s" values="2;0" />
            </path>
            <animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
        </g>
        <g fill="currentColor">
            <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
                <animate fill="freeze" attributeName="fill-opacity" dur="0.4s" values="1;0" />
            </path>
            <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
                <animate fill="freeze" attributeName="fill-opacity" begin="0.2s" dur="0.4s" values="1;0" />
            </path>
        </g>
        <g fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
            <set attributeName="opacity" begin="0.6s" to="0" />
        </g>
        <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="18" cy="6" r="12" fill="#fff">
                <animate fill="freeze" attributeName="cx" begin="0.6s" dur="0.4s" values="18;22" />
                <animate fill="freeze" attributeName="cy" begin="0.6s" dur="0.4s" values="6;2" />
                <animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="12;3" />
            </circle>
            <circle cx="18" cy="6" r="10">
                <animate fill="freeze" attributeName="cx" begin="0.6s" dur="0.4s" values="18;22" />
                <animate fill="freeze" attributeName="cy" begin="0.6s" dur="0.4s" values="6;2" />
                <animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="10;1" />
            </circle>
        </mask>
        <circle cx="12" cy="12" r="10" fill="currentColor" mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)" opacity="0">
            <set attributeName="opacity" begin="0.6s" to="1" />
            <animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="10;6" />
        </circle>
    </svg>
)

// Dark Mode Icon
export const LightModeIcon = ({ className="", ...rest }) => (
    <svg xmlns="http://www.w3.org/2000/svg" 
         width={23} 
         height={23} 
         viewBox="0 0 24 24" 
         className={`w-full h-auto ${className}`}
         {...rest}>
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <g strokeDasharray="2">
                <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;2" />
                </path>
                <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="4;2" />
                </path>
            </g>
            <path fill="currentColor" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" opacity="0">
                <set attributeName="opacity" begin="0.5s" to="1" />
            </path>
        </g>
        <g fill="currentColor" fillOpacity="0">
            <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
                <animate id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0" fill="freeze" attributeName="fill-opacity" begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s" dur="0.4s" values="0;1" />
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s" dur="0.4s" values="1;0" />
            </path>
            <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s" dur="0.4s" values="0;1" />
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s" dur="0.4s" values="1;0" />
            </path>
            <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s" dur="0.4s" values="0;1" />
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s" dur="0.4s" values="1;0" />
            </path>
            <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s" dur="0.4s" values="0;1" />
                <animate fill="freeze" attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s" dur="0.4s" values="1;0" />
                </path>
        </g>
        <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="22" cy="2" r="3" fill="#fff">
                <animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" />
                <animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" />
                <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="3;12" />
            </circle>
            <circle cx="22" cy="2" r="1">
                <animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" />
                <animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" />
                <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="1;10"/>
            </circle>
        </mask>
        <circle cx="12" cy="12" r="6" fill="currentColor" mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)">
            <set attributeName="opacity" begin="0.5s" to="0" />
            <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="6;10" />
        </circle>
    </svg>
)


// Codepen icon
export const CodepenIcon = ({ className="", ...rest }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    viewBox="0 0 17 16"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      fill=""
      d="m7.5.5.29-.407a.5.5 0 0 0-.58 0L7.5.5Zm7 5h.5a.5.5 0 0 0-.21-.407l-.29.407Zm0 4 .29.407A.5.5 0 0 0 15 9.5h-.5Zm-7 5-.29.407a.5.5 0 0 0 .58 0L7.5 14.5Zm-7-5H0a.5.5 0 0 0 .21.407L.5 9.5Zm0-4-.29-.407A.5.5 0 0 0 0 5.5h.5ZM7.21.907l7 5 .58-.814-7-5-.58.814ZM14 5.5v4h1v-4h-1Zm.21 3.593-7 5 .58.814 7-5-.58-.814Zm-6.42 5-7-5-.58.814 7 5 .58-.814ZM1 9.5v-4H0v4h1ZM.79 5.907l7-5-.58-.814-7 5 .58.814Zm0 4 7-5-.58-.814-7 5 .58.814Zm6.42-5 7 5 .58-.814-7-5-.58.814Zm-7 1 7 5 .58-.814-7-5-.58.814Zm7.58 5 7-5-.58-.814-7 5 .58.814ZM7 .5v4h1v-4H7Zm0 10v4h1v-4H7Z"
    />
  </svg>
)

// LinkedIn icon
export const LinkedinIcon = ({ className="", ...rest }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 16"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      stroke=""
      d="M4.5 6v5m6 0V8.5a2 2 0 1 0-4 0V11 6M4 4.5h1M1.5.5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Z"
    />
  </svg>
    // <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     width={20}
    //     height={20}
    //     fill=""
    //     stroke={2.3}
    //     strokeWidth={0}
    //     viewBox="0 0 256 256"
    //     className={`w-full h-auto ${className}`}
    //     {...rest}
    // >
    //     <path d="M96 80a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm-8 28.001a4 4 0 0 0-4 4v64a4 4 0 1 0 8 0v-64a4 4 0 0 0-4-4Zm60 0a31.925 31.925 0 0 0-24 10.868V112a4 4 0 0 0-8 0v64a4 4 0 1 0 8 0v-36a24 24 0 0 1 48 0v36a4 4 0 1 0 8 0v-36a32.036 32.036 0 0 0-32-32ZM224 44v168a12.014 12.014 0 0 1-12 12H44a12.014 12.014 0 0 1-12-12V44a12.014 12.014 0 0 1 12-12h168a12.014 12.014 0 0 1 12 12Zm-8 0a4.005 4.005 0 0 0-4-4H44a4.005 4.005 0 0 0-4 4v168a4.005 4.005 0 0 0 4 4h168a4.005 4.005 0 0 0 4-4Z" />
    // </svg>
)

// AWS icon
export const AWSIcon = ({ className="", ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={100}
        height={100}
        fill=""
        stroke=""
        strokeWidth={0.003}
        preserveAspectRatio="xMidYMid"
        viewBox="0 -51.5 256 256"
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <path
        fill="#3d3f3a252F3E"
        d="M72.392 55.438c0 3.137.34 5.68.933 7.545a45.373 45.373 0 0 0 2.712 6.103c.424.678.593 1.356.593 1.95 0 .847-.508 1.695-1.61 2.543l-5.34 3.56c-.763.509-1.526.763-2.205.763-.847 0-1.695-.424-2.543-1.187a26.224 26.224 0 0 1-3.051-3.984c-.848-1.44-1.696-3.052-2.628-5.001-6.612 7.798-14.92 11.698-24.922 11.698-7.12 0-12.8-2.035-16.954-6.103-4.153-4.07-6.272-9.495-6.272-16.276 0-7.205 2.543-13.054 7.714-17.462 5.17-4.408 12.037-6.612 20.768-6.612 2.882 0 5.849.254 8.985.678 3.137.424 6.358 1.102 9.749 1.865V29.33c0-6.443-1.357-10.935-3.985-13.563-2.712-2.628-7.29-3.9-13.817-3.9-2.967 0-6.018.34-9.155 1.103-3.136.762-6.188 1.695-9.155 2.882-1.356.593-2.373.932-2.967 1.102-.593.17-1.017.254-1.356.254-1.187 0-1.78-.848-1.78-2.628v-4.154c0-1.356.17-2.373.593-2.966.424-.594 1.187-1.187 2.374-1.78 2.967-1.526 6.527-2.798 10.68-3.815C33.908.763 38.316.255 42.978.255c10.088 0 17.463 2.288 22.21 6.866 4.662 4.577 7.036 11.528 7.036 20.853v27.464h.17ZM37.976 68.323c2.798 0 5.68-.508 8.731-1.526 3.052-1.017 5.765-2.882 8.053-5.425 1.357-1.61 2.374-3.39 2.882-5.425.509-2.034.848-4.493.848-7.375v-3.56a70.791 70.791 0 0 0-7.799-1.441 63.874 63.874 0 0 0-7.968-.509c-5.68 0-9.833 1.102-12.63 3.391-2.798 2.289-4.154 5.51-4.154 9.748 0 3.984 1.017 6.951 3.136 8.986 2.035 2.119 5.002 3.136 8.901 3.136Zm68.069 9.155c-1.526 0-2.543-.254-3.221-.848-.678-.508-1.272-1.695-1.78-3.305L81.124 7.799c-.51-1.696-.764-2.798-.764-3.391 0-1.356.678-2.12 2.035-2.12h8.307c1.61 0 2.713.255 3.306.848.678.509 1.187 1.696 1.695 3.306l14.241 56.117 13.224-56.117c.424-1.695.933-2.797 1.61-3.306.679-.508 1.866-.847 3.392-.847h6.781c1.61 0 2.713.254 3.39.847.679.509 1.272 1.696 1.611 3.306l13.394 56.795L168.01 6.442c.508-1.695 1.102-2.797 1.695-3.306.678-.508 1.78-.847 3.306-.847h7.883c1.357 0 2.12.678 2.12 2.119 0 .424-.085.848-.17 1.356-.085.509-.254 1.187-.593 2.12l-20.43 65.525c-.508 1.696-1.101 2.798-1.78 3.306-.678.509-1.78.848-3.22.848h-7.29c-1.611 0-2.713-.254-3.392-.848-.678-.593-1.271-1.695-1.61-3.39l-13.14-54.676-13.054 54.59c-.423 1.696-.932 2.798-1.61 3.391-.678.594-1.865.848-3.39.848h-7.291Zm108.927 2.289c-4.408 0-8.816-.509-13.054-1.526-4.239-1.017-7.544-2.12-9.748-3.39-1.357-.764-2.29-1.611-2.628-2.374a5.983 5.983 0 0 1-.509-2.374V65.78c0-1.78.678-2.628 1.95-2.628a4.8 4.8 0 0 1 1.526.255c.508.17 1.271.508 2.119.847a46.108 46.108 0 0 0 9.324 2.967 50.907 50.907 0 0 0 10.088 1.017c5.34 0 9.494-.932 12.376-2.797 2.882-1.865 4.408-4.577 4.408-8.053 0-2.373-.763-4.323-2.289-5.934-1.526-1.61-4.408-3.051-8.561-4.408l-12.292-3.814c-6.188-1.95-10.765-4.832-13.563-8.647-2.797-3.73-4.238-7.883-4.238-12.291 0-3.56.763-6.697 2.289-9.41 1.525-2.712 3.56-5.085 6.103-6.95 2.543-1.95 5.425-3.391 8.816-4.408 3.39-1.017 6.95-1.441 10.68-1.441 1.865 0 3.815.085 5.68.339 1.95.254 3.73.593 5.51.932 1.695.424 3.306.848 4.832 1.357 1.526.508 2.712 1.017 3.56 1.525 1.187.679 2.034 1.357 2.543 2.12.509.678.763 1.61.763 2.797v3.984c0 1.78-.678 2.713-1.95 2.713-.678 0-1.78-.34-3.22-1.018-4.833-2.204-10.258-3.306-16.276-3.306-4.832 0-8.647.763-11.275 2.374-2.627 1.61-3.984 4.069-3.984 7.544 0 2.374.848 4.408 2.543 6.019 1.696 1.61 4.832 3.221 9.325 4.662l12.037 3.815c6.103 1.95 10.511 4.662 13.139 8.137 2.628 3.476 3.9 7.46 3.9 11.868 0 3.645-.764 6.951-2.205 9.833-1.525 2.882-3.56 5.425-6.188 7.46-2.628 2.119-5.764 3.645-9.409 4.747-3.815 1.187-7.799 1.78-12.122 1.78Z"
        />
        <path
        fill="#3d3f3a className={`w-full h-auto ${className}`} {...rest}"
        d="M230.993 120.964c-27.888 20.599-68.408 31.534-103.247 31.534-48.827 0-92.821-18.056-126.05-48.064-2.628-2.373-.255-5.594 2.881-3.73 35.942 20.854 80.276 33.484 126.136 33.484 30.94 0 64.932-6.442 96.212-19.666 4.662-2.12 8.646 3.052 4.068 6.442Zm11.614-13.224c-3.56-4.577-23.566-2.204-32.636-1.102-2.713.34-3.137-2.034-.678-3.814 15.936-11.19 42.13-7.968 45.181-4.239 3.052 3.815-.848 30.008-15.767 42.554-2.288 1.95-4.492.933-3.475-1.61 3.39-8.393 10.935-27.296 7.375-31.789Z"
        />
    </svg>
)

// Dark mode icon


                


// Resume file download
export const FileDownload = ({ className="", ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        viewBox="0 0 24 24"
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <g fill="#f5f5f5">
            <path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1Z" />
            <path d="M6 17a1 1 0 1 0-2 0v.6C4 19.482 5.518 21 7.4 21h9.2c1.882 0 3.4-1.518 3.4-3.4V17a1 1 0 1 0-2 0v.6c0 .778-.622 1.4-1.4 1.4H7.4c-.778 0-1.4-.622-1.4-1.4V17Z" />
        </g>
    </svg>
)

// Contact - email
export const Email = ({ className="", ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="#f5f5f5"
        stroke="#f5f5f5"
        strokeWidth={0}
        viewBox="0 0 32 32"
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <title>{"mail--all"}</title>
        <path
            stroke="none"
            d="M16.59 20.41 20.17 24l-3.59 3.59L18 29l5-5-5-5-1.41 1.41zM23.59 20.41 27.17 24l-3.59 3.59L25 29l5-5-5-5-1.41 1.41z"
        />
        <path
            stroke="none"
            d="M14 23H4V7.91l11.43 7.91a1 1 0 0 0 1.14 0L28 7.91V17h2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10ZM25.8 7 16 13.78 6.2 7Z"
        />
        <path
            stroke="none"
            d="M0 0h32v32H0z"
            data-name="&lt;Transparent Rectangle&gt;"
            style={{
                fill: "none",
            }}
        />
    </svg>
)

// React.js logo
export const ReactIcon = ({ className="", ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={15}
        height={15}
        fill="#3d3f3a"
        stroke="#3d3f3a"
        strokeWidth={0}
        viewBox="0 0 32 32"
        className={`w-full h-auto ${className}`}
        {...rest}
        >
        <g stroke="none">
            <path d="M29.7 16c0-1.9-2.2-3.5-5.7-4.5.9-3.5.6-6.2-1-7.2-.4-.2-.8-.3-1.3-.3-1.5 0-3.5 1.1-5.5 3-2-1.9-3.9-3-5.5-3-.5 0-.9.1-1.3.3-1.5 1-1.8 3.7-1 7.2-3.4 1-5.7 2.7-5.7 4.5 0 1.9 2.2 3.5 5.7 4.5-.8 3.5-.5 6.3 1.1 7.2.4.2.8.3 1.3.3 1.5 0 3.5-1.1 5.5-3 2 1.9 3.9 3 5.5 3 .5 0 .9-.1 1.3-.3 1.6-.9 1.9-3.7 1.1-7.2 3.3-1 5.5-2.7 5.5-4.5zm-8-10.7c.3 0 .5 0 .6.2.8.4 1.1 2 .8 4.1-.1.5-.2 1.1-.3 1.6-1.1-.3-2.2-.4-3.5-.6-.7-1-1.4-1.9-2.2-2.7 1.8-1.7 3.5-2.6 4.6-2.6zm-1.8 12.8c-.4.7-.8 1.4-1.3 2-.8.1-1.6.1-2.4.1-.8 0-1.6 0-2.4-.1-.4-.6-.8-1.3-1.3-2-.4-.7-.8-1.4-1.1-2.1.3-.7.7-1.4 1.1-2.1.4-.7.9-1.4 1.3-2.1.8-.1 1.6-.1 2.4-.1.8 0 1.6 0 2.4.1.4.6.9 1.3 1.3 2.1.4.7.8 1.4 1.1 2.1-.3.7-.7 1.4-1.1 2.1zm1.8-.6c.3.7.5 1.4.7 2-.7.2-1.4.3-2.1.4.2-.4.5-.8.7-1.2.3-.3.5-.8.7-1.2zm-5.5 5.7c-.5-.5-1-1.1-1.4-1.7h2.8c-.4.6-.9 1.2-1.4 1.7zM12.1 20c-.7-.1-1.4-.2-2.1-.4.2-.7.5-1.4.7-2 .2.4.4.8.7 1.2.3.4.5.8.7 1.2zm-1.4-5.5c-.3-.7-.5-1.4-.8-2.1.7-.2 1.4-.3 2.2-.4-.3.4-.5.8-.8 1.2-.1.5-.3.9-.6 1.3zm5.5-5.7c.5.5.9 1.1 1.4 1.6h-2.8c.5-.5 1-1.1 1.4-1.6zm4.8 4.4c-.3-.4-.5-.8-.8-1.2.8.1 1.5.2 2.2.4-.2.7-.5 1.4-.8 2.1-.1-.4-.3-.8-.6-1.3zM9.4 9.5c-.3-2.1 0-3.6.8-4.1.2-.1.4-.2.6-.2 1.1 0 2.7.9 4.5 2.6-.7.8-1.5 1.7-2.2 2.7-1.2.1-2.4.3-3.5.6-.1-.5-.2-1.1-.2-1.6zm-2.2 9.2C5.3 17.9 4 16.8 4 16c0-.9 1.2-1.9 3.1-2.7.5-.2 1-.4 1.6-.5.3 1.1.7 2.2 1.3 3.3-.5 1.1-.9 2.2-1.2 3.2-.6-.2-1.1-.4-1.6-.6zm2.9 7.9c-.8-.4-1.1-2-.8-4.1.1-.5.2-1.1.3-1.7 1.1.2 2.2.4 3.4.5.7 1 1.5 1.9 2.2 2.7-1.8 1.7-3.4 2.6-4.5 2.6-.2.1-.4 0-.6 0zm13-4.1c.3 2.1 0 3.6-.8 4.1-.2.1-.4.2-.6.2-1.1 0-2.7-.9-4.5-2.6.8-.8 1.5-1.7 2.2-2.7 1.2-.1 2.4-.3 3.4-.5.1.4.2.9.3 1.5zm2.2-3.8c-.5.2-1 .4-1.6.5-.3-1-.7-2.1-1.2-3.2.5-1.1.9-2.2 1.3-3.3.5.2 1.1.3 1.6.5 1.9.8 3.1 1.8 3.1 2.7-.1.9-1.3 2-3.2 2.8z" />
            <path d="M16.3 18.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z" />
        </g>
    </svg>
  )
