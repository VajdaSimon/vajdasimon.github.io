import re
import requests
import os
import string
from discord_webhook import DiscordWebhook, DiscordEmbed

path = 'D:\\simon\\Documents\\git\\vajdasimon.github.io\\dalokv2\\TXT\\'
files = os.listdir(path)
ittTart = 0
feltoltveSzam = 0

for file in files:
    f = open(path + file, 'r')
    content = f.read()

    matches = re.finditer(r"(?<=\d\d:\d\d:\d\d)(\n{1,})(.*\D$)(.*\n)+?(\d\d)", content, re.MULTILINE)

    for matchNum, match in enumerate(matches, start=1):  
        a = "{match}".format(matchNum = matchNum, start = match.start(), end = match.end(), match = match.group())
        a = a[:-2].strip()

        mind = ""
        response = requests.get('https://simon.vajda.eu/dalok/v2/api.php?mind=1')
        mind = response.json()
        azonos = 0

        for szam in range(len(mind)):
            szerverDal = str(str(mind[szam]["szoveg"]).replace("\n","").replace(" ","").lower())
            szerverDal = szerverDal.translate(szerverDal.maketrans('', '', string.punctuation))
            localDal = str(str(a).replace("\n","").replace(" ","").lower())
            localDal = localDal.translate(localDal.maketrans('', '', string.punctuation))

            if (szerverDal == localDal):
                azonos = 1
                break

        if (azonos == 0):
            url = 'https://simon.vajda.eu/dalok/php/feltoltes.php'
            myobj = {'ujdalszoveg': a}
            requests.post(url, data = myobj)
            feltoltveSzam = feltoltveSzam + 1
            print("Msot lett feltöltve: " + str(feltoltveSzam))


    ittTart = ittTart + 1
    szazalek = int(ittTart) / int(len(files)) * 100
    szazalek = "{:.2f}".format(szazalek)
    print("Kész: " + str(ittTart) + "/" + str(len(files)) + " (" + str(szazalek) + "%) " + str(file))

print("Feltöltött dalok: " + str(feltoltveSzam))
if (feltoltveSzam != 0):
    webhook = DiscordWebhook(url='https://discord.com/api/webhooks/950850768951463996/ZsNggP2r-_bhDA5r_UxSkHyvBU8s_6zyZwCMgwbr_jZehib9GwqooLotC08B5p-CRZbt', username="Server Log")

    embed = DiscordEmbed(color='03b2f8')
    embed.add_embed_field(name='Feltöltött dalok', value=str(feltoltveSzam))

    webhook.add_embed(embed)
    response = webhook.execute()
else:
    webhook = DiscordWebhook(url='https://discord.com/api/webhooks/950850768951463996/ZsNggP2r-_bhDA5r_UxSkHyvBU8s_6zyZwCMgwbr_jZehib9GwqooLotC08B5p-CRZbt', username="Server Log")

    embed = DiscordEmbed(color='03b2f8')
    embed.add_embed_field(name='Most nem lett semmi feltöltve. :)')

    webhook.add_embed(embed)
    response = webhook.execute()