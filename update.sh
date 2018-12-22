#!/bin/bash

npm outdated
npm update
npm test
git add *package*
git commit -m "feat: update dependencies"
git push origin master