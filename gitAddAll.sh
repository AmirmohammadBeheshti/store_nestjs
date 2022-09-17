#!/bin/bash


read -p 'commit : ' uservar
read -p 'branch: ' passvar


git add .

echo $uservar

git commit -m $uservar

git push origin $branch

