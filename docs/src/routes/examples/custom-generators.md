## Custom Generators

Generators are simply a self contained function that returns a value. The one below picks a random row, then a random seat from a nested array simulating a 3-3-3 layout found on most modern airlines.
```ts
import { Math, Util } from 'tseudo';

const seats = [['a','b','c'], ['d','e','f'], ['g','h','i']];
const rows = { min: 1, max: 57 };

// Pick a random seat from an aeroplane
function randomSeatAllocation(): {seat: string, row: number} {
    const row = Math.int(rows);
    const block = Util.rngFromArray(seats);
    const seat = Util.rngFromArray(block);
    return {seat, row};
}
```


### Using the customer generator within a register
Once the generator has been written, adding it into a register is as simple as using any other generator provided with the library.

```ts
import { Identification, Math, Register } form 'tseudo';

const bookingRegister = new Register({
    name: Identification.fullName,
    seatAllocation: randomSeatAllocation
});

const firstBooking = bookingRegister.build();
const secondBooking = bookingRegister.build();
...
```