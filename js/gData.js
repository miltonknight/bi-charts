var gData = [];

var data = [];
var data2 = [];
var dataCount = 7;
var startTime = +new Date();
var categories = ['categoryA', 'categoryB', 'categoryC'];
var mockData = [
	
    {step: '组合件', color: '#cbc344', startTime: '2018.6.1', endTime: '2018.8.12', type: 0},
    {step: '段件', color: '#3a5aff', startTime: '2018.8.13', endTime: '2018.10.12', type: 0},
    {step: '部装', color: '#8d2a35', startTime: '2018.10.13', endTime: '2019.2.1', type: 0},
    {step: '预总装', color: '#c59bff', startTime: '2019.2.2', endTime: '2019.6.15', type: 0},
    {step: '总装', color: '#379b3a', startTime: '2019.6.16', endTime: '2019.12.10', type: 0},
	{step: '喷漆', color: '#39c8c4', startTime: '2019.12.11', endTime: '2020.2.18', type: 0},
    {step: '试飞', color: '#c93c3c', startTime: '2020.2.19', endTime: '2020.4.28', type: 0},
	 
	// [
	// {step: '组合件', color: '#cbc344', startTime: '2018.6.10', endTime: '2018.8.22', type: 1},
	// {step: '段件', color: '#3a5aff', startTime: '2018.8.23', endTime: '2018.10.22', type: 1},
	// {step: '部装', color: '#8d2a35', startTime: '2018.10.23', endTime: '2019.2.10', type: 1},
	// {step: '预总装', color: '#c59bff', startTime: '2019.2.11', endTime: '2019.6.25', type: 1},
	// {step: '总装', color: '#379b3a', startTime: '2019.6.26', endTime: '2019.12.20', type: 1},
	// {step: '喷漆', color: '#39c8c4', startTime: '2019.12.21', endTime: '2020.2.26', type: 1},
	// {step: '试飞', color: '#c93c3c', startTime: '2020.2.27', endTime: '2020.5.10', type: 1},
	// ]
];
var mockData2 = [
	
	{step: '组合件', color: '#cbc344', startTime: '2018.7.10', endTime: '2018.9.22', type: 1},
	{step: '段件', color: '#3a5aff', startTime: '2018.9.23', endTime: '2018.11.22', type: 1},
	{step: '部装', color: '#8d2a35', startTime: '2018.11.23', endTime: '2019.3.10', type: 1},
	{step: '预总装', color: '#c59bff', startTime: '2019.3.11', endTime: '2019.7.25', type: 1},
	{step: '总装', color: '#379b3a', startTime: '2019.7.26', endTime: '2020.1.20', type: 1},
	{step: '喷漆', color: '#39c8c4', startTime: '2020.1.21', endTime: '2020.3.26', type: 1},
	{step: '试飞', color: '#c93c3c', startTime: '2020.3.27', endTime: '2020.6.10', type: 1},
];


// 预整合数据项
//组合件: #cbc344， 段件:#3a5aff，部装：#8d2a35，预总装：#c59bff，总装：#379b3a，喷漆：#39c8c4，试飞：#c93c3c
var pModels = ['KJ-J15:计划', 'KJ-J20', 'KJ-J35', /*'HJ-J15', 'HJ-J20', 'HJ-J35'*/];
var pModels2 = ['KJ-J15:实际', 'KJ-J20-1', 'KJ-J35-1', /*'HJ-J15', 'HJ-J20', 'HJ-J35'*/];
var steps = ["组合件", "段件", "部装", "预总装", "总装", "喷漆", "试飞"]
var color = ["#cbc344", "#3a5aff", "#8d2a35", "#c59bff", "#379b3a", "#39c8c4", "#c93c3c"];

var yLabelItems = [];
pModels,pModels2;

var testData = {
	name: "KJ-J15:计划",
	step: "段件",
	type: 0,
	itemStyle: {
		normal: {
			color: "#3a5aff"
		}
	},
	value: [
		"KJ-J15:计划", "1534089600000", "1539273600000", "5184000000"
	]
}

console.log("testData*****************************************", testData)