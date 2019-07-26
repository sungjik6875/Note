> 싱글 파일 컴포넌트 체계를 사용하기 위해서는 `.vue` 파일을 웹 브라우저가 인식할 수 있는 형태의 파일로 변환해주는 웹팩(Webpack)이나 브라우저리파이(Browserify)와 같은 도구가 필요하다. 웹팩은 웹 앱의 자원(html, css, 이미지)들을 자바스크립트 모듈로 변환하여 하나로 묶어 웹 성능을 향상시켜주는 모듈 번들러(module bundler)이다. 브라우저리파이도 웹팩과 유사한 성격의 모듈번들러이나, 웹팩과 다르게 웹 자원 압축이나 빌드 자동화 같은 기능은 제공하지 않는다.
>
> 뷰를 배우는 도중 웹팩이나 브라우저리파이 같은 도구를 익히는 것은 부담스럽다. 다행이도 뷰 개발자들이 편하게 프로젝트를 구성할 수 있도록 뷰 코어팀에서 제공하는 도구가 Vue-cli(Vue Command Line Interface)이다.  Vue-cli를 활용하여 우리는 커맨드 창에서 명령어를 통해 뷰 애플리케이션을 싱글 파일 컴포넌트 체계로 쉡게 개발할 수 있다.



##### Vue-cli 설치

> Vue-cli를 설치하기 위해서는 먼저 Node.js가 설치되어야 한다.  Node.js를 설치하였다면 다음의 명령어를 활용하여 설치가 가능하다.

```
npm install -g vue-cli
```

> 위 명령어를 통해 vue-cli가 시스템에 설치가 된다. 따라서 명령창에서 vue를 이제 명령어로 인식할 수 있다. 다음의 명령어들을 입력하면 사용가능한 명령어가 출력된다.

```
vue -help
```

```
Usage: vue <command> [options]

Options:
  -V, --version  output the version number
  -h, --help     output usage information

Commands:
  init           generate a new project from a template
  list           list available official templates
  build          prototype a new project
  create         (for v3 warning only)
  help [cmd]     display help for [cmd]
```

```
vue -init -help
```

```
Usage: vue-init <template-name> [project-name]

Options:
  -c, --clone  use git clone
  --offline    use cached template
  -h, --help   output usage information
  Examples:

    # create a new project with an official template
    $ vue init webpack my-project

    # create a new project straight from a github template
    $ vue init username/repo my-project
```



##### 프로젝트 시작하기

```
vue init webpack-simple 
```

> 위의 명령어는 vue init의 명령어 템플릿중 하나로 웹팩 최소 기능을 활용하여 프로젝트를 구성할 수 있도록 한다. 이 외에 webpack이나 browserify등의 옵션도 존재한다. 이 명령어들의 공통점은 다음과 같다.
>
> 웹팩이나 브라우저리파이 같은 모듈 번들러를 프로젝트 자체에 포함하여 바로 사용할 수 있다. 그리고 `.vue`파일을 html이나 css, js파일로 변환해주기 위한 뷰 로더를 포함한다.  이는 싱글 파일 컴포넌트 체계로 뷰 기반의 웹 앱을 개발하려면 뷰 로더와 이를 지원하는 모듈 번들러가 필요함을 의미한다.
>
> 몇 가지 옵션을 체크하고, 다음의 명령어를 입력하면 프로젝트에 필요한 파일 및 디렉토리가 생성되는 것을 확인할 수 있다.

```
npm install
```

> 생성된 파일과 디렉토리가 의미하는 것은 다음과 같다.

```
node_modules : npm install 명령어로 다운 받은 라이브러리가 존재하는 디렉토리
src : .vue파일을 비롯하여 웹 앱이 동작하는데 필요한 로직이 존재하는 디렉토리
index.html : 뷰로 만든 웹 앱의 페이지, npm run dev 실행시 로딩되는 파일
package.json : npm 설정 파일, 앱이 동작하는 데 필요한 라이브러리를 정의
webpack.config.js : 웹팩 설정 파일, 웹팩 빌드를 위해 필요한 로직들을 정의하는 파일
```

> 로컬서버에서 앱을 구동시키려면 다음의 명령어를 사용하면 된다.

```
npm run dev
```



##### package.json의 구조

```json
"name": "cli-template",
"description": "Vue-cli practice",
"version": "1.0.0",
"author": "Sungjik <sungjik6875@naver.com>",
"license": "MIT",
```

> 프로젝트 정보를 의미한다.



```json
"scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
  },
```

> npm 실행 명령어를 의미한다.



```json
"dependencies": {
"vue": "^2.5.11"
}, 

"devDependencies": {
"babel-core": "^6.26.0",
"babel-loader": "^7.1.2",
"babel-preset-env": "^1.6.0",
"babel-preset-stage-3": "^6.24.1",
"cross-env": "^5.0.5",
"css-loader": "^0.28.7",
"file-loader": "^1.1.4",
"vue-loader": "^13.0.5",
"vue-template-compiler": "^2.4.4",
"webpack": "^3.6.0",
"webpack-dev-server": "^2.9.1"
}
```

> 뷰, 웹팩 관련 라이브러리 목록이다. npm install 명령어 실행시 package.json의 라이브러리 목록이 전부 프로젝트의 node_modules 디렉토리 밑에 설치된다. 



##### 뷰 로더 (Vue Loader)

> 뷰 로더는 웹팩에서 지원하는 라이브러리로 .vue 파일의 내용을 브라우저에서 실행 가능한 웹 페이지의 형태로 변환해준다. .vue 파일의 `<template>`, `<script>`, `<style>`에  정의된 내용이 각각 html, js, css 코드로 인식될 수 있도록 뷰 로더가 변환 작업을 수행한다. 웹팩은 자바스크립트 모듈만 인식이 가능하므로, 웹팩이 인식할 수 있도록 뷰 로더가 .vue파일을 자바스크립트 모듈로 변환하는 것이다.