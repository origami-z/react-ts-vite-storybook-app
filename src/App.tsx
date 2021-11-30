import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

// Copied from https://stackblitz.com/edit/typescript-sha256-base64-encoded. Need verification.
const randomStr = (len: number) => {
  const arr = new Uint8Array(len);
  window.crypto.getRandomValues(arr);
  return String.fromCharCode(...toCharCodes(arr));
};

const toCharCodes = (arr: Uint8Array) => {
  const validChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return arr.map((x) => validChars.charCodeAt(x % validChars.length));
};

const sha256 = (message: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  return window.crypto.subtle.digest("SHA-256", data);
};

const bufferToBase64UrlEncoded = (input: ArrayBuffer) => {
  const bytes = new Uint8Array(input);
  return urlEncodeBase64(window.btoa(String.fromCharCode(...bytes)));
};

const urlEncodeBase64 = (input: string) => {
  const chars = { "+": "-", "/": "_", "=": "" };
  return input.replace(/[\+\/=]/g, (m) => chars[m]);
};

function App() {
  const [count, setCount] = useState(0);
  const [encoded, setEncoded] = useState("");
  useEffect(() => {
    sha256(randomStr(32)).then((shaBuffer) =>
      setEncoded(bufferToBase64UrlEncoded(shaBuffer))
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        {/* <p>
          {crypto
            .createHmac("sha256", "abcdef")
            .update("I love cupcakes")
            .digest("hex")}
        </p> */}
        <p>sha256 encoded - {encoded}</p>
      </header>
    </div>
  );
}

export default App;
