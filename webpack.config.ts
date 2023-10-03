import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from '../../Desktop/ulbi-reactfrontend/code/29 Модальное окно. Portal/29/production-project-275ffcccdf0d6e889dc640425bb37336eb8dca5f/config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from '../../Desktop/ulbi-reactfrontend/code/29 Модальное окно. Portal/29/production-project-275ffcccdf0d6e889dc640425bb37336eb8dca5f/config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;
};
