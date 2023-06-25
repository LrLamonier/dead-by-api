# 🚨🚨 Welcome to DbA v1

This code is no longer being maintained and is provided here in case someone wants to pick it up and do something with it.

# Dead by API - A Dead by Daylight data API

Built with Node.js, Express, Mongoose, MongoDB, and friends.

All Dead by Daylight content belongs to [Behaviour Interactive Inc](https://deadbydaylight.com/).

This API uses data from both in-game and the [Dead by Daylight Wiki](https://deadbydaylight.fandom.com/wiki/Dead_by_Daylight_Wiki).

This repo contains both the data (in JSON format) and the code to run the API.

## API Reference

### Name Codes

This API uses a code system to identify each survivor, killer, perk, add-on or item. The code is the name in lowercase, without spaces or special characters.

#### Examples:

| Name                         | Code                    |
| :--------------------------- | :---------------------- |
| Élodie Rakoto                | `elodierakoto`          |
| The Onryō                    | `theonryo`              |
| Coup de Grâce                | `coupdegrace`           |
| "Restraint" - Carter's Notes | `restraintcartersnotes` |

### Fields query

It is possible to select which fields to get in the response by using the query:

`?fields=<field names>`

Example:

```http
  /api/survs/felixrichter?fields=name,role,perks_names
```

returns:

```json
{
  "status": "success",
  "data": [
    {
      "_id": "626fef241b005986989820f3",
      "name": "Felix Richter",
      "role": "Visionary Architect",
      "perks_names": ["Visionary", "Desperate Measures", "Built to Last"]
    }
  ]
}
```

### Survivors

#### Get all Survivors

```http
  GET /api/survs
```

#### Get one random Survivor

```http
  GET /api/survs/random
```

#### Get specific Survivor

```http
  GET /api/survs/<survivor code>
```

#### Get perks of a specific Survivor

```http
  GET /api/survs/<survivor code>/perks
```

### Killers

#### Get all Killers

```http
  GET /api/killers
```

#### Get one random Killer

```http
  GET /api/killers/random
```

#### Get specific Killer

```http
  GET /api/killers/<killer code>
```

#### Get the power of a specific Killer

```http
  GET /api/killers/<killer code>/power
```

#### Get the power Add-ons of a specific Killer

```http
  GET /api/killers/<killer code>/addons
```

#### Get the perks of a specific Killer

```http
  GET /api/killers/<killer code>/perks
```

#### Get all Killer powers

```http
  GET /api/killers/powers
```

#### Get one random Killer power

```http
  GET /api/killers/powers/random
```

#### Get all Killer power Add-ons

```http
  GET /api/killers/addons
```

#### Get one random Killer power Add-on

```http
  GET /api/killers/powers/random
```

#### Get specific Killer power Add-on

```http
  GET /api/killers/powers/<add-on code>
```

### Perks

#### Get all Survivor perks

```http
  GET /api/perks/surv
```

#### Get one random Survivor perk

```http
  GET /api/perks/surv/random
```

#### Get all Killer perks

```http
  GET /api/perks/killer
```

#### Get one random Killer perk

```http
  GET /api/perks/killer/random
```

### Items

#### Get all Items

```http
  GET /api/items
```

#### Get one random Item

```http
  GET /api/items/random
```

#### Get one specific Item

```http
  GET /api/items/<item code>
```

#### Get one specific Item's Add-ons

```http
  GET /api/items/<item code>/addons
```

#### Get all Item Add-ons

```http
  GET /api/items/addons
```

#### Get one random Item Add-on

```http
  GET /api/items/addons/random
```

#### Get specific Item Add-on

```http
  GET /api/items/addons/<Add-on code>
```

## Additional information

#### This API was built by [Lucas Lamonier](https://www.lucaslamonier.com/) as a part of the [RazorPaw<img src="https://github.com/LrLamonier/LrLamonier/blob/main/readme-imgs/rplogo.png?raw=true" width="19" height="19" />Project](https://www.razorpaw.nexus/).

> Hi! I'm a full-stack web developer that loves to use Next.js and the MERN stack to build fun things. If you have an idea or a project that you would like to create, send me a message, maybe we can do something cool together. If you don't and just want to chat, go for it! 😄

You can reach me at:

[<img src="https://github.com/LrLamonier/LrLamonier/blob/main/readme-imgs/mail.png?raw=true" width="20" height="20" /> hello@lucaslamonier.com](mailto:hello@lucaslamonier.com)

[<img src="https://github.com/LrLamonier/LrLamonier/blob/main/readme-imgs/github.png?raw=true" width="20" height="20" /> /LrLamonier at GitHub](https://github.com/LrLamonier)

[<img src="https://github.com/LrLamonier/LrLamonier/blob/main/readme-imgs/linkedin.png?raw=true" width="20" height="20" /> /lamonier at LinkedIn](https://www.linkedin.com/in/lamonier/)

###### Thanks a lot, Behaviour people. Y'all're awesome!