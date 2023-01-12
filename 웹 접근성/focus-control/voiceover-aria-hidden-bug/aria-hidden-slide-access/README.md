# aria-hidden-slide-access

검수 중 ios voiceover 스크린리더에서 슬라이드 영역 탐색 중 previous 버튼을 통해 slide 1 영역으로 돌아왔음에도 aria-hidden="true" 속성이 적용된 slide2 영역에 스크린리더 포커스가 접근되는 이슈가 발생함. 유사한 환경을 재현하여 테스트 했더니 동일하게 발생하여 voiceover 버그인 것으로 판단하고 이슈로 체크하지 않음. 
