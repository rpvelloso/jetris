#!/bin/bash
for img in *.png; do
    echo -n '"data:image/png;base64, ' > $img.b64
    (cat $img | base64 -i -w 0) >> $img.b64
    echo -n '"' >> $img.b64
done

echo 'const piecesFiles = [' > images.js
for b64 in *.b64; do
    if [ "${b64}" != "rect.png.b64" ] && [ "${b64}" != "bg10x20.png.b64" ] && [ "${b64}" != "splash.png.b64" ]; then
        cat $b64 >> images.js
        echo "," >> images.js
    fi
done
echo '];' >> images.js
echo -n 'const bgImage = createImage(' >> images.js
cat bg10x20.png.b64 >> images.js
echo ');' >> images.js
echo -n 'const rect = createImage(' >> images.js
cat rect.png.b64 >> images.js
echo ');' >> images.js

rm *.b64
