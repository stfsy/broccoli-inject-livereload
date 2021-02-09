#!/bin/bash

MAIN_BRANCH='master'
DEV_BRANCH='dev'

git checkout $MAIN_BRANCH
npm install
npm outdated || true

npm update
has_updates=$(git diff --name-only | grep package -c)

if [[ $has_updates -gt "0" ]]; then
    npm test
    git add package*
    git commit -m "feat: update outdated dependencies"
fi

npm audit fix
has_audit_fixes=$(git diff --name-only | grep package -c)

if [[ $has_audit_fixes -gt "0" ]]; then
    npm test
    git add package*
    git commit -m "feat: update vulnerable dependencies"
fi

if [[ $has_updates -gt "0" ]] || [[ $has_audit_fixes -gt "0" ]]; then
    npm run release-minor
    git checkout $DEV_BRANCH || true
    git rebase $MAIN_BRANCH
fi