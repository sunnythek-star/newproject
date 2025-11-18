@echo off
chcp 65001 >nul
echo ========================================
echo Git 초기 설정
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
    echo 3. 설치 후 컴퓨터를 재시작하거나 새 터미널을 열어주세요
    echo 4. 이 스크립트를 다시 실행하세요
    echo.
    pause
    exit /b 1
)

echo [1/2] Git 버전 확인...
git --version
echo.

echo [2/2] Git 사용자 정보 설정...
git config --global user.name "sunnythek-star"
git config --global user.email "sunnythek@gmail.com"
echo.

echo 설정 완료!
echo.
echo 설정된 정보:
git config --global user.name
git config --global user.email
echo.

echo 다음 단계:
echo 1. GitHub Personal Access Token 생성
echo    - https://github.com/settings/tokens 접속
echo    - Generate new token (classic)
echo    - repo 권한 선택 후 생성
echo 2. deploy.bat 실행하여 배포
echo.
pause

