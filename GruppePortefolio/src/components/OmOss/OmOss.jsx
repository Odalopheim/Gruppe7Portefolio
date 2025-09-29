import React, { useState } from "react";
import "./OmOss.css";
import OmOssInfo from "./OmOssInfo";
import OmOssGallery from "./OmOssGallery";

function OmOss() {
  return (
    <>
      <OmOssInfo />
      <hr className="stylish-hr"></hr>
      <OmOssGallery />
    </>
  );
}

export default OmOss;