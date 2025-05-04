for shape in l o z; do
    for pattern in d e f; do
        for color in r g p; do
            inkscape "${shape}${pattern}${color}.svg" --actions="select:original;duplicate;transform-translate:800,0;duplicate;select:original;transform-translate:-800,0" --export-filename="../${shape}${pattern}${color}3.svg"
            inkscape "${shape}${pattern}${color}.svg" --actions="select:original;transform-translate:400,0;duplicate;transform-translate:-800,0" --export-filename="../${shape}${pattern}${color}2.svg"
            cp "${shape}${pattern}${color}.svg" "../${shape}${pattern}${color}1.svg"
        done
    done
done