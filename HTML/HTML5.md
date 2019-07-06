### 前端语义化
- 不仅要使机器（有助于SEO）易于理解，也要使人易于理解
- 尽可能少的使用无语义的标签div和span
- 多使用强调(strong)，段落(p)，标题用(h1)，页眉(header)，页脚(footer),导航链接(nav)，边栏(aside)
### META viewport
```
<meta name="viewport" content="width=devidce-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```

| 属性          | 可选值                 | 描述                         |
| :------------ | :--------------------- | :--------------------------- |
| width         | device-width/指定数字  | 设置viewport宽度             |
| height        | device-height/指定数字 | 设置viewport高度             |
| initial-scale | 指定数字               | 设置viewport初始缩放比例     |
| minimum-scale | 指定数字               | 设置viewport最小缩放比例     |
| maximum-scale | 指定数字               | 设置viewport最大缩放比例     |
| user-scalable | yes/no/1/0             | 设置viewport是否允许用户缩放 |

### HTML5新特性
- 语义化标签（nav, aside, dialog, header, footer等）
- canvas
- 拖放相关api
- Audio、video
- 获取地理位置，getCurrentPosition()方法来获取用户的位置
```
// navigator.geolocation.getCurrentPosition(success, error, options)
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}
function success (postion) {
    var crd = postion.coords

    console.log('Latitude: ' + crd.latitude)
    console.log('Longitude: ' + crd.longitude)
    console.log('More or less ' + crd.accuracy + 'meters.')
}
function error (err) {
    console.warn('ERROR(' + err.code + '): ' + err.message) 
}
navigator.geolocation.getCurrentPostion(success, error, options)
```
- web存储(localStorage, sessionStorage)<br>
  - localStorage<br>
  属性: <br>
  localStorage方法存储的数据没有时间限制<br>
  localStorage的使用遵循同源策略<br>
  每个域名容量5M<br>
  用法：<br/>
  ```
  localStorage.setItem('name', '张三') //在本地客户端存储一个字符串类型的数据
  localStorage.getItem('name') // 读取已存储在本地的数据
  localStorage.romoveItem('name') // 删除键名为name的数据
  localStorage.clear() // 移除本地存储所有数据
  ```
  - sessionStorage <br>
    属性：<br>
    sessionStorage方法针对一个session进行数据存储。当用户关闭浏览器窗口后，数据会被删除<br>
    用法：<br>
    与localStorage的四个用法一致
  - Web存储的使用优缺点
    - 优点：localStorage拓展了cookie的4k限制，API不需要封装，可直接使用
    - 缺点：1. 浏览器的大小不统一，并且在IE8以上的版本才支持localStorage这个属性 2. 所有的浏览器都会吧localStorage的值类型限定为string类型 3. localStorage不能被爬虫抓取到
- Web Socket <br>
  意义：HTTP协议有一个缺陷，通信只能由客户端发起，websocket可以实现服务端主动推送<br>

  缺点: <br>
  对前端开发者，往往要具备数据驱动使用Javascript的能力，且需要维持住ws连接（否则消息无法推送成功）；对后端开发者而言，难度增大很多，一是长连接需要后端业务的代码更稳定（不要随便把进程和框架都crash掉），二是推送消息相对复杂一些，还要考虑到服务器的性能，三是成熟的HTTP生态下有大量的组件可以复用，websocket还处于发展的阶段。<br>

  属性：<br>
  (1) 建立在TCP协议之上，服务端的实现比较容易<br>
  (2) 与HTTP协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用HTTP协议，因此握手时不容易被屏蔽，能通过各种HTTP代理服务器。<br>
  (3) 数据格式比较轻量，性能开销小，通信高效。<br>
  (4) 可以发送文本，也可以发送二进制数据<br>
  (5) 没有同源限制，客户端可以与任意服务器通信<br>
  (6) 协议标识符是ws(如果加密，则为wss)，服务器网址就是URL形式<br>

  用法: <br>
