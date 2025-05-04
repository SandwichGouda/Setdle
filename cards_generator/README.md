### Naming convention

- `z`,`l`,`o` : Zibouiboui, losange, oval
- `e`,`d`,`f` : Empty, dashed, filled
- `r`,`g`,`p` : Red, green, purple
- `1`,`2`,`3` : One, two or three

### How to generate the cards

- Create the dashed versions of each shape by hand. Name them `ld.svg`, `od.svg`, `zd.svg` respectively.
- Create the filled version by hand too. Name them `lf.svg`, `of.svg`, `zf.svg` respectively.
- Use `scr.py` to remove the dashes and create empty versions of each shape. This will create `le.svg`, `oe.svg`, `ze.svg`.
- Then create the colored versions using `_add_colors.bash`.
- Then create the duplicated versions using `_duplicate.bash`. `inkscape` is required.

### Change colors 

- `sed 's/000000/cb4947/g' "input.svg" > "output.svg"`
- `sed 's/000000/469d66/g' "input" > "output.svg"`
- `sed 's/000000/73397d/g' "input.svg" > "ouput.svg"`

### Duplicate and translate 

- `inkscape input.svg --actions="select:original;duplicate;transform-translate:0,50" --export-filename=output.svg`
- Duplicate `inkscape "input.svg" --actions="select:original;transform-translate:350,0;duplicate;transform-translate:-700,0" --export-filename="output.svg"`
- Three-plicate : `inkscape input.svg" --actions="select:original;duplicate;transform-translate:700,0;duplicate;select:original;transform-translate:-700,0" --export-filename="output.svg"`

### Remove dashed pattern

- Use `scr.py`

### Colors used

- Purple : `#73397d`
- Green : `#469d66`
- Red: `#cb4947`