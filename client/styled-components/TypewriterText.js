import styled from "styled-components";
import { keyframes } from "styled-components";

/*
// const typing = keyframes`
// @keyframes typing {
//   from { width: 0 }
//   to { width: 100% }
//   }
// `;

// const blinking = keyframes`blink-caret {
//   from, to { border-color: transparent }
//   50% { border-color: orange }
// }`;*/

export const TypewriterText = styled.div`
overflow: hidden; /* Ensures the content is not revealed until the animation */
white-space: nowrap; /* Keeps the content on a single line */
margin: 0 auto; /* Gives that scrolling effect as the typing happens */
letter-spacing: .15em; /* Adjust as needed */
animation:
    typing 5s steps(30, end),
    blink-caret .5s step-end infinite;


/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 36.5% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: white }
}

`;
