"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./ProductSpinViewer.css";

interface ProductSpinViewerProps {
  frames: string[];
  alt: string;
}

const PIXELS_PER_FRAME = 28;

export const ProductSpinViewer: React.FC<ProductSpinViewerProps> = ({
  frames,
  alt,
}) => {
  const [frame, setFrame] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef<{
    startX: number;
    startFrame: number;
    pointerId: number | null;
  }>({ startX: 0, startFrame: 0, pointerId: null });
  const stageRef = useRef<HTMLDivElement>(null);

  const total = frames.length;

  const setFrameFromDelta = useCallback(
    (deltaX: number, startFrame: number) => {
      if (total < 2) return;
      const steps = Math.round(deltaX / PIXELS_PER_FRAME);
      // Drag right → previous frame (object rotates left), feels natural
      const next = (((startFrame - steps) % total) + total) % total;
      setFrame(next);
    },
    [total]
  );

  useEffect(() => {
    setFrame(0);
  }, [frames]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (total < 2) return;
    dragRef.current = {
      startX: e.clientX,
      startFrame: frame,
      pointerId: e.pointerId,
    };
    setDragging(true);
    stageRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging || dragRef.current.pointerId !== e.pointerId) return;
    setFrameFromDelta(e.clientX - dragRef.current.startX, dragRef.current.startFrame);
  };

  const endDrag = (e: React.PointerEvent) => {
    if (dragRef.current.pointerId !== e.pointerId) return;
    setDragging(false);
    dragRef.current.pointerId = null;
    try {
      stageRef.current?.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
  };

  if (!frames.length) return null;

  return (
    <div className="product-spin">
      <div
        ref={stageRef}
        className={`product-spin__stage${dragging ? " is-dragging" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        role="img"
        aria-label={`${alt} — drag to rotate`}
      >
        {frames.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={600}
            height={600}
            className={`product-spin__frame${i === frame ? " is-active" : ""}`}
            priority={i === 0}
            draggable={false}
            unoptimized
          />
        ))}
        <div className="product-spin__hint" aria-hidden="true">
          <span className="product-spin__hint-icon">↔</span>
          Drag to rotate
        </div>
      </div>

      <div className="product-spin__dots" role="tablist" aria-label="Rotation frames">
        {frames.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === frame}
            className={`product-spin__dot${i === frame ? " is-active" : ""}`}
            onClick={() => setFrame(i)}
            aria-label={`View angle ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
