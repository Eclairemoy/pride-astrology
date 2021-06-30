
exports.handler = function(context, event, callback) {
    let compatibility_list = {
        "aries": ["Leo", "Sagittarius"],
        "taurus": ["Virgo", "Capricorn"],
        "gemini": ["Libra", "Aquarius"],
        "cancer": ["Scorpio", "Pisces"],
        "leo": ["Aries", "Sagittarius"],
        "virgo": ["Taurus", "Capricorn"],
        "libra": ["Gemini", "Aquarius"],
        "scorpio": ["Cancer", "Pisces"],
        "sagittarius": ["Aries", "Leo"],
        "capricorn": ["Taurus", "Virgo"],
        "aquarius": ["Gemini", "Libra"],
        "pisces": ["Cancer", "Scorpio"]
    }
    
    const sign = event.sign.toLowerCase().split(" ")[0];
    let compatible_signs = {};
    for (const property in compatibility_list) {
      console.log(`${property}: ${compatibility_list[property]}`);
      if(sign === property) {
        compatible_signs.list = compatibility_list[property]
        compatible_signs.list = compatible_signs.list.join(', ')
        console.log(compatible_signs)
        return callback(null, compatible_signs);
      }
    }
   
};
