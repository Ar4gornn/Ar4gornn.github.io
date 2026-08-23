// jest-dom adds custom matchers for asserting on DOM nodes.
import "@testing-library/jest-dom";

// The jsdom environment Create React App ships does not define TextEncoder or
// TextDecoder. react-router 7's CommonJS bundle constructs a TextEncoder at
// module scope, so importing it in a test throws before any test runs. Node has
// both; hand them to the global scope.
import { TextEncoder, TextDecoder } from "util";

if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === "undefined") {
  global.TextDecoder = TextDecoder;
}
