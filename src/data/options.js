export const options = [
  {
    key: 'let',
    label: 'let',
    desc: 'let declares a block scope local variable, optionally initializing it to a value.',
    link:'Statements/let',
    code: `let <span class="yellow">a</span> = 10;`
  },
  {
    key: 'const',
    label: 'const',
    desc: "Constants are block-scoped, much like variables defined using the let keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared.",
    link:'Statements/const',
    code: `const <span class="yellow">a</span> = 10;`
  },
  {
    key: 'block-scope',
    label: 'Block scope',
    desc: 'A block statement (or compound statement in other languages) is used to group zero or more statements.',
    link:'Statements/block',
    code: `function sum () {<br /><span>&nbsp;&nbsp;</span>let <span class="yellow">x</span> = 0; let <span class="yellow">y</span> = 1;<br /><span>&nbsp;&nbsp;</span>if (true) {<br /><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>let <span class="yellow">x</span> = 1; // only inside this 'if'<br /><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>let <span class="yellow">y</span> = 1;<br /><span>&nbsp;&nbsp;</span>}<br />}`
  },
  {
    key: 'array-destructuring',
    label: 'Array destructuring',
    desc: 'Array destructuring was introduced in ES6',
    link:'Operators/Destructuring_assignment#Array_destructuring',
    code: `const [ <span class="yellow">a</span>, <span class="yellow">b</span> ] = [<span class="yellow">'foo'</span>, <span class="yellow">'bar'</span>];`
  },
  {
    key: 'object-destructuring',
    label: 'Object destructuring',
    desc: 'Object destructuring was introduced in ES6',
    link:'Operators/Destructuring_assignment#Object_destructuring',
    code: `const { <span class="yellow">a</span>, <span class="yellow">b</span> } = {<br /><span>&nbsp;&nbsp;</span><span class="yellow">a</span>: 'Array',<br /><span>&nbsp;&nbsp;</span><span class="yellow">b</span>: 'Boolean'<br />}`
  }
];