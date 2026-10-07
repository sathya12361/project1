import pyttsx3
print("module pyttsx3 accepted")
engine=pyttsx3.init('sapi5')
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[0].id)
#engine.say("hello i am sathya from karur")
#engine.runAndWait()
data=input("enter your text")
for _ in range(10):
    engine.say("hello i am "+data)
engine.runAndWait()    

