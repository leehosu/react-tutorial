#  💿 Life Cycle API

---
- Life Cycle API는 컴포넌트가 브라우저에 나타날 때, 사라질 때, 그리고 업데이트가 될 때 호출되는 API이다.
---

## Component 초기 생성

#### constructor
```js
constructor(props){
    super(props);
}
```
- component 생성자 함수이며 component가 새로 만들어질때마다 이 함수가 호출된다.

#### componentWillMount
```js
componentWillMount(){

}
```
- 이 API는 Component가 DOM에 나가기 직전 호출된다.
- 원래는 주로 브라우저가 아닌 환경에서도 호출되는 용도로 사용되었는데 `React v16.3` 부터 해당 API가 deprecated 되었다.

#### componentDidMount
```js
componentDidMount(){
    //외부 라이브러리와 연동 : D3, masonry, 기타 등등
    //component 데이터 요청 : ajax, GraphQL, 등등
    //DOM에 관련된 설정 : 스크롤, 크기 읽어오기 등
}
```
- 이 API는 component가 화면에 나타났을때 호출된다.
- 주로 DOM을 사용해야하는 외부 라이브러리를 연동하거나, 해당 component에서 필요로하는 데이터를 요청할때 axios, fetch등을 통하여 ajax 요청할 수 있고, DOM의 속성을 읽거나 직접 변경하는 작업을 할 수 있다.

## Component Update
- props의 변화, state의 변화에 따라 update가 결정된다.

#### componentWillReceiveProps
```js
componentWillReciveProps(){
    //this.props는 바뀌지 않은 상태
}
```
- 이 API는 component가 새로운 props를 받게 됐을때 호출된다.
- 이 안에는 주로 state가 props에 따라 변해야 하는 로직을 작성한다.
- 새로 받게된 props는 nextProps로 조회할 수 있으며, 이때 this.props를 조회하면 update 이전의 props이니 주의해야한다.
- **이 API는 `React v16.3`부터 deprecate 되어서 `v16.3` 부터는 `UNSAFE_componentWillReceiveProps()`라는 이름으로 사용해야 한다.**
- 또, 상황에 따라 이 API는 getDerivedStateFromProps()로 대체 될 수 있다.

#### getDerivedStateFromProps()
- 이 함수는 `React v16.3` 이후 부터 만들어진 새로운 Life Cycle인데 props로 받아온 값을 state로 동기화하는 작업을 해야할 때에 사용된다.
```js
static getDerivedStateFromProps(){
    // 여기서는 state를 설정하는 것이 아닌
    // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 
    // return 하는 형태로 사용된다.
    if(nextProps.value !== preState.value){
        return { value : nextProps.value};
    }
    return null;
    //null 을 return 하면 update 할 것이 없다라는 의미
}
```

#### shouldComponentUpdate()
```js
shouldComponentUpdate(){
    return false;
    // false를 return하면 update 안함
    return this.props.checked  !== nextProps.checked;
    return true; 
}
```
- 이 API는 Component를 최적화 시키는데에 있어 매우 유용하다.
- React가 성능이 좋은 이유는 변화가 발생한 부분에만 update를 해줘서 인데, 변화가 발생한 부분을 알아내기 위해서는 Virtual DOM을 한번 그려줘야한다. 
- 즉, 현재 Component의 상태가 update 되지 않아도 부모 component가 rerendering되면, 자식 component들도 rendering된다.
- 하지만 이렇게 Virtual DOM에서 많은 Component들이 rerendering되면 CPU에서 많은 자원을 처리하기 때문에 줄여줘야한다.
- 그렇기에 **CPU 처리량을 줄이기 위해 Virtual DOM에서 Rerendering 되는 것과 불필요한 경우에 Update를 방지하기 위해 `shouldComponentUpdate()`를 써야한다.**

#### componentWillUpdate()
- 이 API는 `shouldComponentUpdate()`에서 반환 값이 ture일때 호출된다.
- 여기서는 주로 애니메이션 효과를 초기화하거나, event listener를 없애는 역할을 한다.
- 이 API 또한 `React v16.3` 부터 deprecate 되어 `getSnapshotBeforeUpdate()`로 대체된다.

#### getSnapshotBeforeUpdate()
- 이 API가 발생하는 시점은 아래와 같다.
    1. render()
    2. **getSnapshotBeforeUpdate()**
    3. 실제 DOM 변화 발생
    4. componentDidUpdate()

- 이 API를 통해서 DOM 변화가 일어나기 직전의 DOM 상태를 가져오고, 여기서 return하는 값은 `componentDidUpdate()`에서 3번째 피라미터로 받아 올 수 있다.

```js
 getSnapshotBeforeUpdate(prevProps, prevState) {
    // DOM 업데이트가 일어나기 직전의 시점이다.
    // 새 데이터가 상단에 추가되어도 스크롤바를 유지하는 코드.
    // scrollHeight 는 전 후를 비교해서 스크롤 위치를 설정하기 위함이고,
    // scrollTop 은, 이 기능이 크롬에 이미 구현이 되어있는데, 
    // 이미 구현이 되어있다면 처리하지 않는다..
    if (prevState.array !== this.state.array) {
      const {
        scrollTop, scrollHeight
      } = this.list;

      // 여기서 반환 하는 값은 componentDidMount 에서 snapshot 값으로 받아올 수 있다..
      return {
        scrollTop, scrollHeight
      };
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      const { scrollTop } = this.list;
      if (scrollTop !== snapshot.scrollTop) return; 
      // 기능이 이미 구현되어있다면 처리하지 않는다.
      const diff = this.list.scrollHeight - snapshot.scrollHeight;
      this.list.scrollTop += diff;
    }
  }
```
 #### componentDidUpdate()
 ```js
componentDidUpdate(prevProps, prevState, snapshot){

}
 ```
 - 이 API는 Component에서 render()를 호출하고 난 다음에 발생한다.
 - 이 시점에선 `this.props`와 `this.state`가 바뀌지 않는다.
 - 피라미터를 통해 이전의 값인 `prevProps`와 `prevState`를 조회할 수 있다.

 ## Component 제거
 - Component가 필요하지 않게 되면 하나의 API가 호출된다.

 #### componentWillUnmout()
 ```js
componentWillUnmount(){
    // evnet, setTimeout, 외부 라이브러리 인스턴스 제거등
}
 ```
 