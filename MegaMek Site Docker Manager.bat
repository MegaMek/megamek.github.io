@echo off
:menu
cls
echo ================================
echo   MegaMek Site Docker Manager
echo ================================
echo.
echo Current directory: %CD%
echo.
echo === Development Workflow ===
echo 1. Start site for development
echo 2. Update and restart (for new posts/changes)
echo 3. View site in browser
echo.
echo === Background Operations ===
echo 4. Start site in background
echo 5. Stop background site
echo.
echo === Maintenance ===
echo 6. Rebuild from scratch
echo 7. Exit
echo.
set /p choice="Enter your choice (1-7): "

cd /d "%~dp0"

if "%choice%"=="1" goto start
if "%choice%"=="2" goto update
if "%choice%"=="3" goto browser
if "%choice%"=="4" goto start_bg
if "%choice%"=="5" goto stop
if "%choice%"=="6" goto rebuild
if "%choice%"=="7" goto exit
echo.
echo Invalid choice! Please select 1-7.
pause
goto menu

:start
echo ================================
echo Starting site for development...
echo ================================
echo.
echo This will run in the foreground so you can see logs.
echo Press Ctrl+C to stop when done.
echo.
pause
docker-compose up
echo.
echo Site stopped. Press any key to return to menu...
pause
goto menu

:update
echo ================================
echo Updating site with latest changes...
echo ================================
echo.
echo This will rebuild the site with your latest posts and changes.
echo.
echo Step 1: Stopping any running containers...
docker-compose down
if %ERRORLEVEL% neq 0 (
    echo Warning: No containers were running or error stopping containers.
    echo Continuing anyway...
)
echo.
echo Step 2: Building and starting site with latest changes...
docker-compose up --build -d
if %ERRORLEVEL% neq 0 (
    echo.
    echo ==========================================
    echo Docker startup failed! 
    echo Check the error messages above.
    echo ==========================================
    pause
    goto menu
)
echo.
echo ================================
echo Site updated successfully!
echo Available at: http://localhost:4000
echo ================================
echo.
echo Opening browser...
start http://localhost:4000
echo.
echo Press any key to return to menu...
pause
goto menu

:browser
echo Opening site in browser...
echo Site should be available at: http://localhost:4000
start http://localhost:4000
echo.
echo If the site doesn't load, make sure it's running first (option 1, 2, or 4).
echo Press any key to return to menu...
pause
goto menu

:start_bg
echo ================================
echo Starting site in background...
echo ================================
docker-compose up -d
if %ERRORLEVEL% neq 0 (
    echo.
    echo ==========================================
    echo Docker startup failed! 
    echo Check the error messages above.
    echo ==========================================
    pause
    goto menu
)
echo.
echo ================================
echo Site started in background!
echo Available at: http://localhost:4000
echo ================================
echo.
echo Use option 5 to stop the background site.
pause
goto menu

:stop
echo ================================
echo Stopping background site...
echo ================================
docker-compose down
if %ERRORLEVEL% neq 0 (
    echo Warning: No containers were running or error occurred.
) else (
    echo Site stopped successfully.
)
echo.
echo Press any key to return to menu...
pause
goto menu

:rebuild
echo ================================
echo Rebuilding from scratch...
echo ================================
echo.
echo This will completely rebuild the Docker image.
echo Use this if you've made major changes or something isn't working.
echo.
echo Step 1: Stopping containers...
docker-compose down
echo.
echo Step 2: Removing old images (this may take a moment)...
docker-compose down --rmi all --volumes --remove-orphans
echo.
echo Step 3: Building fresh image and starting...
docker-compose up --build
echo.
echo Rebuild complete. Press any key to return to menu...
pause
goto menu

:exit
echo.
echo Stopping any running containers before exit...
docker-compose down > nul 2>&1
echo.
echo ================================
echo Thanks for using MegaMek Site Docker Manager!
echo ================================
echo.
echo Your changes are saved. Run this script again anytime
echo to continue working on your site.
echo.
pause
exit /b 0