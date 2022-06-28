const Generators = require('yeoman-generator');
module.exports = class extends Generators {
	//输出templates中的文件
	prompting() {
		return this.prompt([
			{
				type: "input",
				name: "name",
				message: "your name",
				default: this.appname
			}
		]).then(answers => {
			this.log('answers ', answers);
		})
	}

	writing() {
		const templates = [
			'.browserslistrc',
			'.editorconfig',
			'.env.development',
			'.env.production',
			'.eslintrc.js',
			'babel.config.js',
			'package.json',
			'postcss.config.js',
			'README.md',
			'public/favicon.ico',
			'public/index.html',
			'src/assets/logo.png',
			'src/components/HelloWorld.vue',
			'src/store/actions.js',
			'src/store/getters.js',
			'src/store/index.js',
			'src/store/mutations.js',
			'src/store/state.js',
			'src/utils/request.js',
			'src/views/About.vue',
			'src/views/Home.vue',
			'src/App.vue',
			'src/main.js',
			'src/router.js',
		]

		templates.forEach(item=>{
			this.fs.copyTpl(
				this.templatePath(item),
				this.destinationPath(item)
			)
		})
	}
};