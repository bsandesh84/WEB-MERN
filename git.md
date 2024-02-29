
  <!-- initial setup  -->

1. git init
2. git remote add origin https://github.com/bsandesh84/Mindrisers

        to check
            git remote -v

  <!-- day to day  -->
1. git status  ( optional )
2. git add
    - git add score.html  //  individual file 
    - git add . // all files at once
4. git commit -m "hint/message"
5. git push

   <!-- To clone -->
 6. git clone https://github.com/sagartmg2/bhadra-2

   <!-- To Pull next Time -->
 7. git fetch (shows information between online and local)
 8. git pull(to pull new updated content) 

   <!-- To create branches -->
9.  git branch (to check in which branch we located)
10. git checkout -b layout( to create new branch on local repo not online).
11. git push origin layout(to push to new branch called layout on github).
12. git checkout branchname (to switch branches)
13. git branch -r (to check remote branch). 
14. git fetch (to sync the branches if not shown not codes).

    <!-- Deleting a branch -->
15. git branch -d branch-name(to delete a branch locally)
16. git push origin --delete branch-name(to delete a branch form the github).

    <!-- Note -->
17. cannot switch branches without commiting the changes first.
18. New branch will have codes of its parent .

   <!-- Merge -->

19.   