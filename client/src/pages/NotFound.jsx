import "./css/NotFound.css";

export default function NotFound(){
    return(
            <div className="block404">
      <div className="waves"></div>

      <div className="obj">
        <img
          src="https://imgur.com/w0Yb4MX.png"
          alt="404 astronaut"
        />
      </div>

      <div className="t404"></div>

      {/* SVG Filter */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="glitch">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.03"
              numOctaves="1"
              result="warp"
            />
            <feColorMatrix
              in="warp"
              result="huedturb"
              type="hueRotate"
              values="0"
            >
              <animate
                attributeName="values"
                values="0;180;360"
                dur="3s"
                repeatCount="indefinite"
              />
            </feColorMatrix>
            <feDisplacementMap
              in="SourceGraphic"
              in2="huedturb"
              scale="50"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </div>
    )
}