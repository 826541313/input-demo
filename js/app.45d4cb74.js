(function(e){function t(t){for(var a,l,i=t[0],c=t[1],f=t[2],d=0,m=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&m.push(o[l][0]),o[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,f||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},r=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3946:function(e,t,n){"use strict";n("7ab0")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{staticStyle:{"margin-left":"100px","margin-top":"100px"},attrs:{model:e.dataInfo}},[n("el-form-item",{attrs:{label:"复现说明，情况1："}},[n("p",[e._v("先进行搜索栏搜索，选择一个值，Name栏无法输入")])]),n("el-form-item",{attrs:{label:"复现说明，情况2："}},[n("p",[e._v("先输入name值，再进行搜索，选择一个值，Name栏无法输入")])]),n("el-form-item",{attrs:{label:"Name"}},[n("el-input",{staticStyle:{width:"25%"},model:{value:e.dataInfo.name,callback:function(t){e.$set(e.dataInfo,"name",t)},expression:"dataInfo.name"}})],1),n("el-form-item",{attrs:{label:"搜索"}},[n("el-autocomplete",{staticStyle:{width:"25%"},attrs:{"fetch-suggestions":e.getData},on:{select:e.handleSelect,input:e.handleClear},model:{value:e.dataInfo.toSearch,callback:function(t){e.$set(e.dataInfo,"toSearch",t)},expression:"dataInfo.toSearch"}})],1),n("el-form-item",{attrs:{label:"代码："}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.dataInfo.code,expression:"dataInfo.code"}],staticStyle:{width:"25%"},attrs:{readonly:"",rows:"56"},domProps:{value:e.dataInfo.code},on:{input:function(t){t.target.composing||e.$set(e.dataInfo,"code",t.target.value)}}})])],1)},r=[],l=n("1da1"),i=(n("96cf"),n("b0c0"),{data:function(){return{dataInfo:{code:'<template>\n  <el-form :model="dataInfo" style="margin-left: 100px; margin-top: 100px;">\n    <el-form-item label="复现说明，情况1：">\n      <p>先进行搜索栏搜索，选择一个值，Name栏无法输入</p>\n    </el-form-item>\n    <el-form-item label="复现说明，情况2：">\n      <p>先输入name值，再进行搜索，选择一个值，Name栏无法输入</p>\n    </el-form-item>\n    <el-form-item label="Name">\n      <el-input\n        style="width: 25%;"\n        v-model="dataInfo.name"\n      />\n    </el-form-item>\n    <el-form-item label="搜索">\n      <el-autocomplete\n        v-model="dataInfo.toSearch"\n        :fetch-suggestions="getData"\n        style="width: 25%;"\n        @select="handleSelect"\n        @input="handleClear"\n      />\n    </el-form-item>\n  </el-form>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      dataInfo: {},\n    };\n  },\n  methods: {\n    handleClear() {\n      delete this.dataInfo.name;\n    },\n    handleSelect(info) {\n      this.dataInfo.name = info.name;\n    },\n    async getData(str, cd) {\n      cd([\n        { value: \'1\', name: \'张三\' },\n        { value: \'2\', name: \'李四\' },\n        { value: \'3\', name: \'王五\' },\n      ]);\n    },\n  },\n};\n<'.concat("/","script>\n\n<style scoped>\np {\n  margin-top: 0px;\n}\n</style>\n        ")}}},methods:{handleClear:function(){delete this.dataInfo.name},handleSelect:function(e){this.dataInfo.name=e.name},getData:function(e,t){return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t([{value:"1",name:"张三"},{value:"2",name:"李四"},{value:"3",name:"王五"}]);case 1:case"end":return e.stop()}}),e)})))()}}}),c=i,f=(n("3946"),n("2877")),u=Object(f["a"])(c,o,r,!1,null,"b012afca",null),d=u.exports,m=n("5c96"),s=n.n(m);n("0fae");a["default"].config.productionTip=!1,a["default"].use(s.a),new a["default"]({render:function(e){return e(d)}}).$mount("#app")},"7ab0":function(e,t,n){}});
//# sourceMappingURL=app.45d4cb74.js.map