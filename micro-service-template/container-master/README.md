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

    - 유형별로 분류하여 레이아웃(래퍼, 탐색), 폼 구성요소, 버튼 등과 같은 글로벌 공유/재사용 가능 구성요소를 저장하는는 폴더

### `src\components\forms`

    - TextField, Select 와 같은 공통 컨포넌트를 저장하는 폴더
    - 각 공통 컨포넌트 폴더의 구성 파일
        1. 실제 React 구성 요소 파일(.ts)
        2. 구성요서에 대한 Styled componets 파일(.styles.ts)
        3. 테스트 파일(.test.ts)
        4. Storybook 파일(.stories.ts)

### `src\components\layout`

    - header, footer, navigation/NavBar, content 와 같은 layout 구성 컨포넌트를 저장하는 폴더
    - 각 layout 구성 컨포넌트 폴더의 구성 파일
        1. 실제 React 구성 요소 파일(.ts)
        2. 구성요서에 대한 Styled componets 파일(.styles.ts)
        3. 테스트 파일(.test.ts)
        4. Storybook 파일(.stories.ts)

### `src\components\routing`

    - PrivateRoute 와 같은 라우터 컨포넌트를 저장하는 폴더
    - 각 라우터 컨포넌트 폴더의 구성 파일
        1. 실제 React 구성 요소 파일(.ts)
        2. 테스트 파일(.test.ts)

#### `src\context`

    - context API로 프로젝트를 작업하는 경우 관련 API를 담아놓는 폴더

### `src\features`

    - views 폴더와는 다르게 기능별로 분류하여 공통 모듈을 저장하는 폴더
    - 각 layout 구성 컨포넌트 폴더의 구성 파일
        1. 실제 React 구성 요소 파일(.ts)
        2. 구성요서에 대한 Styled componets 파일(.styles.ts)
        3. 테스트 파일(.test.ts)
        4. Storybook 파일(.stories.ts)

### `src\hooks`

    - 커스텀 훅이 저장되는 폴더

### `src\pages`

    - 도메인 기준으로 분류하여 라우팅이 적용되는 페이지와 해당 도메인에만 사용되는 특정 폼, 모달, 버튼 등의 구성 요소가 저장되는 폴더
    - 각 뷰 폴더의 구성 파일
        1. 실제 React 구성 요소 파일(.ts)
        2. 구성요서에 대한 Styled componets 파일(.styles.ts)
        3. Storybook 파일(.stories.ts)

#### `src\services`

    - LocalStorage 제어하는 JavaScript 모듈 등이 저장되는 폴더
    - 각 JavaScript 모듈 폴더의 구성 파일
        1. 실제 JavaScript 모듈 파일(.service.ts)
        2. 테스트 파일(.test.ts)

#### `src\store`

    - 글로벌 데이터 저장소를 제어하는 모듈이 저장되는 폴더더
    - 각 JavaScript 모듈 폴더의 구성 파일
        1. 슬라이스 모듈 파일(.slice.js)
        2. 액션 모듈 파일(.actions.js)
        3. 테스트 파일(.test.ts)

### `src\styles`

    - css 파일들이 포함되는 폴더
    - 기능별로 하위 폴더를 추가로 구성하여 분류

### `src\utils`

    - 상수(constants), 주요 기능별 공통 함수(helpers) 와 같은 정규표현식 패턴이나 공통함수 등 공통으로 사용하는 유틸 파일들이 저장되는 폴더
    - 각 공통 유틸리티 폴더의 구성 파일
        1. 상수 파일(.sconstants.ts)
        2. 주요 기능별 공통 함수 파일(.helpers.ts)

## VSCode 확장 기능 설치

    - ESLint
    - Prettier - Code formatter

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
