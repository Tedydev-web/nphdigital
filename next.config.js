const path = require('path');
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n,
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/styles'), path.join(__dirname, 'public/assets/scss')],
	},
	images: {
		domains: ['res.cloudinary.com'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 60,
	},
	webpack: (config, { dev, isServer }) => {
		// Font optimization
		config.module.rules.push({
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			type: 'asset/resource',
			generator: {
				filename: 'static/fonts/[hash][ext][query]'
			}
		});

		// CSS optimization
		if (!dev && !isServer) {
			config.optimization.splitChunks.cacheGroups.styles = {
				name: 'styles',
				test: /\.(css|scss)$/,
				chunks: 'all',
				enforce: true,
				priority: 10,
			};

			// Optimize common chunks
			config.optimization.splitChunks.cacheGroups.commons = {
				name: 'commons',
				chunks: 'all',
				minChunks: 2,
				priority: 20,
			};
		}

		return config;
	},
	optimizeFonts: true,
	swcMinify: true,
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	experimental: {
		optimizeCss: true
	}
}

module.exports = nextConfig;
