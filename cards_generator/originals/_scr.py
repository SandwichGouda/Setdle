import xml.etree.ElementTree as ET

for filename in ["losange","oval","zibouiboui"] :
    # Load the SVG file
    # print(filename+".svg")
    tree = ET.parse(filename+".svg")
    root = tree.getroot()

    # Define the SVG namespace
    namespaces = {'svg': 'http://www.w3.org/2000/svg'}

    # Find all <pattern> elements and remove them
    for pattern in root.findall('.//svg:pattern', namespaces):
        parent = pattern.getparent() if hasattr(pattern, 'getparent') else None
        if parent is None:
            # ElementTree doesn't store parent by default, so we have to find it manually
            for parent in root.iter():
                if pattern in list(parent):
                    parent.remove(pattern)
                    break
        else:
            parent.remove(pattern)

    # Save the modified SVG
    tree.write(filename[0]+"e.svg")
