import React, { FC, useEffect } from 'react';
import './index.less';

type Props = {};
const PieCanvas: FC<Props> = (props: Props) => {
  useEffect(() => {
    const Canvas = document.querySelector('#pie-canvas') as HTMLCanvasElement;
    const ctx = Canvas.getContext('2d');
    const HEIGHT = (Canvas.height = 128);
    const WIDTH = (Canvas.width = 128);
    const lineWidth = 12;
    console.log(WIDTH, HEIGHT);
    if (ctx) {
      // 白色圆环
      ctx.beginPath();
      ctx.arc(WIDTH / 2, HEIGHT / 2, WIDTH / 2.5, 0, (4 * Math.PI) / 2);
      ctx.strokeStyle = '#fff';
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(0,0,0,.2)';
      ctx.lineWidth = lineWidth;
      ctx.stroke();

      // 内圆
      ctx.beginPath();
      ctx.arc(WIDTH / 2, HEIGHT / 2, WIDTH / 4, 0, 2 * Math.PI);
      ctx.fillStyle = '#fff';
      ctx.fill();

      //写字
      ctx.beginPath();
      ctx.fillStyle = '#000';
      ctx.font = 'bold 22px Arial';
      console.log(ctx.measureText('80%'));
      const { width } = ctx.measureText('80%');
      ctx.fillText('80%', (WIDTH - width) / 2, (HEIGHT + 16) / 2);

      // 画 彩色圆部分
      ctx.beginPath();
      ctx.arc(WIDTH / 2, HEIGHT / 2, WIDTH / 2.5, 0, (3 * Math.PI) / 2);
      const grd = ctx.createLinearGradient(0, 0, 200, 0);
      grd.addColorStop(0, '#0FE4CC');
      grd.addColorStop(1, '#2B7DCE');
      ctx.strokeStyle = grd;
      ctx.lineCap = 'round';
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    }
  });
  return <canvas id="pie-canvas" className="pie-canvas"/>;
};

export default PieCanvas;
