+++
title="Pattern Type State"
date=2023-10-12
+++

# Resource List

- [Video by LGR](https://youtu.be/_ccDqRTx-JU?si=wh1ay1TnDhtJgz1_&t=28) \[[code](https://github.com/letsgetrusty/generics_and_zero_sized_types/blob/master/src/main.rs)\]
- [Design Contracts in rust embedded book](https://docs.rust-embedded.org/book/static-guarantees/design-contracts.html)
- [Video of presentation at Rust Linz](https://www.youtube.com/watch?v=k8kd22jNcps&t=1382s)
- [Blog post](https://cliffle.com/blog/rust-typestate/) not read yet but keeps coming up when searching for it

# Annotated example

```rust
use std::collections::HashMap;
use std::marker::PhantomData;

struct Locked;
struct Unlocked;

// Note that PasswordManager<Locked> != PasswordManager<Unlocked> because of the state field with doesn't use space at runtime only a compile time check

// Locked is the default state here
struct PasswordManager<State = Locked> {
    master_pass: String,
    passwords: HashMap<String, String>,
    state: PhantomData<State>, // This doesn't take up space at runtime
}

// impl only available while "Locked"
impl PasswordManager<Locked> {
    pub fn unlock(self, master_pass: String) -> PasswordManager<Unlocked> {
        PasswordManager {
            master_pass: self.master_pass,
            passwords: self.passwords,
            state: PhantomData,
        }
    }
}

// impl only available while "Unlocked"
impl PasswordManager<Unlocked> {
    pub fn lock(self) -> PasswordManager<Locked> {
        PasswordManager {
            master_pass: self.master_pass,
            passwords: self.passwords,
            state: PhantomData,
        }
    }

    pub fn list_passwords(&self) -> &HashMap<String, String> {
        &self.passwords
    }

    pub fn add_password(&mut self, username: String, password: String) {
        self.passwords.insert(username, password);
    }
}

// impl available in any State (Use T to guard against typos)
impl<T> PasswordManager<T> {
    pub fn encryption(&self) -> String {
        todo!()
    }

    pub fn version(&self) -> String {
        todo!()
    }
}

// impl available before a state is set (Only true static function)
impl PasswordManager {
    pub fn new(master_pass: String) -> Self {
        PasswordManager {
            master_pass,
            passwords: Default::default(),
            state: PhantomData,
        }
    }
}

fn main() {
    let mut manager = PasswordManager::new("password123".to_owned());
    let manager = manager.unlock("password123".to_owned());
    manager.list_passwords();
    manager.lock();
}
```
