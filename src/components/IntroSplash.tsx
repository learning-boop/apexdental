import { site } from "@/content/site";

// First-visit loading animation: logo + company name fade/scale in,
// then the overlay lifts to reveal the site beneath.
// Driven by CSS in globals.css — plays from first paint, no JS framework needed.
//
// INTRO_SCRIPT runs in <head> before paint: sets html[data-intro="play"],
// then transitions through "reveal" -> "done". Once per session only.
const REVEAL_MS = 2200;
const DONE_MS = 3000;
const REDUCED_REVEAL_MS = 1200;
const REDUCED_DONE_MS = 1800;

export const INTRO_SCRIPT = `(function(){var d=document.documentElement,k="apex-intro-seen";try{if(sessionStorage.getItem(k))return;sessionStorage.setItem(k,"1")}catch(e){}var r=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;d.setAttribute("data-intro","play");setTimeout(function(){d.setAttribute("data-intro","reveal");window.dispatchEvent(new Event("apex:intro-reveal"))},r?${REDUCED_REVEAL_MS}:${REVEAL_MS});setTimeout(function(){d.setAttribute("data-intro","done")},r?${REDUCED_DONE_MS}:${DONE_MS})})();`;

export default function IntroSplash() {
  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-stack">
        <svg className="intro-mark" viewBox="0 0 43.991 60.594" xmlns="http://www.w3.org/2000/svg">
          <path
            className="intro-lobe-a"
            fill="#20EFDA"
            d="M32.206,0c-4.315,0-8.277,2.257-10.204,4.212c-2.76,2.801-8.509,7.123-11.419,21.72c-1.314,6.592,0.917,18.69,5.709,26.404c1.427-10.398,9.175-15.904,19.218-24.318c6.649-5.57,8.481-10.456,8.481-16.41C43.991,4.341,37.904,0,32.206,0z"
          />
          <path
            className="intro-lobe-b"
            fill="#3EE4FF"
            d="M34.336,26.034C30.241,11.432,24.75,7.013,21.989,4.212C20.062,2.257,16.1,0,11.785,0C5.894,0,0,4.341,0,11.609c0,5.953,1.961,10.69,8.481,16.41C19.35,37.554,29.647,45.71,26.69,60.594C35.526,50.637,36.681,34.394,34.336,26.034z"
          />
          <g className="intro-inner">
            <path
              fill="#13CFD8"
              d="M30.792,4.278c5.978,0,9.024,3.519,9.024,9.412c0,4.828-4.4,8.873-4.579,9.053l-1.452,1.407c-3.018-9.819-6.655-14.615-9.395-17.526C26.212,5.399,28.565,4.278,30.792,4.278z"
            />
            <path
              fill="#0CBAE8"
              d="M33.785,24.149L22.779,34.812c-0.241,0.241-0.559,0.363-0.881,0.363c-0.318,0-0.64-0.122-0.877-0.363l-10.223-9.921c2.222-10.292,5.876-15.227,8.71-18.203c0.999,0.677,1.835,1.378,2.39,1.933c0.575-0.571,1.448-1.305,2.492-1.998C27.13,9.534,30.767,14.329,33.785,24.149z"
            />
            <path
              fill="#13CFD8"
              d="M34.335,26.033c-0.184-0.648-0.367-1.276-0.551-1.884L22.779,34.812c-0.241,0.241-0.559,0.363-0.881,0.363c-0.318,0-0.64-0.122-0.877-0.363l-10.223-9.921c-0.073,0.343-0.147,0.689-0.216,1.04c-0.212,1.072-0.334,2.288-0.363,3.605c4.237,3.707,8.282,7.263,11.357,11.165c3.344-4.066,7.984-7.719,13.314-12.164C34.739,27.644,34.551,26.803,34.335,26.033z"
            />
            <path
              fill="#13CFD8"
              d="M24.389,6.622c-0.918-0.971-1.733-1.733-2.394-2.402c-0.677,0.685-1.537,1.464-2.487,2.467c0.999,0.677,1.835,1.378,2.39,1.933C22.473,8.05,23.345,7.316,24.389,6.622z"
            />
            <path
              fill="#3EE4FF"
              d="M13.008,4.278c2.267,0,4.665,1.162,6.5,2.41c-2.834,2.977-6.488,7.911-8.71,18.203l-2.255-2.19c-0.159-0.139-4.559-4.184-4.559-9.012C3.984,7.797,7.026,4.278,13.008,4.278z"
            />
          </g>
        </svg>
        <span className="intro-name">{site.shortName}</span>
      </div>
    </div>
  );
}
