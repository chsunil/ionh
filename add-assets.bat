@echo off

setlocal enabledelayedexpansion

set "SOURCEFOLDER=src\myFiles"

set "ASSETSFOLDERS="

for /r "%SOURCEFOLDER%" %%i in (*.html *.js *.css) do (
  set "ASSETSFOLDER=%%~dpi"
  set "ASSETSFOLDER=!ASSETSFOLDER:~0,-1!"
  set "ASSETSFOLDER=!ASSETSFOLDER:C:\Users\Administrator\ultimateKit\=!"

  rem Check if the folder contains any *.html, *.css, or *.js files
  set "FILESFOUND="
  for %%f in ("!ASSETSFOLDER!\*.html" "!ASSETSFOLDER!\*.css" "!ASSETSFOLDER!\*.js") do (
    if exist "%%~f" (
      set "FILESFOUND=1"
      goto :FoundFiles
    )
  )
  
  :FoundFiles
  if defined FILESFOUND (
    if not "!ASSETSFOLDERS!"=="!ASSETSFOLDER!" (
    set "ASSETSFOLDERS=!ASSETSFOLDERS!",!ASSETSFOLDER!\
    )
  )
)

for /r "%SOURCEFOLDER%" /d %%d in (*) do (
  set "ASSETSFOLDER=%%~fd"
  set "ASSETSFOLDER=!ASSETSFOLDER:C:\Users\Administrator\ultimateKit\=!"
  if not "!ASSETSFOLDERS!"=="!ASSETSFOLDER!" (
    set "ASSETSFOLDERS=!ASSETSFOLDERS!,!ASSETSFOLDER:\=\!"
  )
)


set "ASSETSFOLDERS=%ASSETSFOLDERS:~1%"
set "ASSETSFOLDERS=%ASSETSFOLDERS:\=/%"

echo %ASSETSFOLDERS%

for %%a in ("%ASSETSFOLDERS:,=" "%") do (
    set "item=%%~a"
    echo !item!
    call npx -q json -I -f angular.json -e "this.projects['app'].architect.build.options.assets.push('!item!')"
)