(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{419:function(t,e,a){"use strict";a.r(e);var v=a(27),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git操作指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git操作指南"}},[t._v("#")]),t._v(" "),a("code",[t._v("git")]),t._v("操作指南")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://file.wangsijie.top/18-5-22/91985389.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"一些概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些概念"}},[t._v("#")]),t._v(" 一些概念")]),t._v(" "),a("p",[a("code",[t._v("HEAD")]),t._v(" 指向当前分支上最近的一次提交")]),t._v(" "),a("h3",{attrs:{id:"相对引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相对引用"}},[t._v("#")]),t._v(" 相对引用")]),t._v(" "),a("p",[a("code",[t._v("HEAD^")]),t._v("向上移动1个提交记录")]),t._v(" "),a("p",[a("code",[t._v("HEAD~3")]),t._v("向上移动多个提交记录")]),t._v(" "),a("h2",{attrs:{id:"git-问题处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-问题处理"}},[t._v("#")]),t._v(" git 问题处理")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("每次 push 都要输入账号密码")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("git config --global credential.helper store")]),t._v(" 缓存账号密码")]),t._v(" "),a("li",[a("code",[t._v("cat ~/.gitconfig")]),t._v(" 查看配置结果")]),t._v(" "),a("li",[t._v("配置 ssh")])])]),t._v(" "),a("li",[a("p",[t._v("修改了 github 的账号，需要修改本地仓库的配置")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("git remote -v")]),t._v(" 查看当前连接的远程仓库")]),t._v(" "),a("li",[a("code",[t._v("git remote rm origin")]),t._v(" 移除 origin")]),t._v(" "),a("li",[a("code",[t._v("git remote add origin git@github.com:simonwong/react-universal-template.git")]),t._v(" 重新关联")]),t._v(" "),a("li",[a("code",[t._v("git push --set-upstream origin master")]),t._v(" 设置上游")])])]),t._v(" "),a("li",[a("p",[t._v("覆盖上一次commit")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("git commit --amend")])]),t._v(" "),a("li",[a("code",[t._v("git commit --amend --reset-author")])])])])]),t._v(" "),a("h2",{attrs:{id:"常用操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用操作"}},[t._v("#")]),t._v(" 常用操作")]),t._v(" "),a("h3",{attrs:{id:"远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[t._v("#")]),t._v(" 远程仓库")]),t._v(" "),a("p",[a("code",[t._v("git remote add origin git@server-name:path/repo-name.git")]),t._v(" 关联远程仓库")]),t._v(" "),a("p",[a("code",[t._v("git push -u origin master")]),t._v(" 第一次关联后的推送")]),t._v(" "),a("p",[a("code",[t._v("git push -u origin HEAD")]),t._v(" 关联分支")]),t._v(" "),a("p",[a("code",[t._v("git push origin <分支名> --force")]),t._v(" commit 撤回后，推送。用来撤回线上的 commit push")]),t._v(" "),a("h3",{attrs:{id:"查看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看"}},[t._v("#")]),t._v(" 查看")]),t._v(" "),a("p",[a("code",[t._v("git log")]),t._v("显示最近的提交历史")]),t._v(" "),a("p",[a("code",[t._v("git log --pretty=oneline")]),t._v("简化历史显示")]),t._v(" "),a("p",[a("code",[t._v("git reflog")]),t._v("记录了每一次命令")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("在命令行输入git reflog，会出现丢失的commit信息列\n找到自己需要的commit行， git checkout -b recovery q1dw23d\ngit checkout master git merge recovery 切回主分支\n")])])]),a("h3",{attrs:{id:"分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),a("p",[a("code",[t._v("git checkout -b newBranch")]),t._v(" 创建并切换新分支")]),t._v(" "),a("p",[a("code",[t._v("git remote update origin -p")]),t._v(" 更新本地显示的远程分支")]),t._v(" "),a("p",[a("code",[t._v("git push origin --delete branch")]),t._v(" 删除线上分支")]),t._v(" "),a("h3",{attrs:{id:"合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并"}},[t._v("#")]),t._v(" 合并")]),t._v(" "),a("p",[a("code",[t._v("git merge --no-ff theBranch")]),t._v(" 合并分支，并且保留原分支的提交历史")]),t._v(" "),a("p",[a("code",[t._v("git rebase theBranch")]),t._v(" 线性的合并分支，theBranch变成了当前分支的父提交节点")]),t._v(" "),a("h3",{attrs:{id:"分离head"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分离head"}},[t._v("#")]),t._v(" 分离"),a("code",[t._v("HEAD")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("HEAD")]),t._v("是一个对当前检出记录的符号引用")]),t._v(" "),a("p",[t._v("分离"),a("code",[t._v("HEAD")]),t._v("就是让其指向了某个具体的提交记录而不是分支名")])]),t._v(" "),a("p",[a("code",[t._v("git checkout commit_id")]),t._v("从分支中分离HEAD并让它指向一个提交记录")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("相对引用")])])]),t._v(" "),a("blockquote",[a("p",[t._v("在一个分支或"),a("code",[t._v("HEAD")]),t._v("开始计算，")]),t._v(" "),a("p",[a("code",[t._v("^")]),t._v("向上移动1个提交记录")]),t._v(" "),a("p",[a("code",[t._v("~<num>")]),t._v("向上移动多个提交记录")])]),t._v(" "),a("p",[a("code",[t._v("git checkout branch^")]),t._v(" 相对引用到branch分支的上一个提交")]),t._v(" "),a("p",[a("code",[t._v("git branch -f master HEAD~3")]),t._v(" 强制将master分支的提交移动到HEAD的上3个提交")]),t._v(" "),a("h3",{attrs:{id:"修改-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-commit"}},[t._v("#")]),t._v(" 修改 commit")]),t._v(" "),a("p",[a("code",[t._v("git commit --amend")])]),t._v(" "),a("p",[a("code",[t._v('git commit --amend --author "name <email@email.com>"')]),t._v(" 修改作者")]),t._v(" "),a("h3",{attrs:{id:"撤销变更"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤销变更"}},[t._v("#")]),t._v(" 撤销变更")]),t._v(" "),a("p",[a("code",[t._v("git checkout -- file_name")]),t._v(" 撤回更改")]),t._v(" "),a("p",[a("code",[t._v("git reset --hard 1094a")])]),t._v(" "),a("p",[a("code",[t._v("git reset HEAD~2")])]),t._v(" "),a("p",[t._v("版本回退指定commit id的分支。或者HEAD的上几个位置。")]),t._v(" "),a("blockquote",[a("p",[t._v("但是reset后前面的变更，依然处于未加入暂缓区状态")])]),t._v(" "),a("p",[a("code",[t._v("git revert HEAD")]),t._v("向下新增加一个提交，提交的内容为要撤回的提交的内容")]),t._v(" "),a("p",[a("code",[t._v("git reset --soft HEAD^")]),t._v(" 撤回 commit 且保留更改内容")]),t._v(" "),a("h3",{attrs:{id:"变基"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变基"}},[t._v("#")]),t._v(" 变基")]),t._v(" "),a("p",[a("code",[t._v("git rebase -i asdas")]),t._v(" asdas 提交之前的都合并")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pick 97fe73f feat: update\npick 62573b8 feat: add \n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('# Commands:\n# p, pick <commit> = use commit\n# r, reword <commit> = use commit, but edit the commit message\n# e, edit <commit> = use commit, but stop for amending\n# s, squash <commit> = use commit, but meld into previous commit\n# f, fixup <commit> = like "squash", but discard this commit\'s log message\n# x, exec <command> = run command (the rest of the line) using shell\n# d, drop <commit> = remove commit\n# l, label <label> = label current HEAD with a name\n# t, reset <label> = reset HEAD to a label\n# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]\n')])])]),a("p",[t._v("pick 选择这个 commit 作为最新的代码")]),t._v(" "),a("p",[t._v("squash 将这个 commit 压缩")]),t._v(" "),a("p",[t._v("r")]),t._v(" "),a("p",[t._v("s")]),t._v(" "),a("p",[t._v("s")]),t._v(" "),a("p",[t._v("然后 "),a("code",[t._v("git rebase --contine")])]),t._v(" "),a("h3",{attrs:{id:"贮藏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贮藏"}},[t._v("#")]),t._v(" 贮藏")]),t._v(" "),a("p",[a("code",[t._v("git stash")]),t._v(" 将变更贮藏")]),t._v(" "),a("p",[a("code",[t._v("git stash list")]),t._v(" 贮藏列表")]),t._v(" "),a("p",[a("code",[t._v("git stash apply")]),t._v(" 应用贮藏")]),t._v(" "),a("p",[a("code",[t._v("git stash drop stash${1}")]),t._v("  移除")]),t._v(" "),a("h3",{attrs:{id:"tag-操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tag-操作"}},[t._v("#")]),t._v(" tag 操作")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("git tag")]),t._v(" 查看tag")])]),t._v(" "),a("li",[a("p",[a("code",[t._v('git tag -a v1.1 -m "version1.1"')]),t._v(" 创建tag")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("git show v1.1")]),t._v(" 查看tag 信息")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("git push origin v1.1")]),t._v(" 推送tag")])])])])}),[],!1,null,null,null);e.default=_.exports}}]);