# emcc_test
using of emcc


### env 
emscripten 
llvm


### run 
1) add.c
```
#include <stdio.h>
#include <emscripten/emscripten.h>
#ifdef __cplusplus
extern "C" {
#endif

int EMSCRIPTEN_KEEPALIVE add(int a, int b) {
  return a+b;
}

#ifdef __cplusplus
}
#endif

```
2) Generating Javascript
```
emcc add.c -o add.js -g1 -s WASM=1 -s MODULARIZE=1 -s EXPORT_ES6=1 -s 'EXPORT_NAME="createModule"' -s "EXPORTED_RUNTIME_METHODS=['ccall','cwrap']" -s 'ENVIRONMENT=“web"'

```


3）invoking -- show in react_test


