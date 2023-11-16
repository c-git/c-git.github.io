+++
title="Remote Desktop Protocol (RDP)"
date = 2023-11-15
+++

# Crashing shortly after connecting

Source: <https://discord.com/channels/720482228072874056/720482228538179584/1167810291317362738>

**Problem description**: Connecting via remote desktop on windows would connect fine but shortly (only a few seconds) after connecting the connection would just close without error message.

**Solution**: Do not include printers when connecting.

**Possible explanation**: Something goes wrong when installing the printer in the RDP session and causes it to crash.
