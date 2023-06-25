# Dead by API - A Dead by Daylight data API (and database!)

## Hey!

> I'm [Lucas](https://www.lucaslamonier.com/) and I built this API for you! Download it, use on your projects, create new features, ~~fix it,~~ and have fun!
If you use this code and feel like it, show me what you made. It'll make my day to see someone putting this thing to good use! 😉

<br/>

This API features 30 survivors, 27 killers, 197 perks, 588 add-ons, 32 items, and 29 endpoints! Updated for patch 5.7.1 (May 3rd, 2022).

Built with Next.js, MongoDB, and friends!

All Dead by Daylight content belongs to [Behaviour Interactive Inc](https://deadbydaylight.com/).

This API uses data from both in-game and the [Dead by Daylight Wiki](https://deadbydaylight.fandom.com/wiki/Dead_by_Daylight_Wiki).

This repo contains the source code of the API, the database models and schema, a script to import the data into a Mongo database, and thorough (hopefully) instructions on how to get it going.

The code of the DbA's first version (built with Node.js and Express) is in the folder `dba-v1`.

## Summary

- [Overview](#overview)
  - [Data structure](#data-structure)
  - [Name codes](#name-codes)
    - [Code examples](#code-examples)
  - [Field selection query](#field-selection-query)
    - [Field selection example](#example)
- [Endpoints](#endpoints)
  - [API route structure](#api-route-structure)
  - [Collection](#collection)
  - [Code | Random](#code--random)
    - [Code](#code)
    - [Random](#random)
  - [Additional](#additional)
- [Running the code](#running-the-code)
- [Quickstart](#quickstart)
  - [1. Get the code](#1-get-the-code)
  - [2. Install dependencies](#2-install-dependencies)
  - [3. Add environment variables](#3-add-environment-variables)
  - [4. Run it](#4-run-it)
  - [5. Deploy](#5-deploy)
- [Populating the database](#populating-the-database)
- [Models](#models)
  - [Item](#item)
  - [Item add-on](#item-add-on)
  - [Killer](#killer)
    - [Killer power object](#killer-power-object)
    - [Killer imgs object](#killer-imgs-object)
  - [Killer add-on](#killer-add-on)
  - [Killer perk](#killer-perk)
  - [Killer power](#killer-power)
  - [Survivor](#survivor)
    - [Survivor imgs object](#survivor-imgs-object)
  - [Survivor perk](#survivor-perk)
- [Additional information](#additional-information)
- [Get in touch](#this-api-was-built-by-lucas-lamonier-as-a-part-of-the-razorpawproject)

## Overview

### Data structure

The data is divided into 8 collections:

- [item](#item)
- [item-addon](#item-addon)
- [killer](#killer)
- [killer-addon](#killer-addon)
- [killer-perk](#killer-perk)
- [survivor](#survivor)
- [survivor-perk](#survivor-perk)

Click on the name of the collection to see its model or [here](#models) to go to the model section.

### Name codes

This API features a code system to identify each survivor, killer, perk, add-on, or item. The code is the element's name in lowercase and without spaces or special characters. Every document in every collection has its own unique code.

This API features a code system that helps you quickly find a specific resource. A document's code is its name in lowercase, without spaces, and special characters. Accented letters are replaced. For example: `Onryō` becomes `onryo`. See more examples below.

##### Code examples

| Name                         | Code                    |
| :--------------------------- | :---------------------- |
| Élodie Rakoto                | `elodierakoto`          |
| The Onryō                    | `theonryo`              |
| Coup de Grâce                | `coupdegrace`           |
| "Restraint" - Carter's Notes | `restraintcartersnotes` |

### Field selection query

It is possible to filter which fields will be returned in your request. To do so, add a `fields` query string with the name(s) of the field(s) you want. When selecting multiple fields, separate them with commas.

Field selection is available on all routes.

`?fields=<field>`

##### Example

```http
GET /api/survivor/felixrichter?fields=name,role,perks_names
```

Returns:

```json
{
  "status": "success",
  "results": 1,
  "data": {
    "name": "Felix Richter",
    "role": "Visionary Architect",
    "perks_names": [
      "Visionary",
      "Desperate Measures",
      "Built to Last"
    ]
  }
}
```

For more details on available fields, refer to the [models](#models) section.

## Endpoints

### API route structure

Dead by API routes are divided into 3 segments: the collection name, specific or random document, and an additional parameter to retrieve documents related to the first one.

### Collection

```http
GET /api/<collection>
```

Providing only the collection name will return all of its documents. For example, `GET /api/killer` will return every single killer in the game. Note that the collection parameter is singular, passing `killers` will return an error.
[Fields](#field-selection-query) available.

### Code | Random

There are two options for the second parameter: the [code](#name-codes) or the word random.

#### Code

```http
GET /api/<collection>/<code>
```

Retrieves one single document based on the code supplied. `GET /api/survivor/felixrichter` will return Felix's document.
[Fields](#field-selection-query) available.

#### Random

```http
GET /api/item/random
```

Fetches a random sample from the given collection. The default amount is 1, but it is possible to get up to 10. In order to do that, use the amount query:

`?amount=<number>`

Passing a number below 1, higher than 10, or not a number at all, defaults to 1.

You can combo amount with [fields](#field-selection-query): `?amount=1&fields=name,description`

### Additional

Finally, the last segment retrieves data related to the collection:

- Killer: `power`, `perk`, and `addon`
- Survivor: `perk`
- Item: `addon`

⚠ Additional queries can only be used in routes that received a `<code>` parameter. It won't work for `<random>` requests.

```http
GET /api/<collection>/<code>/<additional>
```

Examples:

```http
GET /api/killer/trapper/addon
GET /api/killer/trapper/perk
GET /api/killer/trapper/power

GET /api/survivor/felixrichter/perk

GET /api/item/flashlight/addon
```

The additional queries are meant to retrieve addons, perks, and powers from specific killers/survivors/items. You can access the collections `item-addon`, `killer-addon`, `killer-perk` and `survivor-perk` to get [all documents](#collection) or [random samples](#random).
[Fields](#field-selection-query) available.

## Running the code

In order to run this API, you need:

- Git (optional) to clone the repository
  - Alternatively, you can download the code directly from the green "code" button on the top of the page
  - Read the docs on [how to get started with Git](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

- Node (to run the thing, version 18.16.1 or higher)
  - [Download and install](https://nodejs.org/en/download)

- MongoDB (the actual database)
  - This one is a little tricky and requires a considerable amount of work
  - There are two possibilites:
      1) Run locally, [some tips here](https://zellwk.com/blog/local-mongodb/), or
      2) Run it in the magical place called [_the cloud_](https://www.mongodb.com/)

## Quickstart

#### 1. Get the code

`git clone` or download the code.

#### 2. Install dependencies

- Open your favorite CLI in the root folder of the project.
- Run `npm install`
- Wait for the dependencies to install

#### 3. Add environment variables

- At the root of your project, create a file called `.env.local`
- Inside this file add 3 variables: `USERNAME`, `PASSWORD`, and `DATABASE`
- These variables are the credential that allow your application to connect with your Mongo database
- Your file should look something like this:

```txt
USERNAME=yourusername
PASSWORD=your1password2
DATABASE=mongodb+srv://....
```

#### 4. Run it

- Run `npm run dev`
- The API should be running on `http://localhost:3000/api/`
- You can build scripts to fetch data or use API testing tools such as [Postman](https://www.postman.com/) and [Insomnia](https://insomnia.rest/).


#### 5. Deploy

- To get the API online you need two services: dedicated database and a host

- For the database I recommend [MongoDB Atlas](https://www.mongodb.com/). It is extremely unlikely that you will ever go beyond their free tier.

- For hosting, there are tons of options on the internet. My go to for Next.js is obviously [Vercel](https://vercel.com/docs).

## Populating the database

This API uses the Mongoose library to handle the database. The file `src/data/db-import-script/importdevdata.js` contains one script that upload the files and other that deletes them.

This file imports dependencies, connects to the database, and reads the files with the raw data.

Note that the lines 50-57 and 71-78 are commented out. Each line refers to one collection. This way, by removing the comment toggle whether the collection should be affected or not.

Next, you need to choose which operation you want to perform. You can do that by passing an argument to the CLI command: `--import` or `--delete`.

The final command would be

```text
node src/data/db-import-script --import
```

to add the data and

```text
node src/data/db-import-script -- delete
```

The script will run and print on the log information about the status of the operation.

## Models

### Item

| Field | Type | Description |
| ----- | ---- | ----------- |
| `name` | `string` | The name of the item |
| `code` | `string` | The unique code |
| `type` | `string` | The type of item (e.g., flashlight, key) |
| `rarity` | `string` | The rarity (e.g., very rare, event, limited) |
| `description` | `string` | The in-game description text |
| `icon` | `string` | The link to the in-game inventory image of the item |

### Item add-on

| Field | Type | Description |
| ----- | ---- | ----------- |
| `name` | `string` | The name of the item add-on |
| `code` | `string` | The unique code |
| `type` | `string` | The type of item (e.g., flashlight, key) that uses this add-on |
| `rarity` | `string` | The rarity (e.g., very rare, event, limited) |
| `description` | `string` | The in-game description text |
| `icon` | `string` | The link to the in-game inventory image of the item |

### Killer

| Field | Type | Description |
| ----- | ---- | ----------- |
| `number` | `number` | A unique number that represents a killer |
| `code` | `string` | The killer's unique [code](#name-codes) |
| `name` | `string` | The name the killer is called (e.g., The Trapper) |
| `fullName` | `string` | The killer's actual name (e.g., Sally Smithson, aka The Nurse) |
| `nationality` | `string` | The killer's nationality. The Demogorgon, for example, does not have a nationality, so it returns `None (Extradimensional)`. |
| `gender` | `string` | The killer's gender. For some reason. The Demogorgon is `Not applicable (not human)`. Good for them. |
| `licensed` | `boolean` | Indicates whether the killer is an original DbD character or if it comes from another franchise. For example, `thetrapper` returns `false` and `thedemogorgon` returns `true`. |
| `dlc` | `string` | The name of the DLC in which the killer was released |
| `difficulty` | `string` | A string that indicates the overall difficulty of playing the killer |
| `realm` | `string` or `null` | The map that was released in the same DLC as the killer, returns the name of the map or `null` |
| `powerAttackType` | `string` | Indicates how the killer attacks: basic attack, traps, chainsaws, etc. |
| `weapon` | `string` | The killer's weapon's name |
| `moveSpeed` | `string` | The speed the killer moves normally, the string is the number followed by the unit, e.g., `4.6 m/s`. Michael Myers' speed is a longer string that shows his move speed at every level of Evil Within. |
| `terrorRadius` | `string` | The killer's terror radius followed by the unit, `32 m` |
| `height` | `string` | The killer's height, instead of a unit, the possible values are `Short`, `Average`, and `Tall` |
| `perks_names` | `array` | An array of three strings, which are the names of the killer's perks |
| `power` | `object` | An object with the killer power's id, name, and code, [more details below](#killer-power) |
| `overview` | `string` | A quick summary of the killer |
| `backstory` | `string` | The killer's lore |
| `imgs` | `object` | An object containing the killer's portrait and store image, [more details below](#killer-imgs)

##### Killer power object

| Field | Type | Description |
| --- | --- | --- |
| `powerId` | `number` | A unique number that represents the killer's power |
| `powerName` | `string` | The name of the power |
| `powerCode` | `string` | The power's code |

##### Killer imgs object

| Field | Type | Description |
| --- | --- | --- |
| `portrait` | `string` | The link to the image that identifies the killer on the character selection grid |
| `store` | `string` | The link to the image that is shown on the background of the in-game store when browsing items for the killer |

### Killer add-on

| Field | Type | Description |
| --- | --- | --- |
| `killerId` | `number` | The number that identifies which killer the add-on belongs to |
| `killerCode` | `string` | The code that identificas which killer the add-on belongs to |
| `powerCode` | `string` | The code of the power the add-on belongs to |
| `name` | `string` | The add-on's name |
| `addonCode` | `string` | The add-on's code |
| `rarity` | `string` | The add-on's rarity |
| `description` | `string` | The add-on's in-game description |
| `icon` | `string` | The link to the add-on's in-game icon |

### Killer perk

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` | The perk's unique id number |
| `name` | `string` | The perk's number |
| `code` | `string` | The perk's code |
| `killerCode` | `string` | The code of the killer the perk belongs to |
| `killerName` | `string` | The name of the killer the perk belongs to |
| `description` | `string` | The perk's in-game description |
| `icon` | `string` | The link to the perk's in-game icon |

### Killer power

| Field | Type | Description |
| --- | --- | --- |
| `powerId` | `number` | The power's unique id number |
| `powerName` | `string` | The name of the killer's power |
| `powerCode` | `string` | The code of the killer's power |
| `killerCode` | `string` | The name of the killer the power belongs to |
| `description` | `string` | The killer power's in-game description |
| `powerImg` | `array` | An array that contains one of more strings, each representing a link to an image of the killer's power. Some killers, such as The Shape, have more than one image that represents different states of their power. |

### Survivor

| Field | Type | Description |
| ----- | ---- | ----------- |
| `number` | `number` | A unique number that represents a survivor |
| `code` | `string` | The survivor's unique [code](#name-codes) |
| `name` | `string` | The survivor's name |
| `nationality` | `string` | The survivor's nationality |
| `licensed` | `boolean` | Indicates whether the survivor is an original DbD character or if it comes from another franchise. For example, `felixrichter` returns `false` and `ashjwilliams` returns `true`. |
| `dlc` | `string` | The name of the DLC in which the survivor was released |
| `difficulty` | `string` | A string that indicates the overall difficulty of playing the survivor |
| `perks_names` | `array` | An array of three strings, which are the names of the survivor's perks |
| `overview` | `string` | A quick summary of the survivor |
| `backstory` | `string` | The survivor's lore |
| `imgs` | `object` | An object containing the killer's portrait and store image, [more details below](#survivor-imgs)

##### Survivor imgs object

| Field | Type | Description |
| --- | --- | --- |
| `portrait` | `string` | The link to the image that identifies the survivor on the character selection grid |
| `store` | `string` | The link to the image that is shown on the background of the in-game store when browsing items for the survivor |


### Survivor perk

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` | The perk's unique id number |
| `name` | `string` | The perk's number |
| `code` | `string` | The perk's code |
| `survivorCode` | `string` | The code of the survivor the perk belongs to |
| `survivorName` | `string` | The name of the survivor the perk belongs to |
| `description` | `string` | The perk's in-game description |
| `icon` | `string` | The link to the perk's in-game icon |







## Additional information

#### This API was built by [Lucas Lamonier](https://www.lucaslamonier.com/) as a part of the [RazorPaw<img src="https://github.com/LrLamonier/LrLamonier/blob/main/readme-imgs/rplogo.png?raw=true" width="19" height="19" />Project](https://www.razorpaw.nexus/).

> Hi! I'm a full-stack web developer that loves to use Next.js and the MERN stack to build fun things. If you have an idea or a project that you would like to create, send me a message, maybe we can do something cool together. If you don't and just want to chat, go for it! 😄

You can reach me at:

[<img src="https://github.com/LrLamonier/LrLamonier/blob/main/readme-imgs/mail.png?raw=true" width="20" height="20" /> hello@lucaslamonier.com](mailto:hello@lucaslamonier.com)

[<img src="https://github.com/LrLamonier/LrLamonier/blob/main/readme-imgs/github.png?raw=true" width="20" height="20" /> /LrLamonier at GitHub](https://github.com/LrLamonier)

[<img src="https://github.com/LrLamonier/LrLamonier/blob/main/readme-imgs/linkedin.png?raw=true" width="20" height="20" /> /lamonier at LinkedIn](https://www.linkedin.com/in/lamonier/)

###### Thanks a lot, Behaviour people. Y'all're awesome!