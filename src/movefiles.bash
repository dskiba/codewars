#!/bin/bash
for f in *.js; do
  [[ -f "$f" ]] || continue # skip if not regular file
  dir="${f%.*}"
  mv "$f" "$dir"
done

