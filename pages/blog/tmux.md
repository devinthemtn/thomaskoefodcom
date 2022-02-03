# Sessions

## start a new session

- `tmux`
- `tmux new`
- `: new`

#### named:

- `tmux new -s mysessionname`
- `: new -s mysessionanme`

### list sessions

- `tmux ls`
- `Ctl+b s`

### attach to an already running session

last session:

- `tmux a`
- `tmux attach`

named session:

- `tmux a -t mysessionname`

### rename a session

- `ctl+b $`

### detach session

- `ctl+b d`

### kill / del a session

- `ctl+b :` to bring up the command line for tmux then type `kill-session` to kill the current session.
- `tmux kill-session -t mysessionToDel`

kill all but current:

- `tmux kill-session -a -t mysessionToKeep`

### move session

move to the next session

- `ctl+b (` move to the previous session
- `ctl+b )`

# Windows

### create window

- `ctl+b c`

### rename current window

- `ctl+b ,`

### close current window

- `ctl+b &`

### moving between windows

next

- `ctl+b n` previous
- `ctl+b p` by number
- `ctl+b 0-9`

# Panes

toggle between panes

- `ctl+b ;` split pane vertically
- `ctl+b %` split pane horizontally
- `ctl+b "`

show pane numbers

- `ctl+b q`

switch to pane by number

- `ctl+b 0-9` move the current pane to the right
- `ctl+b }` move the current pane to the left
- `ctl+b {`

move to the pane in dirrection

- `ctl+b arrowKey`

toggle pane zoom (show only one pane)

- `ctl+b z`

convert pane to a window

- `ctl+b !`

toggle between pane layouts (horizontal vs vertical)

- `ctl+b spacebar`

next pane

- `ctl+b o`

close current pane

- `ctl+b x`

# Copy Mode

# Misc

## help

- `ctl+b ?` - show shortcuts
- `tmux info` - show every session,window, etc…
