# Git 설치 및 배포 가이드

## 1단계: Git 설치

### Windows에서 Git 설치
1. **Git 다운로드**
   - https://git-scm.com/download/win 방문
   - 자동으로 다운로드 시작됨
   - 또는 "Download for Windows" 버튼 클릭

2. **설치 진행**
   - 다운로드한 설치 파일 실행
   - 기본 설정으로 설치 진행 (Next 클릭)
   - 설치 완료 후 Git Bash 또는 PowerShell에서 사용 가능

3. **설치 확인**
   ```bash
   git --version
   ```
   버전이 표시되면 설치 완료!

## 2단계: Git 초기 설정

### 사용자 정보 설정
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**예시:**
```bash
git config --global user.name "sunnythek-star"
git config --global user.email "your-email@example.com"
```

## 3단계: 리포지토리 초기화 및 푸시

### 프로젝트 폴더에서 실행

1. **Git 초기화**
   ```bash
   git init
   ```

2. **모든 파일 추가**
   ```bash
   git add .
   ```

3. **첫 커밋**
   ```bash
   git commit -m "Initial commit - Speed Card Challenge"
   ```

4. **브랜치 이름 변경 (필요시)**
   ```bash
   git branch -M main
   ```

5. **원격 리포지토리 연결**
   ```bash
   git remote add origin https://github.com/sunnythek-star/newproject.git
   ```

6. **코드 푸시**
   ```bash
   git push -u origin main
   ```

   **주의:** GitHub 로그인 정보 입력 필요
   - Username: GitHub 사용자명
   - Password: GitHub Personal Access Token (일반 비밀번호 아님)

## 4단계: GitHub Personal Access Token 생성

일반 비밀번호 대신 Personal Access Token이 필요합니다.

1. **GitHub 설정**
   - GitHub 로그인
   - 우측 상단 프로필 클릭 > Settings
   - 왼쪽 메뉴에서 "Developer settings" 클릭
   - "Personal access tokens" > "Tokens (classic)" 클릭
   - "Generate new token" > "Generate new token (classic)" 클릭

2. **토큰 설정**
   - Note: "Git Push Token" (설명)
   - Expiration: 원하는 기간 선택
   - Scopes: `repo` 체크박스 선택 (모든 권한)
   - "Generate token" 클릭

3. **토큰 복사**
   - 생성된 토큰을 안전한 곳에 복사 (한 번만 표시됨!)
   - `git push` 시 비밀번호 대신 이 토큰 사용

## 5단계: GitHub Pages 설정

코드 푸시 후:

1. **GitHub 리포지토리 접속**
   - https://github.com/sunnythek-star/newproject

2. **Settings > Pages**
   - Source: **"GitHub Actions"** 선택
   - 저장

3. **배포 확인**
   - Actions 탭에서 배포 상태 확인
   - 배포 완료 후: `https://sunnythek-star.github.io/newproject/`

## 트러블슈팅

### "fatal: not a git repository" 오류
```bash
git init
```
먼저 실행 필요

### "remote origin already exists" 오류
```bash
git remote remove origin
git remote add origin https://github.com/sunnythek-star/newproject.git
```

### 인증 실패
- Personal Access Token 사용 확인
- 토큰이 만료되지 않았는지 확인

### 푸시 권한 오류
- 리포지토리 소유자 확인
- Personal Access Token에 `repo` 권한 확인

