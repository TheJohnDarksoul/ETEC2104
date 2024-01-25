import tornado.web

D = {
    "alice" : 
    {
        "name" : "Alice Smith",
        "dob" : "Jan. 1",
        "email" : "alice@example.com",
        "picture" : "alice"
    },
    "bob" : 
    {
        "name" : "Bob Jones",
        "dob" : "Dec. 31",
        "email" : "bob@bob.xyz",
        "picture" : "bob"
    },
    "carol" :
    {
        "name" : "Carol Ling",
        "dob" : "Jul. 17",
        "email" : "carol@example.com",
        "picture" : "carol"
    },
    "dave" :
    {
        "name" : "Dave N. Port",
        "dob" : "Mar. 14",
        "email" : "dave@dave.dave",
        "picture" : "dave"
    }
}

class ProfileHandler(tornado.web.RequestHandler):
    def get(self):
        L = self.request.path.split("/")
        userName = L[2]
        info = D[userName]
        self.render("profilepage.html",
                    name = info["name"], dateOfBirth = info["dob"],
                    email = info["email"], pfp = info["picture"]
                    )