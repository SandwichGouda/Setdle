for shape in l o z; do
    for pattern in d e f; do
        for color in r g p; do
            inkscape "${shape}${pattern}${color}.svg" --actions="select:original;duplicate;transform-translate:700,0;duplicate;select:original;transform-translate:-700,0" --export-filename="../cards_final/${shape}${pattern}${color}3.svg"
            inkscape "${shape}${pattern}${color}.svg" --actions="select:original;transform-translate:350,0;duplicate;transform-translate:-700,0" --export-filename="../cards_final/${shape}${pattern}${color}2.svg"
            cp "${shape}${pattern}${color}.svg" "../cards_final/${shape}${pattern}${color}1.svg"
        done
    done
done