export const options = [
  {
    key: 'let',
    label: 'let',
    desc: 'let declares a block scope local variable, optionally initializing it to a value.',
    link:'Statements/let',
    code: `let <span class="yellow">a</span> = 10;`,
    version: 'ES6'
  },
  {
    key: 'const',
    label: 'const',
    desc: "Constants are block-scoped, much like variables defined using the let keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared.",
    link:'Statements/const',
    code: `const <span class="yellow">a</span> = 10;`,
    version: 'ES6'
  },
  {
    key: 'block-scope',
    label: 'Block scope',
    desc: 'A block statement (or compound statement in other languages) is used to group zero or more statements.',
    link:'Statements/block',
    code: `function sum () {<br /><span>&nbsp;&nbsp;</span>let <span class="yellow">x</span> = 0; let <span class="yellow">y</span> = 1;<br /><span>&nbsp;&nbsp;</span>if (true) {<br /><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>let <span class="yellow">x</span> = 1; // only inside this 'if'<br /><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>let <span class="yellow">y</span> = 1;<br /><span>&nbsp;&nbsp;</span>}<br />}`,
      version: 'ES6'
  },
  {
    key: 'array-destructuring',
    label: 'Array destructuring',
    desc: 'Array destructuring was introduced in ES6',
    link:'Operators/Destructuring_assignment#Array_destructuring',
    code: `const [ <span class="yellow">a</span>, <span class="yellow">b</span> ] = [<span class="yellow">'foo'</span>, <span class="yellow">'bar'</span>];`,
    version: 'ES6'
  },
  {
    key: 'object-destructuring',
    label: 'Object destructuring',
    desc: 'Object destructuring was introduced in ES6',
    link:'Operators/Destructuring_assignment#Object_destructuring',
    code: `const { <span class="yellow">a</span>, <span class="yellow">b</span> } = {<br /><span>&nbsp;&nbsp;</span><span class="yellow">a</span>: 'Array',<br /><span>&nbsp;&nbsp;</span><span class="yellow">b</span>: 'Boolean'<br />}`,
    version: 'ES6'
  },
  {
    key: 'nullish-coalescing-operator',
    label: 'Nullish Coalescing Operator',
    desc: 'Nullish Coalescing Operator was introduced in ES2021. This works a little different from the logical-or-operator (||) as the second argument is only returned if the first argument is null or undefined',
    link:'Operators/Nullish_coalescing_operator',
    code: `let <span class="yellow">a</span> = 0 && 111;<br />let <span class="yellow">b</span> = '' && 'backup string';<br />let <span class="yellow">aor</span> = 0 || 111;<br />let <span class="yellow">bor</span> = '' || 'backup string'; <br /><br />// Where the results will be:<br />a=0<br />aor=111<br />b=''<br />bor='backup string'`,
    version: 'ES2021'
  },
  {
    key: 'bigint',
    label: 'BigInt',
    desc: 'BigInt can represent integers large than 9007199254740991 (which is the limit for number and represented in Number.MAX_SAFE_INTEGER). BigInts can be created by adding a n at the end of the number or by using the BigInt()-Function.',
    link:'Global_Objects/BigInt',
    code: `const <span class="yellow">largeNumber</span> = 9999999999999999999999999n;<br />const <span class="yellow">notSoLarge</span> = BigInt(555);`,
    version: 'ES6'
  },
  {
    key: 'optional-chaining',
    label: 'Optional chaining',
    desc: 'Optional chaining (?.) works like classic chaining (.) but instead of throwing an error if an element is nullish the optional chaining will return undefined.',
    link:'Operators/Optional_chaining',
    code: `const <span class="yellow">car</span> = {<br />&nbsp;&nbsp;&nbsp;&nbsp;<span class="yellow">fuel</span>: 'electricity',<br />&nbsp;&nbsp;&nbsp;&nbsp;<span class="yellow">tires</span>: 4<br />};<br />let <span class="yellow">fuel</span> = car.fuel; // Results in "fuel = 'electricity'"<br />let <span class="yellow">clutch</span> = car.clutch?.type; // Results in "clutch = undefined"<br />let <span class="yellow">seats</span> = car.seats.count; // Throws an error`,
    version: 'ES6'
  }
];
