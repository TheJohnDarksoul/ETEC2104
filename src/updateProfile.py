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

        print("WE GOT:",name,dob,email,oldName)

        resp = {"ok": True}
        self.write(json.dumps(resp))

        #Weird hack to update values because I'm not used to dictionaries
        for key, value in Profile.D.items():
            if value["name"] == oldName:
                Profile.D[key]["name"] = name
                Profile.D[key]["dob"] = dob
                Profile.D[key]["email"] = email
                print("My hack worked :)")
                break

            

        
        
    pass