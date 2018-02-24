'use strict';
const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const postcss = require('postcss');

let Compiler = function (options) {
	this.plugins = options.plugins;
	this._sourcePath = options.source;
	this._descPath = options.desc;
	this._suffix = options.suffix || '.pcss';
	let watcher = chokidar.watch(this._sourcePath);
	watcher.on('all', (event, fpath) => {
		console.log(event, fpath);
		let desc = this._descPath +
			fpath.substring(this._sourcePath.length, fpath.length)
				.replace(this._suffix, '.css');
		console.log(desc);
		let a = desc.split(path.sep);
		a.pop();
		fse.ensureDirSync(a.join(path.sep));
		switch (event) {
			case 'add':
				this.compile(fpath, desc);
				break;
			case 'addDir':
				break;
			case 'change':
				this.compile(fpath, desc);
				break;
			case 'unlink':
				fs.unlink(desc, (err, a) => {
					console.log(err, a);
				});
				break;
			case
			'unlinkDir':
				fs.rmdir(desc, (err, a) => {
					console.log(err, a);
				});
				break;
		}
	});
	watcher.on('error', error => {
		console.log(`Watcher error: ${error}`);
	});
	
};
Compiler.prototype.compile = function (source, desc) {
	fs.readFile(source, (err, css) => {
		postcss(this.plugins)
			.process(css, {from: source, to: desc})
			.then(result => {
				fs.writeFile(desc, result.css, () => {
					console.log('success!');
				});
				if (result.map) fs.writeFile(desc + '.map', result.map, () => {});
			});
	});
};

module.exports = function (options) {
	return new Compiler(options);
};