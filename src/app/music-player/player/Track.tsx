import React from "react";
import "../../globals.css";

export default function Track({
  title,
  artist,
  link,
}: {
  title: string;
  artist: string;
  link: string;
}) {
  return (
    <div className="track-info">
      <p>
        <i>
          <a href={`https://www.audius.co${link}`} target={"_blank"}>
            <b>{title}</b>
          </a>
        </i>
      </p>
      <p>
        <b>{artist}</b>
      </p>
    </div>
  );
}
