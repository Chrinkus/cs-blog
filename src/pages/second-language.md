---
title: Choosing My Second Language
date: "2018-05-05"
---

I began my quest to learn to code in February of 2015 by creating an account on [Codecademy](https://www.codecademy.com/learn). Two years later I had developed a strong handle on JavaScript, having used it to create two small games and experiment with some light web design. I started to consider what it would take to actually pursue a career as a programmer.

## Becoming Self-Aware
At the beginning of my third year programming, I believed my grasp of JavaScript to be strong but my overall understanding of computer science to be lacking. I was aware of a few topics I was weak in:
- I really had no idea how my code was executed
- I had no concept of how memory worked
- JavaScript was apparently single-threaded and that was somehow limiting..?
- Everytime I need to do something there always seemed to be an abstraction layer API "protecting" me from the hardware. Why is this?

I also figured there were a few things I knew that were wrong and, more significantly, there was a great deal that I didn't even know I didn't know. For these reasons I decided that I would study one of the more "serious" languages hoping that whatever resources I would use would also fill in some of my learning gaps.

The question became which language would I pursue?

## A Choice of Suitors
Armed with my list of needs I canvassed the internet for a solution to my problem. I approached the problem from three angles:
1. Most popular languages
2. Most locally employable languages
3. Availability and reliability of resources

Popularity being subjective I looked at a few top 10 lists and noted any consistencies. Of the many data sets out there, the one I paid the most heed to was the [Stack Overflow Developer Survey](https://insights.stackoverflow.com/survey/2017). I did however note that those results were heavily weighted towards web development, though a visible bias is much easier to reason about than an unseen bias.

Local employability seemed to be a more reliable metric and was eye-opening to say the least, Winnipeg surely is a .NET town. Reading the listings however set back my plans a little when a seemingly generic software developer job was requesting 7+ years of experience and a Master's degree in Computer Science.

To guage the availability of resources I had a peek at the [Amazon Best Sellers](https://www.amazon.ca/gp/bestsellers/books/939856/ref=pd_zg_hrsr_books_1_3) list for programming books. I also automatically disqualified a few of the "newer" languages such as Rust and Go on the premise that, being "newer", there would most likely be less avaiable support to someone at my skill level.

Using these criteria I was able to narrow my choices down to four familiar faces:
- Java
- C#
- C++
- ~~Objective-C~~ Swift

Java and C# represented very well in all of my research and were locks for the final four. C++ was advanced through the screening based on its ubiquitous nature and that many other languages are designed using it. Lastly Swift was a late substitution for Objective-C despite its "newer" status. I considered Swift because it had excellent resources (free and extensive official docs from Apple) and although Objective-C was absent from much of my research, iOS development was largely represented.

## Rope-a-Dope

_I realize now that my thought process in making my final selection was flawed. I made some assumptions that turned out to not be true, specifically in regards to C#. Oh well._

After narrowing my field down to four languages I immediately cut two, C# and Swift, for being proprietary. I didn't know about compile targets at the time so I assumed that learning Swift would railroad me into iOS development and C# would shackle me to Microsoft. This seemed to be a limiting factor and I decided to look more closely at the general options.

The choice was between Java and C++. The merits of each are [extensively](https://en.wikipedia.org/wiki/Comparison_of_Java_and_C%2B%2B) [documented](https://www.quora.com/What-are-major-differences-between-C++-and-Java). Rather than bore the reader with a flawed pros and cons list I'll just say that I chose C++ and offer a few reasons why:
- C++ has lower level facilities and is tougher to learn but makes learning any other languages easier (including Java)
- C++ is governed by the [ISO](https://www.iso.org/home.html), not a product of a  multinational corporation
- C++ is the preferred language for game development jobs though Java and C# proficiencies were also sought after
- C++11 seemed to have been a game-changer similar to the ISO's improvement of JavaScript with ES2015

## Epilogue
Its been a year since I made my decision and having worked through a [comprehensive text](http://a.co/cEZuc3x) I can comfortably place many of my original questions in the answered column:
- code is parsed by a compiler and conditionally optimized before translating it into machine code
- memory is aligned into addressable words of bytes. At compile time it is divided into static, stack, and heap storage to be used by the program.
- parallel programming is a vast subject that I've only scratched the surface of but I understand its purpose in driving performance
- all of my JavaScript code floated along the surface of the browser. I was never anywhere near the hardware before