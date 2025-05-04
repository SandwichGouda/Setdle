for shape in l o z; do
    for pattern in d e f; do
        sed 's/000000/cb4947/g' "${shape}${pattern}.svg" > "${shape}${pattern}r.svg"
        sed 's/000000/469d66/g' "${shape}${pattern}.svg" > "${shape}${pattern}g.svg"
        sed 's/000000/73397d/g' "${shape}${pattern}.svg" > "${shape}${pattern}p.svg"
    done
done