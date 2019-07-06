#### Nesting

------

> SASS의  유용한 확장 기능으로 선언을 중첩하는 것이다. HTML의 구조를 반영하여 기술하므로 직관적이고 편리하다. 
>
> 예시를 보자. CSS파일과 Nesting을 사용하여 기술한 SASS의 코드이다.

```css
// CSS code

#navbar {
    width: 80%;
    height: 23px;
}

#navbar ul {
    list-style-type: none;
}

#navber li {
    float: left;
}

#navbar li a {
    font-weight: bold;
}
```

> CSS 코드는 후손 셀렉터를 기술할 때 번거로운 것을 확인할 수 있다.



```scss
// SASS code with nesting
#navbar {
    width: 80%;
    height: 23px;
    
    ul { list-style-type: none; }
    
    li {
        float: left;
        a { font-weight: bold; }
    }
}
```

> SASS 코드는 훨씬 간결하게 기술할 수 있으며, 코드가 직관적이어서 인식하기도 쉽고, 유지 보수하기에도 편리하다는 것을 알 수 있다.
>
> 그러나 다음 예시처럼 너무 깊은 Nesting은 가독성을 해치고 셀렉터를 복잡하게 만든다. 

```scss
div#main {
  #sidebar {
    #navbar {
      width: 80%;
      height: 23px;

      aside {
        div {
          ul {
            list-style-type: none;

            li {
              float: left;

              a {
                font-weight: bold;
              }
            }
          }
        }
      }
    }
  }
}
```



##### & 셀렉터의 사용

> 부모요소의 참조가 필요한 경우 &을 사용한다. 예를 들어 :hover 또는 ::before 등의 가상 클래스 선택자를 지정하는 경우 부모요소의 참조가 필요하다.

```scss
.myAnchor {
    color: blue;
    
    // .myAnchor:hover
    &:hover {
        text-decoration: underline;
    }
    
    // .myAnchor:visited
    &:visited {
        color: purple;
    }
}
```



##### 프로퍼티 Nesting

> 다음의 예시와 같이 프로퍼티에도 Nesting을 사용하는 것이 가능하다.

```scss
// SASS code with Nesting
.funky {
    font: {
        family: fantasy;
        size: 30em;
        weight: bold;
    }
}
```

> 위 코드의 컴파일 결과는 아래와 같다.

```css
// CSS code after compiled
.funky {
    font-family: fantasy;
    font-size: 30em;
    font-weight: bold;
}
```

