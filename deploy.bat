@echo off
chcp 65001 >nul
echo ========================================
echo GitHub Pages 배포 스크립트
echo ========================================
echo.

REM Git 설치 확인
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo [오류] Git이 설치되어 있지 않습니다.
    echo.
    echo Git 설치 방법:
    echo 1. https://git-scm.com/download/win 방문
    echo 2. 다운로드한 파일 실행하여 설치
    echo 3. 설치 후 이 스크립트를 다시 실행하세요
    echo.
    pause
    exit /b 1
)

echo [1/6] Git 버전 확인...
git --version
echo.

echo [1.5/6] Git 사용자 정보 설정...
git config --global user.name "sunnythek-star"
git config --global user.email "sunnythek@gmail.com"
echo 사용자 정보가 설정되었습니다.
echo.

echo [2/6] Git 초기화...
if not exist .git (
    git init
    echo Git 저장소가 초기화되었습니다.
) else (
    echo Git 저장소가 이미 초기화되어 있습니다.
)
echo.

echo [3/6] 원격 리포지토리 설정...
git remote remove origin 2>nul
git remote add origin https://github.com/sunnythek-star/newproject.git
echo 원격 리포지토리가 설정되었습니다.
echo.

echo [4/6] 파일 추가...
git add .
echo.

echo [5/6] 커밋...
git commit -m "Deploy to GitHub Pages" 2>nul
if %errorlevel% neq 0 (
    echo 변경사항이 없거나 이미 커밋되어 있습니다.
) else (
    echo 커밋이 완료되었습니다.
)
echo.

echo [6/6] GitHub에 푸시...
echo.
echo 주의: GitHub 로그인 정보가 필요합니다.
echo - Username: sunnythek-star 입력
echo - Password: Personal Access Token 입력 (일반 비밀번호 아님)
echo.
echo Personal Access Token 생성 방법:
echo 1. GitHub 로그인 > Settings > Developer settings
echo 2. Personal access tokens > Tokens (classic)
echo 3. Generate new token (classic)
echo 4. repo 권한 선택 후 생성
echo.
pause

git branch -M main
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo 푸시 완료!
    echo ========================================
    echo.
    echo 다음 단계:
    echo 1. https://github.com/sunnythek-star/newproject/settings/pages 접속
    echo 2. Source: "GitHub Actions" 선택
    echo 3. 저장
    echo 4. Actions 탭에서 배포 상태 확인
    echo 5. 배포 완료 후: https://sunnythek-star.github.io/newproject/
    echo.
) else (
    echo.
    echo ========================================
    echo 푸시 실패
    echo ========================================
    echo.
    echo 가능한 원인:
    echo - 인증 실패: Personal Access Token 확인
    echo - 권한 없음: 리포지토리 소유자 확인
    echo - 네트워크 오류: 인터넷 연결 확인
    echo.
)

pause

