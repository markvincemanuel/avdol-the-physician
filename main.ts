const inputEl = document.getElementById("birthdate-input")
const findBtn = document.getElementById("find-button")
const noticeEl = document.getElementById("notice")
const firstCard = document.getElementById("card1")
const secondCard = document.getElementById("card2")
const firstCardImage = document.getElementById("first-card-image")
const secondCardImage = document.getElementById("second-card-image")




const cardList = [
  'The Fool',
  'The Magician',
  'The High Priestess',
  'The Empress',
  'The Emperor',
  'The Hierophant',
  'The Lovers',
  'The Chariot',
  'Strength',
  'The Hermit',
  'Wheel of Fortune',
  'Justice',
  'The Hanged Man',
  'Death',
  'Temperance',
  'Devil',
  'The Tower ',
  'The Star',
  'The Moon',
  'The Sun',
  'Judgment',
  'The World'
]


const cardImageUrl = [
  '/tarrot-card/0_OVATarot_TheFool.png',
  '/tarrot-card/1_OVATarot_TheMagician.png',
  '/tarrot-card/2_OVATarot_TheHighPriestess.png',
  '/tarrot-card/3_OVATarot_TheEmpress.png',
  '/tarrot-card/4_OVATarot_TheEmperor.png',
  '/tarrot-card/5_OVATarot_TheHierophant.png',
  '/tarrot-card/6_OVATarot_TheLover.png',
  '/tarrot-card/7_OVATarot_TheChariot.png',
  '/tarrot-card/8_OVATarot_Strength.png',
  '/tarrot-card/9_OVATarot_TheHermit.png',
  '/tarrot-card/10_OVATarot_WheelOfFortune.png',
  '/tarrot-card/11_OVATarot_Justice.png',
  '/tarrot-card/12_OVATarot_TheHangedMan.png',
  '/tarrot-card/13_OVATarot_Death.png',
  '/tarrot-card/14_OVATarot_Temperance.png',
  '/tarrot-card/15_OVATarot_TheDevil.png',
  '/tarrot-card/16_OVATarot_TheTower.png',
  '/tarrot-card/17_OVATarot_TheStar.png',
  '/tarrot-card/18_OVATarot_TheMoon.png',
  '/tarrot-card/19_OVATarot_TheSun.png',
  '/tarrot-card/20_OVATarot_Judgement.png',
  '/tarrot-card/21_OVATarot_TheWorld.png'
]






















findBtn?.addEventListener('click', ()=>{
  if(inputEl.value === ''){
    noticeEl?.textContent = 'Enter your birth date'
    return
  }
  addAllNumbers(inputEl.value)


})



function addAllNumbers(birthdate: string) {
  // make the string number and remove the - sign
  let birthdateNumber = parseInt(inputEl.value.replace(/-/g, ''))
  let sum1 = addIndividualDigit(birthdateNumber)
  let sum2 = 0
  if (sum1 < 10) {
    sum2 = sum1 - 1 + 10

  }else{
    sum2 = addIndividualDigit(sum1)
  }

  firstCard.textContent = cardList[sum1]
  secondCard.textContent = cardList[sum2]
  firstCardImage.src = cardImageUrl[sum1]
  secondCardImage.src =  cardImageUrl[sum2]
  

  noticeEl?.textContent = "Stand Identified!!!"
  // console.log(birthdate)
  // console.log(typeof birthdate)

  // console.log(sum1)
  // console.log(sum2)

}


function addIndividualDigit(number: number) {
  let sum = 0
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  // In this code, a variable sum is initialized to 0. Then, using a while loop, the code iteratively extracts the last digit of the number using the modulus operator (%) and adds it to the sum. The number is then divided by 10 using Math.floor() to remove the last digit.

  // Check if sum is greater than 21
  while (sum > 21) {
  var tempSum = 0;

    while (sum > 0) {
    tempSum += sum % 10;
    sum = Math.floor(sum / 10);
    }

    sum = tempSum;
  }
  return sum
}


