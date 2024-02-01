import tornado.web
import json

class Handler(tornado.web.RequestHandler):
    def post(self):
        J = json.loads(self.request.body)
        name = J["Name"]
        dob = J["bday"]
        email = J["eMail"]

        print("WE GOT:",name,dob,email)

        resp = {"ok": True}
        self.write(json.dumps(resp))
    pass