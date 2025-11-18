# GitHub 웹 인터페이스를 통한 배포 가이드

Git과 npm이 설치되어 있지 않은 경우, GitHub 웹 인터페이스를 통해 파일을 직접 업로드할 수 있습니다.

## 단계별 가이드

### 1단계: GitHub 리포지토리 접속
1. 브라우저에서 https://github.com/sunnythek-star/newproject 로 이동
2. GitHub에 로그인

### 2단계: 파일 업로드
1. 리포지토리 페이지에서 **"Add file"** 버튼 클릭
2. **"Upload files"** 선택

### 3단계: 프로젝트 파일 업로드
다음 파일들을 드래그 앤 드롭하거나 선택하여 업로드:

**필수 파일들:**
- `package.json`
- `vite.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `index.html`
- `.github/workflows/deploy.yml` (폴더 전체)
- `public/.nojekyll`
- `src/` 폴더 (전체)
- `Readme.md`
- `DEPLOY.md`

**주의사항:**
- `.gitignore` 파일이 있다면 함께 업로드
- `node_modules` 폴더는 업로드하지 않음 (GitHub Actions에서 자동 설치됨)

### 4단계: 커밋 및 푸시
1. 페이지 하단의 **"Commit changes"** 섹션에서
2. 커밋 메시지 입력: `Initial commit - Add project files`
3. **"Commit changes"** 버튼 클릭

### 5단계: GitHub Pages 설정
1. 리포지토리 페이지에서 **Settings** 탭 클릭
2. 왼쪽 메뉴에서 **Pages** 선택
3. **Source** 섹션에서:
   - **"GitHub Actions"** 선택
4. 저장하면 자동으로 배포가 시작됩니다

### 6단계: 배포 확인
1. 리포지토리 페이지에서 **Actions** 탭 클릭
2. 워크플로우 실행 상태 확인
3. 배포 완료 후 (약 1-2분 소요):
   - **Settings > Pages**에서 배포된 URL 확인
   - 또는 직접 접속: `https://sunnythek-star.github.io/newproject/`

## 폴더 구조 확인

업로드 전에 다음 폴더 구조가 올바른지 확인하세요:

```
프로젝트/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── .nojekyll
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── Readme.md
```

## 트러블슈팅

### Actions에서 빌드 실패
- `package.json`이 올바르게 업로드되었는지 확인
- `.github/workflows/deploy.yml` 파일이 올바른 위치에 있는지 확인

### 404 오류
- 배포가 완료될 때까지 기다리기 (1-2분)
- Settings > Pages에서 배포 상태 확인

### 파일이 보이지 않음
- 모든 파일이 올바른 위치에 업로드되었는지 확인
- 폴더 구조가 올바른지 확인

