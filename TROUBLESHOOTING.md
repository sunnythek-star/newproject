# GitHub Pages 404 오류 해결 가이드

## 문제: "There isn't a GitHub Pages site here" 오류

이 오류는 다음 중 하나의 원인일 수 있습니다:

### 1. 파일이 아직 업로드되지 않음
**확인 방법:**
- https://github.com/sunnythek-star/newproject 에서 파일 목록 확인
- `.github/workflows/deploy.yml` 파일이 있는지 확인

**해결:**
- 파일이 없다면 GitHub 웹 인터페이스로 업로드

### 2. GitHub Pages 설정이 안 됨
**확인 방법:**
- Settings > Pages로 이동
- Source가 "None" 또는 "Deploy from a branch"로 되어 있는지 확인

**해결:**
1. Settings > Pages로 이동
2. Source에서 **"GitHub Actions"** 선택
3. 저장

### 3. GitHub Actions 워크플로우가 실행되지 않음
**확인 방법:**
- Actions 탭에서 워크플로우 실행 여부 확인
- 워크플로우가 없다면 파일 업로드 필요

**해결:**
- 파일을 업로드하면 자동으로 워크플로우가 실행됩니다
- 또는 Actions 탭에서 "Deploy to GitHub Pages" 워크플로우를 수동 실행

### 4. 워크플로우 실행 실패
**확인 방법:**
- Actions 탭에서 실패한 워크플로우 클릭
- 오류 메시지 확인

**일반적인 오류:**
- `package.json` 누락
- `.github/workflows/deploy.yml` 파일 경로 오류
- 빌드 오류

## 빠른 해결 체크리스트

✅ **1단계: 파일 업로드 확인**
- [ ] https://github.com/sunnythek-star/newproject 에서 파일 확인
- [ ] `.github/workflows/deploy.yml` 파일 존재 확인
- [ ] `package.json` 파일 존재 확인

✅ **2단계: GitHub Pages 설정**
- [ ] Settings > Pages로 이동
- [ ] Source: **"GitHub Actions"** 선택
- [ ] 저장

✅ **3단계: Actions 확인**
- [ ] Actions 탭으로 이동
- [ ] "Deploy to GitHub Pages" 워크플로우 확인
- [ ] 워크플로우가 성공적으로 완료되었는지 확인 (초록색 체크)

✅ **4단계: 배포 대기**
- [ ] 배포 완료까지 1-2분 대기
- [ ] Settings > Pages에서 배포 URL 확인

## 배포 성공 확인

배포가 성공하면:
- Settings > Pages에서 "Your site is live at..." 메시지 확인
- Actions 탭에서 모든 단계가 초록색 체크 표시
- `https://sunnythek-star.github.io/newproject/` 접속 시 사이트 표시

## 여전히 문제가 있다면

1. **브라우저 캐시 삭제**: Ctrl + Shift + Delete
2. **시크릿 모드에서 접속**: Ctrl + Shift + N
3. **GitHub Actions 로그 확인**: Actions 탭에서 실패한 워크플로우의 로그 확인

