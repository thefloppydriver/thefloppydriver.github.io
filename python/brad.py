from browser import document, alert
import time
import random
import threading
import queue

global realcarrier
global oof
global victim
global delay
global number
global stupid
global me
global mee
global makeentry
global e1
global e2
global T
global spamit
global qspamDelay
global stop_spamming
global spamitthread
global e1get
global e2get
global e3get
global e4get
global executestorage
global execute
global starttt
global startttt
global starttt
global nametxt
global messagetxt
global emailtxt
global passwordtxt
global contactstxt
global notestxt
global yeet
global ree

yeet = None

nametxt = 'Melissia'
messagetxt = 'REEEEEEEEEEEEEEEEEEEEEEEEE'
emailtxt = 'fearmypowergoodsir@gmail.com'
passwordtxt = 'sp4m.m3!'
contactstxt = {'jomar':2163198688,
               'jayden':8032432431,
               'kendall':8034934103,
               'ryan':9809257025,
               'gracee':8035041480,
               'rene':8036166880,
               'ada':7049890912}
               
notestxt = '''Kendall is on Verizon
Jomar is on T-Mobile
Jayden is on T-Mobile
Kylee is on T-Mobile
Gracee is on AT&T
Rene is on Boost Mobile
I'm on Verizon (Ryan)
...Ada is on Verizon...'''

e1get = queue.Queue()
e2get = queue.Queue()
e3get = queue.Queue()
e4get = queue.Queue()
e1get.put(1000000000)
e2get.put('v')
e3get.put(1)

executestorage = queue.Queue()
executestorage.put("pass")
qspamDelay = queue.Queue()
stop_spamming = queue.Queue()



stop_spamming.put(False)


