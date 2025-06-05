@echo off
setlocal enabledelayedexpansion

:: Set path to your assets folder
set "INPUT_FOLDER=C:\Users\Ayan Nadaf\Desktop\Projects\PloyMech Engineers\PolyMechEngineers\frontend\src\assets\landingPage"


cd /d "%INPUT_FOLDER%"

:: Convert .png files
for %%f in (*.png) do (
    set "filename=%%~nf"
    cwebp "%%f" -q 85 -o "!filename!.webp"
    del "%%f"
)

:: Convert .jpg files
for %%f in (*.jpg) do (
    set "filename=%%~nf"
    cwebp "%%f" -q 85 -o "!filename!.webp"
    del "%%f"
)

:: Convert .jpeg files
for %%f in (*.jpeg) do (
    set "filename=%%~nf"
    cwebp "%%f" -q 85 -o "!filename!.webp"
    del "%%f"
)

echo ✅ All images converted to WebP and original files deleted.
pause
