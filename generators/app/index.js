const Generators = require('yeoman-generator');

module.exports = class extends Generators {

	// note: arguments and options should be defined in the constructor.
	//  constructor(args, opts) {
	//   super(args, opts);

	//   // This makes `appname` a required argument.
	//   this.argument("appname", { type: String, required: true });

	//   // And you can then access it later; e.g.
	//   this.log('参数',this.options.appname);
	// }


	// async prompting() {
	// 	const answers = await this.prompt([
	// 		{
	// 			type: "input",  //使用输入方式与用户交互
	// 			name: "name",
	// 			message: "Your project name",
	// 			default: this.appname, //默认名称 （项目文件名）
	// 			store: true  //存储用户输入，下一次运行时默认值是它
	// 		},
	// 		{
	// 			type: "confirm", //需用户输入Y/N
	// 			name: "cool",
	// 			message: "cool不cool?"
	// 		}
	// 	]);
	// 	this.log("app name", answers.name);
	// 	this.log("cool不cool?", answers.cool);
	// 	// this.answers = answers;
	// }


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
			'.gitignore',
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