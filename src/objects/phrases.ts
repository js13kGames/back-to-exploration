export class Phrases {
  static quote: string[] = [
    'The mistake of the dictatorship was to torture without killing.',
    'Pinochet should have killed more people.',
    'I think execution by firing squad is even an \nhonorable thing to certain people.',
    'A policeman who doesn’t kill isn’t a policeman.',
    'Just stop eating a little less. You talk to me about environmental pollution. \nJust poop every other day, which improves our lives a lot.',
    'Who wants to come to my country to have sex with a woman, feel free.',
    'Only vegans who eat only vegetables (consider the environmental issue important).',
    'Guns don\'t kill people, people kill people',
    'We are exploring very slowly. How about inventing dynamite?',
    'Blood alone literally moves the wheels of history.',
    'Neutrals and lukewarms do not make history.',
    'We have no political prisons. We have political internal exiles.',
    'Peace is absurd: Fascism does not believe in it.',
    'If one\'s son begins acting kind of gay, \nthen when he is spanked he\'ll change his behavior.',
    'I will not fight against it nor discriminate, but if \nI see two men kissing on the street, I\'ll beat them up.',
    'War is to man what maternity is to a woman.',
    'I am profoundly fascinated by cruelty, fear, horror and death.',
    'The solution often turns out more beautiful than the puzzle.',
    'Justice is to be found only in the imagination.',
    'It was not curiosity that killed the goose who laid the golden egg, \nbut an insatiable greed that devoured common sense.',
    'Our god is Mammon. Mammon above all and everyone.',
    'I never hit my ex-wife. But many times I wanted to shoot her.',
    'There is no fundamental difference between man and animals \nin their ability to feel pleasure and pain, happiness, and misery.',
    'We are always slow in admitting any great change of which we \ndo not see the intermediate steps.',
    'Natural Selection almost inevitably causes much Extinction of the \nless improved forms of life and induces what I have called Divergence of Character.',
    'Ignorance more frequently begets confidence than does knowledge.',
    'Truth is born into this world only with pangs and tribulations, \nand every fresh truth is received unwillingly.',
    'Weak people revenge. Strong people forgive. Intelligent people ignore.',
    'Be kind to people who are different from you.',
    'You can\'t use an old map to explore a new world.'
  ];

  static getRandom() {
    return this.quote[Math.round(Math.random() * 30) + 1];
  }  
}
