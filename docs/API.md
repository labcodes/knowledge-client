FORMAT: 1A

# Knowledge

Knowledge is the API that powers Knowledge-client app.

# Knowledge API Root [/api/]

## Retrieve the Entry Point [GET]

+ Response 200 (application/json)

    {
        "links_url": "/links/"
    }

## Group Link

Resources related to links in the API.

## Links Collection [/api/links/{?page}]

+ Parameters
    + page: 1 (optional, number) - The page of links to return

### List All Links [GET]

+ Response 200 (application/json)

    + Headers

        Next: </links/?page=2>; rel="next"

    + Body

    [
        {
            "title": "The final proof that Labcodes is the best software studio on earth",
            "published_at": "2014-11-11T08:40:51.620Z",
            "url": "https://developers.googleblog.com/2017/03/xla-tensorflow-compiled.html",
            "author": "Alessandro Henrique",
            "tags": [
                {
                    "name": "Labcodes",
                    "url": "/links/?tag=labcodes"
                },
                {
                    "name": "Python",
                    "url": "/links/?tag=python"
                },
                {
                    "name": "Django",
                    "url": "/links/?tag=Django"
                },
                {
                    "name": "UX",
                    "url": "/links/?tag=Ux"
                },
                {
                    "name": "Vue",
                    "url": "/links/?tag=vue"
                }
            ]
        },
        {
            "title": "Google tries to acquire Labcodes",
            "published_at": "2014-11-21T08:40:51.620Z",
            "url": "https://developers.googleblog.com/2017/03/xla-tensorflow-compiled.html",
            "author": "Renato Oliveira",
            "tags": [
                {
                    "name": "Labcodes",
                    "url": "/links/?tag=labcodes"
                },
                {
                    "name": "Python",
                    "url": "/links/?tag=python"
                },
                {
                    "name": "Django",
                    "url": "/links/?tag=Django"
                },
                {
                    "name": "UX",
                    "url": "/links/?tag=Ux"
                },
                {
                    "name": "Vue",
                    "url": "/links/?tag=vue"
                }
            ]
        },
        {
            "title": "Facebook doubles Google proposal for labcodes team",
            "published_at": "2014-12-11T08:40:51.620Z",
            "url": "https://developers.googleblog.com/2017/03/xla-tensorflow-compiled.html",
            "author": "Débora Correia",
            "tags": [
                {
                    "name": "Labcodes",
                    "url": "/links/?tag=labcodes"
                },
                {
                    "name": "Python",
                    "url": "/links/?tag=python"
                },
                {
                    "name": "Django",
                    "url": "/links/?tag=Django"
                },
                {
                    "name": "UX",
                    "url": "/links/?tag=Ux"
                },
                {
                    "name": "Vue",
                    "url": "/links/?tag=vue"
                }
            ]
        },
        {
            "title": "Labcodes Team: We have a dream",
            "published_at": "2014-12-12T08:40:51.620Z",
            "url": "https://developers.googleblog.com/2017/03/xla-tensorflow-compiled.html",
            "author": "Thulio Philipe",
            "tags": [
                {
                    "name": "Labcodes",
                    "url": "/links/?tag=labcodes"
                },
                {
                    "name": "Python",
                    "url": "/links/?tag=python"
                },
                {
                    "name": "Django",
                    "url": "/links/?tag=Django"
                },
                {
                    "name": "UX",
                    "url": "/links/?tag=Ux"
                },
                {
                    "name": "Vue",
                    "url": "/links/?tag=vue"
                }
            ]
        }
    ]

### Create a New Link without tags [POST]

+ url (string) - Url of the Link.

+ Request (application/json)

            {
              "url": "http://knowledge.labcodes.com.br/"
            }

+ Response 201

### Create a New Link with tags [POST]

+ url (string) - Url of the Link.
+ tags (string) - Tags of the Link.

+ Request (application/json)

            {
              "url": "http://knowledge.labcodes.com.br/",
              "tags": "Classical music"
            }

+ Response 201

## Logout [/accounts/logout/]

### Logout from system [GET]

+ Response 200

## Login [/accounts/login/]

### Login in the system [POST]

+ username (string) - email.
+ password (string) - password of the user.

+ Request (application/json)

            {
                "username": "renato@labcodes.com.br",
                "password": "labcodes123"
            }

+ Response 201 (application/json)

    + Body

            {
              "token" : "9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b"
            }
