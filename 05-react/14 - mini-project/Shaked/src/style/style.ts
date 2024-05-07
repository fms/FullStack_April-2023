export const color = [
    'red',
    'blue',
    'green',
    'orange',
    'yellow',
    'purple',
    'pink',
    'teal',
    'cyan',
    'magenta',
    'brown',
    'gray',
    'black',
  ];
  
  export const randomColor = () => {
    const index = Math.floor(Math.random() * color.length);
    return color[index];
  };
  
  export const capitalizeFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };