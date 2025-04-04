# Web-Container Master

Mirco Frontend 방식으로 구성된 단위 어플리케이션을 통하여 서비스 하기 위한 웹 컨테이너 입니다.




## 폴더 구조

### `config`

    - webpack, typescript 등의 config 파일들이 저장되는 폴더

### `dist`

    - webpack 빌드 결과가 저장되는 폴더

### `public`

    - index.html과 같은 정적 파일들이 저장되는 폴더
    - 컴파일이 필요 없는 파일들이 위치하는 폴더

### `src\assets`

    - 이미지 혹은 폰트와 같은 파일들이 저장되는 폴더

### `src\components`

    - 재사용 가능한 컴포넌트들이 위치하는 폴더
    - 기능별로 하위 폴더를 추가로 구성하여 분류

### `src\constants`

    - 공통적으로 사용되는 상수들을 정의한 파일들이 위치하는 폴더

#### `src\context`

    - context API로 프로젝트를 작업하는 경우 관련 API를 담아놓는 폴더context API로 프로젝트를 작업하는 경우 관련 API를 담아놓는 폴더

### `src\hooks`

    - 커스텀 훅이 위치하는 폴더

### `src\pages`

    - 라우팅이 적용되는 페이지 컴포넌트들이 저장되는 폴더

#### `src\services`

    - 보통 api 관련 로직의 모듈 파일이 위치하며 auth와 같이 인증과 관련된 파일이 포함

### `src\styles`

    - css 파일들이 포함되는 폴더
    - 기능별로 하위 폴더를 추가로 구성하여 분류

### `src\utils`

    - 정규표현식 패턴이나 공통함수 등 공통으로 사용하는 유틸 파일들이 위치하는 폴더

#### `store`

    - 상태에 저장하고 관리할 정보가 많은 대형 프로젝트에서는 리덕스와 같은 전역상태 관리 라이브러리를 많이 사용하는데\
      store폴더에 관련 데이터들을 저장하고 모듈화해서 관리하는 폴더라 생각하면 된다. 일반적으로 하위에 Actions, Reducers,\
      Types의 세가지 주요 부분으로 구성되어 있다.




## 실행 전 확인

소스를 다운로드 후에 최초 실행 전에 아래 항목을 확인하세요.

### `node -v`

node.js 의 설치 여부를 확인하고, 필요하면 설치 하세요.\
node.js 설치 시에는 최신 버전을 설치하시면 됩니다.

### `npm -v`

npm 의 설치 여부를 확인하고, 필요하면 설치 하세요.\
npm 설치 시에는 최신 버전을 설치하시면 됩니다.

### `yarn -v`

yarn 의 설치 여부를 확인하고, 필요하면 설치 하세요.\
yarn 설치 시에는 최신 버전을 설치하시면 됩니다.

### `yarn install`

package.json 파일에 등록된 모든 종속성을 설치 합니다.\
yarn.lock 파일이 존재하고, package.json 파일에 등록된 모든 종속성을 충족한다면\
정확한 버전이 yarn.lock 파일에 기록되고, yarn.lock 파일은 변경되지 않습니다다.




## 실행 (개발)

### `단위 어플리케이션 모두두 실행`

통합할 단위 어플리케이션을 모두 webpack 개발 서버에서 실행합니다.\
실행될 때에는 webpack.config.common.js + webpack.config.dev.js 를 사용합니다.

### `yarn start`

웹 컨테이너 어플리케이션을 운영 환경과 유사한 webpack 개발 서버에서 실행 합합니다.\
실행될 때에는 webpack.config.common.js + webpack.config.dev.js 를 사용합니다.




## 실행 (운영)

### `단위 어플리케이션 모두 실행`

통합할 단위 어플리케이션을 모두 실행합니다.\
실행될 때에는 webpack.config.common.js + webpack.config.prod.js 를 사용합니다.

### `단위 어플리케이션 모두 실행`

통합할 단위 어플리케이션을 모두 실행합니다.\
실행될 때에는 webpack.config.common.js + webpack.config.prod.js 를 사용합니다.
