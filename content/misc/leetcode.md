+++
title="Leetcode"
date=2025-03-24
+++

I quite enjoy doing leetcode as small contained puzzles that are easy to verify.
It's also pretty good for trying out a new language in some regards.
This page is a collection of resources for various purposes:

# Interview Preparation

In my opinion if you already have experience with leetcode then a good video to start with is [this one](https://www.youtube.com/watch?v=0XUzt0D3xMw) from [Uncle Steve](https://alifeengineered.substack.com/about) where he starts of with summarizing the article [How well do LeetCode ratings predict interview performance? Here's the data](https://interviewing.io/blog/how-well-do-leetcode-ratings-predict-interview-performance).

List of leetcode problems from the description of the video:

> Top 'Secretly Easy' Hard Problems:\
> #1: Reverse Nodes in k-Group - Score: 0.034\
> #2: Median of Two Sorted Arrays - Score: 0.0298\
> #3: N-Queens II - Score: 0.0288\
> #4: N-Queens - Score: 0.0255\
> #5: Robot Room Cleaner - Score: 0.0192
>
> Top 'Most Efficient for Interview Prep' Hard Problems:\
> #1: Longest Increasing Path in a Matrix - Score: 1.8094\
> #2: Trapping Rain Water - Score: 1.6964\
> #3: The Skyline Problem - Score: 1.5794\
> #4: Word Break II - Score: 1.5601\
> #5: Smallest Range Covering Elements from K Lists - Score: 1.1687
>
> Hardest Questions Actually Used in FAANG Interviews:\
> #1: Partition Array Into Two Arrays to Minimize Sum Difference - Score: 12.3924\
> #2: Regular Expression Matching - Score: 12.1070\
> #3: Reverse Pairs - Score: 9.0915\
> #4: Median of Two Sorted Arrays - Score: 8.2952\
> #5: Max Points on a Line - Score: 8.0952

If you're new to leetcode then it might be better to start of with easy problems to get the hang of it.
Then do a few mediums before you move onto the hard ones.
My key takeaway is that "reasonable" hard problems are actually not hard just require multiple techniques and thus you get more value from doing them.
The following are some lists I think are worth taking a look at and why.
When starting off getting practice on types of solutions is good to help you build up intuition on when a type of solution is appropriate.
However, once you are comfortable with the solution types at least in general then not having a hint on what type of solution to use is better to help you identify what type of solution you should use instead of being suggested one.

NB: If you're feeling overwhelmed start with [this video](https://www.youtube.com/watch?v=G5_Q2_yRFsY) and you can also check out the list he prepared in the table below, it's the one from [AlgoMaster][algomaster].

| List                                      | Reason                                                                                                                                                                         | Organization             |
| :---------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------- |
| [LeetCode 75][leetcode75]                 | Provided by leetcode and free (they also have list available to premium users, support them if if you're able)                                                                 | Grouped by Solution Type |
| [AlgoMaster][alogmaster]                  | Has links to an explanation for each solution type before the problems. Has links to solutions for each problem (seems like his) and preloaded search for solutions on YouTube | Grouped by Solution Type |
| [Grind 75 by author of Blind 75][grind75] | Allows customization of plan to the amount of time you have available and can not show what topic is covered by a question for you to practice that skill                      | Customizable             |

[grind75]: https://www.techinterviewhandbook.org/grind75/
[alogmaster]: https://algomaster.io/practice/dsa-patterns
[leetcode75]: https://leetcode.com/studyplan/leetcode-75/

# Recreational

If you're objective is just practice or for fun then working locally can be less annoying than working in the text editor provided.
Also if you want to get practice with using your IDE of choice and learning from the autocomplete and docs displayed in the IDE.
Then I recommend [cargo-leet](https://github.com/rust-practice/cargo-leet/).
It's a pretty basic download tool that just tries to setup the tests from the description for you.
Happy to accept contributions if you're so included.
