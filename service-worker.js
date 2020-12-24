/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f30490cdd55015d0e3ed7fec1b3ecfe1"
  },
  {
    "url": "advanced/index.html",
    "revision": "982a4279b63cdf2ca155e0868eae6d11"
  },
  {
    "url": "advanced/react源码分析/index.html",
    "revision": "e10e39d9444509a07339e3dba12d5020"
  },
  {
    "url": "advanced/react源码分析/ReactDOM.render过程.html",
    "revision": "f47765711fef047f195282cc95288d0c"
  },
  {
    "url": "advanced/webpack/config.html",
    "revision": "c782bfe289164b6f899ae7f7e82b34a5"
  },
  {
    "url": "advanced/webpack/index.html",
    "revision": "28b765a06cd4b2872e3517a0aeb148b5"
  },
  {
    "url": "advanced/webpack/optimization.html",
    "revision": "9b00975f0fbbf67365f1dfdd9a49fd7d"
  },
  {
    "url": "advanced/构建脚手架.html",
    "revision": "8bbd4176a430e6727dc0c393dd008f0c"
  },
  {
    "url": "assets/css/0.styles.cbd1665c.css",
    "revision": "29aa8b025ae76b4d710dacaa8d323ff0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.560142ec.js",
    "revision": "894385cf94bd412ddc70538a56587062"
  },
  {
    "url": "assets/js/11.19b449a4.js",
    "revision": "f6c7415b55f5fb0f6d97a64352c86438"
  },
  {
    "url": "assets/js/12.d214dcf7.js",
    "revision": "1c67575fbe2183c6261eb7f08f7fea4f"
  },
  {
    "url": "assets/js/13.6dbe4461.js",
    "revision": "20f7ae10d2aeb8bf1ced6bae50c4acb1"
  },
  {
    "url": "assets/js/14.2c7d45f9.js",
    "revision": "271418bdee8576e01a7a99997d9ee0ea"
  },
  {
    "url": "assets/js/15.5f429512.js",
    "revision": "072dc9f2b2cdaa8c7d82192cb30a0a8d"
  },
  {
    "url": "assets/js/16.fccca945.js",
    "revision": "54644eeb0e8dd9a8d20ea325946fe23e"
  },
  {
    "url": "assets/js/17.05d80e95.js",
    "revision": "ed6fc1be41af2fe43b62943cb3ca70ed"
  },
  {
    "url": "assets/js/18.4de43677.js",
    "revision": "935635e5587b0816dc6209733903f49b"
  },
  {
    "url": "assets/js/19.11e3bd34.js",
    "revision": "77a0eb6efa97dca862eefc5faf51fd46"
  },
  {
    "url": "assets/js/2.f5496dfe.js",
    "revision": "cb21c7622c7b40c960ba8bcdb08ed225"
  },
  {
    "url": "assets/js/20.4845bf33.js",
    "revision": "ffc02366b0d3e2b1a16ebb9d82fd5bce"
  },
  {
    "url": "assets/js/21.2b130912.js",
    "revision": "dcac663aebe3810fec38842d92dc88fb"
  },
  {
    "url": "assets/js/22.43469537.js",
    "revision": "774c7f5070a8d52dcf7ffc3abc826203"
  },
  {
    "url": "assets/js/23.795b8a0a.js",
    "revision": "19d2df4d8b8cdbc23556c9dedf2af729"
  },
  {
    "url": "assets/js/24.92091a8e.js",
    "revision": "fe0def1551cb95b1d3f58a3f2fc1a054"
  },
  {
    "url": "assets/js/25.ec848965.js",
    "revision": "b3192ec5bb927b25e905528abebf773c"
  },
  {
    "url": "assets/js/26.10a8033a.js",
    "revision": "63109485cb1593d934c3d157cccac530"
  },
  {
    "url": "assets/js/27.c657ee2d.js",
    "revision": "0fc36dbd8fe6960f1b68cccda85f4185"
  },
  {
    "url": "assets/js/28.a41d6c42.js",
    "revision": "945f47e3811167fd0628a05ffa201a90"
  },
  {
    "url": "assets/js/29.8d94989d.js",
    "revision": "d4b0bde353ed7ede51f2cca0e9e2085f"
  },
  {
    "url": "assets/js/3.3b605241.js",
    "revision": "d870f525434d6f67e923af8e6497bde7"
  },
  {
    "url": "assets/js/30.7dc85a04.js",
    "revision": "0f7ec2936ff58cdf9abe1106c0cbecc6"
  },
  {
    "url": "assets/js/31.98053ccf.js",
    "revision": "d625573628dc8009975babae65f798b4"
  },
  {
    "url": "assets/js/32.a35dd2e3.js",
    "revision": "067851a89fc78f495124c981489de701"
  },
  {
    "url": "assets/js/33.45009c4e.js",
    "revision": "7af3c1e860731841325485965b8d5343"
  },
  {
    "url": "assets/js/34.0f78dba0.js",
    "revision": "baae94348297d81291f61d14fba1e82e"
  },
  {
    "url": "assets/js/35.a87026cd.js",
    "revision": "34d1a079677019a0f3cd294022633214"
  },
  {
    "url": "assets/js/36.fbf5c7f9.js",
    "revision": "c0ce41f893dae4ceeaf1442c640f8cc7"
  },
  {
    "url": "assets/js/37.fd01cb7d.js",
    "revision": "7a06ae7e198ec766337b62b9a34f2847"
  },
  {
    "url": "assets/js/38.d97a1301.js",
    "revision": "f1725cfdabeff00eecce767ce2ed8f42"
  },
  {
    "url": "assets/js/39.34b4adea.js",
    "revision": "a012eaebe832d05a153ceb2c23e97da3"
  },
  {
    "url": "assets/js/4.a0ae269e.js",
    "revision": "357ef76cfc3baf4ae6f8198c5db442d8"
  },
  {
    "url": "assets/js/40.dd4731cf.js",
    "revision": "cd7c714142be4919280f7a8f920ee9a8"
  },
  {
    "url": "assets/js/41.f7d99f6d.js",
    "revision": "913fa4170e0be4b4e39254a56fb9eefb"
  },
  {
    "url": "assets/js/42.ef3c314c.js",
    "revision": "3e76664565a3413832210d5fe43e952c"
  },
  {
    "url": "assets/js/43.98261b46.js",
    "revision": "aee3194b3f0053289ae4eeafd7085790"
  },
  {
    "url": "assets/js/44.6a21c31b.js",
    "revision": "6ec57c5d3abd19508d48cef9b86b8af6"
  },
  {
    "url": "assets/js/45.e0ed316a.js",
    "revision": "462b989c1d1ef273c221d0bb1cca84c4"
  },
  {
    "url": "assets/js/46.5509ef0d.js",
    "revision": "f85e6a7e0ea17770ec2bb215c532afc4"
  },
  {
    "url": "assets/js/47.4faa84b8.js",
    "revision": "eae6733c6ae23214b5874d7b0ac28965"
  },
  {
    "url": "assets/js/48.70215898.js",
    "revision": "920cd97eeb03ac22d1f87355b551bd1c"
  },
  {
    "url": "assets/js/49.35d1dcc2.js",
    "revision": "6c94bb8a631545c1b4f41c9a280b09bc"
  },
  {
    "url": "assets/js/5.8ff1d0bd.js",
    "revision": "37e7023ee6dcd1ecfd202200e323a878"
  },
  {
    "url": "assets/js/50.64100edb.js",
    "revision": "01419cc9fdd9376514fec715bc272a56"
  },
  {
    "url": "assets/js/51.0e34a542.js",
    "revision": "a6895ac580dcea462bdf93487ffb9fc7"
  },
  {
    "url": "assets/js/52.d893afb1.js",
    "revision": "3316f1f8a42c5d8d734d6e51872278a2"
  },
  {
    "url": "assets/js/53.e57ec1fb.js",
    "revision": "7d32ca2f6ebe92a6acb90a8e03799033"
  },
  {
    "url": "assets/js/54.d0758d90.js",
    "revision": "149b7281208b0ff0c0edabe748f30eb3"
  },
  {
    "url": "assets/js/55.65828b0c.js",
    "revision": "9dd8b7ff932396948977889ef0a50960"
  },
  {
    "url": "assets/js/56.5b952984.js",
    "revision": "049d55d5ee1df747921a4a00349806b0"
  },
  {
    "url": "assets/js/57.504cb0cf.js",
    "revision": "d67c81581dea3418e0a432203fe54c1c"
  },
  {
    "url": "assets/js/58.3beebc70.js",
    "revision": "f67379c4c55c6f2fc7604777c3831b49"
  },
  {
    "url": "assets/js/59.04f705bd.js",
    "revision": "a88b397619bed2f1966131fa976856a8"
  },
  {
    "url": "assets/js/6.de148be3.js",
    "revision": "78b71f968fd7a5c34486c15f8341ca16"
  },
  {
    "url": "assets/js/60.faa273c3.js",
    "revision": "43d9e38ffc5debe29d39d8ca4dba809c"
  },
  {
    "url": "assets/js/61.8f4278e6.js",
    "revision": "21fd48fe7fc52b434b9682e83e10bd1a"
  },
  {
    "url": "assets/js/62.e0707d93.js",
    "revision": "ecbbdb049785abfd7cd6f836ebf0310e"
  },
  {
    "url": "assets/js/63.a96c8c4d.js",
    "revision": "6b15b436889c986573c7c614bc781ea0"
  },
  {
    "url": "assets/js/64.ff344493.js",
    "revision": "c3a5ef2d3699334c7261ebab8f2a7a4f"
  },
  {
    "url": "assets/js/65.98d601fc.js",
    "revision": "e4c45625c43c553c30927004cb38ca1e"
  },
  {
    "url": "assets/js/66.978c61f5.js",
    "revision": "c0381c5741b89545a3e5ac4fa8e32244"
  },
  {
    "url": "assets/js/67.d41da9e1.js",
    "revision": "2dbccce95037b18b1262f3fc729b4d37"
  },
  {
    "url": "assets/js/68.2008e5b1.js",
    "revision": "31d16882a4c79d00df8a14c66889fdd2"
  },
  {
    "url": "assets/js/69.d1b4f1b0.js",
    "revision": "5a8600aabcb3b8d62114166c1e01e6ff"
  },
  {
    "url": "assets/js/7.751ce7a5.js",
    "revision": "99a98279b49fd67a626d598bca642430"
  },
  {
    "url": "assets/js/70.1a228326.js",
    "revision": "3d28101786c1125cf703fcebc189c575"
  },
  {
    "url": "assets/js/71.f651be77.js",
    "revision": "625be9b479cdab7f0d533dedbf6fba26"
  },
  {
    "url": "assets/js/72.1e57bb86.js",
    "revision": "8ce7d7f2967430fb0eaf51ab5991b545"
  },
  {
    "url": "assets/js/73.fddca64b.js",
    "revision": "5b486efa12451c8d9335b88c04031991"
  },
  {
    "url": "assets/js/74.df03bf02.js",
    "revision": "529604613bd372aa7175519cfea3d997"
  },
  {
    "url": "assets/js/75.c0b7b543.js",
    "revision": "7c2822a65cd61194a16e92f554067c07"
  },
  {
    "url": "assets/js/76.f81cbc84.js",
    "revision": "fb90c0d0eb070bb1633a6e3d50fcc615"
  },
  {
    "url": "assets/js/77.0c5ce0f3.js",
    "revision": "e7c83d2489f0077dee77eb70dd88512f"
  },
  {
    "url": "assets/js/78.16652a3c.js",
    "revision": "834551f7dfb81bf668223e1f44a5f073"
  },
  {
    "url": "assets/js/79.5a0ac4cd.js",
    "revision": "a0b652b9dd638b287d8cbb632c90208c"
  },
  {
    "url": "assets/js/8.86756bd8.js",
    "revision": "e87d3bd9b03450e995ab325ada50b74f"
  },
  {
    "url": "assets/js/80.70f571ff.js",
    "revision": "49339ffa9214579034a0efc6455920b3"
  },
  {
    "url": "assets/js/81.0ffa751a.js",
    "revision": "048d8923488c035a3d065d8898688b9f"
  },
  {
    "url": "assets/js/82.6bcb34a0.js",
    "revision": "0eccf7ead6d0bf9f30acf74d6cd55949"
  },
  {
    "url": "assets/js/83.7830901e.js",
    "revision": "4a2a1f8e0723960a872fa89a9636f3d6"
  },
  {
    "url": "assets/js/84.c5695050.js",
    "revision": "35bb4669b07fdb2da43033e18f542089"
  },
  {
    "url": "assets/js/85.ef585fc4.js",
    "revision": "3f45239cc3bf11fdbf34e76bd0c5d0e9"
  },
  {
    "url": "assets/js/86.ff234214.js",
    "revision": "17534407bc13e3bcbd6dc5757572a22a"
  },
  {
    "url": "assets/js/87.0a06a5ec.js",
    "revision": "d055f4d139ffccd2d326d8a1c4702b84"
  },
  {
    "url": "assets/js/88.34dc26f9.js",
    "revision": "f9b44bcb7c6bd20b8f8748f5ada1893e"
  },
  {
    "url": "assets/js/89.652fe179.js",
    "revision": "bcfeda6c309a5cf1559fc7cc94d76ace"
  },
  {
    "url": "assets/js/9.12f06a39.js",
    "revision": "e2c363d37219b57178b0f7cf52dae8df"
  },
  {
    "url": "assets/js/90.85b255fb.js",
    "revision": "0a2cc559d1fddb38ca835fd4aba182e6"
  },
  {
    "url": "assets/js/91.73c3b1e8.js",
    "revision": "ff1b93fd878757afba5a4145a5109744"
  },
  {
    "url": "assets/js/92.11f2a11f.js",
    "revision": "df8714e1599b2bb84b9aa87bfc518504"
  },
  {
    "url": "assets/js/93.ec3745a3.js",
    "revision": "bb1ceda8a59bcd325e54f9236eb51e65"
  },
  {
    "url": "assets/js/app.1dc76d9c.js",
    "revision": "308019a6bb547b51b35f25e7a3614205"
  },
  {
    "url": "backend/index.html",
    "revision": "e6a4a18725a87739401c15e86e10041c"
  },
  {
    "url": "backend/mongodb.html",
    "revision": "b9587dcf28f0c52952a162242f29c7db"
  },
  {
    "url": "backend/node基础.html",
    "revision": "adc519d2398c8d3bc9bf35496aee1942"
  },
  {
    "url": "backend/服务性能调优.html",
    "revision": "0e9cf85c567ad9dc46354428d49048e0"
  },
  {
    "url": "computerbasic/http.html",
    "revision": "357b35482a7894cfc13214ae458acbf5"
  },
  {
    "url": "computerbasic/index.html",
    "revision": "5eb5d74bdb52e97b113b8c75b8d394b4"
  },
  {
    "url": "computerbasic/数据结构与算法分析/index.html",
    "revision": "45c0781e6b411877e1607fad6fcd4e89"
  },
  {
    "url": "computerbasic/数据结构与算法分析/复杂度分析.html",
    "revision": "14adb8af72afd8fb9a2965a44b393c3d"
  },
  {
    "url": "computerbasic/数据结构与算法分析/排序算法.html",
    "revision": "d8bd84c8f6e0bdab2817f19e0de097ca"
  },
  {
    "url": "computerbasic/数据结构与算法分析/数据结构.html",
    "revision": "c03a5acb18a27948c85edb8aa6035229"
  },
  {
    "url": "computerbasic/进制.html",
    "revision": "27cd7c4b7821528a1ebf0b5120ecbf0e"
  },
  {
    "url": "hero.gif",
    "revision": "b52e26520d5d629436899beef65ad323"
  },
  {
    "url": "index.html",
    "revision": "e6b1908f04cde61406036f51965da156"
  },
  {
    "url": "logo.png",
    "revision": "d1980338561418bfdf9f2db3d757edaf"
  },
  {
    "url": "note/AppleScript-note.html",
    "revision": "fcf1abd0aabb9cc8bad27675e3d843a6"
  },
  {
    "url": "note/applet/taro.html",
    "revision": "046a3d90bd4e58604d115bce0d3a7890"
  },
  {
    "url": "note/index.html",
    "revision": "974d0969818d00eca5f2e720258d7454"
  },
  {
    "url": "note/js语言精粹.html",
    "revision": "91060450e275badd00eee08df52874a9"
  },
  {
    "url": "note/macbook-note.html",
    "revision": "78d54692a5228485d3522e89d71988cf"
  },
  {
    "url": "note/NPM/npm包开发.html",
    "revision": "8538707aa030b66afab4890af60f0594"
  },
  {
    "url": "note/NPM/npm基础.html",
    "revision": "40cee0645dcd31e4e14667e147d0346a"
  },
  {
    "url": "note/NPM/npm机制.html",
    "revision": "34444f4f5232ef65eeb4cc83abd17089"
  },
  {
    "url": "note/NPM/yarn.html",
    "revision": "cc13376ae64686370513cd3c013f68c3"
  },
  {
    "url": "note/React/react-hooks使用技巧.html",
    "revision": "d03c4802506adcc744a84d534f2357ac"
  },
  {
    "url": "note/React/React笔记.html",
    "revision": "d6259557ac917dc4224f4efc49a48a96"
  },
  {
    "url": "note/React/源码分析.html",
    "revision": "c2a1b8f539de0bda9c238d56f60a3434"
  },
  {
    "url": "note/typescript-note.html",
    "revision": "03c9c84e18bbeca3ca40132eb97bacfe"
  },
  {
    "url": "note/umi-note.html",
    "revision": "448b88b3173d6cbc5582e3da2e5e84de"
  },
  {
    "url": "note/webapp.html",
    "revision": "c73ea1dedf4dcb696533d2c830ea64f1"
  },
  {
    "url": "note/webpack4-note.html",
    "revision": "f9043621f32f0b0eb19fece82e91cd41"
  },
  {
    "url": "note/前端监控/jiankong.html",
    "revision": "33bcc0e6a8bbd3dba71fe40a9bafe4c4"
  },
  {
    "url": "note/前端监控/线上监控之用户行为采集及分析.html",
    "revision": "91bf7433635b0cf7195b45c27d760455"
  },
  {
    "url": "note/常用的css.html",
    "revision": "90e926fe587656db01a033c4eabf814f"
  },
  {
    "url": "note/提升开发体验.html",
    "revision": "387e1256fe317c9f027c63d6cc123675"
  },
  {
    "url": "note/日常笔记.html",
    "revision": "8fc39dac452ce7069a63722a646b34c8"
  },
  {
    "url": "Processing/待写.html",
    "revision": "6224d49ada3217ae1d7c72048671af08"
  },
  {
    "url": "Processing/面试.html",
    "revision": "a4700a0c22c37e93c480b748299d0566"
  },
  {
    "url": "Processing/面试问题list.html",
    "revision": "0f3f63c915a1503d3e07892feac282b6"
  },
  {
    "url": "services/acme.sh证书颁发.html",
    "revision": "445aee282a403f24d70b551b29d72118"
  },
  {
    "url": "services/Docker上各种镜像的使用.html",
    "revision": "0efa0fa9c88813067924cfff992eca9d"
  },
  {
    "url": "services/Docker基础.html",
    "revision": "450215778c869ffb6bde1d9ab0ff433e"
  },
  {
    "url": "services/git/gitlab-workflow.html",
    "revision": "b50267e622e3722b811009a5a474675d"
  },
  {
    "url": "services/git/git操作指南.html",
    "revision": "69fbf411a6fdca1146939ef4a9095e5d"
  },
  {
    "url": "services/git/mac多git账户配置.html",
    "revision": "c06f8002d719ee8115ce7f3e13ddb743"
  },
  {
    "url": "services/index.html",
    "revision": "58fca23392658c2d7a2e95c7ed815045"
  },
  {
    "url": "services/mysql使用.html",
    "revision": "fdae411eee6932a1f3185c1c4c4ebf7c"
  },
  {
    "url": "services/nginx基础.html",
    "revision": "2997b68aff08607a9cf603e929176525"
  },
  {
    "url": "services/nginx配置https.html",
    "revision": "ff48340af1ee16ad292fca5e389541d5"
  },
  {
    "url": "services/vim常用命令.html",
    "revision": "61137a4514bcc94d6a1af07f22ac54ea"
  },
  {
    "url": "share/index.html",
    "revision": "5d918290cc36945eb0bbc9363bbfc29c"
  },
  {
    "url": "share/ReactFiber架构浅析.html",
    "revision": "09e4484a5ef11cb1436a6a37ccc4101d"
  },
  {
    "url": "share/React性能优化方案.html",
    "revision": "7c0c46f62c7614abefbc5741e2b99e2d"
  },
  {
    "url": "share/TCP协议.html",
    "revision": "bfe3a85f5e0ac4641ae7118794a75611"
  },
  {
    "url": "share/TypeScript、Rollup搭建工具库.html",
    "revision": "3cf9a51ab5f9e2a16f9d8ea85aa4efee"
  },
  {
    "url": "share/从webpack打包看前端模块化.html",
    "revision": "313b0df98ff08bb8dbec8cb193598043"
  },
  {
    "url": "share/函数式编程之柯里化.html",
    "revision": "6aaa97658bbbbcb81e6902fd01119b1d"
  },
  {
    "url": "share/基建/如何在人单力薄时推动基建.html",
    "revision": "56f5fad15a20909397ecb8442239a753"
  },
  {
    "url": "share/基建/如何推动基建架构项目落地.html",
    "revision": "e3d2d7bde633816cec743b795c26e586"
  },
  {
    "url": "share/基建/如何推动大型前端团队基建.html",
    "revision": "0a3cbfc17e442bb5b75e411176bbc236"
  },
  {
    "url": "share/基建/如何设计大型前端团队基建路线图.html",
    "revision": "371ba95ae6058c7f8aa1c7625dabad10"
  },
  {
    "url": "share/基建/如何通过基建推动团队价值破局.html",
    "revision": "c2bd361994e9fef13cc8e9f23936f363"
  },
  {
    "url": "share/多版本包依赖问题探讨.html",
    "revision": "93ce6156e4b68f2a0a52480dcf389c9d"
  },
  {
    "url": "share/常见的函数组合.html",
    "revision": "abc16a16cb0b3112a01aff9f2248c514"
  },
  {
    "url": "share/算法分享递归到树到动态规划.html",
    "revision": "927b6df77c76c72293d0ee308ed10179"
  },
  {
    "url": "share/纯函数.html",
    "revision": "d9820d46a8f174504e54cd57eae588d2"
  },
  {
    "url": "share/规范.html",
    "revision": "8563f3b3dd308d35cd21f2d74379837f"
  },
  {
    "url": "share/调用堆栈.html",
    "revision": "56f1a15c2d1f570975abb88ef7216899"
  },
  {
    "url": "share/重学前端/browser.html",
    "revision": "5a146a32fc62fcb51d3a26f3a1b22a35"
  },
  {
    "url": "share/重学前端/css.html",
    "revision": "a8d0d9c331960c97f9d8584283ca9d5b"
  },
  {
    "url": "share/重学前端/engineering-practice.html",
    "revision": "a98f0abcef769031d7f89e24c023c3ab"
  },
  {
    "url": "share/重学前端/html.html",
    "revision": "9dd31ec455b71ef2a8890cb33c2c0735"
  },
  {
    "url": "share/重学前端/index.html",
    "revision": "60b6550dd1072edc6da032f20f932936"
  },
  {
    "url": "share/重学前端/javascript.html",
    "revision": "4d445b611d920451aa8df6652d49c558"
  },
  {
    "url": "tools/Charles.html",
    "revision": "7d1b7a629089184fde38478c205b571b"
  },
  {
    "url": "tools/index.html",
    "revision": "24bdd6e8af91b41b2e1a5a254e0b8cd1"
  },
  {
    "url": "tools/iTerm.html",
    "revision": "4e23572066b31428bd6eb9b08ee5ffc5"
  },
  {
    "url": "面试题/js基础.html",
    "revision": "1f3e157cd8b0d9550ee7fe2a4ac2d722"
  },
  {
    "url": "面试题/js基础答案.html",
    "revision": "5c0deb1ca2fa944278840e53876b8767"
  },
  {
    "url": "面试题/框架相关.html",
    "revision": "03c5b0f5727f3a2376bc864ea0ebc363"
  },
  {
    "url": "面试题/笔试题.html",
    "revision": "5a734b930a135510a221bfa44e983a97"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
