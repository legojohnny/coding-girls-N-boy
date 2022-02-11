# 타입이란?

## 자바스크립트에서의 타입 (https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)

1. number (short, int, long, float, double ...)
2. string (char, string)
3. boolean
4. function
5. object

자바스크립트에서의 모든 타입은 object를 상속받고 있다.

상속이 무엇이냐?

상속을 얘기하기 전에 클래스에 대한 이해가 필요한데, 클래스란 단순하게 "객체(Object)"의 설계도라고 이해하면 됩니다.

앞으로 클래스와 객체라는 단어를 많이 혼용해서 사용하게 되는데 그 이유는 클래스와 객체 모두 비슷한 의미로 쓰이고 있기 때문입니다. 그러나 위에 말한것처럼 클래스는 설계도(인간), 객체는 설계도를 통해 나온 하나의 개체(성경) 라고 이해하시면 됩니다. 그래서 "성경"을 보고 "인간"이라고 할 수 있듯이 클래스와 객체를 부를때 서로 혼용해서 사용되기도 합니다.

그럼 객체의 설계도가 되는 클래스를 정의부터 해봅시다.
```
class class_name{
  /* 멤버, 프로퍼티, 어트리뷰트, 필드 등... 어려 이름으로 불리고 있습니다.*/
  field_name...
  
  /* 여러분이 함수라고 알고 있는 function은 클래스 안에 있을때는 메서드라고 부릅니다. */
  function method_name(paremeters...) {

    ...method_proccessing
    
    return return_value
  }
  
  /* 생성자 */
  constructor(parameters...){
    /* this란 현재 클래스를 의미합니다. */
    this.field_name = parameter
  }
}
  ```
  
간단하게 성경(개체)을 만들기위한 설계도인 "인간" 클래스를 정의하겠습니다.

```
class Human{
  name = '';
  gender = '';
  age = 0;
  
  talk = function(){
    return "응애! Hello, world!"
  }

  constructor(name, gender, c){
    this.name = name;
    this.gender = gender;
    this.age = c;
  }
}
```
이제 위의 `Human` 클래스로 "성경"이라는 "1살"의 "여자"인 `Object(객체)`를 만들겠습니다.

```
let ella = new Human('성경', 'female', 1)

// 응애! Hello, world!
ella.talk();
```
