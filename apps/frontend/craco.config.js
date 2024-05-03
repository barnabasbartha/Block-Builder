import ModuleScopePlugin from 'react-dev-utils/ModuleScopePlugin';
import TsConfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import { resolve } from 'path';

export const webpack = {
  configure: (config) => {
    // Remove guard against importing modules outside of `src`.
    // Needed for workspace projects.
    config.resolve.plugins = config.resolve.plugins.filter(
      (plugin) => !(plugin instanceof ModuleScopePlugin)
    );
    // Add support for importing workspace projects.
    config.resolve.plugins.push(
      new TsConfigPathsPlugin({
        // eslint-disable-next-line no-undef
        configFile: resolve(__dirname, 'tsconfig.json'),
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        mainFields: ['browser', 'module', 'main'],
      })
    );

    // Replace include option for babel loader with exclude
    // so babel will handle workspace projects as well.
    config.module.rules[1].oneOf.forEach((r) => {
      if (r.loader && r.loader.indexOf('babel') !== -1) {
        r.exclude = /node_modules/;
        delete r.include;
      }
    });
    return config;
  },
};
export const jest = {
  configure: (config) => {
    config.resolver = '@nx/jest/plugins/resolver';
    return config;
  },
};
