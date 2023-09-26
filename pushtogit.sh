#!/bin/bash
now=$(date)

git add .
git commit -m "push teams $now"
git push https://hadiios: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@github.com/TV4/fbk-teams-list.git --all 
