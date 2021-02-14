/*PSEUDO CODE
1.User enters birthday in input. Grab the input and hold the value;
2.user presses button; Event listener check for the click and goes down to first function.
3.Reveal your true self title will be displayed none; 
4.zodiac will appear with information on the zodiac based on date.
5.conditional based on date from input to change once the user changes dates. 
6.Enjoy the small victories.
*/

document.querySelector('#button').addEventListener('click', zodiac)
document.querySelector('#button').addEventListener('click', removeTitle)

function zodiac(){
  var month = document.querySelector('#monthChoice').value
  var day = document.querySelector('#day').value
  var lengthError = day.toString().length

  if(lengthError > 2){
      document.querySelector('p').innerText = 'Please Enter A REAL Birthday!!!'
      document.querySelector('.horoscope p').style.display = 'none'
      document.querySelector('.horoscopeImg').style.visibility = 'none'
    }
    
  // Capricorn - Dec 22 - Jan 19
  if(month == 12 && day >= 22 && day <= 31 || month == 1 && day >= 1 &&day <= 19){
    document.querySelector('.text').innerText = "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time. They will learn from their mistakes and get to the top based solely on their experience and expertise."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./images/capricorn.jpg'>"
  }
  //Aquarius - Jan 20 - Feb 18
  else if(month == 1 && day >= 20 && day <= 31 || month == 2 && day >= 1 && day <= 18){
    document.querySelector('.text').innerText = "Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems.Although they can easily adapt to the energy that surrounds them, Aquarius-born have a deep need to be some time alone and away from everything, in order to restore power. People born under the Aquarius sign, look at the world as a place full of possibilities."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./images/aquarius.jpg'>"
  }
  //Pisces - Feb 19 - Mar 20
  else if(month == 2 && day >= 19 && day <= 28 || month == 3 && day >= 1 && day <= 20){
    document.querySelector('.text').innerText = "Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back. Pisces is a Water sign and as such this zodiac sign is characterized by empathy and expressed emotional capacity."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./images/pisces.jpg'>"
  }
  // Aries - Mar 21 - Apr 19
  else if(month == 3 && day >= 21 && day <= 31 || month == 4 && day >= 1 && day <= 19){
    document.querySelector('.text').innerText = "As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings. Thanks to its ruling planet Mars and the fact it belongs to the element of Fire (just like Leo and Sagittarius), Aries is one of the most active zodiac signs. It is in their nature to take action, sometimes before they think about it well."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./images/aries.jpg'>"
  }
  //Taurus - Apr 20 - May 20
  else if(month == 4 && day >= 20 && day <= 30 || month == 5 && day >= 1 && day <= 20){
    document.querySelector('.text').innerText = "Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures. People born with their Sun in Taurus are sensual and tactile, considering touch and taste the most important of all senses. Stable and conservative, this is one of the most reliable signs of the zodiac, ready to endure and stick to their choices until they reach the point of personal satisfaction."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./images/taurus.jpg'>"
  }
  //Gemini - May 21 - June 21
  else if(month == 5 && day >= 21 && day <= 31 || month == 6 && day >= 1 && day <= 21){
    document.querySelector('.text').innerText = "Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless. They are fascinated with the world itself, extremely curious, with a constant feeling that there is not enough time to experience everything they want to see."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./images/gemini.jpg'>"
  }
  //Cancer - June 22 - July 22
  else if(month == 6 && day >= 22 && day <= 30 || month == 7 && day >= 1 && day <= 22){
    document.querySelector('.text').innerText = "Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close. Those born with their Sun in Cancer are very loyal and able to empathize with other people's pain and suffering."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./images/cancer.jpg'>"
  }
  // July 23 - Aug 22
  else if(month == 7 && day >= 23 && day <= 31 || month == 8 && day >= 1 && day <= 22){
    document.querySelector('.text').innerText = "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to. There is a specific strength to a Leo and their \"king of the jungle\" status. Leo often has many friends for they are generous and loyal. Self-confident and attractive, this is a Sun sign capable of uniting different groups of people and leading them as one towards a shared cause, and their healthy sense of humor makes collaboration with other people even easier."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./images/leo.jpg'>"
  }
  // Aug 23 - Sept 22
  else if(month == 8 && day >= 23 && day <= 31 || month == 9 && day >= 1 && day <= 22){
    document.querySelector('.text').innerText = "Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world. This is a sign often misunderstood, not because they lack the ability to express, but because they won’t accept their feelings as valid, true, or even relevant when opposed to reason. The symbolism behind the name speaks well of their nature, born with a feeling they are experiencing everything for the first time."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./images/virgo.jpg'>"
  }
  // Sept 23 - Oct 23
  else if(month == 9 && day >= 23 && day <= 30 || month == 10 && day >= 1 && day <= 23){
    document.querySelector('.text').innerText = "People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves. These individuals are fascinated by balance and symmetry, they are in a constant chase for justice and equality, realizing through life that the only thing that should be truly important to themselves in their own inner core of personality. This is someone ready to do nearly anything to avoid conflict, keeping the peace whenever possible"
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./images/libra.jpg'>"
  }
  // Oct 24 - Nov 21
  else if(month == 10 && day >= 24 && day <= 31 || month == 11 && day >= 1 && day <= 21){
    document.querySelector('.text').innerText = "Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness.Scorpio is a Water sign and lives to experience and express emotions. Although emotions are very important for Scorpio, they manifest them differently than other water signs. In any case, you can be sure that the Scorpio will keep your secrets, whatever they may be."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./images/scorpio.jpg'>"
  }
  // Nov 22 - Dec 21
  else if(month == 11 && day >= 22 && day <= 30 || month == 12 && day >= 1 && day <= 21){
    document.querySelector('.text').innerText = "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life.Sagittarius is extrovert, optimistic and enthusiastic, and likes changes. Sagittarius-born are able to transform their thoughts into concrete actions and they will do anything to achieve their goals."
    document.querySelector('.horoscopeImg').innerHTML = "<img src='./images/sagittarius.jpg'>"
  }
  else {
      document.querySelector('p').innerText = 'Please Enter Your Birthday'
  }
}

function removeTitle(){
  document.querySelector('h4').style.display = 'none'
  document.querySelector('.text').style.display = 'block'
  document.querySelector('.horoscope').style.display = 'block'
}
