/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
	start_date: 2014,
	technologic_experience: [
		{
			'title':'HTML',
			'description':'Douglas Edgelbard Invented me!',
			'start_year':2014,
			'technologies':[
				{
					'title':'HTML5',
					'img':'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'
				}
			]
		},
		{
			'title':'CSS',
			'description':'I love CSS :`)',
			'start_year':2014,
			'technologies':[
				{
					'title':'CSS3',
					'img':'http://jaspreetchahal.org/images/css3.svg'
				}
			]
		},
		{
			'title':'PHP',
			'description':'PHP Hypertext Preprocessor',
			'start_year':2016,
			'technologies':[
				{
					'title':'PHP7',
					'img':'http://pngimg.com/uploads/php/php_PNG49.png'
				}
			]
		},
	],
	jobs: [
		{
			'employer': 'Verizon',
			'logo': 'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjU4LjIgMTQ2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NTguMiAxNDY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cG9seWdvbiBmaWxsPSIjRDUyQjFFIiBwb2ludHM9IjY0My43LDAgNjA3LjgsNzYuOCA1OTQuMyw0Ny43IDU3OS43LDQ3LjcgNjAxLjksOTUuMyA2MTMuNyw5NS4zIDY1OC4yLDAgCSIvPjxwYXRoIGQ9Ik00ODkuNywxNDIuNmgyOC45Vjg5LjdjMC0xMi4xLDctMjAuNiwxNy40LTIwLjZjMTAsMCwxNS4yLDcsMTUuMiwxNy4xdjU2LjRoMjguOVY4MC43YzAtMjEtMTIuNi0zNS44LTMzLTM1LjggYy0xMywwLTIyLjEsNS42LTI4LjksMTUuOGgtMC42di0xM2gtMjhMNDg5LjcsMTQyLjZMNDg5LjcsMTQyLjZ6IE00MzIuOSw0NS4xYy0zMC4yLDAtNTAuNCwyMS43LTUwLjQsNTAuMyBjMCwyOC40LDIwLjIsNTAuMyw1MC40LDUwLjNzNTAuNC0yMS45LDUwLjQtNTAuM0M0ODMuNCw2Ni44LDQ2My4xLDQ1LjEsNDMyLjksNDUuMXogTTQzMi43LDEyNC4zYy0xMy43LDAtMjEtMTEuNS0yMS0yOC45CWMwLTE3LjYsNy4yLTI4LjksMjEtMjguOWMxMy43LDAsMjEuMywxMS4zLDIxLjMsMjguOUM0NTQuMSwxMTIuOCw0NDYuNSwxMjQuMyw0MzIuNywxMjQuM3ogTTMwMC4xLDE0Mi42aDgxLjJ2LTIyLjhoLTQ2di0wLjYJbDQ0LTQ5LjNWNDcuNmgtNzkuMnYyMi45aDQ0LjV2MC42bC00NC41LDQ5LjdMMzAwLjEsMTQyLjZMMzAwLjEsMTQyLjZ6IE0yNjMsMTQyLjZoMjkuMVY0Ny43SDI2M1YxNDIuNnogTTE5NS41LDE0Mi42aDI5Vjk5CWMwLTE5LjgsMTEuOS0yOC42LDMwLTI2LjFoMC42di0yNWMtMS41LTAuNi0zLjItMC43LTUuOS0wLjdjLTExLjMsMC0xOC45LDUuMi0yNS40LDE2LjNoLTAuNlY0Ny43aC0yNy43VjE0Mi42eiBNMTQyLjMsMTI0LjQJYy0xMi44LDAtMjAuNi04LjMtMjIuMS0yMS4xaDY4LjRjMC4yLTIwLjQtNS4yLTM2LjctMTYuNS00Ni45Yy04LTcuNC0xOC41LTExLjUtMzEuOS0xMS41Yy0yOC42LDAtNDguNCwyMS43LTQ4LjQsNTAuMQljMCwyOC42LDE4LjksNTAuNCw1MC4zLDUwLjRjMTEuOSwwLDIxLjMtMy4yLDI5LjEtOC41YzguMy01LjcsMTQuMy0xNC4xLDE1LjktMjIuNGgtMjcuOEMxNTYuNiwxMjAuNywxNTAuOCwxMjQuNCwxNDIuMywxMjQuNHogTTE0MC44LDY1LjZjMTAuMiwwLDE3LjIsNy42LDE4LjQsMTguN2gtMzguOEMxMjIuNyw3My4xLDEyOC44LDY1LjYsMTQwLjgsNjUuNnogTTM0LDE0Mi42aDMwLjRsMzMtOTQuOUg2OC4zbC0xOC41LDYxaC0wLjQJbC0xOC41LTYxSDFMMzQsMTQyLjZ6IE0yNjMsMTMuOWgyOS4xdjI1LjhIMjYzVjEzLjl6Ii8+PC9nPjwvc3ZnPg',
			'position': 'Front-End Developer',
			'technologies': [
				{
					'name':'Javascript',
					'link':'https://en.wikipedia.org/wiki/JavaScript'
				}
			],
			'description':' Eu mi bibendum neque egestas congue quisque egestas diam. Est ante in nibh mauris. Viverra ipsum nunc aliquet bibendum enim. Faucibus ornare suspendisse sed nisi lacus. Eu mi bibendum neque egestas congue quisque egestas diam. Est ante in nibh mauris.',
			'start_date':'Sep 2018',
			'end_date': 'current...'
		},
		{
			'employer': 'Freelance',
			'logo': 'http://www.vem-web.com/img/vem-web-logoTurnSS.png',
			'position': 'Full-Stack Developer',
			'technologies': [
				{
					'name':'Javascript',
					'link':'https://en.wikipedia.org/wiki/JavaScript'
				}
			],
			'description':'Viverra ipsum nunc aliquet bibendum enim. Faucibus ornare suspendisse sed nisi lacus. Eu mi bibendum neque egestas congue quisque egestas diam. Est ante in nibh mauris.',
			'start_date':'Sep 2017',
			'end_date': 'Sep 2018'
		}
	],
	codeSamples:[
		{'url':'https://github.com/velimirT?tab=repositories', 'img':require('images/github.svg'), 'alt': 'Github'},
		{'url':'https://stackoverflow.com/users/2628903/velimir-tchatchevsky', 'img':require('images/stackoverflow.svg'), 'alt':'stackoverflow'},
	],
	certificates:[
		{'url':'https://www.refsnesdata.no/certification/w3certified.asp?id=5319927', 'img':require('images/columbia_engeneering_school.png'), 'alt': 'Columnbia Engeneering School Coding Bootcamp'},
	]
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default homePageReducer;
