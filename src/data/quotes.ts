
export interface Quote {
  id: string;
  text: string;
  author: string;
  category: string;
}

export type Category = {
  id: string;
  name: string;
};

export const categories: Category[] = [
  { id: 'success', name: 'Success' },
  { id: 'mindfulness', name: 'Mindfulness' },
  { id: 'motivation', name: 'Motivation' },
  { id: 'love', name: 'Love' },
  { id: 'happiness', name: 'Happiness' },
  { id: 'wisdom', name: 'Wisdom' }
];

export const quotes: Quote[] = [
  {
    id: '1',
    text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
    category: 'success'
  },
  {
    id: '2',
    text: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
    category: 'success'
  },
  {
    id: '3',
    text: 'If life were predictable it would cease to be life, and be without flavor.',
    author: 'Eleanor Roosevelt',
    category: 'wisdom'
  },
  {
    id: '4',
    text: 'Life is what happens when you\'re busy making other plans.',
    author: 'John Lennon',
    category: 'wisdom'
  },
  {
    id: '5',
    text: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    author: 'Mother Teresa',
    category: 'love'
  },
  {
    id: '6',
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
    category: 'success'
  },
  {
    id: '7',
    text: 'Don\'t judge each day by the harvest you reap but by the seeds that you plant.',
    author: 'Robert Louis Stevenson',
    category: 'mindfulness'
  },
  {
    id: '8',
    text: 'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
    category: 'motivation'
  },
  {
    id: '9',
    text: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    author: 'Benjamin Franklin',
    category: 'wisdom'
  },
  {
    id: '10',
    text: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
    author: 'Helen Keller',
    category: 'love'
  },
  {
    id: '11',
    text: 'It is during our darkest moments that we must focus to see the light.',
    author: 'Aristotle',
    category: 'motivation'
  },
  {
    id: '12',
    text: 'Whoever is happy will make others happy too.',
    author: 'Anne Frank',
    category: 'happiness'
  },
  {
    id: '13',
    text: 'You will face many defeats in life, but never let yourself be defeated.',
    author: 'Maya Angelou',
    category: 'motivation'
  },
  {
    id: '14',
    text: 'The purpose of our lives is to be happy.',
    author: 'Dalai Lama',
    category: 'happiness'
  },
  {
    id: '15',
    text: 'Life is really simple, but we insist on making it complicated.',
    author: 'Confucius',
    category: 'wisdom'
  },
  {
    id: '16',
    text: 'Love the life you live. Live the life you love.',
    author: 'Bob Marley',
    category: 'love'
  },
  {
    id: '17',
    text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston Churchill',
    category: 'success'
  },
  {
    id: '18',
    text: 'Happiness is not something ready-made. It comes from your own actions.',
    author: 'Dalai Lama',
    category: 'happiness'
  },
  {
    id: '19',
    text: 'Be present in all things and thankful for all things.',
    author: 'Maya Angelou',
    category: 'mindfulness'
  },
  {
    id: '20',
    text: 'Your time is limited, so don\'t waste it living someone else\'s life.',
    author: 'Steve Jobs',
    category: 'motivation'
  },
  {
    id: '21',
    text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    author: 'Ralph Waldo Emerson',
    category: 'mindfulness'
  },
  {
    id: '22',
    text: 'Happiness is when what you think, what you say, and what you do are in harmony.',
    author: 'Mahatma Gandhi',
    category: 'happiness'
  },
  {
    id: '23',
    text: 'The only thing we have to fear is fear itself.',
    author: 'Franklin D. Roosevelt',
    category: 'motivation'
  },
  {
    id: '24',
    text: 'Love is composed of a single soul inhabiting two bodies.',
    author: 'Aristotle',
    category: 'love'
  },
  {
    id: '25',
    text: 'The secret of success is to do the common thing uncommonly well.',
    author: 'John D. Rockefeller Jr.',
    category: 'success'
  },
  {
    id: '26',
    text: 'In the midst of winter, I found there was, within me, an invincible summer.',
    author: 'Albert Camus',
    category: 'mindfulness'
  },
  {
    id: '27',
    text: 'The opposite of love is not hate; it\'s indifference.',
    author: 'Elie Wiesel',
    category: 'love'
  },
  {
    id: '28',
    text: 'Happiness is not a goal; it is a by-product.',
    author: 'Eleanor Roosevelt',
    category: 'happiness'
  },
  {
    id: '29',
    text: 'Success is stumbling from failure to failure with no loss of enthusiasm.',
    author: 'Winston Churchill',
    category: 'success'
  },
  {
    id: '30',
    text: 'Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.',
    author: 'Bil Keane',
    category: 'mindfulness'
  }
];
