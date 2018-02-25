'use strict';
const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const postcss = require('postcss');
const debug = require('debug')('compiler');

let Compiler = function (options) {
	this.plugins = options.plugins;
	this._sourcePath = options.source;
	this._descPath = options.desc;
	this._suffix = options.suffix || '.pcss';
	this._sourceMap = options.sourceMap;
	let watcher = chokidar.watch(this._sourcePath);
	watcher.on('all', (event, fpath) => {
		debug(`event is ${event},file path is ${fpath}`);
		let desc = this._descPath +
			fpath.substring(this._sourcePath.length, fpath.length)
				.replace(this._suffix, '.css');
		debug(desc);
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
					if(err) debug(err)
					debug(a);
				});
				break;
			case
			'unlinkDir':
				fs.rmdir(desc, (err, a) => {
					if(err) debug(err)
					debug(a);
				});
				break;
		}
	});
	watcher.on('error', error => {
		debug(`Watcher error: ${error}`);
	});
	
};
Compiler.prototype.compile = function (source, desc) {
	let processOptions = {from: source, to: desc};
	if(this._sourceMap) processOptions.map = {inline:false};
	fs.readFile(source, (err, css) => {
		postcss(this.plugins)
			.process(css, processOptions)
			.then(result => {
				fs.writeFile(desc, result.css, () => {
					debug('success!');
				});
				if (result.map) fs.writeFile(desc + '.map', result.map, () => {});
			});
	});
};

module.exports = function (options) {
	return new Compiler(options);
};