```
// 客户端与服务器进行连接
var ws = new WebSocket("wss://echo.websocket.org")
// 指定连接成功后的回调函数
ws.onopen = function (event) {
    console.log("Connection open ...")
    ws.send("Hello WebSockets")
}
// 指定收到服务器数据后的回调函数
ws.onmessage = function (event) {
    console.log("Received Message: " + event.data)
    ws.close()
}
// 指定连接关闭后的回调函数
ws.onclose = function (event) {
    console.log("Connetction closed.")
}
```
### CANVAS、SVG
 #### 区别：
 Canvas为标量图，svg为矢量图，canvas为html5新增
 #### canvas
 - HTML
```
<canvas id="canvas" height="200" width="350"></canvas>
```
 - JS
```
let canvas=document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let width = ctx.canvas.width
let height = ctx.canvas.height
let r = width / 2
let rem = width / 200
///画圆
function drawBackground() {
    ctx.save();
    ctx.translate(r, r);
    ctx.beginPath();
    ctx.lineWidth = 10 * rem;
    //以0，0为原点，r为半径，0为起始角，2*Math.PI为结束角，顺时针画圆
    ctx.arc(0, 0, r - ctx.lineWidth / 2, 0, 2 * Math.PI, false);
    ctx.stroke();

    var hourNumber = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
    ctx.font = 18 * rem + 'px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    //画出1-12的数字
    hourNumber.forEach(function (number, i) {
        var rad = 2 * Math.PI / 12 * i;
        var x = Math.cos(rad) * (r - 30 * rem);
        var y = Math.sin(rad) * (r - 30 * rem);
        ctx.fillText(number, x, y);
    });
    //画出秒针走动的60个点
    for (var i = 0; i < 60; i++) {
        var rad = 2 * Math.PI / 60 * i;
        var x = Math.cos(rad) * (r - 18 * rem);
        var y = Math.sin(rad) * (r - 18 * rem);
        ctx.beginPath();
        if (i % 5 === 0) {
            ctx.fillStyle = '#000';
            ctx.arc(x, y, 2 * rem, 0, 2, 2 * Math.PI, false);
        } else {
            ctx.fillStyle = '#ccc';
            ctx.arc(x, y, 2 * rem, 0, 2, 2 * Math.PI, false);
        }
        ctx.fill();
    }
}

//绘制时针
function drawHour(hour, minute) {
    ctx.save();
    ctx.beginPath();
    var rad = 2 * Math.PI / 12 * hour;
    var mrad = 2 * Math.PI / 12 / 60 * minute;
    ctx.rotate(rad + mrad);
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 10 * rem);
    ctx.lineTo(0, -r / 2);
    ctx.stroke();
    ctx.restore();
}

//绘制分针
function drawMinute(minute) {
    ctx.save();
    ctx.beginPath();
    var rad = 2 * Math.PI / 60 * minute;
    ctx.rotate(rad);
    ctx.lineWidth = 3 * rem;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 10);
    ctx.lineTo(0, -r + 30 * rem);
    ctx.stroke();
    ctx.restore();
}

//绘制秒针
function drawSecond(second) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = '#c14443';
    var rad = 2 * Math.PI / 60 * second;
    ctx.rotate(rad);
    ctx.moveTo(-2, 20 * rem);
    ctx.lineTo(2, 20 * rem);
    ctx.lineTo(1, -r + 18 * rem);
    ctx.lineTo(-1, -r + 18 * rem);
    ctx.fill();
    ctx.restore();
}

//画时钟上的中心白色原点
function drawDot() {
    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.arc(0, 0, 3 * rem, 0, 2 * Math.PI, false);
    ctx.fill();
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    var now = new Date();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    drawBackground();
    drawHour(hour, minutes);
    drawMinute(minutes);
    drawSecond(seconds);
    drawDot();
    ctx.restore();
}

setInterval(draw, 1000);   //每秒执行一次
```
#### canvas模糊问题
Canvas在高清屏下绘制图片变模糊
不管当前的devicePrxelRatio的值是多少，统一将Canvas DOM节点的width属性设置为其css Width属性的两倍，同理将height属性也设置为css height属性的两倍，即
`<canvas width="320" height="180" style="width: 160px;height:90px">`，这样整个Canvas的坐标系范围就扩大了两倍，但是在浏览器的显示大小没有变，Canvas画图的时候，按照扩大化的坐标系来显示，不清晰的问题就得以改善了

### 正则表达式
- 基础

    