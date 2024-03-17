# ;是分隔符，1s是第一行，
sed -i.copy '1s;^;/* eslint-disable */;' ./*.js

# sed -i.copy "s|import.meta.url|'./add.wasm'|" ./add.js

sed -i.copy "s|self.location.href|window.self.location.href|" ./*.js
