# javascript-racingcar-precourse
### 기능 요구 사항
- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 “[ERROR]”로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.
### 구현해야 할 기능 목록
- 자동차 이름 입력받기
- 입력값 유효성 검사
- 자동차 이름 추출
- 자동차 이름 중복 검사
- 자동차 객체 생성(이름, 이동 횟수)
- 시도 횟수 입력받기
- 시도 횟수 유효성 검사
- 각 자동차 달리기 자격 검증
- 시도 횟수 만큼 각 자동차 달리기
- 우승자 추출
- 우승자 출력
### 예외 상황
- 사용자가 자동차 이름 입력에 영어, 쉼표를 제외한 다른 문자를 입력했을 경우
- 사용자가 자동차 이름을 6글자 이상의 영문자로 입력했을 경우
- 사용자가 자동차 이름 입력을 컴마로 끝낼 경우
- 사용자가 자동차 이름을 중복으로 입력한 경우
- 사용자가 시도할 횟수에 음수 혹은 0을 입력할 경우