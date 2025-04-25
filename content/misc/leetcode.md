+++
title="Leetcode"
date=2025-03-24
updated = 2025-04-24
extra = { series = "misc" }
taxonomies = { tags = ["misc"] }
+++

I quite enjoy doing leetcode as small contained puzzles that are easy to verify.
It's also pretty good for trying out a new language in some regards.
This page is a collection of resources for various purposes:

# Problem solving tips and notes

This is a list of tips I want to remember.
It's likely that there is a more comprehensive list somewhere but I haven't looked for it.
There are just small techniques to apply.
Not really a full pattern but just a way to reframe problems.
If you know of a comprehensive list of techniques like these please tell me about it.
I'll check it out and link to it if I find it good.
I included an example problem where the technique applies.

## Rearrange formulas

Source: Taken from Hint #2 for problem.

- [2364. Count Number of Bad Pairs](https://leetcode.com/problems/count-number-of-bad-pairs/)
- [2845. Count of Interesting Subarrays](https://leetcode.com/problems/count-of-interesting-subarrays/)

Check to see if formulas in question can be rearranged into one that is easier to optimize for

> Notice that (j - i != nums[j] - nums[i]) is the same as (nums[i] - i != nums[j] - j).

## Consider `partition_point`

Inspired by: <https://www.youtube.com/watch?v=TjthKf7Mc_8>

- [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array)
- [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array)
- [704. Binary Search](https://leetcode.com/problems/binary-search)

When you need binary search consider using `partition_point` function from [rust std](https://doc.rust-lang.org/std/primitive.slice.html#method.partition_point). If it's not allowed manually implement as below.

```rust
/// Returns the index of the partition point according to the given predicate (the index of the first element of the second partition).
/// See <https://doc.rust-lang.org/std/primitive.slice.html#method.partition_point> for more info
fn partition_point<T>(arr: &[T], is_left_half: impl Fn(&T) -> bool) -> usize {
    let mut size = arr.len();
    if size == 0 {
        return 0;
    }
    let mut base = 0usize;
    while size > 1 {
        let half = size / 2;
        let mid = base + half;
        base = if is_left_half(&arr[mid]) { mid } else { base };
        size -= half;
    }
    if is_left_half(&arr[base]) {
        base + 1
    } else {
        base
    }
}
```

# Interview Preparation

In my opinion if you already have experience with leetcode then a good video to start with is [this one](https://www.youtube.com/watch?v=0XUzt0D3xMw) from [Uncle Steve](https://alifeengineered.substack.com/about) where he starts of with summarizing the article [How well do LeetCode ratings predict interview performance? Here's the data](https://interviewing.io/blog/how-well-do-leetcode-ratings-predict-interview-performance).

List of leetcode problems from the description of the video:

> Top 'Secretly Easy' Hard Problems:\
> #1: [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/description/) - Score: 0.034\
> #2: [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/description/) - Score: 0.0298\
> #3: [N-Queens II](https://leetcode.com/problems/n-queens-ii/description/) - Score: 0.0288\
> #4: [N-Queens](https://leetcode.com/problems/n-queens/description/) - Score: 0.0255\
> #5: [Robot Room Cleaner](https://leetcode.com/problems/robot-room-cleaner/description/) - Score: 0.0192
>
> Top 'Most Efficient for Interview Prep' Hard Problems:\
> #1: [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/description/) - Score: 1.8094\
> #2: [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/description/) - Score: 1.6964\
> #3: [The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/description/) - Score: 1.5794\
> #4: [Word Break II](https://leetcode.com/problems/word-break-ii/description/) - Score: 1.5601\
> #5: [Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/description/) - Score: 1.1687
>
> Hardest Questions Actually Used in FAANG Interviews:\
> #1: [Partition Array Into Two Arrays to Minimize Sum Difference](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/description/) - Score: 12.3924\
> #2: [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/description/) - Score: 12.1070\
> #3: [Reverse Pairs](https://leetcode.com/problems/reverse-pairs/description/) - Score: 9.0915\
> #4: [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/description/) - Score: 8.2952\
> #5: [Max Points on a Line](https://leetcode.com/problems/max-points-on-a-line/description/) - Score: 8.0952

If you're new to leetcode then start with [neetcode][neetcode] it makes it easy to find a path to follow.
My key takeaway is that "reasonable" hard problems are actually not hard just require multiple techniques and thus you get more value from doing them.
But be warned some of them just require niche knowledge.
The following are some lists I think are worth taking a look at and why.
When starting off getting practice on types of solutions is good to help you build up intuition on when a type of solution is appropriate.
However, once you are comfortable with the solution types at least in general then not having a hint on what type of solution to use is better to help you identify what type of solution you should use instead of being suggested one.

These are some good videos to help you get oriented:

- [The LeetCode Fallacy](https://www.youtube.com/watch?v=2V7yPrxJ8Ck) by [NeetCode][neetcode]
- [How to Start LeetCode from ZERO in 2025](https://www.youtube.com/watch?v=G5_Q2_yRFsY) by [AlgoMaster][algomaster]

| List                                            | Reason                                                                                                                                                                         | Organization             |
| :---------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------- |
| [NeetCode Roadmap](https://neetcode.io/roadmap) | Provides a guided tree to follow based on prerequisites                                                                                                                        | Tree with solution types |
| [LeetCode 75][leetcode75]                       | Provided by leetcode and free (they also have list available to premium users, support them if you're able)                                                                    | Grouped by Solution Type |
| [AlgoMaster][algomaster]                        | Has links to an explanation for each solution type before the problems. Has links to solutions for each problem (seems like his) and preloaded search for solutions on YouTube | Grouped by Solution Type |
| [Grind 75 by author of Blind 75][grind75]       | Allows customization of plan to the amount of time you have available and can not show what topic is covered by a question for you to practice that skill                      | Customizable             |

[algomaster]: https://algomaster.io/practice/dsa-patterns
[grind75]: https://www.techinterviewhandbook.org/grind75/
[leetcode75]: https://leetcode.com/studyplan/leetcode-75/
[neetcode]: https://neetcode.io/

# Recreational

If you're objective is just practice or for fun then working locally can be less annoying than working in the text editor provided.
Also if you want to get practice with using your IDE of choice and learning from the autocomplete and docs displayed in the IDE.
Then I recommend [cargo-leet](https://github.com/rust-practice/cargo-leet/).
It's a pretty basic download tool that just tries to setup the tests from the description for you.
Happy to accept contributions if you're so included.
