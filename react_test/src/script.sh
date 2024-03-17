sed -i.old '1s;^;/* eslint-disable */;'./add.js

sed -i.old "s|import.meta.url|'./add.wasm'|" ./add.js

sed -i.old "s|self.location.href|window.self.location.href|" ./add.js