class LoginScreen(BoxLayout):
    global e4valuechecker
    global execute
    global starttt
    global startttt
    starttt = True
    
            
    def __init__(self, **kwargs):
        super(LoginScreen, self).__init__(**kwargs)
        global e1
        global e2
        global e3
        global e4
        global contactstxt
        global notestxt

        self.orientation='vertical'


        
        self.menu = DropDown()
        self.menuBar=Button(text='Menu', size_hint=(1,.1))

        self.showContactsButton = Button(text='Show Contacts', size_hint_y=None, height=44)
        self.writeEditToFileButton = Button(text='Write Edit... To File', size_hint_y=None, height=44)
        #self.editMessageButton = Button(text='Edit Message', size_hint_y=None, height=44)
        #self.editNameButton = Button(text='Edit Name', size_hint_y=None, height=44)
        self.showNotesButton = Button(text='Show Notes', size_hint_y=None, height=44)
        
        self.menu.add_widget(self.showContactsButton)
        self.menu.add_widget(self.writeEditToFileButton)
        #self.menu.add_widget(self.editMessageButton)
        #self.menu.add_widget(self.editNameButton)
        self.menu.add_widget(self.showNotesButton)

        self.add_widget(self.menuBar)
        
        self.menuBar.bind(on_release=self.menu.open)
        
        self.layout = GridLayout(size=(300, 300))
        self.layout.cols = 2
        self.layout.rows = 9
        
        self.layout.add_widget(Label(text='Number or contact:')) #, size_hint=(.25, .05), pos_hint={'x':.0, 'y': .7}))
        self.e1 = TextInput(text='', multiline=False) #size_hint=(.25, .05), pos_hint={'x':.0, 'y': .7})
        self.layout.add_widget(self.e1)
        
        self.layout.add_widget(Label(text='Victim\'s Carrier:'))#, size_hint=(.4, .25), pos_hint={'x':.05, 'y': .6}))
        self.e2 = TextInput(text='', multiline=False) #, password=True,  size_hint=(.4, .25), pos_hint={'x':.25, 'y': .6})
        self.layout.add_widget(self.e2)

        self.layout.add_widget(Label(text='Message Delay (s):'))#, size_hint=(.4, .25), pos_hint={'x':.05, 'y': .6}))
        self.e3 = TextInput(text='', multiline=False) #, password=True,  size_hint=(.4, .25), pos_hint={'x':.25, 'y': .6})
        self.layout.add_widget(self.e3)

        self.EditSpinner = Spinner(text='Edit.............', values=('Edit Message', 'Edit Name')) #, size_hint=(None, None)) #,size=(100, 44),pos_hint={'center_x': .5, 'center_y': .5}) 
        self.e4 = TextInput(text='', multiline=True) #, password=True,  size_hint=(.4, .25), pos_hint={'x':.25, 'y': .6})
        self.layout.add_widget(self.EditSpinner)
        self.layout.add_widget(self.e4)
        
        self.spamitButton = Button(text="SPAM") #, size_hint=(.4, .25)) #, pos_hint={'x':.25, 'y': .5})
        self.spamitButton.bind(on_press=self.update_spamit_thread)
        self.layout.add_widget(self.spamitButton)

        self.stopSpammingButton = Button(text="sToP") #, size_hint=(.4, .25)) #, pos_hint={'x':.25, 'y': .5})
        self.stopSpammingButton.bind(on_press=self.stop_spamit_thread)
        self.layout.add_widget(self.stopSpammingButton)

        self.add_widget(self.layout)
                
        self.console = TextInput(text='', multiline=True, size_hint=(1,0.25))
        self.add_widget(self.console)

        self.contacts = (TextInput(text="Working Contacts: "+"\n"+("\n".join(map(str, list(map(lambda x:x,contactstxt))))), size_hint=(1,1)))
        self.showContactsButton.bind(on_release=self.showContacts)

        self.notes = (TextInput(text=notestxt, size_hint=(1,1)))
        self.showNotesButton.bind(on_release=self.showNotes)

        self.writeEditToFileButton.bind(on_release=self.writeEditToFile)
        #print(self.e1.text)
        #e1 = self.e1.text
        #e2 = self.e2.text
        #e3 = self.e3.text
        #e4 = self.e4.text


    
    def showContacts2(self, text):
        #self.console.insert_text('FLAG_showContacts2' + '\n')
        self.remove_widget(self.contacts)
        self.menu.unbind(on_release=self.remove_widget(self.contacts))
        self.showContactsButton.unbind(on_release=self.showContacts2)
        self.showContactsButton.bind(on_release=self.showContacts)
        
    def showContacts(self, text):
        #self.console.insert_text('FLAG_showContacts' + '\n')
        global contactstxt
        #self.contacts = (TextInput(text="Working Contacts: "+"\n"+("\n".join(map(str, list(map(lambda x:x,contactstxt))))), size_hint=(1,1)))
        self.add_widget(self.contacts)
        #self.menu.bind(on_release=self.remove_widget(self.contacts))
        self.showContactsButton.unbind(on_release=self.showContacts)
        self.showContactsButton.bind(on_release=self.showContacts2)



    def showNotes2(self, text):
        #self.console.insert_text('FLAG_showNotes2' + '\n')
        self.remove_widget(self.notes)
        self.menu.unbind(on_release=self.remove_widget(self.notes))
        self.showNotesButton.unbind(on_release=self.showNotes2)
        self.showNotesButton.bind(on_release=self.showNotes)
        
    def showNotes(self, text):
        #self.console.insert_text('FLAG_showNotes' + '\n')
        global notestxt
        self.add_widget(self.notes)
        self.showNotesButton.unbind(on_release=self.showNotes)
        self.showNotesButton.bind(on_release=self.showNotes2)


    def writeEditToFile(self, text):
        #self.console.insert_text('FLAG_writeEditToFile' + '\n')
        global messagetxt
        global nametxt
        if self.EditSpinner.text == 'Edit Message':
            if self.e4.text == '':
                self.console.do_cursor_movement(action='cursor_end', control=True, alt=False)
                self.console.insert_text('You cannot leave the Message field blank \n')
            if self.e4.text != '':
                messagetxt = self.e4.text
                self.console.do_cursor_movement(action='cursor_end', control=True, alt=False)
                self.console.insert_text('Message Updated Sucessfully! \nMessage: '+messagetxt+'\n')
        if self.EditSpinner.text == 'Edit Name':
            if self.e4.text == '':
                self.console.do_cursor_movement(action='cursor_end', control=True, alt=False)
                self.console.insert_text('You cannot leave the Name field blank \n')
            if self.e4.text != '':
                
                nametxt = self.e4.text.replace('\n', '').replace('\r', '')
                self.console.do_cursor_movement(action='cursor_end', control=True, alt=False)
                self.console.insert_text('Name Updated Sucessfully! \nName: '+nametxt+'\n')
        if self.EditSpinner.text == 'Edit.............':
            self.console.do_cursor_movement(action='cursor_end', control=True, alt=False)
            self.console.insert_text('You must select something other than \'Edit.............\' \n')
    
    
    def editMessage(self):
        #self.console.insert_text('FLAG_editMessage' + '\n')
        global messagetxt
        messagetxt = self.e4.text

    def editName(self):
        #self.console.insert_text('FLAG_editName' + '\n')
        global nametxt
        nametxt = self.e4.text

    def alert_ryan(self):
        #self.console.insert_text('FLAG_alert_ryan' + '\n')
        s = smtplib.SMTP('smtp.gmail.com',587)
        s.starttls()
        s.login('fearmypowergoodsir@gmail.com', 'sp4m.m3!')
        s.sendmail('fearmypowergoodsir@gmail.com', '9809257025@vtext.com', 'Subject: ALERT'+str(random.randint(0, 10000))+'\n'+'To: , 9809257025@vtext.com'+'\n'+'Someone just tried to spam '+self.e1.text+'.')
        s.quit()
        self.console.do_cursor_movement(action='cursor_end', control=True, alt=False)
        self.console.insert_text('oH \n')
        time.sleep(2)
        self.console.do_cursor_movement(action='cursor_end', control=True, alt=False)
        self.console.insert_text('sO tHaT\'S hOw It iS NoW \n')
        time.sleep(2)
        App.stop(App.get_running_app())
        stop_spammingget = True
        time.sleep(1)
        quit()

    def execute():
        #self.console.insert_text('FLAG_execute' + '\n')
        exec(executestorage.get())
        executestorage.put("pass")

    def spamit(self, e1get, e2get, e3get):
        #self.console.insert_text('FLAG_spamit')
        #self.console.insert_text('e1get ==' + str(e1get) + '\n')
        #self.console.insert_text('e2get ==' + str(e2get) + '\n')
        #self.console.insert_text('e3get ==' + str(e3get) + '\n')
        global stop_spamming
        global nametxt
        global messagetxt
        global contactstxt
        global emailtxt
        global passwordtxt
        #print(self.EditSpinner.text)
        #self.e3.insert_text(self.EditSpinner.text)
        #print("oof")
        
        stop_spammingget = stop_spamming.get()
        #self.console.insert_text('stop_spammingget == '+str(stop_spammingget) + '\n')
        stop_spamming.put(stop_spammingget)
        #if stop_spammingget == True:
        #    stop_spamming.put(False)
        #    #print("oof")
        #    raise NameError("yeet")
        if e1get == '':
            stop_spammingget = True
            stop_spamming.put(True)
            self.console.do_cursor_movement(action='cursor_end', control=True, alt=False)
            self.console.insert_text('You must enter a phone number or contact. \n(A list of contacts can be found at Menu > Show Contacts) \n')
                                     
        if e2get == '':
            stop_spammingget = True
            stop_spamming.put(True)
            self.console.do_cursor_movement(action='cursor_end', control=True, alt=False)
            self.console.insert_text('You must enter a carrier. \n(My notes can be found at Menu > Show Notes) \n')
            
        if e3get == '' and stop_spammingget == False:
            self.console.do_cursor_movement(action='cursor_end', control=True, alt=False)
            self.console.insert_text("Nothing entered in delay field. \nUsing default timing. (5 seconds) \n")
            e3get = '5'
            self.e3.insert_text('5')

        if e3get == '' and stop_spammingget == True:
            e3get = '5'

        
        if stop_spammingget == False:
            #print("oof")
            
            if str(e1get).isdigit() == True:
                #print("oof")
                while True:
                    try:
                        if int(e1get) >= 10000000000 or int(e1get) <= 999999999:
                            quit()
                        if int(e1get) <= 10000000000 and int(e1get) >= 999999999:
                            break
                    except ValueError:
                        quit()
                        
                if e1get == '7049890912' or e1get == 7049890912 or e1get == '9809257025':
                    self.alert_ryan()
                    
                number=e1get
                #T.insert(END, 'Target number:'+number)
            #print(str(e1get))
            #print("ooof")
            if str(e1get).isdigit() == False and str(e1get) != '':
                if e1get.lower() == 'ada' or e1get.lower() == 'ryan':
                    self.alert_ryan()
                    
                try:
                    number = contactstxt[e1get.lower()]
                except KeyError:
                    self.console.do_cursor_movement(action='cursor_end', control=True, alt=False)
                    self.console.insert_text(e1get.lower()+' is not in the list of contacts. (Go tell Ryan, he\'ll fix it for you :] )\n')
                    stop_spammingget = True
                    stop_spamming.put(True)
                
            if e2get.lower().startswith('v'):
                realcarrier='@vtext.com'
            elif e2get.lower().startswith('t'):
                realcarrier='@tmomail.net'
            elif e2get.lower().startswith('a'):
                realcarrier='@txt.att.net'
            elif e2get.lower().startswith('s'):
                realcarrier='@messaging.sprintpcs.com'
            elif e2get.lower().startswith('m'):
                realcarrier='@mymetropcs.com'
            elif e2get.lower().startswith('b'):
                realcarrier='@sms.myboostmobile.com'
            else:
                self.console.do_cursor_movement(action='cursor_end', control=True, alt=False)
                self.console.insert_text('THATS NOT A SUPPORTED CARRIER!!! (Go tell Ryan, he\'ll fix it for you :] )\n')
                
                
            #msg = EmailMessage()
            #msg.set_content(messagetxt)    
            thread_number = random.randint(0, 10000)
            #msg['Subject'] = nametxt + str(thread_number)
            #msg['From'] = emailtxt
            #msg['To'] = str(number)+realcarrier
            s = smtplib.SMTP('smtp.gmail.com',587)
            s.starttls()
            s.login(emailtxt, passwordtxt)
            #s.sendmail(emailtxt, str(number)+realcarrier, msg.as_string())
            s.sendmail(emailtxt, str(number)+realcarrier, 'Subject: '+nametxt + str(thread_number) +'\n'+'To: , '+str(number)+realcarrier+'\n'+messagetxt)
            self.console.do_cursor_movement(action='cursor_end', control=True, alt=False)
            self.console.insert_text("Spam message sent to: " + str(number)+realcarrier + '\n')
            s.quit()

        e1get2 = e1get
        e2get2 = e2get
        e3get2 = e3get
        stop_spammingget = stop_spamming.get()
        stop_spamming.put(stop_spammingget)
        if stop_spammingget == False:
            #print(e3.get())
            time.sleep(int(e3get))
            #root.update()
            self.spamit(e1get2, e2get2, e3get2)
        if stop_spammingget == True:
            self.console.do_cursor_movement(action='cursor_end', control=True, alt=False)
            self.console.insert_text('Stopped. \n')
            e3get=''
            stop_spamming.put(False)
    
    def update_spamit_thread(self,btn):
        global spamitthread
        self.console.do_cursor_movement(action='cursor_end', control=True, alt=False)
        self.console.insert_text('Message: '+messagetxt+'\nName: '+nametxt+'\n')
        spamitthread = threading.Thread(target=self.spamit, args=(self.e1.text, self.e2.text, self.e3.text))
        spamitthread.start()
        
    def stopit(self):
        global spamitthread
        global stopspamming
        global T
        try:
            if spamitthread != None:
                stop_spamming.put(True)
                spamitthread.join()
        except NameError:
            #T.insert(END, "Uhh... \n")
            #root.update()
            #time.sleep(2)
            #T.insert(END, "...no. \n")
            #root.update()
            pass
        
##        print("Number or contact: " + self.e1.text)
##        print("Victim's Carrier: " + self.e2.text)
##        print("Message Delay (s): " + self.e3.text)
##        print("Update File Text: " + self.e4.text)
        
    def stop_spamit_thread(self, btn):
        global stopitthread
        global spamitthread
        global T
        stopitthread = threading.Thread(target=self.stopit, args=())
        stopitthread.start()

    

    
    
class Brad_GUI(App):
    def on_stop(self):
        Logger.critical('Good Bye!')
    def build(self):
        return LoginScreen()


if __name__ == '__main__':
    Brad_GUI().run()
