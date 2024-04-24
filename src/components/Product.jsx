import React from "react";
import Button from "./Button";

function Product({ val = "Get Started" }) {
  return (
    <div className="w-full py-20 text-white">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="w-1/3 dets">
          <p className="mb-10 text-lg">{val.description}</p>
          <div className="flex items-center gap-5">
            {val.live && <Button title = "Live Website" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
