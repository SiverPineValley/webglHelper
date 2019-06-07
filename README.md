# webglHelper
컴퓨터 그래픽스 기말 프로젝트 - WebGL 공부 컨텐츠    


수업 시간때 배운 WebGL Pipeline의 요소들을 실습과 유사하게, 버튼을 클릭하면서 웹 페이지에서 Canvas Component 내의 WebGL 렌더링을 변경하여 어떤 차이가 있는지 쉽게 알아볼 수 있는 간단한 웹 페이지를 작성하려고 하였다.
그래서 실습 때의 Cube와 Sub Cube를 렌더링했던 코드를 가져와서 Primitive Assembly, Per-Fragment Operation, Shading, Transformation, Texture를 각 탭으로 나눠 각자 다른 기능을 시험해볼 수 있도록 구현하였다. 각 탭에서의 기능들은 강의 자료를 참고하였으며, 버튼이나 Select 등으로 선택하면, 바로 렌더링에 반영되도록 하였다. 수업시간에 자세히 보지 못했던 부분들도 추가적으로 구현하여 실제로 어떻게 렌더링에 반영되는지도 확인할 수 있도록 하였다.
또한 각 기능들이 작동될 때 어떤 기능이 반영되었는지 도 HTML의 특정 컴포넌트 값을 변경해가면서 사용자가 알기 쉽도록 하였다. 각 기능별로 Primitive Assembly에서는 각 Primitive로 변경했을 때 어떻게 렌더링 되는지를, Per-Fragment Operation에서는 Depth Test, Blending, Culling, Dithering 기능, Shading에서는 텍스처에 Color를 추가하거나 빼는 기능, Transform에서는 Translation, Rotation, Scaling, Inverse, Shear 등의 기능을 추가하였다. 마지막으로 Texture에서는 텍스처와 관련된 기능들을 추가하였다.


<img src="https://raw.githubusercontent.com/SiverPineValley/webglHelper/master/canvas.png">


# Install
    npm install
    webglHelper.html 실행


# Open Source
## 1. Bootswatch Minty Template
<img src="https://unpkg.com/bootswatch@3.3.0/assets/img/logo.png">


템플릿을 참고하였다.
https://bootswatch.com/minty/

## 2. gl-matrix
https://github.com/toji/gl-matrix/blob/master/dist/gl-matrix.js


Matrix Function을 위해 참고하였다.

# LICENSE
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Cc-by-nc-nd_icon.svg/1920px-Cc-by-nc-nd_icon.svg.png" width="10%">


(CC-NC-BY) 박종인 2019