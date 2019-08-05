> 환경 변수를 설정하기 위해서는 먼저 루트 디렉토리 밑에 `.env`라는 파일을 생성해야 한다.
>
> env 파일에 다음과 같이 입력해보자.

```
# Temp

APP_TITLE = HELLO
```

> APP_TITLE이라는 환경 변수에 HELLO라는 값을 설정하였다. 이 환경 변수를 애플리케이션에서 접근하려면 다음과 같이 접근해야 한다.

```
console.log(process.env.APP_TITLE);
```



> 그러나 콘솔을 확인해보면 HELLO가 아니라 undefined가 출력되는 것을 확인할 수 있다. 위에서 정의한 환경 변수에 접근하지 못했다는 의미인데, 이는 webpack.DefinePlugin을 사용하여 환경변수에 접근할 수 있도록 설정해주어야 한다. 그러나 3.x 버전 부터는 이를 설정하지 않아도 다음과 같이 VUE_ prefix를 사용하여 접근할 수 있도록 설정할 수 있다.

```
# Temp

VUE_APP_TITLE = HELLO
```

```
console.log(process.env.VUE_APP_TITLE);
```

> 서버를 종료 후 다시 실행하면 HELLO가 출력되는 것을 확인할 수 있다.