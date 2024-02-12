import tornado.web
import json

import Profile

class Handler(tornado.web.RequestHandler):
    def post(self):
        J = json.loads(self.request.body)
        name = J["Name"]
        dob = J["bday"]
        email = J["eMail"]
        oldName = J["old"]

        #print("WE GOT:",name,dob,email,oldName)

        resp = {"ok": True}
        self.write(json.dumps(resp))

        #Weird hack to update values because I'm not used to dictionaries
        for key, value in Profile.D.items():
            if value["name"] == oldName:
                if name != "":
                    Profile.D[key]["name"] = name
                if dob != "":
                    Profile.D[key]["dob"] = dob
                if email.find("@") != -1 and email != "":
                    Profile.D[key]["email"] = email
                break

            

        
        
    pass