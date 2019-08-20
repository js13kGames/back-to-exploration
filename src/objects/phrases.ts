export class Phrases {
  static shit: string[] = [
    'The mistake of the dictatorship was to torture without killing.',
    'I\'m not a rapist, but if it were, \nI wouldn\'t rape you because you don\'t deserve.',
    'I wouldn\'t enter an airplane flown by a quota\n pilot or accept to be operated by a quota doctor.',
    'The scum of the world is arriving in Brazil.',
    'I\'m in favor of the military regime.',
    'If one\'s son begins acting kind of gay, \nthen when he is spanked he\'ll change his behavior.',
    'I used that housing allowance money to fuck people. \nAre you satisfied? Because that\'s the answer you deserve.',
    'Pinochet should have killed more people.',
    'It\'s my advice and I do it: I evade all the taxes I can.',
    'We\'re going to shoot all the PT supporters in Acre.',
    'I think execution by firing squad is even an \nhonorable thing to certain people.',
    'Quilombola does not even serve to breed.',
    'I defend torture.',
    'I will not fight against it nor discriminate, but if \nI see two men kissing on the street, I\'ll beat them up.',
    'We\'re going to put an end to all the activisms of Brazil.',
    'A policeman who doesn’t kill isn’t a policeman.',
    'Jesus Christ was not totally passive. He drove the money changers from the temple. \nIf he had a firearm, he\'d have used it.',
    'I never hit my ex-wife. But many times I wanted to shoot her.',
    'Just stop eating a little less. You talk to me about environmental pollution. \nJust poop every other day, which improves our lives a lot.',
    'People who have more culture have fewer children. I am an exception to the rule, \nI have five, right? But as a rule this is it.',
    'I won! The press has to understand that I won. Me, Johnny Bravo Jair Bolsonaro, \nwon the fuck! Damn it! Let\'s understand this.',
    'Bad Brazilians cannot disclose lying numbers. [...] \nIt is a bad advertisement for Brazil abroad when inaccurate data are released.',
    'One day, if the president of the OAB wants to know how his father \ndisappeared in the military, I\'ll tell him.',
    'Who wants to come here to have sex with a woman, feel free.',
    'What\'s golden shower?',
    'With all the devastation you accuse us of being and doing in the past, \nthe Amazon would be gone.',
    'Only vegans who eat only vegetables (consider the environmental issue important).',
    'Do you want me to be a Vaseline? A politically correct one? Or exempt? (...) \nThe answer is straightforward.'
  ];

  static getRandom() {
    return this.shit[Math.round(Math.random() * 25) + 1];
  }  
}
