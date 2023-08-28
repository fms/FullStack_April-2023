- A variable name is case sensitive:
```javascript
var firstName;
var FirstName;  // This is a different variable.
```

- A variable name can't start with a digit:
```javascript
var 1name;      // invalid
```

- Space and hyphen are invalid in a variable name:
```javascript
var this-name;  // invalid - actual minus sign
```

- Can't use a reserved word for a variable name:
```javascript
var if = 5;     // Invalid: if is a reserved word
```

- Naming convention: camelCase  
  * First word starts with lowercase  
  * Each following word is capitalized
```javascript
var thisIsAnotherVariableWithALongName;
```