# 🚨🚨 HUGE CHANGES INCOMING!!!
⚠ The Dead by API is undergoing a rework larger than Dead Hard's!

I am rebuilding the whole thing in Next.js. The database models and schema will not be affected, so all the data will work for both versions of the API. Field choices, code system, and all other functionalities also will work exactly the same. The strucure of the routes was changed in order to better group together related data.

The new stuff will drop on a new repository, which will be linked here. This version of the API will no longer be developed, but the repo will remain open, so if you catch a bug or a typo, open a pull request and we'll get it fixed! Also, all of the data will be placed in a repo of its own in order to decouple the database from the API. The repo will contain our little script friend to upload everything.

And, as usual, make this code your own. Build on top of it, break it, improve it, have fun! And don't forget to send me a message to show what you've done, it'll make my day!! 😄

# Dead by API - A Dead by Daylight data API

This API features 30 survivors, 27 killers, 197 perks, 588 add-ons, 32 items, and 26 endpoints! Updated for patch 5.7.1 (May 3rd, 2022).

Built with Node.js, Express, Mongoose, MongoDB, and friends.

All Dead by Daylight content belongs to [Behaviour Interactive Inc](https://deadbydaylight.com/).

This API uses data from both in-game and the [Dead by Daylight Wiki](https://deadbydaylight.fandom.com/wiki/Dead_by_Daylight_Wiki).

This repo contains both the data (in JSON format) and the code to run the API.

## Using the API

The Dead by API is live on Heroku at [https://dead-by-api.herokuapp.com/](https://dead-by-api.herokuapp.com/)

Just add the address of the endpoint you want and you're good to go! The first request might take a couple of seconds because the app goes to sleep after spending some time inactive.

Try it out!

[https://dead-by-api.herokuapp.com/api/survs/felixrichter?fields=name,role,perks_names,imgs](https://dead-by-api.herokuapp.com/api/survs/felixrichter?fields=name,role)

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

#### This API was built by [Lucas Lamonier](https://github.com/LrLamonier).

#### You can contact me via my [LinkedIn](https://www.linkedin.com/in/lamonier/) or at [lucasrlamonier@gmail.com](mailto:lucasrlamonier@gmail.com).

Special thanks to [Arthur](https://github.com/ArthR1beiro).
