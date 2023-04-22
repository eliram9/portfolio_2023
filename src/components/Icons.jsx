export const GithubIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="#3d3f3a"
        viewBox="0 0 24 24"
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z" />
    </svg>
)

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
