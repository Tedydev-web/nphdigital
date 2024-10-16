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
				// Định nghĩa các route để áp dụng headers
				source: '/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
					},
					{
						key: 'Pragma',
						value: 'no-cache',
					},
					{
						key: 'Expires',
						value: '0',
					},
				],
			},
		];
	},
	webpack(config, options) {
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

		return config;
	},
};

module.exports = nextConfig;
