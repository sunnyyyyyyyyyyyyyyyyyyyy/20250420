let circles = [];
let colors = ['#F6D6D6', '#FFF3C9', '#D5E8D4', '#E0ECF8', '#F9E3F0', '#C8E3D4', '#FFE8D6', '#E7E6F7', '#FDF6EC', '#DDEBF1'];

let s = (p) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(200);
  };

  p.draw = () => {
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  };
};

new p5(s);

function setup() {
  let startButton = createButton('啟動音效'); 

  startButton.position(10, 10);
  startButton.mousePressed(() => {
    getAudioContext().resume(); // 啟動 AudioContext
    startButton.hide(); // 隱藏按鈕
  });
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#e3d5ca'); // 設定背景顏色

  // 生成 40 個圓圈
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width), // 隨機 x 座標
      y: random(height), // 隨機 y 座標
      size: random(30, 100), // 隨機大小
      color: color(random(colors)) // 從指定顏色列表中隨機選擇
    });
  }
}

function draw() {
  background('#e3d5ca'); // 重繪背景

  // 根據滑鼠位置調整圓圈大小
  let sizeOffset = map(mouseX, 0, width, 10, 120);

  // 繪製圓圈
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size + sizeOffset); // 圓圈大小隨滑鼠變化
  }
}

function windowResized() {
  let oldWidth = width;
  let oldHeight = height;

  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布

  // 調整圓圈位置
  for (let circle of circles) {
    circle.x = circle.x * (windowWidth / oldWidth); // 根據寬度比例調整 x 座標
    circle.y = circle.y * (windowHeight / oldHeight); // 根據高度比例調整 y 座標
  }
}
