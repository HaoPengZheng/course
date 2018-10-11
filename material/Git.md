### Some Basic Concepts
 - #### Version Control:software tool(s) that enable the management of changes to source code  - Maintaining version history
 - ### Several version control tools:CVS,SVN,Git etc 
 
### Git
- #### Distributed Version control system
- #### Developed by Linus Torvalds for managing Linux kernel(核心) development
- #### Widely adopted now by serveral projects                                <br>-The Node ecosystem thrives on it.

### Basic Git Commands
- #### git init<br>                                                         -Initializes the current folder as a git repository
- #### git status<br>                                                        -Current status of the folder
- #### git add <file(s)/folder(s)><br>                                         -add file(s)/floader(s) to staging area
- #### git commit <br>                                                         -commit the changes to the git repository
- #### git -oneline<br>-see a brief(简洁的) log of commits
- #### git checkout<commit><file><br>checkout the file form an older commit
- #### git reset<file><br>-unstage a ataged file,but leave working directory unchanged
- #### reset the staging area to the last commit without disturbing the working directory
- #### git remote add origin <repository URL><br>- Add the remote online repository 
- #### git push -u origin master <br> -push the local git repository the origin to the master branch
- #### git clone <repository URL><br> -Clone an online Git repository to your computer