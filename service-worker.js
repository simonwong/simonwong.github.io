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
    "revision": "bcd64f833d8039c827e070fdd9522349"
  },
  {
    "url": "advanced/git/gitlab-workflow.html",
    "revision": "eb58ad6ca930fabbc7c0eab803fd53a9"
  },
  {
    "url": "advanced/git/git操作指南.html",
    "revision": "c6c691d6d1b18a2c276c49dc02b9f3d3"
  },
  {
    "url": "advanced/git/mac多git账户配置.html",
    "revision": "33ac43416bcb67f4edc1bfb3b14a3be0"
  },
  {
    "url": "advanced/TypeScript、Rollup 搭建工具库.html",
    "revision": "e04f0f221b0802f94cc797d102b5407d"
  },
  {
    "url": "advanced/TypeScript.html",
    "revision": "af9542edfee53bd074e601712003b125"
  },
  {
    "url": "advanced/webpack/config.html",
    "revision": "b3ae69c378d14545c8ecc7448054b2cb"
  },
  {
    "url": "advanced/webpack/index.html",
    "revision": "32e29ccd002ce3b9f5c69ff0fcb02308"
  },
  {
    "url": "advanced/webpack/optimization.html",
    "revision": "e3e25283135a43b252ca54355f38689b"
  },
  {
    "url": "advanced/从 webpack 打包看前端模块化.html",
    "revision": "b8c7e8fd23b935fb0d6191b35f4cdd4b"
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
    "url": "assets/js/10.105ca2da.js",
    "revision": "d04c4320a52f565687e702ad1318ebeb"
  },
  {
    "url": "assets/js/11.d3f3ebd1.js",
    "revision": "2666bf5e926a12a51dc11eddbc6d4e92"
  },
  {
    "url": "assets/js/12.0cb022a0.js",
    "revision": "0f362c374bd24492f6e536558a5ca9cd"
  },
  {
    "url": "assets/js/13.ff48ce0f.js",
    "revision": "0a21324bf723a0c0432bc91ced7af144"
  },
  {
    "url": "assets/js/14.34844d0f.js",
    "revision": "bb5166bba6fc270a93d49d1f8e0a763e"
  },
  {
    "url": "assets/js/15.45017c37.js",
    "revision": "3036daf2e5d1240ecc83e7776c8a979a"
  },
  {
    "url": "assets/js/16.0319ea9e.js",
    "revision": "f33cce236b33ac64246ed25808ae26d5"
  },
  {
    "url": "assets/js/17.e09e19ec.js",
    "revision": "80bef0bc212dac91f181bbbc05ce4a76"
  },
  {
    "url": "assets/js/18.e6c4dbdb.js",
    "revision": "9fe40ed0ed8b5024c798e366a0b365b0"
  },
  {
    "url": "assets/js/19.cfa6844f.js",
    "revision": "41a3f4e41ad7970ea9ca32480b1f77f5"
  },
  {
    "url": "assets/js/2.f5496dfe.js",
    "revision": "cb21c7622c7b40c960ba8bcdb08ed225"
  },
  {
    "url": "assets/js/20.873474e3.js",
    "revision": "2545de385a44f4aa09b36767e25b3472"
  },
  {
    "url": "assets/js/21.a0d15154.js",
    "revision": "fa041304fcbdd0fa15582778728a4d47"
  },
  {
    "url": "assets/js/22.0d1ca064.js",
    "revision": "4babf9198d5c8bd9b42dca01f1687be6"
  },
  {
    "url": "assets/js/23.59f009d8.js",
    "revision": "f9a15ef258070fa6a0198ce00f2d1ec0"
  },
  {
    "url": "assets/js/24.d7c84014.js",
    "revision": "33b91c033c6c1a72ba642cfa5d46b47b"
  },
  {
    "url": "assets/js/25.ec8d8c2d.js",
    "revision": "9e7c2127ad0a00160f5257f990e54087"
  },
  {
    "url": "assets/js/26.668ed425.js",
    "revision": "dd291fd283f4ae20f6e6f68995ace49a"
  },
  {
    "url": "assets/js/27.fc986784.js",
    "revision": "9d7b560de0ac4ba8a866a33d8851715a"
  },
  {
    "url": "assets/js/28.fce57ee5.js",
    "revision": "a522086afc9d3d0ef33c75ac47f6191c"
  },
  {
    "url": "assets/js/29.a3590ca7.js",
    "revision": "e26b05e706b5e3629ac96aa354607870"
  },
  {
    "url": "assets/js/3.3b605241.js",
    "revision": "d870f525434d6f67e923af8e6497bde7"
  },
  {
    "url": "assets/js/30.e4ce6151.js",
    "revision": "abe03a31cac2d612e6e3fa4dc7172b5e"
  },
  {
    "url": "assets/js/31.9646ff98.js",
    "revision": "ee47044e2934edaf9a7d447b63673144"
  },
  {
    "url": "assets/js/32.2944d080.js",
    "revision": "5efd8585fb3129818b84c6021b622805"
  },
  {
    "url": "assets/js/33.32da6925.js",
    "revision": "93abba6a44b6376f29c8b3f9171ee3da"
  },
  {
    "url": "assets/js/34.946e6275.js",
    "revision": "34e4bb7f08c6e69aa361cb0040519c5c"
  },
  {
    "url": "assets/js/35.b051502d.js",
    "revision": "e9c736f99a71e0531d32b37d77014a53"
  },
  {
    "url": "assets/js/36.6858e4b7.js",
    "revision": "5c41471be432e04470e917305db44528"
  },
  {
    "url": "assets/js/37.a1877ee6.js",
    "revision": "5f290e3e9ac60579a846ce218a2fec7d"
  },
  {
    "url": "assets/js/38.ea9069e1.js",
    "revision": "3da12b57afec158f7bde1ad4f4d358b3"
  },
  {
    "url": "assets/js/39.7b87697d.js",
    "revision": "b7911b8bd8ab7d691edf50af77f9c41b"
  },
  {
    "url": "assets/js/4.ed7330d9.js",
    "revision": "3db01b1b74230ad69d3a4a13f2b38216"
  },
  {
    "url": "assets/js/40.7de33398.js",
    "revision": "61daa74cc6bdb83a62a7a5925f46f8bb"
  },
  {
    "url": "assets/js/41.85b41844.js",
    "revision": "a9bc4aa6fb7369096137cc641e4d23dc"
  },
  {
    "url": "assets/js/42.27f32b73.js",
    "revision": "766d27a72ce831e2a291616b4a5ecec5"
  },
  {
    "url": "assets/js/43.df168863.js",
    "revision": "d16601723a680dd8b9d58d6c5ae83dff"
  },
  {
    "url": "assets/js/44.cf5af35d.js",
    "revision": "cfd163f83d4a47d6dcec67c314b7fda8"
  },
  {
    "url": "assets/js/45.44474b6a.js",
    "revision": "51a58dcca02ba79bedbd7b6b52cf4e7b"
  },
  {
    "url": "assets/js/46.689e5859.js",
    "revision": "6d19ffe2839af9ca598756382a6399bb"
  },
  {
    "url": "assets/js/47.bf9f0ab8.js",
    "revision": "7d38ecbe145178dc697308410c5b7fa3"
  },
  {
    "url": "assets/js/48.660c020c.js",
    "revision": "b8be9d13f915b29753d4ee061411b5a7"
  },
  {
    "url": "assets/js/49.3e6ee92f.js",
    "revision": "58816c2ef8e9976d3adec9aa425ac2d5"
  },
  {
    "url": "assets/js/5.fb05482b.js",
    "revision": "ebf94cc608ccd539ad60ac220083140d"
  },
  {
    "url": "assets/js/50.63ed2c58.js",
    "revision": "c6f1090da4bfc410654d7967b6fd1995"
  },
  {
    "url": "assets/js/51.c803b9c7.js",
    "revision": "a91a737fc366872df742f65edda95b9f"
  },
  {
    "url": "assets/js/52.90ab2245.js",
    "revision": "5f69545e009539dc822b56302dd356f1"
  },
  {
    "url": "assets/js/53.095c3c85.js",
    "revision": "d3792bc7b9935936d6da34eddb90f74e"
  },
  {
    "url": "assets/js/54.5c7bd631.js",
    "revision": "c1c9f45aa67af58bd07217ed13905153"
  },
  {
    "url": "assets/js/55.bb0e4fd4.js",
    "revision": "e82d509966df3d12a539c831865a7c0d"
  },
  {
    "url": "assets/js/56.459c038a.js",
    "revision": "c0f94919c0a61b29abff9ab96c508f96"
  },
  {
    "url": "assets/js/57.b257c644.js",
    "revision": "ddd6d49c167042caa3cd6dfe2952e3f5"
  },
  {
    "url": "assets/js/58.f1c1f401.js",
    "revision": "2709ac68bbb8da58ba715598415bfec5"
  },
  {
    "url": "assets/js/59.3302f656.js",
    "revision": "aaf21b2ce925979185cf020cf57cccc1"
  },
  {
    "url": "assets/js/6.de148be3.js",
    "revision": "78b71f968fd7a5c34486c15f8341ca16"
  },
  {
    "url": "assets/js/60.cef15000.js",
    "revision": "d5cbc5a2f047e8d4cf7547639a909cfc"
  },
  {
    "url": "assets/js/61.53bf5c59.js",
    "revision": "4617263a32aaf3484501ed3e820b46a7"
  },
  {
    "url": "assets/js/62.e31f3a50.js",
    "revision": "b84cf3874e388343487c0db8539b6a79"
  },
  {
    "url": "assets/js/63.b87b29ef.js",
    "revision": "88f8b28cc09a85dee8412713567eb937"
  },
  {
    "url": "assets/js/64.a101f56e.js",
    "revision": "c73c89803e1e925e9b6c1dbf11fff45a"
  },
  {
    "url": "assets/js/65.205e6d44.js",
    "revision": "1e9d0b86784dd8149776048a9705943f"
  },
  {
    "url": "assets/js/66.b7059afe.js",
    "revision": "34b074346d535f3e5ff541c227883550"
  },
  {
    "url": "assets/js/67.202c24d3.js",
    "revision": "3dcf7bedbe076cf5e0c372ae8635047e"
  },
  {
    "url": "assets/js/68.810b789a.js",
    "revision": "31d16882a4c79d00df8a14c66889fdd2"
  },
  {
    "url": "assets/js/69.61abda94.js",
    "revision": "5a8600aabcb3b8d62114166c1e01e6ff"
  },
  {
    "url": "assets/js/7.3eb6773c.js",
    "revision": "5a162b7953608361705061791a5a0e63"
  },
  {
    "url": "assets/js/70.8e98c249.js",
    "revision": "e16e3adbe8d739f855d1954000626485"
  },
  {
    "url": "assets/js/71.35cb7658.js",
    "revision": "b0e0d2ec1d4bdc543b8b844fce9db22a"
  },
  {
    "url": "assets/js/72.0a4b95c4.js",
    "revision": "a20633fc2cc18edcfbe81080538c7321"
  },
  {
    "url": "assets/js/73.0f025644.js",
    "revision": "9dfd01ab2062f00a9174194a49a4fa48"
  },
  {
    "url": "assets/js/74.8df3c098.js",
    "revision": "529604613bd372aa7175519cfea3d997"
  },
  {
    "url": "assets/js/75.207e63e3.js",
    "revision": "7c2822a65cd61194a16e92f554067c07"
  },
  {
    "url": "assets/js/76.d9b50ee0.js",
    "revision": "aa3d6286bf27a3b7814fe27ac8365bc1"
  },
  {
    "url": "assets/js/77.bd6bd97d.js",
    "revision": "e7c83d2489f0077dee77eb70dd88512f"
  },
  {
    "url": "assets/js/78.217ff120.js",
    "revision": "834551f7dfb81bf668223e1f44a5f073"
  },
  {
    "url": "assets/js/79.36f7b588.js",
    "revision": "a0b652b9dd638b287d8cbb632c90208c"
  },
  {
    "url": "assets/js/8.09fa8225.js",
    "revision": "cd426a3c2f37b7022e11f56cc3387a0f"
  },
  {
    "url": "assets/js/80.a0a1f4a3.js",
    "revision": "49339ffa9214579034a0efc6455920b3"
  },
  {
    "url": "assets/js/81.91043bd8.js",
    "revision": "048d8923488c035a3d065d8898688b9f"
  },
  {
    "url": "assets/js/82.4646a91d.js",
    "revision": "0eccf7ead6d0bf9f30acf74d6cd55949"
  },
  {
    "url": "assets/js/83.9a73cc28.js",
    "revision": "4a2a1f8e0723960a872fa89a9636f3d6"
  },
  {
    "url": "assets/js/84.9ca909a7.js",
    "revision": "35bb4669b07fdb2da43033e18f542089"
  },
  {
    "url": "assets/js/85.a02f697a.js",
    "revision": "83f649c199f2972fabc3f053e5a028a6"
  },
  {
    "url": "assets/js/86.ba05cc12.js",
    "revision": "91a1e24f5378d3d4793f0611719c5dad"
  },
  {
    "url": "assets/js/87.ee7d7d45.js",
    "revision": "ccd98342cbf4f17ce2ce0e6bed6d21c2"
  },
  {
    "url": "assets/js/88.a680a087.js",
    "revision": "e2996ef1d3444c99b23c9b6879fd08bb"
  },
  {
    "url": "assets/js/89.1a0caf07.js",
    "revision": "4e4ddccc3a3785453bb3a31a6a449cd3"
  },
  {
    "url": "assets/js/9.f7026785.js",
    "revision": "0935f458dc35321450e5200545668261"
  },
  {
    "url": "assets/js/90.4822f4f0.js",
    "revision": "8dba3b87492eeddfd71e2fc9f526d1f8"
  },
  {
    "url": "assets/js/app.105d049a.js",
    "revision": "2cb28e458e9291d8ed9b764f43cbd3ca"
  },
  {
    "url": "backend/mongodb.html",
    "revision": "10d683dc624c193d46e9956e3e05ad77"
  },
  {
    "url": "backend/node基础.html",
    "revision": "e715b651cb70050518ab3c4afe147c4e"
  },
  {
    "url": "backend/服务性能调优.html",
    "revision": "494fd0c22b0c2dae38b8164da2fe08cb"
  },
  {
    "url": "computerbasic/http.html",
    "revision": "9ae38fcfdc789237cb8bf5a6f6e4cb97"
  },
  {
    "url": "computerbasic/数据结构与算法分析/index.html",
    "revision": "46a0d88db4be4e7aca1066af7a75463a"
  },
  {
    "url": "computerbasic/数据结构与算法分析/复杂度分析.html",
    "revision": "23fbbfc825fc6e116a7442e03f520730"
  },
  {
    "url": "computerbasic/数据结构与算法分析/排序算法.html",
    "revision": "0f75ff76ea599110bd5c394df8565591"
  },
  {
    "url": "computerbasic/数据结构与算法分析/数据结构.html",
    "revision": "c304734abc3192574a7a2560563180f5"
  },
  {
    "url": "computerbasic/进制.html",
    "revision": "5ee58e7892dd8c0f2de56d18ce775327"
  },
  {
    "url": "hero.gif",
    "revision": "b52e26520d5d629436899beef65ad323"
  },
  {
    "url": "index.html",
    "revision": "9390732027fe08859799997c1950d555"
  },
  {
    "url": "logo.png",
    "revision": "d1980338561418bfdf9f2db3d757edaf"
  },
  {
    "url": "note/AppleScript-note.html",
    "revision": "ded4b4156adffc59398af0417fa8b830"
  },
  {
    "url": "note/applet/taro.html",
    "revision": "1102a1ff3e332a5cbbd4126188e23a86"
  },
  {
    "url": "note/index.html",
    "revision": "af234004e66e54cdc10f7e4c9a8d4a06"
  },
  {
    "url": "note/js语言精粹.html",
    "revision": "5e38b1c5f3f57a49543e73bab88c2a9d"
  },
  {
    "url": "note/macbook-note.html",
    "revision": "9eaa4efc0cd78ec3afe312e342be09c3"
  },
  {
    "url": "note/NPM/npm包开发.html",
    "revision": "ae5e30ca3a94934de8db8cd3bae6ace5"
  },
  {
    "url": "note/NPM/npm基础.html",
    "revision": "784a83b5b7afb74327088a6a51bb4014"
  },
  {
    "url": "note/NPM/npm机制.html",
    "revision": "253692daa7bb81c941d74440834e5f2d"
  },
  {
    "url": "note/NPM/yarn.html",
    "revision": "c67c6c70dad2218c021009cde0159c88"
  },
  {
    "url": "note/React/react-hooks使用技巧.html",
    "revision": "6362a31f8f631ba22cb67e7ccf08f746"
  },
  {
    "url": "note/React/React笔记.html",
    "revision": "ddae6211826d1b31ea31d4f7e91eca40"
  },
  {
    "url": "note/React/源码分析.html",
    "revision": "0593fc823bf0a8c1cc37af9796d1e8f6"
  },
  {
    "url": "note/react源码分析/index.html",
    "revision": "27e80e4d37cea2afd44a28a4f31ee3a7"
  },
  {
    "url": "note/react源码分析/ReactDOM.render过程.html",
    "revision": "9daf17f1b18146d71912dcb9f2345a0a"
  },
  {
    "url": "note/typescript-note.html",
    "revision": "95d7762a999efad6aabc771aa391f2b5"
  },
  {
    "url": "note/umi-note.html",
    "revision": "306fdac8ae724780b9d6004df38df0dc"
  },
  {
    "url": "note/webapp.html",
    "revision": "c78552e650bac442030b9cb2856021fc"
  },
  {
    "url": "note/webpack4-note.html",
    "revision": "796f2b4eeca00e7feae1cfa06e8b998a"
  },
  {
    "url": "note/前端监控/jiankong.html",
    "revision": "4c2497afd86ba6a160d031958dbd7a59"
  },
  {
    "url": "note/前端监控/线上监控之用户行为采集及分析.html",
    "revision": "f98be5df324e50522bb60521825df296"
  },
  {
    "url": "note/常用的css.html",
    "revision": "68b729ab8853a7ed1ca3c1160c8a3109"
  },
  {
    "url": "note/提升开发体验.html",
    "revision": "180490f82ac50e0b0936732a63f17dae"
  },
  {
    "url": "note/日常笔记.html",
    "revision": "67002e2c4142dc9d44a222ae68698e40"
  },
  {
    "url": "note/构建脚手架.html",
    "revision": "d58b3f25afa25656293462dbb2c0e7f0"
  },
  {
    "url": "Processing/待写.html",
    "revision": "6d7f186de842085e05d0929bda2bc0cf"
  },
  {
    "url": "Processing/面试.html",
    "revision": "b727e09f7b5782f4dc20135943f00ee1"
  },
  {
    "url": "Processing/面试问题list.html",
    "revision": "e6dcd46f6d291983322db3ff235a683d"
  },
  {
    "url": "services/acme.sh证书颁发.html",
    "revision": "bc23b7c308a4f42c406249dd228b1c85"
  },
  {
    "url": "services/Docker上各种镜像的使用.html",
    "revision": "5c0802c9fd62622fd7c099f7f98241be"
  },
  {
    "url": "services/Docker基础.html",
    "revision": "6d754cb3fe7ff79f7055cd15642bc5dc"
  },
  {
    "url": "services/mysql使用.html",
    "revision": "c27825bf7fd29a215b27583588d1eb61"
  },
  {
    "url": "services/nginx基础.html",
    "revision": "43e8bcb13c7938459aae4e24921d5635"
  },
  {
    "url": "services/nginx配置https.html",
    "revision": "12cf0ceb392a3b04b4984bb5b547f274"
  },
  {
    "url": "services/vim常用命令.html",
    "revision": "7d191b61b37e625bbbc4c8ae8943d98d"
  },
  {
    "url": "tools/Charles.html",
    "revision": "1d4ba187bd96819e23bd40a9f3ea8626"
  },
  {
    "url": "tools/index.html",
    "revision": "6e05bf68426d926d1f2e0bac8789109d"
  },
  {
    "url": "tools/iTerm.html",
    "revision": "0eedb0d293db0f9f6597fca0f14019aa"
  },
  {
    "url": "分享/ReactFiber架构浅析.html",
    "revision": "e86a182fe99078c0bcdbc9b715c03992"
  },
  {
    "url": "分享/React性能优化方案.html",
    "revision": "d2a42ea17319b725c33fa783639c0b52"
  },
  {
    "url": "分享/TCP协议.html",
    "revision": "5116010bb75cb0f811e6cd16a80bf093"
  },
  {
    "url": "分享/从webpack打包看前端模块化.html",
    "revision": "ac54d67e20d90d82f2686a5aa0afc468"
  },
  {
    "url": "分享/函数式编程之柯里化.html",
    "revision": "36e9481c994426ee05cc07ab6a70fbf4"
  },
  {
    "url": "分享/基建/如何在人单力薄时推动基建.html",
    "revision": "9e91344fdee2c3b7693ba1b9b0f6df87"
  },
  {
    "url": "分享/基建/如何推动基建架构项目落地.html",
    "revision": "a6ca68ca34916b2df87bd0a8f1419ef1"
  },
  {
    "url": "分享/基建/如何推动大型前端团队基建.html",
    "revision": "366251d01516f8005a97eb82ef36f65c"
  },
  {
    "url": "分享/基建/如何设计大型前端团队基建路线图.html",
    "revision": "276c61d9be3fd4b3e0d174cb137ac9c3"
  },
  {
    "url": "分享/基建/如何通过基建推动团队价值破局.html",
    "revision": "c85f44473aabb8d1b3511da3e2a2e295"
  },
  {
    "url": "分享/多版本包依赖问题探讨.html",
    "revision": "b0422e3a288f154ed8b3b0030ee9102f"
  },
  {
    "url": "分享/常见的函数组合.html",
    "revision": "26b4f2ee2f8ced46a89465641379897e"
  },
  {
    "url": "分享/算法分享递归到树到动态规划.html",
    "revision": "7db39a8af585a2ddc728e495b44ba0c1"
  },
  {
    "url": "分享/纯函数.html",
    "revision": "c35a81a3528e55abc7d24a012a745bd9"
  },
  {
    "url": "分享/规范.html",
    "revision": "111618a973a829b5ff0c60adf387748b"
  },
  {
    "url": "分享/调用堆栈.html",
    "revision": "3f652cf39df99f614dc049d070c51338"
  },
  {
    "url": "重学前端/browser.html",
    "revision": "7c90410105a5f3d387f9b5db4163cc31"
  },
  {
    "url": "重学前端/css.html",
    "revision": "49979283fb6d1dc9e00abf043556e8e6"
  },
  {
    "url": "重学前端/engineering-practice.html",
    "revision": "a9ba6c2c14a0c980f95a88975dae8439"
  },
  {
    "url": "重学前端/html.html",
    "revision": "33653bbc883a382fb8f466972b78e90b"
  },
  {
    "url": "重学前端/index.html",
    "revision": "56fa134fe9aabd73df6d07ee437211cd"
  },
  {
    "url": "重学前端/javascript.html",
    "revision": "fcb35f762c5b2704e5db0acd5ec1d983"
  },
  {
    "url": "面试题/js基础.html",
    "revision": "9eec0645683bb1b786db5e50653f4eba"
  },
  {
    "url": "面试题/js基础答案.html",
    "revision": "03a6c0cc69e2eb89847702e5f6b42c05"
  },
  {
    "url": "面试题/框架相关.html",
    "revision": "079a7a5119a91bd73fc306aa014b3ce9"
  },
  {
    "url": "面试题/笔试题.html",
    "revision": "fa7387bc0f5431a7f2175b49203783dd"
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
