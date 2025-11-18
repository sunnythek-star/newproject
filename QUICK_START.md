# 빠른 시작 가이드

## Git 설치 및 배포 (5분 완성)

### 1단계: Git 설치 (2분)

1. **Git 다운로드 페이지 열기**
   - 브라우저에서 https://git-scm.com/download/win 접속
   - 자동으로 다운로드 시작됨

2. **설치 실행**
   - 다운로드한 `Git-*.exe` 파일 실행
   - 모든 설정을 기본값으로 두고 "Next" 클릭
   - 설치 완료까지 대기

3. **설치 확인**
   - PowerShell 또는 명령 프롬프트 열기
   - 다음 명령 실행:
   ```bash
   git --version
   ```
   - 버전이 표시되면 성공!

### 2단계: Git 초기 설정 (30초)

PowerShell 또는 명령 프롬프트에서:

```bash
git config --global user.name "sunnythek-star"
git config --global user.email "your-email@example.com"
```

**실제 이메일 주소를 입력하세요!**

### 3단계: GitHub Personal Access Token 생성 (2분)

**중요:** `git push` 시 비밀번호 대신 토큰이 필요합니다!

1. **GitHub 접속**
   - https://github.com/settings/tokens 접속
   - 로그인 필요

2. **토큰 생성**
   - "Generate new token" > "Generate new token (classic)" 클릭
   - Note: `Git Push Token` 입력
   - Expiration: 원하는 기간 선택 (예: 90 days)
   - Scopes: **`repo`** 체크박스 선택
   - "Generate token" 클릭

3. **토큰 복사**
   - 생성된 토큰을 복사 (예: `ghp_xxxxxxxxxxxxxxxxxxxx`)
   - **한 번만 표시되므로 안전한 곳에 저장!**
   - 나중에 `git push` 시 비밀번호 대신 사용

### 4단계: 프로젝트 배포 (1분)

#### 방법 A: 배치 스크립트 사용 (쉬움)

1. 프로젝트 폴더에서 `deploy.bat` 파일 더블클릭
2. 안내에 따라 진행
3. GitHub 로그인 정보 입력:
   - Username: `sunnythek-star`
   - Password: **Personal Access Token** (위에서 생성한 토큰)

#### 방법 B: 수동 명령어 실행

프로젝트 폴더에서 PowerShell 또는 명령 프롬프트 열고:

```bash
# 1. Git 초기화
git init

# 2. 원격 리포지토리 연결
git remote add origin https://github.com/sunnythek-star/newproject.git

# 3. 모든 파일 추가
git add .

# 4. 커밋
git commit -m "Initial commit - Speed Card Challenge"

# 5. 브랜치 이름 설정
git branch -M main

# 6. 푸시 (여기서 로그인 정보 입력)
git push -u origin main
```

**푸시 시 입력:**
- Username: `sunnythek-star`
- Password: **Personal Access Token** (일반 비밀번호 아님!)

### 5단계: GitHub Pages 설정 (30초)

1. **Settings > Pages 접속**
   - https://github.com/sunnythek-star/newproject/settings/pages

2. **Source 설정**
   - Source: **"GitHub Actions"** 선택
   - 저장

3. **배포 확인**
   - Actions 탭: https://github.com/sunnythek-star/newproject/actions
   - 배포 완료까지 1-2분 대기
   - 초록색 체크 표시되면 성공!

4. **사이트 접속**
   - https://sunnythek-star.github.io/newproject/

## 문제 해결

### "git: command not found"
→ Git이 설치되지 않았거나 PATH에 없음
→ Git 재설치 또는 컴퓨터 재시작

### "fatal: could not read Username"
→ Personal Access Token 사용 확인
→ 토큰이 만료되지 않았는지 확인

### "Permission denied"
→ 리포지토리 소유자 확인
→ Personal Access Token에 `repo` 권한 확인

### "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/sunnythek-star/newproject.git
```

## 다음에 코드 수정 후 배포

```bash
git add .
git commit -m "업데이트 내용"
git push
```

GitHub Actions가 자동으로 배포합니다!

