import string 
sentence = """Hey .,;:
?! , I
'm 
?!
Si
m_
,.-
on"""
sentence = str(sentence.replace("\n","").replace(" ","").lower())
print(sentence.translate(sentence.maketrans('', '', string.punctuation)));                 # Hey guys  How are you 