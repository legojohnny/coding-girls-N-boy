# Ajax

Ajax란 Asynchronous JavaScript and XML의 약자입니다.
Ajax는 빠르게 동작하는 동적인 웹 페이지를 만들기 위한 개발 기법의 하나입니다.
(http://www.tcpschool.com/ajax/ajax_intro_basic)

데이터 주고 받는 형식 : JSON, XML, HTML, Plain-Text, YAML 등...

### JSON (Javascript Object Notation) 확장자명.json
```
{
  name: '승재',
  family: ['성경', '승재'],
  age: 1,
  height: 181,
  marriage: true,
  company: {
    name: '이젠아카데미',
    location: '성남 미금역 근처'
  },
  birthDate: new Date()
}
```

### XML(eXtensible Markup Language) 확장자명.xml
```
<?xml version="1.0" encoding="UTF-8" ?>
<root>
  <name>승재</name>
  <family>성경</family>
  <family>승재</family>
  <age>1</age>
  <height>181</height>
  <marriage>true</marriage>
  <company>
    <name>이젠아카데미</name>
    <location>성남 미금역 근처</location>
  </company>
  <birthDate>2022-02-11T17:25:07.667Z</birthDate>
</root>
```

### HTML (Hyperlink Text Markup Language) 확장자명.html
```
<h1>Header1</h1>
<div></div>
<h2>header2</h2>
<p>paragraph</p>
<a href=""></a>
```

### YAML (YAML Ain't Markup Language) 확장자명.yml
```
name: 승재
family:
    - 성경
    - 승재
age: 1
height: 181
marriage: true
company:
    name: 이젠아카데미
    location: '성남 미금역 근처'
birthDate: 2022-02-11T17:29:07.279Z
```

0,      1,  2, 3, 4,  5
            b         a
{a:'a'}     ref(0)    {c:'a'}

let a = {a:'a'}

let b = a

ajax는 기존 웹사이트들은 다음페이지 같은 기능을 수행할때 페이지 전체를 다시 받아오는 비효율적인 방법을 사용함.
이를 개선하기 위해서 원하는 데이터만 불러와 그 부분만 다시 렌더링을 해주는 기능을 만듬.

Not ajax : https://ma9.netmarble.net/news/notice/BbsListView.Asp
Ajax: https://cafe.naver.com/joonggonara

`index.html` 참조
