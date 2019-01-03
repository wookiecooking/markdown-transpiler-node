const markdown = require('./index')

let myText = `
= Heading 1
== Heading 2
=== Heading 3
==== Heading 4

**bold**
//italic//

* Bullet list
* Second item
** Sub item

# Numbered list
# Second item
## Sub item

[[link]]
{{image|sdfsdf}}
<<video>>

|= table |= hdr |=
| table | row |
| table | row |

> blockquote

{{{ unformatted text }}}
--- horizontal rule`

// USAGE 
console.log(markdown.parse(myText))