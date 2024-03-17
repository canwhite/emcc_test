const million = require("million/compiler");
 
module.exports = {
  webpack: {
    // module: {
    //   rules: [
    //     {
    //       test: /\.wasm$/,
    //       type: 'asset/resource',
    //       loader: 'file-loader',
    //       options: {
    //         outputPath:'/static/js',
    //         name: '[name].[ext]',         
    //       }     
    //   },      
    //   ],
    // },
    plugins: {
      add: [
        million.webpack({
          //auto
          auto: {
            //编译器会自动忽略那些占总代码量超过0.05%的不需要的代码
            threshold: 0.05,
            //编译器会跳过使用了"useBadHook"和包含"badVariable"字符串的代码
            skip: ["useBadHook", /badVariable/g],
          },
        }),
      ],
    },
  },
};