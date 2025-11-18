# 배포 가이드 - sunnythek-star

## 빠른 배포 (3단계)

### 1단계: Git 설치 (아직 안 했다면)
- https://git-scm.com/download/win 에서 다운로드 및 설치
- 설치 후 컴퓨터 재시작 또는 새 터미널 열기

### 2단계: Git 설정 (한 번만)
프로젝트 폴더에서 `setup-git.bat` 실행
또는 수동으로:
```bash
git config --global user.name "sunnythek-star"
git config --global user.email "sunnythek@gmail.com"
```

### 3단계: 배포
프로젝트 폴더에서 `deploy.bat` 실행

**푸시 시 입력:**
- Username: `sunnythek-star`
- Password: **Personal Access Token** (아래 참고)

## Personal Access Token 생성

1. https://github.com/settings/tokens 접속
2. "Generate new token" > "Generate new token (classic)"
3. Note: `Git Push Token` 입력
4. Expiration: 원하는 기간 선택
5. Scopes: **`repo`** 체크박스 선택
6. "Generate token" 클릭
7. 생성된 토큰 복사 (한 번만 표시!)

## GitHub Pages 설정

배포 완료 후:

1. https://github.com/sunnythek-star/newproject/settings/pages 접속
2. Source: **"GitHub Actions"** 선택
3. 저장
4. Actions 탭에서 배포 상태 확인
5. 배포 완료 후: https://sunnythek-star.github.io/newproject/

## 다음 배포

코드를 수정한 후:
```bash
git add .
git commit -m "업데이트 내용"
git push
```

GitHub Actions가 자동으로 배포합니다!

