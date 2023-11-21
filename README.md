# 승리요정 개발 일지

## Code Convention

1. 함수 컴포넌트는 일반 함수형을 사용한다.
2. 클래스형 컴포넌트는 사용할 수 있으나, 웬만하면 함수형을 사용한다.
2. 이벤트 함수 및 기타 함수는 화살표 함수를 사용한다.
3. Styled-Components의 스타일링은 함수 컴포넌트와 export 구문 사이에 작성한다.
4. 페이지 컴포넌트는 /app 안에 작성한다.
5. 페이지 이름으로 폴더를 작성하고 내부에 page.tsx를 만들어서 작업한다.
6. 컴포넌트 폴더는 /components에 작성한다.
7. 컴포넌트 이외의 커스텀 hook이나 api는 /lib에서 작성한다.
8. 상수는 const 구문을 사용한다.
9. 변수는 let 구문을 사용하며, var 구문은 사용하지 않는다.
10. 정규식을 선언할 때는 변수명 앞에 소문자 r을 사용한다. (ex. const rRegs)
11. 변수값이 바뀌면 안되는 변수명은 대문자로 쓴다.
12. interface와 type을 선언할 때 이름은 컴포넌트의 이름을 쓰되, 이름 뒤에 확실히 어떤 용도인지 명시한다.
13. interface와 type은 import 구문과 함수 컴포넌트 사이에 작성한다.

## Commit Convention
1. feat : 기능 구현
2. refactor : 리팩토링
3. fix : 버그 수정
4. docs : 문서 편집 (readme 등)
5. style : 코드 스타일 수정 (로직 변경은 없고 줄바꿈, 탭 등 형식만 수정할 경우)
6. test : 테스트 코드 작성, 수정
7. chore : 환경설정, 수정 (build.gradle에 의존성 추가, application.yml 수정 등)