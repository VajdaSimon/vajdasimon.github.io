import re
import requests
import os
import string 

path = 'D:\\simon\\Documents\\git\\vajdasimon.github.io\\dalokv2\\TXT2\\'
files = os.listdir(path)
ittTart = 0

for file in files:
    f = open(path + file, 'r')
    content = f.read()

    matches = re.finditer(r"(?<=\d\d:\d\d:\d\d)(\n{1,})(.*\D$)(.*\n)+?(\d\d)", content, re.MULTILINE)

    for matchNum, match in enumerate(matches, start=1):  
        a = "{match}".format(matchNum = matchNum, start = match.start(), end = match.end(), match = match.group())
        a = a[:-2].strip()

        response = requests.get('https://simon.vajda.eu/dalok/v2/api.php?mind=1')
        mind = response.json()
        azonos = 0

        for szam in range(len(mind)-1):
            dalItt = str(str(mind[szam]["szoveg"]).replace("\n","").replace(" ","").lower())
            dalOtt = str(str(a).replace("\n","").replace(" ","").lower())

            if (dalItt.translate(dalItt.maketrans('', '', string.punctuation)) == dalOtt.translate(dalOtt.maketrans('', '', string.punctuation))):
                azonos = azonos + 1

        if (azonos == 0):
            url = 'https://simon.vajda.eu/dalok/php/feltoltes.php'
            myobj = {'ujdalszoveg': a}
            requests.post(url, data = myobj)

    ittTart = ittTart + 1
    szazalek = int(ittTart) / int(len(files)) * 100
    szazalek = "{:.2f}".format(szazalek)
    print("Kész: " + str(ittTart) + "/" + str(len(files)) + " (" + str(szazalek) + "%)")