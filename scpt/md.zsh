#!/bin/zsh

d=${0:a:h:h}
c=$d/content/blog

for i in $(seq -w 1 20)
do
	d=2024-01-$i
	f=$c/$d-test.md
	echo "
+++
date = \"${d}T00:00:00+09:00\"
title = \"${RANDOM}\"
+++
" >! $f
done
