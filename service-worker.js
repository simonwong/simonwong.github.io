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
    "revision": "5b90bcd719f452af9610ca5f5c6b952b"
  },
  {
    "url": "advanced/index.html",
    "revision": "46df03d2515c159711221a99677eb571"
  },
  {
    "url": "advanced/react源码分析/index.html",
    "revision": "4ce14b07b31cda1db35598e296d84fba"
  },
  {
    "url": "advanced/react源码分析/ReactDOM.render过程.html",
    "revision": "5bc5e5e9f4459be3c597c038db343d9f"
  },
  {
    "url": "advanced/webpack/config.html",
    "revision": "3d6aa3f249d277f899fbdc9c8d160f21"
  },
  {
    "url": "advanced/webpack/index.html",
    "revision": "2bf49a94d78d33df8489f700ca22e6b5"
  },
  {
    "url": "advanced/webpack/optimization.html",
    "revision": "c3300813313e3f861efa49461ff32ac7"
  },
  {
    "url": "advanced/构建脚手架.html",
    "revision": "0785c619edb833286f6f6064f541a219"
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
    "url": "assets/js/36.e3eda41d.js",
    "revision": "6d3eff3055f9d00f3941bf3f440a9c5f"
  },
  {
    "url": "assets/js/37.b56e41c2.js",
    "revision": "b26ca51943bc28c8d7d4a5b434ef0c38"
  },
  {
    "url": "assets/js/38.2acb90e4.js",
    "revision": "e4f215366d9d637d1a68539bcd2b1919"
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
    "url": "assets/js/44.d74946a5.js",
    "revision": "663b72c276f8ac3ecb0e86b90ee6f602"
  },
  {
    "url": "assets/js/45.4759509d.js",
    "revision": "ce1793e9aac6d808de54cbc129a9bf7c"
  },
  {
    "url": "assets/js/46.5509ef0d.js",
    "revision": "f85e6a7e0ea17770ec2bb215c532afc4"
  },
  {
    "url": "assets/js/47.8c5dbed1.js",
    "revision": "1571a21a11f34d3c1c2107e16df37710"
  },
  {
    "url": "assets/js/48.31c75877.js",
    "revision": "b2db073ccc343008c80a3e10d8741aac"
  },
  {
    "url": "assets/js/49.070847e4.js",
    "revision": "18440e6dc83315ef3f56ae3761b15e11"
  },
  {
    "url": "assets/js/5.8ff1d0bd.js",
    "revision": "37e7023ee6dcd1ecfd202200e323a878"
  },
  {
    "url": "assets/js/50.8e1b99ee.js",
    "revision": "c018b4333ad418f5cb04abf4b830a669"
  },
  {
    "url": "assets/js/51.dec5c58f.js",
    "revision": "7210457e2de7129fbbc6046e21dc16a1"
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
    "url": "assets/js/55.c1bc95e4.js",
    "revision": "fccec2b1d256c8b4c5589879ecf3db5c"
  },
  {
    "url": "assets/js/56.de877127.js",
    "revision": "9c28a9d3b87567a7c26791a7e3fe2fbf"
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
    "url": "assets/js/62.55ef1644.js",
    "revision": "2a53900b831a5b94905f87b1034df2f3"
  },
  {
    "url": "assets/js/63.c05357d1.js",
    "revision": "3f41d4aca1be8aff49f2e34c59a6de2a"
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
    "url": "assets/js/70.cc3e2314.js",
    "revision": "e16e3adbe8d739f855d1954000626485"
  },
  {
    "url": "assets/js/71.ea0c9705.js",
    "revision": "b0e0d2ec1d4bdc543b8b844fce9db22a"
  },
  {
    "url": "assets/js/72.f730f71c.js",
    "revision": "a20633fc2cc18edcfbe81080538c7321"
  },
  {
    "url": "assets/js/73.f3cd6cfd.js",
    "revision": "9dfd01ab2062f00a9174194a49a4fa48"
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
    "url": "assets/js/86.ad921f2e.js",
    "revision": "8854661d64ee38a2b6538cf3c096338d"
  },
  {
    "url": "assets/js/87.d394da50.js",
    "revision": "c81b7cb86d614e81e27a28c189161acd"
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
    "url": "assets/js/app.603a1931.js",
    "revision": "d902052a7f6919b71bed6ce4e4a52b4f"
  },
  {
    "url": "backend/index.html",
    "revision": "ea6730d6cbad3ee8191411852b9c6d94"
  },
  {
    "url": "backend/mongodb.html",
    "revision": "6063919ffa1996221d66cd73b4f8adbf"
  },
  {
    "url": "backend/node基础.html",
    "revision": "bd9e4080c1ee09c0b4b79d74baf50ec7"
  },
  {
    "url": "backend/服务性能调优.html",
    "revision": "7c989af6d8e9edae12f81a223858ae22"
  },
  {
    "url": "computerbasic/http.html",
    "revision": "276aa746965d664c7ad8e09fa1ad06d5"
  },
  {
    "url": "computerbasic/index.html",
    "revision": "f79d286b049870a465be2688f9d4f515"
  },
  {
    "url": "computerbasic/数据结构与算法分析/index.html",
    "revision": "323afe17539439e4bf6458d1bd0b1e95"
  },
  {
    "url": "computerbasic/数据结构与算法分析/复杂度分析.html",
    "revision": "abfd3d87004cfb3bf60f92c9d1b869e1"
  },
  {
    "url": "computerbasic/数据结构与算法分析/排序算法.html",
    "revision": "8141fdd6361eb44e3182dd310cbfc550"
  },
  {
    "url": "computerbasic/数据结构与算法分析/数据结构.html",
    "revision": "cb8d7c13f133c6fa1a7535f385dc75a6"
  },
  {
    "url": "computerbasic/进制.html",
    "revision": "b6067140ee8191ae9b415c6426461634"
  },
  {
    "url": "hero.gif",
    "revision": "b52e26520d5d629436899beef65ad323"
  },
  {
    "url": "index.html",
    "revision": "15c469ce2d6214532dc52ebd6e52decf"
  },
  {
    "url": "logo.png",
    "revision": "d1980338561418bfdf9f2db3d757edaf"
  },
  {
    "url": "note/AppleScript-note.html",
    "revision": "f38110e0591b58efd2a80b7cc21fc6bb"
  },
  {
    "url": "note/applet/taro.html",
    "revision": "a49eb0ab5eb370a88a8c8bcff0faeb7d"
  },
  {
    "url": "note/index.html",
    "revision": "97d4c80a686324b29dab5ddcd2a3675f"
  },
  {
    "url": "note/js语言精粹.html",
    "revision": "e7a966099a83b4c03e045c2d22f78a9d"
  },
  {
    "url": "note/macbook-note.html",
    "revision": "36ead20e749c663d624d8c0104a65505"
  },
  {
    "url": "note/NPM/npm包开发.html",
    "revision": "649a162f543789648267131d448c6173"
  },
  {
    "url": "note/NPM/npm基础.html",
    "revision": "4894842879ffebf1c5c6af6044bf3653"
  },
  {
    "url": "note/NPM/npm机制.html",
    "revision": "bc1d098c8d91197269eafafa47c93afc"
  },
  {
    "url": "note/NPM/yarn.html",
    "revision": "44e7ee51ed7694f83831dba25bda82b7"
  },
  {
    "url": "note/React/react-hooks使用技巧.html",
    "revision": "ced60073549072fde7f3cb658b0f5393"
  },
  {
    "url": "note/React/React笔记.html",
    "revision": "c21f280635f9ad9eb0d1488148b42b78"
  },
  {
    "url": "note/React/源码分析.html",
    "revision": "1692d4240d0acc38f8d6d3e0e199185d"
  },
  {
    "url": "note/typescript-note.html",
    "revision": "9c56240d1c5ff66653644d77fe8d7648"
  },
  {
    "url": "note/umi-note.html",
    "revision": "3cbaaa4f7d86d107dea7d51e9adea193"
  },
  {
    "url": "note/webapp.html",
    "revision": "a616d74eef17d2d82b225b490b1ee307"
  },
  {
    "url": "note/webpack4-note.html",
    "revision": "fb9e4eebb3992e17cee9fbd55ff0b552"
  },
  {
    "url": "note/前端监控/jiankong.html",
    "revision": "bebdd8c2ff87a22c21c09ceef89ab224"
  },
  {
    "url": "note/前端监控/线上监控之用户行为采集及分析.html",
    "revision": "02de96ef831dea651d2810416260b9ac"
  },
  {
    "url": "note/常用的css.html",
    "revision": "337023035cadeed17dbcb4a169ba2e55"
  },
  {
    "url": "note/提升开发体验.html",
    "revision": "9038aaf91de925086d6aea4b7cc9b197"
  },
  {
    "url": "note/日常笔记.html",
    "revision": "d2ea33f02e7704eafa4c39b5b85834e3"
  },
  {
    "url": "Processing/待写.html",
    "revision": "8a7c380105b6466f7483106f0a67f2f7"
  },
  {
    "url": "Processing/面试.html",
    "revision": "f10f50a1e3cbe157d7481cbfd0331ac0"
  },
  {
    "url": "Processing/面试问题list.html",
    "revision": "46357ddc7ae586640a70106e660007f0"
  },
  {
    "url": "services/acme.sh证书颁发.html",
    "revision": "eb6f426afd51e124226cd443d9be96e2"
  },
  {
    "url": "services/Docker上各种镜像的使用.html",
    "revision": "acb93f14b34e6e336c980ebd20e65c0c"
  },
  {
    "url": "services/Docker基础.html",
    "revision": "a8e1a46785ee7ec17b88fc4b3e503f38"
  },
  {
    "url": "services/git/gitlab-workflow.html",
    "revision": "c952d2541622a859ba7b7bd299422f2e"
  },
  {
    "url": "services/git/git操作指南.html",
    "revision": "d73212b847676f7a01bb4359e942050d"
  },
  {
    "url": "services/git/mac多git账户配置.html",
    "revision": "8a799333fd17553847ae7838f1d26e61"
  },
  {
    "url": "services/index.html",
    "revision": "9ed7c2aba2b385fe4abcead5a50e146b"
  },
  {
    "url": "services/mysql使用.html",
    "revision": "50c730d05e31cd58ad5c4744c0e909e2"
  },
  {
    "url": "services/nginx基础.html",
    "revision": "923f63e1f79366b29ba321dac482b312"
  },
  {
    "url": "services/nginx配置https.html",
    "revision": "98db77b9c2e39352b78121a32a42d825"
  },
  {
    "url": "services/vim常用命令.html",
    "revision": "4b128bca026cfc6e00c09095f5cf9929"
  },
  {
    "url": "share/index.html",
    "revision": "96d3a2988b8459ca89397de81f860ffd"
  },
  {
    "url": "share/ReactFiber架构浅析.html",
    "revision": "abde61ad5d0dfc19c10382a526cbcea6"
  },
  {
    "url": "share/React性能优化方案.html",
    "revision": "58b2f63d91495d43f13d929882e1f6eb"
  },
  {
    "url": "share/TCP协议.html",
    "revision": "91c82d9589693c7d42399903f901c37f"
  },
  {
    "url": "share/TypeScript、Rollup搭建工具库.html",
    "revision": "4d14c9cf85ab2da035603f03307f47b2"
  },
  {
    "url": "share/从webpack打包看前端模块化.html",
    "revision": "f84a0136c6c053c1e0ebc5934c469db4"
  },
  {
    "url": "share/函数式编程之柯里化.html",
    "revision": "710e761eed5b414a33ba73e751326ce5"
  },
  {
    "url": "share/基建/如何在人单力薄时推动基建.html",
    "revision": "452b380dcb9fe95352b97e354b497276"
  },
  {
    "url": "share/基建/如何推动基建架构项目落地.html",
    "revision": "f6dafb5fe82000c5dd461a706cc0b689"
  },
  {
    "url": "share/基建/如何推动大型前端团队基建.html",
    "revision": "60ea9229275a57f3382ba5b51a9f9361"
  },
  {
    "url": "share/基建/如何设计大型前端团队基建路线图.html",
    "revision": "d89937a2715c680aabb4571d48fe3d1f"
  },
  {
    "url": "share/基建/如何通过基建推动团队价值破局.html",
    "revision": "15dca33b79a5a0e1a063fb4e1a4a3405"
  },
  {
    "url": "share/多版本包依赖问题探讨.html",
    "revision": "092d99cafae66464ce7935f54fcec4bb"
  },
  {
    "url": "share/常见的函数组合.html",
    "revision": "f569855d21521ca00271bfb617cd55c6"
  },
  {
    "url": "share/算法分享递归到树到动态规划.html",
    "revision": "c4917e19bb15b5620081a61c4a87d233"
  },
  {
    "url": "share/纯函数.html",
    "revision": "3937abb4c3a9dd4050c350540d575d43"
  },
  {
    "url": "share/规范.html",
    "revision": "5c31c8c7144208769ef5d64bb68b2f61"
  },
  {
    "url": "share/调用堆栈.html",
    "revision": "ccb61c35c22d35cef405a6b5e0126fc3"
  },
  {
    "url": "share/重学前端/browser.html",
    "revision": "cbbf8dbdde3e8caf03bc9efbb62e4802"
  },
  {
    "url": "share/重学前端/css.html",
    "revision": "36b85227a799d2ce6f4443a9a08ff85c"
  },
  {
    "url": "share/重学前端/engineering-practice.html",
    "revision": "d2186577bbb5dcd8e6f82e5010e79484"
  },
  {
    "url": "share/重学前端/html.html",
    "revision": "76de23a2507d4336cefd3a31cb84d582"
  },
  {
    "url": "share/重学前端/index.html",
    "revision": "d8d3eec50d8669cf76dcb91bfd9ec837"
  },
  {
    "url": "share/重学前端/javascript.html",
    "revision": "ca7ba9e09de90061254122d46ab5489f"
  },
  {
    "url": "tools/Charles.html",
    "revision": "ec036504ad023aa864588eabdf80162b"
  },
  {
    "url": "tools/index.html",
    "revision": "862fc4323660c562bb64ac67acad582d"
  },
  {
    "url": "tools/iTerm.html",
    "revision": "3d030234ef339e3cb3fc6ef63b8d1dc6"
  },
  {
    "url": "面试题/js基础.html",
    "revision": "0e903eec738b8be410b4dba614934560"
  },
  {
    "url": "面试题/js基础答案.html",
    "revision": "84150e782f304e64da2810270ccbc5c9"
  },
  {
    "url": "面试题/框架相关.html",
    "revision": "0683741efd1f32ad294cc9f54680c1b5"
  },
  {
    "url": "面试题/笔试题.html",
    "revision": "c0aa43ba92118475f0114085cd4066ef"
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
