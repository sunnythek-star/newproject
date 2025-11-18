# GitHub Pages 배포 가이드

이 프로젝트를 GitHub Pages로 배포하는 방법입니다.

## 방법 0: GitHub 웹 인터페이스 사용 (Git/npm 미설치 시)

Git이나 npm이 설치되어 있지 않은 경우, GitHub 웹 인터페이스를 통해 파일을 직접 업로드할 수 있습니다.

### 단계별 가이드

1. **GitHub 리포지토리 접속**
   - https://github.com/sunnythek-star/newproject 로 이동
   - GitHub에 로그인

2. **파일 업로드**
   - 리포지토리 페이지에서 **"Add file"** 버튼 클릭
   - **"Upload files"** 선택
   - 프로젝트의 모든 파일과 폴더를 드래그 앤 드롭
   - **주의**: `node_modules` 폴더는 업로드하지 않음

3. **커밋**
   - 커밋 메시지 입력: `Initial commit - Add project files`
   - **"Commit changes"** 버튼 클릭

4. **GitHub Pages 설정**
   - Settings > Pages로 이동
   - Source: **"GitHub Actions"** 선택
   - 저장하면 자동 배포 시작

5. **배포 확인**
   - Actions 탭에서 배포 상태 확인
   - 배포 완료 후: `https://sunnythek-star.github.io/newproject/`

자세한 내용은 `GITHUB_UPLOAD_GUIDE.md` 파일을 참고하세요.

## 방법 1: GitHub Actions 사용 (권장)

GitHub Actions를 사용하면 코드를 푸시할 때마다 자동으로 배포됩니다. **리포지토리 이름이 자동으로 감지되므로 별도 설정이 필요 없습니다!**

### 설정 단계

1. **GitHub 리포지토리 생성 및 코드 푸시**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **GitHub 리포지토리 설정**
   - 리포지토리 Settings > Pages
   - Source: "GitHub Actions" 선택
   - 저장하면 자동으로 배포가 시작됩니다

3. **자동 배포 확인**
   - Actions 탭에서 배포 상태 확인
   - Settings > Pages에서 배포된 URL 확인
   - 배포 완료 후: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### 주의사항
- 워크플로우 파일에서 브랜치 이름이 `main`으로 설정되어 있습니다
- 브랜치가 `master`인 경우 `.github/workflows/deploy.yml` 파일의 `branches: - main`을 `master`로 변경하세요

## 방법 2: gh-pages 패키지 사용 (수동 배포)

### 설치 및 배포

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **환경 변수 설정 (선택사항)**
   
   `.env.production` 파일을 생성하여 리포지토리 이름 설정:
   ```
   VITE_BASE=/YOUR_REPO_NAME/
   ```
   
   또는 `vite.config.js`에서 직접 수정 (GitHub Actions 사용 시 자동 처리됨)

3. **배포 실행**
   ```bash
   npm run deploy
   ```

   특정 리포지토리로 배포하려면:
   ```bash
   npm run deploy:setup
   ```
   (먼저 package.json의 deploy:setup 스크립트에서 리포지토리 주소 수정 필요)

4. **GitHub 리포지토리 설정**
   - Settings > Pages
   - Source: "Deploy from a branch" 선택
   - Branch: `gh-pages` 선택
   - 폴더: `/ (root)` 선택

### 주의사항

- **리포지토리 이름 확인**: `vite.config.js`의 `base` 경로가 실제 리포지토리 이름과 일치해야 합니다.
- **대소문자 구분**: 리포지토리 이름의 대소문자를 정확히 입력하세요.
- **첫 배포 후 대기**: 첫 배포는 몇 분이 걸릴 수 있습니다.

## 환경 변수 사용 (선택사항)

더 유연하게 하려면 환경 변수를 사용할 수 있습니다:

1. `.env.production` 파일 생성:
   ```
   VITE_BASE=/YOUR_REPO_NAME/
   ```

2. `vite.config.js` 수정:
   ```js
   base: import.meta.env.VITE_BASE || '/',
   ```

## 배포 후 확인

배포가 완료되면 다음 URL에서 확인할 수 있습니다:
- `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 트러블슈팅

### 404 오류 발생
- `vite.config.js`의 `base` 경로가 올바른지 확인
- GitHub Pages 설정에서 브랜치/폴더가 올바른지 확인

### 빌드 실패
- 로컬에서 `npm run build`가 성공하는지 확인
- GitHub Actions 로그에서 오류 메시지 확인

### 이미지/리소스가 로드되지 않음
- 모든 경로가 상대 경로인지 확인
- `base` 설정이 올바른지 확인

