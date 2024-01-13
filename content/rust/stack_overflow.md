+++
title = "Stack Overflow"
date = 2024-01-12
+++

# Drop can lead to stack overflow

**TLDR** - Large recursive data structures lead to recursive calls to drop them and can cause stack overflow depending on their size.

<details>

<summary>Click for details!</summary>

In attempting to do a [leetcode problem](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/description/) I tried a less optimal but [interesting approach][problem_solution] where I made the infected node the root of the tree and just checked the height.
It failed with runtime error.
I downloaded the test case from leetcode and it is a [1.1mb input](https://github.com/c-git/leetcode/tree/4069e79ead604e552ef297c67393c1424f742ad2/rust/large_inputs).
Running locally I was able to find out that I found out I was getting `fatal runtime error: stack overflow`.
After converting [my code][problem_solution] to be iterative instead of recursive I was still getting a stack overflow.
Turns out it was at the end of the function when drop was automatically called.
Once I leaked the memory it would run but took over 240 seconds.
I tried not cloning the large arrays of parent vecs but used a linked list and turns out that is also a problem.
Still working on it as I haven't quite figured out how to solve that problem.
Doesn't appear to be able to be solved using forget or more likely I need to track down where the drop is happening.

In the process of all that I produced a MRE that works as a test.

```rust
#[test]
fn drop_stack_overflow() {
    struct Node {
        next: Option<Box<Node>>,
    }
    let mut linked_list: Option<Box<Node>> = None;
    for _ in 0..21_767 {
        let node = Node { next: linked_list };
        linked_list = Some(Box::new(node));
    }
    dbg!(linked_list.as_ref().unwrap().next.is_some());
    // std::mem::forget(linked_list);
}
```

Reducing to 21,766 or uncommenting the last line cause it not to crash anymore.
I tried similar code as a binary and realized I was getting non deterministic behaviour.
With the number of iterations set to `87_252` I was getting about 20% failure rate.
Meaning it would usually crash 2 out of 10 runs. (I haven't been able to track down where the non-determinism comes from)
I further found that running the tests in release mode `cargo test -r -- --nocapture drop_stack_overflow` increase the number before crashing to `65_320`.

</details>

[problem_solution]: https://github.com/c-git/leetcode/blob/4069e79ead604e552ef297c67393c1424f742ad2/rust/src/_2385_amount_of_time_for_binary_tree_to_be_infected.rs
