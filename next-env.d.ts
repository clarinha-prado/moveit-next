/// <reference types="next" />
/// <reference types="next/types/global" />
import { Dotenv } from 'dotenv-webpack';
import { path } from 'path';

module.exports = {
    webpack: config => {
        config.resolve.alias['@'] = path.resolve(__dirname);
        config.pluins.push(new Dotenv({ silent: true }));
        return config;
    }
}