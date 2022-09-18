#!/bin/bash


read -p 'commit : ' commit 
read -p 'branch: ' branch


git add .

echo $uservar

git commit -m $commit

git push origin $branch

