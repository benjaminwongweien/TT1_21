const { removeModuleScopePlugin } = require('customize-cra');

module.exports = function override(config) {
    if (!config.plugins) {
        config.plugins = [];
    }
    removeModuleScopePlugin()(config);

    return config;
};
