/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		reactRemoveProperties: true,
		styledComponents: true,
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
