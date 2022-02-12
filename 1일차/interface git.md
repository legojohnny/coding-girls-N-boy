# CLI (Command Line Interface)

CLI란?

반대되는 개념은 대표적으로 GUI(Graphic User Interface).

[git](https://git-scm.com/)

버전관리
 1. 최종.html, 최종_2.html (아예 zip파일로 압축, 로컬저장소 에서만)
 2. 중앙 집중형 (하나에 올인, 원격저장소의 등장)
 3. 분산형(현재의 Git)

명령어들
 ```
 $ git 명령어 -option args...

 $ git status

 $ git remote 원격저장소_별명 원격저장소_위치

 $ git clone <git remote repository>

 $ git add <파일>

 $ git commit -option args...

 $ git push

 $ git branch

 $ git branch -r

 $ git branch 브랜치명
 
 $ git checkougt -option 브랜치명

 $ git fetch

 $ git pull

 $ git remote update --prune
 ```

 HEAD 란?
 가장 최신 커밋
 parent node
 
 ```
 $ git rebase ...
 ```
