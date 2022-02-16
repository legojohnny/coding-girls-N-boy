# 실전에서의 git!

원격 레파지토리와 로컬 레파지토리 둘 다 관리해야합니다. 

로컬에서 커밋을 잘못관리하여 원격으로 푸시될 경우 팀 전체에 크나큰 불편을 초래할 수 있기 때문에 로컬의 커밋 로그를 잘 관리해야합니다!

이번에는 깃을 사용할때 생길 수 있는 여러 상황에 대해 알려드리겠습니다.

## CASEs
1. git master에서 checkout 후  했는데, master branch의 HEAD가 갱신되었습니다. 이때 팀장님께서 master로 머지하지 말고 rebase 하기로 약속했습니다. (How to git rebase) 왜 rebase 해야할까요?

```
    git rebase master(main)
    # master에서 내가 수정하고 있는 파일을 수정한 커밋이 있다면 충돌이 일어날 수 도 있습니다.
    # 이 때 당황하지 말고 충돌을 해결 하여 리베이스를 완료합니다.
    
    git rebase --continue # 충돌 해결 후 리베이스 계속...
    git rebase --abort  # 리베이스를 취소합니다.

    # successfully rebased!
    git push --force # rebase된 브랜치를 강제 push 합니다. (이때 강제 push이기 때문에 파일의 유실이 생길 수 있습니다.)
```

2. 작업중에 너무 많은 쓸모없는 커밋이 발생했습니다. 예시) temp, 임시 커밋, 의미없는 커밋 등..
여러 커밋을 한개의 커밋으로 합치고 싶습니다. 어떻게 해야할까요?
```
    git rebase -i HEAD~[n commits] # 대괄호 안에 합치고 싶은 커밋의 수를 적습니다.
    
    # vim 에디터로 어떤 커밋을 squash(갈아버리기)할건지 pick(사용하기)할건지 선택합니다.
    # 여러 커밋이 한개로 합쳐지는데, 이때 그 한개의 커밋의 메세지를 어떻게 할지 적습니다.
    # successfully rebase!

    git push --force # 강제 push 합니다.
```

3. PR (Pull Request) 
깃헙 사이트에서 하면 편합니다.

4. git convention
안지키는 회사도 많습니다. 주로 쓰이는 컨벤션이 무엇이 있는지 참고만 해 놓으세요!

5. git log를 틈틈히 봅시다!