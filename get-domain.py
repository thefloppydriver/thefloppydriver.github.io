import json
import os
import sys
import pysftp

os.system("curl  http://localhost:4040/api/tunnels > tunnels.json")

with open('tunnels.json') as data_file:    
    datajson = json.load(data_file)

with pysftp.Connection('192.168.5.27', username='pi', password='raspberry') as sftp:
    with sftp.cd('/home/pi/'):               # temporarily chdir to public
        sftp.get('/home/pi/domain0W.txt') # get a remote file

with pysftp.Connection('192.168.4.26', username='pi', password='raspberry') as sftp:
    with sftp.cd('/home/pi/'):               # temporarily chdir to public
        sftp.get('/home/pi/domain0.txt')  # get a remote file

if len(datajson['tunnels'][0]['public_url']) == 25:
    print (datajson['tunnels'][0]['public_url'][8:16])
    with open("/home/pi/domains.txt", "w") as fp:
        fp.write("{\"pi3\":"+datajson['tunnels'][0]['public_url'][8:16]+",")
        with open("domain0.txt", "r") as domain0:
            fp.write("\"pi0\":"+domain0.read()+",")
        with open("domain0W.txt", "r") as domain0W:
            fp.write("\"pi0W\":"+domain0W.read()+",")
        with open("domainPC.txt", "r") as domainPC:
            fp.write("\"PC\":"+domainPC.read()+"}")
            
elif len(datajson['tunnels'][0]['public_url']) == 24:
    print (datajson['tunnels'][0]['public_url'][7:15])
    with open("/home/pi/domains.txt", "w") as fp:
        fp.write("{\"pi3\":"+datajson['tunnels'][0]['public_url'][7:15]+",")
        with open("domain0.txt", "r") as domain0:
            fp.write("\"pi0\":"+domain0.read()+",")
        with open("domain0W.txt", "r") as domain0W:
            fp.write("\"pi0W\":"+domain0W.read()+",")
        with open("domainPC.txt", "r") as domainPC:
            fp.write("\"PC\":"+domainPC.read()+"}")
            


