# TodoDiary
> 할일 목록을 정해서 매일 매일 반복하는 스케쥴러.

## 목적
> 게을러 빠진 성격에 목적없이 노닥거릴려니 이러다 폐인 되겠다 싶어서 매일 할일 목록을 정해서 꾸준히 강제성 있게 하기로 했다.
> 그런데 단지 메모해놓고 하자니 체크리스트 방식으로 해당 사항을 수행했는지 체크하는 기능이 있었으면 좋겠다는 생각이 들었고,
> 어차피 컴퓨터 관련된 일이 더 많은데 생각해보니 이거 관련해서 todolist 나 하나 더 만들어볼까 생각이 들어서 만든다.
> 그리고 솔직히 일할때 짠 코드들은 다 공개 할 수 없고 토이라고 짜놓은 것들은 죄다 구데기 코드라서 좀 신경써서 만들어보자.
1. 일일할일 관리
2. 매일 갱신해서 체크 가능
3. 달성한 것 기록후 통계
4. 해당 데이터 다운로드

## DIR STRUCTURE
- build 
> webpack build utils
- build/addons
> webpack addons
- public
> static root
- src
> dev root

### SRC STRUCTURE
- index.tsx
> 웹팩 번들링 시작점. root
- app.tsx
> 어플리케이션 시작점. app entry <>  
> route나 기타 부분을 분리할 필요가 있으므로 따로 만든다.
- view
> 페이지 view 폴더. view dir  
> route로 나뉘어진 page들에 대한 view.
- components
> 공통 컴포넌트 폴더. global components dir  
> 각 페이지에 종속적이지 않은 제네릭한 컴포넌트들의 집합이다.
- controllers
> 각 페이지에 대한 controller 폴더. controllers dir  
> MVVM에서의 provider의 역할과 ViewController또는 MVP P의 역할을 담당한다.
- viewModels
> view Models dir  
> 비즈니스 로직을 담당하는 부분 데이터 처리에 관련 된 로직을 view models에서 담당한다.
- models
> models dir  
> 데이터 엑세스에 관련된 로직들이나 앱이 기본적으로 가지고 있어야 하는 데이터들을 담당한다.
- actions, reducers
> redux dir  
> action 타입과 그거에 대한 리듀서들을 담당한다. 리듀서는 오직 상태를 관리하는 역할만 담당한다.

## LICENSE
- MIT

## AUTHOR
- ISA (yoonjonglyu)