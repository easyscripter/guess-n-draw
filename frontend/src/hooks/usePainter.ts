import { useEffect, useRef, useState } from "react";

export const usePainter = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(0.1);

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext("2d");
    if (ctx) {
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.globalAlpha = lineOpacity;
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = lineWidth;
      ctxRef.current = ctx;
    }
  }, [lineColor, lineOpacity, lineWidth]);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.style.width = "100%";
      canvasRef.current.style.height = "100%";
      canvasRef.current.width = canvasRef.current.offsetWidth;
      canvasRef.current.height = canvasRef.current.offsetHeight;
    }
  }, [canvasRef.current]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    ctxRef.current?.beginPath();
    ctxRef.current?.moveTo(
      e.pageX - (canvasRef.current?.offsetLeft || 0),
      e.pageY - (canvasRef.current?.offsetTop || 0)
    );
    setIsDrawing(true);
  };

  const endDrawing = () => {
    ctxRef.current?.closePath();
    setIsDrawing(false);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isDrawing) {
      return;
    }
    ctxRef.current?.lineTo(
      e.pageX - (canvasRef.current?.offsetLeft || 0),
      e.pageY - (canvasRef.current?.offsetTop || 0)
    );

    ctxRef.current?.stroke();
  };

  return {
    canvasRef,
    ctxRef,
    startDrawing,
    endDrawing,
    draw,
  };
};
