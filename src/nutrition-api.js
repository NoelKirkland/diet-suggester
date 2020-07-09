export async function getFood(food) {
    try {
      let response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging&ingr=${food}&app_id=2b2666a9&app_key=8704a2c1fb5777a097e8e7f564118326`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        console.log(response.status, response.ok);
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
      } catch(error) {
        return false;
      }
  }

export function toOunces(caloriesIn100Grams){
  return ((caloriesIn100Grams/100)*28.3495).toFixed();
}
