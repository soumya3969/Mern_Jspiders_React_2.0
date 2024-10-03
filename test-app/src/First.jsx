import React from "react";
let msg = "Happy Navratri";
let chead = "head";
let msg2 = "Mother of Earth";
console.log(msg, chead, msg2);

const First = () => {
  return (
    <section>
      <div>
        <h2 className={chead}>{msg}</h2>
        <p style={{ color: "#252424" }}> {msg2}</p>
      </div>
      <div>
        <h1 className="head">Hello World!!</h1>
      </div>
    </section>
  );
};

export default First;
