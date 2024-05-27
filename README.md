## Desirehub

<br>

This is an online web service to manage wish lists using the Json description method.  
Created and released for private use.  
But if you want to use it, please clone it from github.

<br>

```batch
git clone https://github.com/Sakamochanq/DesireHub.git
```

## Setup

<br>

Clone this repository.  
Describe what you want yourself based on [**Template.json**](
https://github.com/Sakamochanq/DesireHub/blob/master/assets/list/Template.json).  
You will need to put the json file in the following directory.  

`./assets/list/data.json`

```json
[
  {
    "item": "Name",
    "value": "0",
    "status": 0
  }
]
```

<br>

## Json

<br>

#### item
Write the name of what you want as a `string`.

#### value
Describe the number of items you want with an `string`.

#### status
It is described by a numeric value of type `int` from 1 to 4.
| status | priority |
|:---:|:------ |
| 1 | high |
| 2 | medium |
| 3 | low |
| 4 | none |

<br>

## License

<br>

Released under the [MIT](https://github.com/Sakamochanq/DesireHub/blob/master/LICENSE) license.

Developer : [Sakamochanq](https://github.com/Sakamochanq)
