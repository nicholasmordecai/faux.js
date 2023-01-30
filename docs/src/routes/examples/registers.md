## Registers


### Creating Registers

```ts
import { Register, Math, Identification } form 'tseudo';

const userRegister = new Register({
    name: Identification.fullName,
    age: Math.int({min: 10, max: 95});
});

// this will also result in the same typed register
const userObj = {
    name: Identification.fullName,
    age: Math.int({min: 10, max: 95});
}

const userRegister = new Register(userObj);
```

### Building
Building the register is running the register through a traversal of it's properties and running each generator one at a time. 

```ts
...
const user1 = userRegister.build();
```
>Notice how the user1 has the correct typings for the given userObject

### Adding
It is possible to add additional generators to a register at some other point in compilation or in run time. It's advisable to avoid this where ever possible as it complicates and may even negate the typings.

```ts
import { Address } from 'tseudo';

...
userRegister.add('city', Address.city);

const user2 = userRegister.build();
{
    name: 'John Smith',
    age: 61,
    city: 'London'
}
```

Notice that the expected type only contains the name and age property. You could cast the userRegister or add an additional property to the user2 variable.

... to be continued.