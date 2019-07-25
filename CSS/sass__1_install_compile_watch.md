> SASS(Syntactically Awesome StyleSheets)는 CSS의 pre-processor로서 CSS의 한계와 단점을 보완하여 보다 가독성이 높고 코드의 재사용에 유리한 CSS를 생성하기 위한 CSS의 확장(extension)이다.
>
> CSS의 문법은 단순하고 명확하지만 프로젝트의 규모가 커질 수록 수정이 빈번하게 발생하여 코드의 유지 보수가 어려워지는 단점이 있다. SASS는 이러한 CSS의 한계를 보완하기 위해 등장하였다.



#### SASS에서 제공하는 기능

------

* Variable

* Condition, Loop

* Import

* Nesting

* Mixin

* Extend / Inheritance

> CSS와 비교하여 SASS의 코드의 장점은 CSS 코드를 구조화하여 표기함으로써 유지보수가 편리하다는 점이다.





#### SASS 설치하기 (node-sass)

------

> 브라우저는 SASS의 문법을 알지 못하므로 SASS(.scss) 파일을 CSS파일로 컴파일하여야 한다. 따라서 SASS의 설치가 필요하다.
>
> 이 중 node-sass는 npm으로 다음과 같이 설치 및 확인이 가능하다.

```bash
$ npm install node-sass
$ node-sass -v
node-sass 4.12.0  (Wrapper) [JavaScript]
libsass   3.5.4 (Sass Compiler) [C/C++]
```





#### SASS 파일을 CSS 파일로 컴파일하기

------

```bash
$ cd sass-project

## 특정 파일을 특정 파일 이름으로 컴파일
## Compile foo.scss to bar.css
$ node-sass foo.scss > bar.css

## 폴더 내의 모든 파일을 컴파일
## node-sass input-folder-path -o output-folder-path
$ node-sass src/sass --output dist/css
```

> 컴파일할 scss 파일의 경로와 컴파일 후 생성될 css 파일의 경로를 지정한다.



##### --output-style 옵션 지정하기

> css 파일로 컴파일하여 생성할 때 4가지 스타일 중 하나를 선택할 수 있다.

* nested : default 옵션, sass 형식과 유사하게 nested된 css파일 생성
* expanded : 표준적인 스타일의 css파일
* compact : 여러 룰셋을 한줄로 나타내는 css파일
* compressed : 가능한 빈공간이 없는 압축된 스타일의 css파일

> 위 옵션들을 지정할 때에는 다음과 같다.

```bash
## --output-style 뒤에 옵션을 지정.
$ node-sass --output-style nested src/sass --output dist/css
$ node-sass --output-style expanded src/sass --output dist/css
$ node-sass --output-style compact src/sass --output dist/css
$ node-sass --output-style compressed src/sass --output dist/css
```





#### watch

------

> watch 명령어는 scss 파일의 변경을 감지하여 변경될 때마다 scss 파일을 컴파일하여 css 파일을 자동적으로 업데이트 한다. 파일 단위, 디렉터리 단위의 모니터링이 가능하다.



##### 파일 단위

```bash
$ cd my-project

## watch src/sass/foo.scss > dist/css
$ node-sass --watch src/sass/foo.scss --output dist/css
```



##### 디렉터리 단위

```bash
$ cd my-project

## watch src/sass > dist/css
$ node-sass --watch src/sass --output dist/css
```





#### SASS 표기법과 SCSS 표기법

------

> Sass는 SASS 표기법과(.sass) SCSS 표기법이(.scss) 있다. 이전 버전에서는 SASS 표기법이 기본 표기법이었으나 3.0 버전부터 CSS 친화적인 SCSS(Sassy CSS) 표기법이 기본 표기법이 되었다.
>
> SASS 표기법이 상대적으로 보다 간략하지만, CSS 친화적인 SCSS 표기법을 더 많이 사용한다. CSS와 SASS, SCSS 표기법의 차이는 다음과 같다.

|             | scss     | sass   | css    |
| ----------- | -------- | ------ | ------ |
| {}          | 필요     | 불필요 | 필요   |
| ;           | 필요     | 불필요 | 필요   |
| : 뒤의 공백 | 불필요   | 필요   | 불필요 |
| Mixin       | @mixin   | =      | 없음   |
| Include     | @include | +      | 없음   |
| 확장자      | .scss    | .sass  | .css   |

