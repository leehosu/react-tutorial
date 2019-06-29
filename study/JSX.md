# 🗽 JSX

> JSX의 동작원리는? JSX와 HTML간의 관계는? 등 JSX에 대해 공부해본다.

## JSX 특징
#### 표현식의 특징
- JSX는 자바스크립트처럼 취급된다.
```js
class Stuff extends React.Component{
    render(){
        return(
            <h1> hosu {Math.random()*100} content! </h1>
        )
    }
}
```
- 동적으로 표현하고 싶은 곳을 중괄호`{}`로 감싸주면 리턴 되는 값을 동적으로 생성할 수 있다.

#### 다수의 element return
1. array
```js
class Stuff extends React.Component{
    render(){
        return(
            [
                <p> I'm </p>,
                <p> Lee </p>,
                <p> hosu </p>
            ]
        )
    }
}
```
- 단일 부모 element 없이 p 태그를 3개 return 하고 있다.

2. key 속성과 고유의 값 지정
```js
class Stuff extends React.Component{
    render(){
        return(
              [
                <p key ="1"> I'm </p>,
                <p key = "2"> Lee </p>,
                <p key = "3"> hosu </p>
            ]
        )
    }
}
```
- 만약 key 속성을 사용하지 않은 상태에서 console에 "Warnig"이 발생한다면 사용하는게 낫다.

3. Fragments 패턴
```js
class Stuff extends React.Component{
    render(){
        return(
            <React.Fragment>
                <p key ="1"> I'm </p>,
                <p key = "2"> Lee </p>,
                <p key = "3"> hosu </p>
            </React.Fragment>
        )
    }
}
```
- React.Fragment라는 마법의 컴포넌트 안에 넣기만하면 복수의 element를 return하는 것이 가능하다.
~~~
1. React.Fragment Component는 실제로 DOM element로 생성되지 않는다. 단지 HTML로 트랜스파일될때 존재하지 않는 것으로 취급하라고 JSX에 알려줄 뿐 이다.
2. 아이템들이 배열에 담겨 리턴되는게 아니므로 쉼표나 다른 구분자가 필요없다.
3. Key 속성과 고유값을 지정할 필요가 없다.
~~~

4. <> </>
```js
class Stuff extends React.Component{
    render(){
        return(
            <>
                <p key ="1"> I'm </p>,
                <p key = "2"> Lee </p>,
                <p key = "3"> hosu </p>
            </>
        )
    }
}
```

#### CSS
- JSX에서는 Style 속성안에 직접 css를 포함 할 수 없으며, 객체에 정보를 담아 참조해야한다.
- style 객체에 정보를 담을때에는 카멜 표기법을 사용한다.

#### 주석
- `{/* 주석라인 */}
- ` //` 

#### 대소문자 구별
- HTML element를 나타낼 때는 소문자를 써야한다.
- Component를 나타낼때는 그 이름에 대문자가 사용돼야 한다.

#### 어디서든 사용 가능한 JSX
- JSX 코드는 render나 return 함수 안에만 있는게 아니다.
```js
var swatchComponent = <Swatch color = "#2F004F"></Swatch>;

ReactDOM.render(
    <div>
        {swatchComponent}
    </div>,
    document.querySelector("#container")
);
```
- swatchComponent라는 변수가 있다. 
- 이 컴포넌트는 render 함수 안에서 swatchComponent 변수가 사용될때 초기화된다. 
