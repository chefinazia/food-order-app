import React from "react";

import ReactDOM from "react-dom/client";

const JSX = () => {
   return     <>
        <h1>JSX</h1>
        </>

}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<JSX></JSX>);