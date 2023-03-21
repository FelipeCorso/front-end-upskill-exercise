const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); // only add this if you don't have yet
const { ModuleFederationPlugin } = webpack.container;
const deps = require("./package.json").dependencies;

const buildDate = new Date().toLocaleString();

module.exports = (env, argv) => {
	const isProduction = argv.mode === "production";
	console.log({ isProduction });
	return {
		entry: "./src/index.js",
		mode: process.env.NODE_ENV || "development",
		devServer: {
			port: 3000,
			open: true,
		},
		resolve: {
			extensions: [".js", ".jsx"],
		},
		module: {
			// the order of loaders are important
			rules: [
				{
					test: /\.(js|jsx)$/,
					loader: "babel-loader",
					exclude: /node_modules/,
					options: {
						presets: [
							["@babel/preset-env", { targets: "defaults" }],
							["@babel/preset-react"],
						],
					},
				},
				{
					test: /\.(css)$/,
					loader: "css-loader",
					// exclude: /node_modules/,
				},
			],
		},

		plugins: [
			new webpack.EnvironmentPlugin({ BUILD_DATE: buildDate }),
			new webpack.DefinePlugin({
				"process.env": JSON.stringify(process.env),
			}),
			new ModuleFederationPlugin({
				name: "container",
				remotes: {
					/* app1: "app1@http://localhost:3001/remoteEntry.js",
					app2: "app2@http://localhost:3002/remoteEntry.js", */
				},
				/* shared: {
					...deps,
					react: { singleton: true, eager: true, requiredVersion: deps.react },
					"react-dom": {
						singleton: true,
						eager: true,
						requiredVersion: deps["react-dom"],
					},
				}, */
			}),
			new HtmlWebpackPlugin({
				template: "./public/index.html",
			}),
		],
	};
};
