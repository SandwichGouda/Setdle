for file in *; do
    if [[ "$file" == *.svg ]]; then
        sed -E 's/(fill:)[^;]+;/\1#cb4947;/g' "$file" > "_${file%.svg}r.svg"
        sed -E 's/(stroke:)[^;]+;/\1#cb4947;/g' "_${file%.svg}r.svg" > "${file%.svg}r.svg"
        rm "_${file%.svg}r.svg"
    fi
done