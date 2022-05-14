"""
JUST TO SAY HEY FROM PYTHON
"""


class Python:
    def __init__(self, name, phone):
        self.name = name
        self.phone = phone

    def show(self):
        print('Name ' + self.name)
        print('Phone ' + str(self.phone))


class Ml(Python):
    def __init__(self, name, phone, why):
        Python.__init__(self, name, phone)
        self.why = why

    def show(self):
        print('reason ' + self.why + ' i like this reason bro...')


class Ai(Python):
    def __init__(self, name, phone, why):
        Python.__init__(self, name, phone)
        self.why = why

    def show(self):
        print('reason ' + self.why + ' i like this reason bro...')


class Web(Python):
    def __init__(self, name, phone, js, why):
        Python.__init__(self, name, phone)
        self.js = js
        self.why = why

    def show(self):
        print('you know js answer ' + self.js)
        print('your reason ' + self.why)


def welcome():
    print('           Welcome to python for beginners    ')
    choose = int(input('''   
                             1  Machine learning 
                              2  Artificial intelligence
                              3. Web development '''))
    print('Please Enter your name and phone number: ')
    name = input('Name: ')
    phone = input('Phone number: ')
    if choose == 1:
        print(' Welcome to ML, i might need your educational background: ')
        whyMl = input('why do you want to learn Ml')
        Fresh = Ml(name, phone, whyMl)
        Fresh.show()

    elif choose == 2:
        print('welcome to AI, i might need Library you want to learn with: ')
        whyAi = input('why do you want to learn Ai')
        Fresh = Ai(name, phone, whyAi)
        Fresh.show()
    elif choose == 3:
        print('welcome to website dev. i might need extra information: ')
        jsInfo = input('Do you know javascript: ')
        whyWeb = input('why do you want to learn web programming: ')
        Fresh = Web(name, phone, jsInfo, whyWeb)
        Fresh.show()
    else:
        print('The number you have entered is out of range please choose from 1 - 3: ')
        welcome()

# The main place to  of play
welcome()
