

# replace fill:*; by fill:red;

sed -E 's/(fill:)[^;]+;/\1red;/g' input.svg > output.svg 

# replace stroke color

sed -E 's/(stroke:)[^;]+;/\1red;/g' input.svg > output.svg 

# duplicate and translate up 

inkscape file.svg --actions="select:original;duplicate;transform-translate:0,50" --export-filename=output.svg

# remove pattern : use scr.py

# colors :

purple : #73397d
green : #469d66
red: #cb4947

# tri-duplicate

inkscape losange.svg --actions="select:original;duplicate;transform-translate:800,0;duplicate;select:original;transform-translate:-800,0" --export-filename=output.svg

# naming convention

- z,l,o : zibouibouiboui, losange, oval
- e,d,f : empty, dashed, filled
- r,g,p : red, green, purple
- 1,2,3 : one, two or three


