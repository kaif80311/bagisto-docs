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
    "url": "1.x/advanced/create_payment_method.html",
    "revision": "403cb65f6868627a0403e258931ff951"
  },
  {
    "url": "1.x/advanced/create_product_type.html",
    "revision": "e3573169486125f70c094834c4e6a91d"
  },
  {
    "url": "1.x/advanced/create_shipping_method.html",
    "revision": "c05a0af415f1f5b19c42129a04a5d530"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "888d9be376ade879fe3f02f2fab6bbdf"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "3fd36d62e334c0d0726e3dc0f2d320f3"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "e99b4ce64682c99d62cdff9672f3c79b"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "429f0c2d12d935064a81e074327e4e9b"
  },
  {
    "url": "1.x/advanced/render_event.html",
    "revision": "19493b6fa925230d4327aef831efc464"
  },
  {
    "url": "1.x/advanced/security_practice.html",
    "revision": "da37101a63ad3584ecdb59c5e2eddea3"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "159b92d1571c9bc5e40b3f38aade0680"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "826b8537ca007a8697e15f23d8121c6c"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "610b746bd14a13629ac87d5e5b931902"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "06fb85333a54392103bce5d5841a4ef0"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "8ccc70456f0bb8d6acb58c5c0757939c"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "990683d756c7991a349679a488795f49"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "bcc3c053894c289530d4a4593fa99973"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "02e2d0729327891b7b35b024c1b86801"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "6b0fef4467090725b347d8b2421b0a33"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "924343fa0d6a12e0f9777b7576f0cb5f"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "37d1afa368c1c13ad2cd301011dfcd88"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "96f2dbff8a60d06ab8ed79f87439cde4"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "5170edcbc5652e00adf99c76cf949377"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "6deea45aff540ae8c4f5c4812509a879"
  },
  {
    "url": "1.x/introduction/folders.html",
    "revision": "41237c763feac8037623ff33a0ac2d0b"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "bdd02ba7063c83b4507428a206d981b9"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "e45acc3e4d0b2137d2eedf5b8d9c1293"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "1b4b553f385276ddb58f1185506b6863"
  },
  {
    "url": "1.x/introduction/upgrade_to_latest_bagisto.html",
    "revision": "edc03c29e62cd2de2a127f49c9451b7d"
  },
  {
    "url": "1.x/packages/add_menu_in_admin.html",
    "revision": "2016959a4f2689c9ca6715c70d8451d5"
  },
  {
    "url": "1.x/packages/create_acl.html",
    "revision": "d37d594e25afdb6237f98a95190a07e6"
  },
  {
    "url": "1.x/packages/create_custom_configuration.html",
    "revision": "d834808871b5d9854f405f2bcf6b2f8f"
  },
  {
    "url": "1.x/packages/create_migrations.html",
    "revision": "3e36516acdf79ae1dacacffd9fe1814a"
  },
  {
    "url": "1.x/packages/create_models.html",
    "revision": "0c42e2c75b5e333304a6d65ca464a0aa"
  },
  {
    "url": "1.x/packages/create_package.html",
    "revision": "521dc5fb81811376db26bb86b8a10039"
  },
  {
    "url": "1.x/packages/index.html",
    "revision": "007977ee259be572bb896c04d6f3eece"
  },
  {
    "url": "1.x/packages/store_data_through_repositories.html",
    "revision": "b3e8ea8c87717bc21acc67a5f78520b0"
  },
  {
    "url": "1.x/themes/create_admin_theme.html",
    "revision": "ab4407994c54c7375815a94d52623001"
  },
  {
    "url": "1.x/themes/create_theme.html",
    "revision": "207abba8f0259c0694dba1202cb748f8"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "ba8b300c18bff3b0e7b5f1cbeed66d4a"
  },
  {
    "url": "1.x/translations/change_the_language_of_error_validations_on_your_store.html",
    "revision": "69aec035b01898350f3699b03012b83c"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "6773725caf8ca73e2156b15aedb8681c"
  },
  {
    "url": "1.x/translations/translation_based_on_locale.html",
    "revision": "4618470b90af2ae8b7b8c9cf65f74aa5"
  },
  {
    "url": "1.x/user_guides/cart_catalog_rule.html",
    "revision": "17b058a84dc8ebb19db1faf47ebb9f0a"
  },
  {
    "url": "1.x/user_guides/cart_rule.html",
    "revision": "7d3ef46de6caf65027a6847b2ce88975"
  },
  {
    "url": "1.x/user_guides/index.html",
    "revision": "4ca62ef2f57de6180d15f45e7123ba1a"
  },
  {
    "url": "404.html",
    "revision": "ffdf9296fc3a48d1f24c2bf1644550da"
  },
  {
    "url": "assets/css/0.styles.ff275ce7.css",
    "revision": "7ea9fde45d437e7486fd997d53659249"
  },
  {
    "url": "assets/img/add-locale-bagisto.b2e2cfb9.png",
    "revision": "b2e2cfb94cf27c4c873e38113fa70aaf"
  },
  {
    "url": "assets/img/admin-acl-output.33cbb854.png",
    "revision": "33cbb8542307d97dce7e411f4e1ffee2"
  },
  {
    "url": "assets/img/admin-custom-config-output.ad6536ab.png",
    "revision": "ad6536ab0b05048c23992f08943b6d1d"
  },
  {
    "url": "assets/img/admin-menu-output.a5949c80.png",
    "revision": "a5949c80bf47f4a37c0f8d330f1f139c"
  },
  {
    "url": "assets/img/arrabic-attribute.4d7a4275.png",
    "revision": "4d7a4275690cfe606cdb2f1babf87cc5"
  },
  {
    "url": "assets/img/bagisto_add_info.78af382e.jpg",
    "revision": "78af382e00c5ed610f08e7dcb25de296"
  },
  {
    "url": "assets/img/bagisto_attribute.a6fc572b.jpg",
    "revision": "a6fc572b5095c9086b4b9594c7627dbb"
  },
  {
    "url": "assets/img/bagisto_cart_add.63562e08.jpg",
    "revision": "63562e08b02018b7b6a8826f9bb124f6"
  },
  {
    "url": "assets/img/bagisto_cart_guest.d853001d.jpg",
    "revision": "d853001da175e958725f6cf956e31e84"
  },
  {
    "url": "assets/img/bagisto_cart_remove_item.3b5df823.jpg",
    "revision": "3b5df82328f5369892e46b182c1fb326"
  },
  {
    "url": "assets/img/bagisto_cart_update.3b860220.jpg",
    "revision": "3b860220a366af90e600fd35c087d67b"
  },
  {
    "url": "assets/img/bagisto_cart.3cc30a8b.jpg",
    "revision": "3cc30a8be1ec377e6a4aa9c4bb1cc4d5"
  },
  {
    "url": "assets/img/bagisto_config_attr.83af48dd.jpg",
    "revision": "83af48ddf4fc985007f39acec9cc37e3"
  },
  {
    "url": "assets/img/bagisto_config.325d4e50.jpg",
    "revision": "325d4e50a5fd49d4ec8a9c447f21a6e6"
  },
  {
    "url": "assets/img/bagisto_move_to_wishlist.092fc8ae.jpg",
    "revision": "092fc8ae6b7ce543f91fcbcb840ebd82"
  },
  {
    "url": "assets/img/bagisto_orders_id.47d67a0d.jpg",
    "revision": "47d67a0d48c7eb4471788608a266ebd0"
  },
  {
    "url": "assets/img/bagisto_orders_no_pag.eb8fd609.jpg",
    "revision": "eb8fd6090b445f1a375c41d22bdb9405"
  },
  {
    "url": "assets/img/bagisto_prod_color.54846a87.jpg",
    "revision": "54846a878f4e58126066ca83a1f698e4"
  },
  {
    "url": "assets/img/bagisto_prod_price_config.1c3285d1.jpg",
    "revision": "1c3285d10a818abb2dca20a777b79258"
  },
  {
    "url": "assets/img/bagisto_prod_price_simple.78ef8f5a.jpg",
    "revision": "78ef8f5ac73bae616e5e0794dfeb7f42"
  },
  {
    "url": "assets/img/bagisto_prod_size.2fdc1d32.jpg",
    "revision": "2fdc1d32ecc5200a7a65d99b44e600fb"
  },
  {
    "url": "assets/img/bagisto_save_address.633cf573.jpg",
    "revision": "633cf57391403cf1df62f8dfe80d6661"
  },
  {
    "url": "assets/img/bagisto_save_order.c2fab81f.jpg",
    "revision": "c2fab81f906b0dda24ab128e2100f0e3"
  },
  {
    "url": "assets/img/bagisto_save_payment.99edb31c.jpg",
    "revision": "99edb31ca6dbf31d3261d528d48f120f"
  },
  {
    "url": "assets/img/bagisto_save_shipping.6c8d23d1.jpg",
    "revision": "6c8d23d1f29b3905c0742e6fe9dc2a03"
  },
  {
    "url": "assets/img/bagisto_ship_order_id.367b77a9.jpg",
    "revision": "367b77a9b47802107f443338b7ff1cfe"
  },
  {
    "url": "assets/img/bagisto_shipments.e6134a4b.jpg",
    "revision": "e6134a4b8b604b1756ab3ef108884406"
  },
  {
    "url": "assets/img/bagisto_wishlist_page.de525699.jpg",
    "revision": "de5256999417cca7f6ab7503a5b109d1"
  },
  {
    "url": "assets/img/catageory-in-arabic.4b55c745.png",
    "revision": "4b55c745b858c4aac3044fa348caf6a7"
  },
  {
    "url": "assets/img/channel-setting-in-bagisto.a7a72cb5.png",
    "revision": "a7a72cb5af650f7e582f8deae80e4f99"
  },
  {
    "url": "assets/img/demo_products.86acc2d1.jpg",
    "revision": "86acc2d17a24f156e867f75404f9e121"
  },
  {
    "url": "assets/img/front-end-in-arabic.f7c759e0.png",
    "revision": "f7c759e055265bf9ebd9df156e22c9ab"
  },
  {
    "url": "assets/img/front-end.9aaeb0de.png",
    "revision": "9aaeb0de8e5707aa4afa1845e2fa1f4d"
  },
  {
    "url": "assets/img/hello-world-package-output.2f3c248f.png",
    "revision": "2f3c248fcf0bcdb3a497646485084147"
  },
  {
    "url": "assets/img/helloworld-admin-browser-output.58d525cb.png",
    "revision": "58d525cbaf78c5763ac8f557cdd31e9f"
  },
  {
    "url": "assets/img/helloworld-shop-browser-output.036ed5d9.png",
    "revision": "036ed5d98b58f5887a0cde7d6a874bd5"
  },
  {
    "url": "assets/img/language-changes.a799195d.png",
    "revision": "a799195df5c2def1f7798b6296eb0659"
  },
  {
    "url": "assets/img/limiting-error-messages.5887bc7c.png",
    "revision": "5887bc7c25f56a6e4e03ead32f873720"
  },
  {
    "url": "assets/img/locale-setup.a0047ee5.png",
    "revision": "a0047ee598bf517ca89e565539e444cc"
  },
  {
    "url": "assets/img/locale-trans.eed57105.png",
    "revision": "eed57105bf11bb1ad460c9e09ec9e207"
  },
  {
    "url": "assets/img/locale.b190a2d4.png",
    "revision": "b190a2d4e2ed61a1a75b829f6af4bdcf"
  },
  {
    "url": "assets/img/product-in-arabic.e634c43f.png",
    "revision": "e634c43ff0331dcf5ff91211017c6f1f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/10.659b3753.js",
    "revision": "dd48afb990e5eb2a53232d9d0be661ab"
  },
  {
    "url": "assets/js/11.a060e227.js",
    "revision": "6eef835d7201a786611679868c09903a"
  },
  {
    "url": "assets/js/12.518acb9a.js",
    "revision": "08176504450bb58acd044fd18cbdb819"
  },
  {
    "url": "assets/js/13.405377e4.js",
    "revision": "6662693085ec26e697e55efe3d4080eb"
  },
  {
    "url": "assets/js/14.8a5abe72.js",
    "revision": "359aca3a65fd8e363ac741177e7aea52"
  },
  {
    "url": "assets/js/15.58491c77.js",
    "revision": "c56f6df1bb141b65b9b9744e62f83292"
  },
  {
    "url": "assets/js/16.ca5d1b5f.js",
    "revision": "c7963ac8c6d1cbad0b682e1ac9b7e01e"
  },
  {
    "url": "assets/js/17.3bf8dc6d.js",
    "revision": "344106a3ad7a4cdd6520486b7a184f8d"
  },
  {
    "url": "assets/js/18.e37e66d9.js",
    "revision": "751017bd9a60e0b8d91fe5dc24961dba"
  },
  {
    "url": "assets/js/19.0ed6d12e.js",
    "revision": "004d8d890ab82071ee6d4d6230897a36"
  },
  {
    "url": "assets/js/2.a667fdc9.js",
    "revision": "68b064d6f19ca05ca1e23b95d7fe11eb"
  },
  {
    "url": "assets/js/20.e672ae7f.js",
    "revision": "ba4389fc7a3b2a23b4f0f7e88921ec0e"
  },
  {
    "url": "assets/js/21.f2336fe7.js",
    "revision": "93bad473656c5360b2877185615f9793"
  },
  {
    "url": "assets/js/22.fc40fd17.js",
    "revision": "acc0afc2b9867adeddb5ba477f32fd63"
  },
  {
    "url": "assets/js/23.26abe7e3.js",
    "revision": "89607288d15abde9b5b7fdbc7d2f054c"
  },
  {
    "url": "assets/js/24.70784aee.js",
    "revision": "f392e2d588be331334af8f503296273e"
  },
  {
    "url": "assets/js/25.067ef646.js",
    "revision": "4120a1c0e9968a239100c5720eeb0c3a"
  },
  {
    "url": "assets/js/26.7c38629c.js",
    "revision": "6fb345977798698a12ddd96e8b1be88a"
  },
  {
    "url": "assets/js/27.8213228e.js",
    "revision": "533552650a04cfa6a1b65018ab549f75"
  },
  {
    "url": "assets/js/28.43501bd7.js",
    "revision": "a50018b607b51e29d91d825cc26d7050"
  },
  {
    "url": "assets/js/29.df3cde7b.js",
    "revision": "a9e4c82c6fb5e53e020f09e8a74ca402"
  },
  {
    "url": "assets/js/3.85ae7613.js",
    "revision": "2ce7e50f1c8fc7ad17dd0bc7bb2675ec"
  },
  {
    "url": "assets/js/30.8ae76254.js",
    "revision": "58aaf972947efb5aae520bcf474458f9"
  },
  {
    "url": "assets/js/31.7e2e3bd5.js",
    "revision": "a606ca63ef62a2df1b042465bd94edd0"
  },
  {
    "url": "assets/js/32.b10d9b6e.js",
    "revision": "654a201a99cecfa856d40b8e4dc714d6"
  },
  {
    "url": "assets/js/33.336f5735.js",
    "revision": "c078e034b803272ecb97bde73ec4b3ed"
  },
  {
    "url": "assets/js/34.c6e0dcbb.js",
    "revision": "0b5be1d6cd2d5b930ba247e3b3af55a8"
  },
  {
    "url": "assets/js/35.4fb979a7.js",
    "revision": "4283874c75e085d4d7b3518ed55cbe9b"
  },
  {
    "url": "assets/js/36.38ee2353.js",
    "revision": "50f7d775651fd56b13b65a8dc392288c"
  },
  {
    "url": "assets/js/37.7eacfad9.js",
    "revision": "3c415c31445a076320f55371f81eacc4"
  },
  {
    "url": "assets/js/38.2594f828.js",
    "revision": "919b49062440940e200ccc1e37011a5a"
  },
  {
    "url": "assets/js/39.cb8866c2.js",
    "revision": "17e0321d879736dce9a2eaa2261086af"
  },
  {
    "url": "assets/js/4.54fe4688.js",
    "revision": "6f2ea6ab596746f9ea811c222f917ee7"
  },
  {
    "url": "assets/js/40.d427d0a4.js",
    "revision": "00509ea161506a502e8f08e955479e0c"
  },
  {
    "url": "assets/js/41.6951eb34.js",
    "revision": "3a03f06e4c1c5c4b83a22190897995ff"
  },
  {
    "url": "assets/js/42.6aa4d541.js",
    "revision": "cd8ab8fb593f78ab69af5b142d46d7f4"
  },
  {
    "url": "assets/js/43.609507b0.js",
    "revision": "07b1f4b37054cac87a5b9a87d32639a3"
  },
  {
    "url": "assets/js/44.c07b3fe7.js",
    "revision": "9d995ce31acbf2ed2bc06ac1e3440166"
  },
  {
    "url": "assets/js/45.eedfaa5d.js",
    "revision": "27202faab2f9e54c07271d92b2580a12"
  },
  {
    "url": "assets/js/46.c3ae92f1.js",
    "revision": "d2ac33afa839197cf9827174dddfb0e9"
  },
  {
    "url": "assets/js/47.268c90b1.js",
    "revision": "3392857acde3bd93af4481b51b7ab7ae"
  },
  {
    "url": "assets/js/48.5a0c9975.js",
    "revision": "38bb57aca45a2b9d4d85a0fec4f28a0b"
  },
  {
    "url": "assets/js/49.022970a7.js",
    "revision": "9971d51b2a02a3e3275bdcee577b0083"
  },
  {
    "url": "assets/js/5.718d42b6.js",
    "revision": "5c036cfa2d8452723afd9c7ca74fc1a9"
  },
  {
    "url": "assets/js/50.a52559c5.js",
    "revision": "71f6d13efb30aa435c07448756629569"
  },
  {
    "url": "assets/js/51.9635c63b.js",
    "revision": "a75952c9051b7b12e8e88f133a1dab1c"
  },
  {
    "url": "assets/js/6.bf75d312.js",
    "revision": "d0cee2c8285a7ae185dd72437a47a26a"
  },
  {
    "url": "assets/js/7.d231be30.js",
    "revision": "eacb02347bbf18a558dc6934c79be930"
  },
  {
    "url": "assets/js/8.b613b7d6.js",
    "revision": "9c5a86f88374a7115ca3ff38bdf9d667"
  },
  {
    "url": "assets/js/9.edc10067.js",
    "revision": "80ec8735772e19ee80198e79435b58c8"
  },
  {
    "url": "assets/js/app.618fc6cc.js",
    "revision": "fa9abe4fa5a07197f843adf26286b0ce"
  },
  {
    "url": "index.html",
    "revision": "e054f6e1eb20d2bd4adc140a9318080c"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
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
