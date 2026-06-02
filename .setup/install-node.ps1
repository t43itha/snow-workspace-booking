$ErrorActionPreference = 'Stop'
$idx = Invoke-RestMethod -Uri 'https://nodejs.org/dist/index.json'
$lts = $idx | Where-Object { $_.lts } | Select-Object -First 1
$ver = $lts.version
Write-Host "Latest LTS: $ver ($($lts.lts))"
$zip = "node-$ver-win-x64.zip"
$url = "https://nodejs.org/dist/$ver/$zip"
$dest = "$env:USERPROFILE\nodejs"
$tmp = "$env:TEMP\$zip"
Write-Host "Downloading $url"
Invoke-WebRequest -Uri $url -OutFile $tmp
Write-Host "Extracting..."
if (Test-Path $dest) { Remove-Item $dest -Recurse -Force }
Expand-Archive -Path $tmp -DestinationPath $env:USERPROFILE -Force
Rename-Item "$env:USERPROFILE\node-$ver-win-x64" $dest
Write-Host "Installed to $dest"
