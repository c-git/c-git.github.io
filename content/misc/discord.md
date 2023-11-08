+++
title="Discord"
date=2023-10-27
updated = 2023-11-08
+++

# Timestamp Generator

Source: <https://r.3v.fi/discord-timestamps/>

{{discord_timestamp_gen()}}

# Message Formatting

Source: <https://discord.com/developers/docs/reference#message-formatting>

| Type                    | Structure           | Example                       |
| ----------------------- | ------------------- | ----------------------------- |
| User                    | <@USER_ID>          | <@80351110224678912>          |
| Channel                 | <#CHANNEL_ID>       | <#103735883630395392>         |
| Role                    | <@&ROLE_ID>         | <@&165511591545143296>        |
| Slash Command **        | </NAME:COMMAND_ID>  | </airhorn:816437322781949972> |
| Standard Emoji          | Unicode Characters  | 💯                            |
| Custom Emoji            | <:NAME:ID>          | <:mmLol:216154654256398347>   |
| Custom Emoji (Animated) | <a:NAME:ID>         | <a:b1nzy:392938283556143104>  |
| Unix Timestamp          | <t:TIMESTAMP>       | <t:1618953630>                |
| Unix Timestamp (Styled) | <t:TIMESTAMP:STYLE> | <t:1618953630:d>              |

** Subcommands and subcommand groups can also be mentioned by using respectively </NAME SUBCOMMAND:ID> and </NAME
SUBCOMMAND_GROUP SUBCOMMAND:ID>.

# Markdown

Same as regular markdown see [Markdown](@/misc/markdown.md#styles-supported-in-discord-messages)
