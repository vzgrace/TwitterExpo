const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push("cjs");

module.exports = defaultConfig;

//module.exports = {
//  transformer: {
//    getTransformOptions: async () => ({
//      transform: {
//        experimentalImportSupport: false,
//        inlineRequires: false,
//      },
//    }),
//  },
//  resolver: {
//    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs'], //add here
//  },
//};
