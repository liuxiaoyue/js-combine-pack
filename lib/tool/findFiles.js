/**
 * @author weixiao909
 * @email  weixiao909@gmail.com
 * @fileoverview 打包工程的配置文件
 */
var walk = require('./utils/dirWalker.js');
var fs = require("fs");

var filesFunc = {
	allFilesList : function(url){
		return walk(url).js;
	},
	allFilesCon : function(list,url){
		var jsMap = {};
		list.forEach(function(value){
			var v = value.replace(url,'').replace(/\\/g,'/');
			jsMap[v] = fs.readFileSync(value,'utf-8');
		});
		
		return jsMap;
	},
	confList : function(alllist){
		var confList = alllist.filter(function(value,key){
			return value.match(/\\conf\\/);
		});

		return confList;
	}
}

module.exports = filesFunc;
