
## CSS

- CSS 에서 요소가 배치된느 방식을 변경시키는 메소드
    - display 속성 - block, inline 또는 inline-block 과 같은 기준 속성값은 보통 흐름속에서 요소가 동작하는 방식을 변경할 수 있다. 
    - position : 다른 상자 내부에 들어가 상자의 정확한 위치를 제어할 수 있게 해준다.


- display 속성
    - inline : 전후 줄바꿈 없이 한 줄에 다른 엘리먼트들과 나란히 배치된다.(span, a, em)
    - block : 전후 줄바꿈이 들어가 다른 엘리먼트들을 다른 줄로 밀어내고 혼자 한 줄을 차지(div,p, h1)
    - inline block : 하이브리드 형태( 기본적으로 Inline 엘리먼트처럼 전후 줄바꿈 없이 한 줄에 다른 엘리먼트처럼 전후 줄바꿈 없이 한 줄에 다른 엘리먼트들과 나란히 배치도지만, block엘리먼트처럼 width와 height속성 지정및 margin., padding 속성의 상하 간격 지정이 가능하다.) - button, input, select 등
    - flex: 가변 상자 레이아웃의 모듈의 약칭 , 모든 요소의 부모 요소에 display: flex를 적용하고 나면 모든 직계 자식이 플렉스 항목이 된다.


- position 
    - 속성에 의존하는 특정 레이아웃 패턴을 상대할 경우 유용한 기술
    -   유형
        - 정적 포지셔닝은 모든 요소에 기본값으로 부여된 속성이다. 
        - 상대 포지셔닝 페이지상의 요소 위치를 수정하여 그것을 보통 흐름상의 기준위치와 비례해 이동토록하는 것으로 페이지의 다른 요소와 겹치는 것도 해당한다.
        - 절대 포지셔닝은 요소를 페이지의 일반 레이아웃 대열에서 완전히 벗어난 곳으로 이동시켜 자체적인 개별 레이어 상에 놓는 것과 같다. 그곳으로부터 페이지의 요소의 가장 자리 기준에서 비례하는 위치에 고정할 수 있다.  (다른 요소위에 놓여야하는 동시에 표시 및 감추기를 맘대로 하는 탭 상자의 경우나 기본적으로 화면에서 벗어나지만 컨트롤 단추를 사용하여 화면상에 슬라이더 전환이 되도록 만들어진 정보 패널과 같은 복잡한 레이아웃 효과를 만드는데 유용하다. )
        - 고정 표지셔닝: 다른 요소가 아닌 브라우저 뷰포ㅡ 기준과 비례해 요소를 고정하는 것을 제외하고는 절대포지셔닝과 유사
        - 스티커 포지셔닝: 하나의 요소를 position : static와 같이 작동하다가 뷰포트 기준에서 사전에 정의된 간격 띄우기 지점에 도달한 순간 이후부터  position: fixed와 같이 작동하는 새로운 포지셔닝 메서드이다.