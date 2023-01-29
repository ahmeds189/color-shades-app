import React, { useState, useEffect } from "react";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { IoMdDoneAll } from "react-icons/io";
import { CopyToClipboard } from "react-copy-to-clipboard";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [copy, setCopy] = useState(false);
  const bgc = rgb.join(",");
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const clearMsg = setTimeout(() => {
      setCopy(false);
    }, 2000);
    return () => clearInterval(clearMsg);
  }, [copy]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bgc})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      <div className="copy-color">
        <CopyToClipboard onCopy={() => setCopy(true)} text={hexValue}>
          <span className={`${index > 10 && "copy-light"}`}>
            <HiOutlineClipboardCopy />
          </span>
        </CopyToClipboard>
        {copy && (
          <>
            <span className={`${index > 10 && "copy-light"}`}>
              <IoMdDoneAll />
            </span>
            <span className={`${index > 10 && "copy-light"}`}>copied</span>
          </>
        )}
      </div>
    </article>
  );
};

export default SingleColor;
