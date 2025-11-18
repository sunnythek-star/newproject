@echo off
chcp 65001 >nul
echo ========================================
echo 원격 리포지토리와 동기화
echo ========================================
echo.

REM Git 설치 확인
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo [오류] Git이 설치되어 있지 않습니다.
    pause
    exit /b 1
)

echo [1/3] 원격 변경사항 가져오기...
git pull origin main --allow-unrelated-histories
echo.

if %errorlevel% neq 0 (
    echo 충돌이 발생했습니다. 수동으로 해결이 필요할 수 있습니다.
    echo.
    echo 해결 방법:
    echo 1. 충돌 파일 확인
    echo 2. 충돌 해결 후: git add .
    echo 3. git commit -m "Merge remote changes"
    echo 4. git push -u origin main
    echo.
    pause
    exit /b 1
)

echo [2/3] 변경사항 추가 및 커밋...
git add .
git commit -m "Merge and deploy to GitHub Pages"
echo.

echo [3/3] 푸시...
git push -u origin main
echo.

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
    echo - 충돌: 수동으로 해결 필요
    echo.
)

pause

