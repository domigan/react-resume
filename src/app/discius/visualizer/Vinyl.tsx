"use client";
import React from "react";
import Image from "next/image";
import { AudiusPicture } from "@/types/Audius.type";
import "../../globals.css";

export default function Vinyl({
  artwork,
  playing,
}: {
  artwork: AudiusPicture | null;
  playing: boolean;
}) {
  const playing_class = playing ? " vinyl" : "";
  return (
    <div className="vinyl-container">
      {artwork && (
        <img
          src={artwork["480x480"]}
          className={`image2 ${playing_class}`}
          alt="logo"
        />
      )}

      <Image
        src="/img/vinyl_img.png"
        width={500}
        height={500}
        className={`image1 ${playing_class}`}
        alt="vinyl"
      />
    </div>
  );
}
