#!/bin/bash

git add .

echo commit ?

read commitName

git commit -m commitName

echo In which branch ?

read branchName

git push origin branchName
