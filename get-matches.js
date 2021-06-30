
exports.handler = function(context, event, callback) {

    const compatibility_list = event.compatibility_list.toLowerCase().split(", ")
    console.log("this is the compatibility list", compatibility_list);
    let match = {};
    
    const celebrities = {
      "aries": 
        [
          {
            "name": "Hayley Kiyoko",
            "description": "This Aries does it all - singer, songwriter, actresss, and amazing dancer. Ask Haley to show you her moves on the dance floor at Gossip Grill in San Diego California" 
          }
        ],
      "taurus": [
        {
          "name": "Lena Waithe",
          "description": "Taurus writer of our dreams 😍 while she is from Chicago, you should see if she's up for a trek to Walker's Pint in Milwakee, Wisconsin"
        }
      ],
      "gemini": [
        {
          "name": "Lea DeLaria",
          "description": "You'll have no problem chatting up this Gemini at Cubbyhole in New York. I know she's one to frequent this classic wateringhole 🍻"
        }
      ],
      "cancer": [
        {
          "name": "Megan Rapinoe",
          "description": "While this Cancer is 1/2 of our favorite sporty couple, she may be up for taking you and your friends out to the Wildrose in Seattle, Washington"
        },
        // {
        //   "name": "Aubrey Plaza",
        //   "description": "This Cancer Parks and Recs star would love if you asked her out to The Backdoor in Bloomington, Indiana"
        // }
      ],
      "leo": [
        {
          "name": "Cara Delevinge",
          "description": "Our advice, let Cara's inner Leo really shine on the dance floor Boycott Bar in Phoenix, Arizona"
        }
      ],
      "virgo": [
        {
          "name": "Margaret Cho",
          "description": "See if this hilarious Virgo would want to go back to her hometown, San Francisco, to hit up Jolene's or Wildside West!"
        }
      ],
      "libra": [
        {
          "name": "Tessa Thompson",
          "description": "I am 💯 positive Tessa Thompson aka Valkyrie would choose you over Thor. Ask her to Ginger's -- we already know she loves Brooklyn"
        }
      ],
      "scorpio": [
        {
          "name": "Amandla Stenberg",
          "description": "From starring in the Hate U Give and Beyonce's Lemonade, this Scorpio is definitely in 'a league of her own'. Speaking of which, you should ask them ALOHO in D.C. 😏"
        }
      ],
      "sagittarius": [
        {
          "name": "Raven-Symone",
          "description": "Even though she's recenctly married, I think she would say yes to My Sister's Room in Atlanta, Georgia 🎶 it's the future I can seeeee 🎶"
        }
      ],
      "capricorn": [
        {
          "name": "Hunter Schafer",
          "description": "This Capricorn would be ~eurphoric~ if you asked her to Henrietta Hudson's in New York"
        }
      ],
      "aquarius": [
        {
          "name": "Megan Thee Stallion",
          "description": "Don't let the typical Aquarian airy-ness fool you, our favorite rapper would love to take you to Pearl Bar in her hometown, Houston."
        }
      ],
      "pisces": [
        {
          "name": "Ruby Rose",
          "description": "This sporty Scorpio has been spending alot of time in Colorado this past year. You should ask her if she's been to Blush&Blu in Denver yet 😉"
        }
      ]
    };
    
    // pick sign from compatibility array  
    match.sign = compatibility_list[Math.floor(Math.random()*compatibility_list.length)]
    console.log("this is the sign", match.sign)
    
    for (const prop in celebrities) {
      if(prop === match.sign) {
        match.name = celebrities[prop][0].name
        match.description = celebrities[prop][0].description
        console.log(match)
      }
    }
    
    return callback(null, match);
  };
