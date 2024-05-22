export const color = [
  'red',
  'lightred',
  'blue',
  'lightblue',
  'green',
  'lightgreen',
  'orange',
  'lightorange',
  'yellow',
  'lightyellow',
  'purple',
  'lightpurple',
  'pink',
  'lightpink',
  'teal',
  'lightteal',
  'cyan',
  'lightcyan',
  'magenta',
  'lightmagenta',
  'brown',
  'lightbrown',
  'gray',
  'lightgray',
];

  
  export const randomColor = () => {
    const index = Math.floor(Math.random() * color.length);
    return color[index];
  };
  
  export const capitalizeFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
