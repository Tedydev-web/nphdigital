const crypto = require('crypto');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		reactRemoveProperties: true,
		styledComponents: true,
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
					{
						key: 'Link',
						value: '</_next/static/chunks/main-3cda6c34556c1bb9.js>; rel=preload; as=script',
					},
				],
			},
		];
	},
	webpack(config, { isServer }) {
		config.module.rules.push({
			test: /\.(mp4|webm)$/,
			use: {
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					publicPath: '/_next/static/videos/',
					outputPath: 'static/videos/',
				},
			},
		});

		if (!isServer) {
			config.optimization.splitChunks.cacheGroups = {
				default: false,
				vendors: false,
				framework: {
					chunks: 'all',
					name: 'framework',
					test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
					priority: 40,
					enforce: true,
				},
				lib: {
					test(module) {
						return module.size() > 160000 && /node_modules[/\\]/.test(module.identifier());
					},
					name(module) {
						const hash = crypto.createHash('sha1');
						try {
							if (module.type === 'css/mini-extract') {
								module.updateHash(hash);
							} else if (module.libIdent) {
								hash.update(module.libIdent({ context: this.context }));
							} else {
								hash.update(module.identifier());
							}
						} catch (error) {
							console.warn(`Failed to generate hash for module: ${error.message}`);
						}
						return hash.digest('hex').substring(0, 8);
					},
					priority: 30,
					minChunks: 1,
					reuseExistingChunk: true,
				},
			};
		}

		return config;
	},
};

module.exports = withBundleAnalyzer(nextConfig);
